// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Making Grabhouse more awesome!! ;)');
	chrome.tabs.executeScript(null,{
    file: "jquery-1.11.3.min.js"
  });

  chrome.tabs.executeScript(null,{
    file: "gh.css"
  });
  chrome.tabs.executeScript(null,{
    file: "gh.js"
  });
});


