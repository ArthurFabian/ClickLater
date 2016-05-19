console.log("cm_listener.js");

var cm_origin = null;

document.addEventListener('contextmenu', function (event) {
	console.log("contextmenu fired.");
	cm_origin = {x: event.clientX, y: event.clientY};
	chrome.runtime.sendMessage({'content':'cm_origin','cm_origin':cm_origin}, function(response) {});
});


