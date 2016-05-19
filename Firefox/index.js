var self = require("sdk/self");

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;


var coords;

function updateCoordinates(coordinates) {
   console.log("Updating coordinates: ");
   coords = coordinates;
   console.log(coords);
}

var tabs = require("sdk/tabs");

tabs.on('ready', function(tab) {
  var worker = tab.attach({
    contentScriptFile: self.data.url("tab-cs.js"),
    onMessage: updateCoordinates
  });
});

var contextMenu = require("sdk/context-menu");
var menuItem = contextMenu.Item({
  label: "Click Later...",
  context: contextMenu.SelectorContext('*'),
  contentScriptFile: self.data.url("cl-cs.js"),
  onMessage: function (delay) { 
    tabs.activeTab.attach({
       contentScriptFile: self.data.url("clickAfterDelay.js"),
       contentScriptOptions: {"delay":delay,"coords":coords}
       });
  }
});
