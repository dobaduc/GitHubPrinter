// Copyright (c) 2016 Ducky Duke. All rights reserved.
// LICENSE: MIT

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var classesToRemove = [
    // In file view mode
    "pagehead", "file-navigation", "file-header", "commit-tease", "header", "site-footer-container",
    // In repository view mode
    "file-wrap", "repository-meta-content", "overall-summary", "repository-lang-stats-graph", 
  ];

  var code = "";

  for (i = 0; i < classesToRemove.length; i++ ) {
    var className = classesToRemove[i];
    code += "try { var e = document.getElementsByClassName('" + className + "')[0]; e.parentNode.removeChild(e); } catch(e){};"
  }

  code += "window.print();";
  chrome.tabs.executeScript({ code: code });
});