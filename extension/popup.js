document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sync').addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {method: "sync"}, function(response) { });
        });
    }, false);
    document.getElementById('playPause').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {method: "playPause"}, function(response) { });
          });
      }, false);
  }, false);