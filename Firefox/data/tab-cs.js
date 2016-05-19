var coords;

window.addEventListener("contextmenu", function (event) {
	console.log("contextmenu event fired")
	coords = {x : event.clientX, y : event.clientY}; 
        console.log(coords);
	self.postMessage(coords); //document.elementFromPoint(x,y);
	});




