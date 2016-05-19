function clickAfterDelay (coords,delay) {
   console.log("clickAfterDelay");
   console.log(coords)
   window.setTimeout(function (coords) {
     document.elementFromPoint(coords.x,coords.y).click();
     },delay,coords);
}

clickAfterDelay(self.options.coords,self.options.delay);


