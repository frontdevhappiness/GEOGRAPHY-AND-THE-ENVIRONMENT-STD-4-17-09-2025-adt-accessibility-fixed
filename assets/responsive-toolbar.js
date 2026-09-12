/* Responsive accessibility sheet; feature actions remain owned by the reader. */
(function () {
  'use strict';

  var container = document.getElementById('nav-container');
  if (!container) return;
  var narrow = window.matchMedia('(max-width: 760px)');
  var launcher;
  var sheet = document.createElement('dialog');
  sheet.className = 'adt-accessibility-sheet';
  sheet.id = 'adt-accessibility-sheet';
  sheet.setAttribute('aria-labelledby', 'adt-accessibility-sheet-title');
  sheet.innerHTML = '<button type="button" class="adt-sheet-handle" aria-label="Close accessibility menu"><span></span></button><h2 id="adt-accessibility-sheet-title">Accessibility menu</h2><div class="adt-sheet-options"></div>';
  document.body.appendChild(sheet);

  function closeSheet() {
    if (sheet.open) sheet.close();
  }

  sheet.querySelector('.adt-sheet-handle').addEventListener('click', closeSheet);
  sheet.addEventListener('close', function () {
    if (launcher) launcher.setAttribute('aria-expanded', 'false');
  });
  sheet.addEventListener('click', function (event) {
    var rect = sheet.getBoundingClientRect();
    if (event.target === sheet && (event.clientY < rect.top || event.clientX < rect.left || event.clientX > rect.right)) closeSheet();
  });

  function openSheet(actions) {
    var options = sheet.querySelector('.adt-sheet-options');
    options.replaceChildren();
    actions.querySelectorAll('[data-dock-trigger]').forEach(function (original) {
      var option = document.createElement('button');
      option.type = 'button';
      option.className = 'adt-sheet-option';
      var label = original.getAttribute('aria-label') || original.title;
      // The original button retains its precise activate/deactivate announcement.
      var caption = /text to speech/i.test(label) ? 'Text to speech' : label === 'Accessibility menu' ? 'Settings' : label;
      option.setAttribute('aria-label', label);
      var icon = original.querySelector('svg');
      if (icon) {
        icon = icon.cloneNode(true);
        icon.setAttribute('aria-hidden', 'true');
        option.appendChild(icon);
      }
      var text = document.createElement('span');
      text.textContent = caption;
      option.appendChild(text);
      options.appendChild(option);
      option.addEventListener('click', function () {
        closeSheet();
        original.click();
      });
    });
    sheet.showModal();
    launcher.setAttribute('aria-expanded', 'true');
  }

  function attach() {
    var dock = container.querySelector('[role="group"]:has(> .order-3)');
    if (!dock) return;
    var actions = dock.querySelector(':scope > .order-3');
    launcher = actions.querySelector('.adt-toolbar-toggle');
    if (!launcher) {
      launcher = document.createElement('button');
      launcher.type = 'button';
      launcher.className = 'adt-toolbar-toggle';
      launcher.setAttribute('aria-label', 'Open accessibility menu');
      launcher.setAttribute('aria-haspopup', 'dialog');
      launcher.setAttribute('aria-controls', sheet.id);
      launcher.setAttribute('aria-expanded', 'false');
      launcher.innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="6" height="6" rx="0.5"/><rect x="15" y="3" width="6" height="6" rx="0.5"/><rect x="3" y="15" width="6" height="6" rx="0.5"/><rect x="15" y="15" width="6" height="6" rx="0.5"/></svg>';
      launcher.addEventListener('click', function () { openSheet(actions); });
      actions.appendChild(launcher);
    }
    actions.querySelectorAll('[data-dock-trigger]').forEach(function (button) {
      if (narrow.matches) {
        button.setAttribute('aria-hidden', 'true');
        button.setAttribute('tabindex', '-1');
      } else {
        button.removeAttribute('aria-hidden');
        button.removeAttribute('tabindex');
      }
    });
  }

  narrow.addEventListener('change', function () {
    closeSheet();
    attach();
  });
  new MutationObserver(attach).observe(container, { childList: true, subtree: true });
  attach();
})();
