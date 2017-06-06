var btn = document.querySelector('.btn');
var playing = false;

function startFn () {
	playing = !playing;
	var message = playing ? "STOP" : "START";
	btn.textContent = message;

}




btn.addEventListener('click',startFn);
