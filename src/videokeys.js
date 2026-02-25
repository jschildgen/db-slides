/*
 * VideoKeys Plugin for Reveal.js
 * 
 * Put videos in the ./videokeys folder: A.mp4, B.mp4, ...
 * They are played in fullscreen when pressing Shift + A, Shift + B, ...
 * 
 * Audio files are also supported: A.mp3, B.mp3, ...
 * 
 * To stop the video / audio, press ° (left of the 1 on the keyboard).
 * Esc also works (press twice), but this is also used by Reveal.js to exit fullscreen.
 *
 * By Johannes Schildgen, 2025
 */
 
var VideoKeysPlugin = (function(){    
	return {
		init: function() {

			// Keyboard mapping for German keyboards
			const NUMBERS = {"!": "1", "\"": "2", "§": "3", "$": "4", "%": "5", "&": "6", "/": "7", "(": "8", ")": "9", "=": "0"};

			let videokeys = document.createElement("div");
			videokeys.innerHTML = '<video id="videokeys" style="display: none;"></video>';
			document.body.appendChild(videokeys);

			document.addEventListener("keydown", function(event) {
				if (event.shiftKey && !event.altKey && event.key.match(/^[A-Z!"§$%&/()=?]$/)) {
					let activeElement = document.activeElement;
					
					if (activeElement && (
								activeElement.tagName === "INPUT" ||
								activeElement.tagName === "TEXTAREA" ||
								activeElement.isContentEditable)) {
							return;
					}

					let video = document.getElementById("videokeys");

					let filename = event.key;
					if (event.key.match(/^[!"§$%&/()=?]$/)) {
						filename = NUMBERS[event.key];
					}

					fetch("videokeys/" + filename + ".mp4")
					.then(response => {
						if (response.ok) {
							video.src = "videokeys/" + filename + ".mp4";
							if (video.requestFullscreen) {
									video.requestFullscreen();
							} else if (video.webkitRequestFullscreen) { 
									video.webkitRequestFullscreen();
							} else if (video.msRequestFullscreen) {
									video.msRequestFullscreen();
							}
							video.style.display = "block";
							video.controls = false;
							video.controlsList = "nodownload nofullscreen noremoteplayback";
							video.play();
							
							video.onended = function() {
									if (document.exitFullscreen) {
											document.exitFullscreen();
									} else if (document.webkitExitFullscreen) {
											document.webkitExitFullscreen();
									} else if (document.msExitFullscreen) {
											document.msExitFullscreen();
									}
									video.style.display = "none";
							};
						}
					});
					fetch("videokeys/" + filename + ".mp3")
					.then(response => {
						if (response.ok) {
							video.src = "videokeys/" + filename + ".mp3";
							video.play();
							video.onended = function() {
									video.currentTime = 0;
							};
						}
					});
					
				} else if (event.key === "Escape" || event.code === "Backquote") { /* ^ */
					let video = document.getElementById("videokeys");
					video.pause();
					video.currentTime = 0;
					if (video.style.display === "none") {
						return;
					}
					if (document.exitFullscreen) {
							document.exitFullscreen();
					} else if (document.webkitExitFullscreen) {
							document.webkitExitFullscreen();
					} else if (document.msExitFullscreen) {
							document.msExitFullscreen();
					}
					video.style.display = "none";
				}
			});
		}
	}

})();

Reveal.registerPlugin( 'videokeys', VideoKeysPlugin );