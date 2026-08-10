// scorm.js — SCORM 1.2 adapter, auto-generated, do not edit by hand
(function () {
  'use strict';

  // --- Find the SCORM 1.2 API by traversing parent frames ---
  function findAPI(win) {
    var depth = 0;
    while (depth < 7) {
      if (win.API) return win.API;
      if (!win.parent || win.parent === win) break;
      win = win.parent;
      depth++;
    }
    return null;
  }

  var API = findAPI(window);
  if (!API) return; // Not in a SCORM LMS — exit silently

  // --- Initialize the session ---
  API.LMSInitialize('');

  // --- Identify the current page ---
  var metaTitleId = document.querySelector('meta[name="title-id"]');
  var pageId = metaTitleId ? metaTitleId.getAttribute('content') : '';

  // All activity section IDs in reading order, derived from the page HTML.
  // Keep this deterministic list populated when regenerating the SCORM package.
  var ALL_ACTIVITY_IDS = [
    'pg008_sec001',
    'pg011_sec002',
    'pg014_sec002',
    'pg015_sec001',
    'pg018_sec001',
    'pg020_sec001',
    'pg020_sec002',
    'pg022_sec001',
    'pg022_sec002',
    'pg025_sec001',
    'pg026_sec001',
    'pg028_sec002',
    'pg028_sec003',
    'pg029_sec002',
    'pg031_sec002',
    'pg033_sec001',
    'pg034_sec001',
    'pg035_sec001',
    'pg035_sec002',
    'pg036_sec001',
    'pg041_sec002',
    'pg045_sec001',
    'pg045_sec002',
    'pg046_sec001',
    'pg049_sec001',
    'pg049_sec002',
    'pg050_sec001',
    'pg050_sec002',
    'pg056_sec002',
    'pg056_sec003',
    'pg057_sec001',
    'pg058_sec001',
    'pg061_sec001',
    'pg062_sec001',
    'pg063_sec001',
    'pg067_sec001',
    'pg070_sec001',
    'pg075_sec001',
    'pg080_sec001',
    'pg081_sec001',
    'pg083_sec001',
    'pg083_sec002',
    'pg085_sec001',
    'pg086_sec001',
    'pg086_sec002',
    'pg086_sec003',
    'pg087_sec001',
    'pg088_sec001',
    'pg089_sec001',
    'pg090_sec002',
    'pg093_sec001',
    'pg093_sec002',
    'pg095_sec001'
  ];
  var hasActivities = ALL_ACTIVITY_IDS.length > 0;

  // --- Record where the learner is ---
  API.LMSSetValue('cmi.core.lesson_location', pageId);

  // --- Set lesson status ---
  if (hasActivities) {
    applyStatus();
    watchForCompletions();
    watchRuntimeActivityState();
  } else {
    // Content-only ADT — mark as passed on first visit
    var existingStatus = API.LMSGetValue('cmi.core.lesson_status') || '';
    if (existingStatus !== 'passed') {
      API.LMSSetValue('cmi.core.lesson_status', 'passed');
      API.LMSSetValue('cmi.core.score.raw', '100');
      API.LMSSetValue('cmi.core.score.min', '0');
      API.LMSSetValue('cmi.core.score.max', '100');
    }
  }

  API.LMSCommit('');

  // --- Session close ---
  window.addEventListener('beforeunload', function () {
    if (hasActivities) applyStatus();
    API.LMSCommit('');
    API.LMSFinish('');
  });

  // -------------------------------------------------------
  // Helpers
  // -------------------------------------------------------

  function getCompletedIds() {
    var completed = [];
    try {
      completed = JSON.parse(localStorage.getItem('completedActivities') || '[]');
    } catch (e) { /* ignore */ }

    var ids = {};
    for (var i = 0; i < completed.length; i++) {
      if (typeof completed[i] === 'string') {
        var dashIdx = completed[i].indexOf('-');
        var actId = dashIdx > -1 ? completed[i].substring(0, dashIdx) : completed[i];
        ids[actId] = true;
      }
    }
    return ids;
  }

  function applyStatus() {
    var completedIds = getCompletedIds();
    var completedCount = 0;
    for (var i = 0; i < ALL_ACTIVITY_IDS.length; i++) {
      if (completedIds[ALL_ACTIVITY_IDS[i]]) completedCount++;
    }

    var score = Math.round((completedCount / ALL_ACTIVITY_IDS.length) * 100);
    API.LMSSetValue('cmi.core.score.raw', String(score));
    API.LMSSetValue('cmi.core.score.min', '0');
    API.LMSSetValue('cmi.core.score.max', '100');

    if (completedCount === ALL_ACTIVITY_IDS.length) {
      API.LMSSetValue('cmi.core.lesson_status', 'passed');
    } else {
      var existingStatus = API.LMSGetValue('cmi.core.lesson_status') || '';
      if (existingStatus !== 'passed') {
        API.LMSSetValue('cmi.core.lesson_status', 'incomplete');
      }
    }
  }

  function watchForCompletions() {
    // Storage methods live on the Storage prototype and cannot be safely
    // monkey-patched by assigning localStorage.setItem (that creates a data
    // entry named "setItem" in some browsers).
    localStorage.removeItem('setItem');

    window.addEventListener('storage', function (e) {
      if (e.key === 'completedActivities') {
        applyStatus();
        API.LMSCommit('');
      }
    });
  }

  // The reader runtime does not persist an activity-completion list itself.
  // Its primary action changes from "Submit" to "Next" only after the
  // current activity has met its completion/correctness requirements. Mirror
  // that verified state into the SCORM progress store without modifying the
  // compiled reader bundle.
  function watchRuntimeActivityState() {
    if (ALL_ACTIVITY_IDS.indexOf(pageId) === -1) return;

    var stopped = false;
    var observer = null;
    var pollTimer = null;

    function isComplete() {
      var button = document.querySelector('button[title="Next"]');
      return !!button && (button.textContent || '').replace(/\s+/g, ' ').trim() === 'Next';
    }

    function recordCompletion() {
      if (stopped || !isComplete()) return;

      var completed = [];
      try {
        completed = JSON.parse(localStorage.getItem('completedActivities') || '[]');
      } catch (e) { /* ignore malformed legacy state */ }
      if (!Array.isArray(completed)) completed = [];

      if (completed.indexOf(pageId) === -1) {
        completed.push(pageId);
        localStorage.setItem('completedActivities', JSON.stringify(completed));
      }

      applyStatus();
      API.LMSCommit('');

      stopped = true;
      if (observer) observer.disconnect();
      if (pollTimer) window.clearInterval(pollTimer);
      document.removeEventListener('click', scheduleCheck, true);
      document.removeEventListener('keydown', scheduleCheck, true);
    }

    function scheduleCheck() {
      window.setTimeout(recordCompletion, 50);
    }

    observer = new MutationObserver(scheduleCheck);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['title'],
      childList: true,
      subtree: true
    });
    document.addEventListener('click', scheduleCheck, true);
    document.addEventListener('keydown', scheduleCheck, true);
    pollTimer = window.setInterval(recordCompletion, 500);
    scheduleCheck();
  }
})();
