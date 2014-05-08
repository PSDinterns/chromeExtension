//Website spell checker chrome extension
//let's do this
var position = true;
var fullArray = [];

chrome.tabs.executeScript(null, {file: "formatText.js"});

