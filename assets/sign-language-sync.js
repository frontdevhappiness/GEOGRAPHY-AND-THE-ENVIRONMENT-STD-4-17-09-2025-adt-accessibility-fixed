(function () {
  "use strict";

  if (window.__adtSignLanguageSyncInstalled) return;
  window.__adtSignLanguageSyncInstalled = true;

  function isSignVideo(media) {
    return (
      media instanceof HTMLVideoElement &&
      /\/content\/i18n\/[^/]+\/video\//.test(String(media.currentSrc || media.src || ""))
    );
  }

  function muteVideo(video) {
    // Sign interpretation stays silent alongside read-aloud. Each player's
    // native controls own its playback, position and speed independently.
    if (!video.defaultMuted) video.defaultMuted = true;
    if (!video.muted) video.muted = true;
    if (video.volume !== 0) video.volume = 0;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
  }

  // Pair the start of a read-aloud session only. Subsequent audio segments,
  // pause/resume and stopping either player leave the other player alone.
  // Newly opened sign windows start through the video's autoplay attribute.
  window.addEventListener("adt:tts-session-start", function () {
    document.querySelectorAll("video").forEach(function (video) {
      if (!isSignVideo(video)) return;
      muteVideo(video);
      var result = video.play();
      if (result && typeof result.catch === "function") result.catch(function () {});
    });
  });

  ["play", "volumechange", "loadedmetadata"].forEach(function (type) {
    window.addEventListener(type, function (event) {
      if (isSignVideo(event.target)) muteVideo(event.target);
    }, true);
  });

  new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (!(node instanceof Element)) return;
        var videos = node.matches("video")
          ? [node]
          : Array.from(node.querySelectorAll("video"));
        videos.forEach(function (video) {
          if (isSignVideo(video)) muteVideo(video);
        });
      });

      mutation.removedNodes.forEach(function (node) {
        if (!(node instanceof Element) || node.isConnected) return;
        var videos = node.matches("video")
          ? [node]
          : Array.from(node.querySelectorAll("video"));
        videos.forEach(function (video) {
          if (isSignVideo(video) && !video.isConnected) video.pause();
        });
      });
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
