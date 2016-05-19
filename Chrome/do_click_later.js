chrome.runtime.sendMessage({'content':'none'}, function(coords) {
  var delay = parseInt(prompt('Enter delay (ms)'));
  console.log("clickAfterDelay");
  console.log(delay);
  console.log(coords);
  window.setTimeout(function (coords) {
    document.elementFromPoint(coords.x,coords.y).click();
  },delay,coords);
});

