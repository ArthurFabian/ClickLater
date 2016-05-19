
function getClickHandler() {
	return function (info, tab) {
		chrome.tabs.executeScript(null, {file: "do_click_later.js"});
	}
}


chrome.contextMenus.create({
  "title" : "Click later...",
  "type" : "normal",
  "contexts" : ["all"],
  "onclick" : getClickHandler()
});


var cm_origin = null;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.content == 'cm_origin') {
      cm_origin = request.cm_origin;
    }
    sendResponse(cm_origin);
  });
