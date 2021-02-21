'use strict';

var jumpToSlide= "";

var getSlideIndex= function(slideNumber) {
	// The number of past slides
	var pastCount = 0;

	// step through all slides and count the past ones
	var horizontalSlides = Array.prototype.slice.call(document.querySelector('.reveal').querySelectorAll('.slides>section'));
	var breaked = false;
	var horizontalIndex = 0;
	var verticalIndex = 0;
	for (horizontalIndex = 0; horizontalIndex < horizontalSlides.length; horizontalIndex++, pastCount++) {
		var horizontalSlide = horizontalSlides[horizontalIndex];
		var verticalSlides = Array.prototype.slice.call(horizontalSlide.querySelectorAll('section'));

		for (verticalIndex = 0; verticalIndex < verticalSlides.length - 1; verticalIndex++, pastCount++) {
			// stop as soon as we arrive at the specified slide
			if (pastCount == slideNumber) {
				breaked = true;
				break;
			}
		}

		// stop as soon as we arrive at the specified slide
		if (pastCount == slideNumber || breaked) {
			break;
		}
	}

	return [horizontalIndex, verticalIndex];
};

var keyHandle= function(event) {
	var isSpecialKey = event.shiftKey || event.ctrlKey || event.altKey || event.metaKey;
	var isNumberKey = event.key >= "0" && event.key <= "9";
	var isDashKey = event.key === "-";

	if (isNumberKey || isDashKey && !isSpecialKey) {
		jumpToSlide += event.key;
	} else {
		var isEnterKey = event.key === "Enter";
		var isJumpToSlideEmpty = jumpToSlide === "";

		if(isSpecialKey) { jumpToSlide = ""; /* reset */ }

		if (isEnterKey && !isJumpToSlideEmpty) {
			// horizontal and vertical slides are separated by a dash
			jumpToSlide = jumpToSlide.split("-");
			jumpToSlide[0] = isNaN(jumpToSlide[0]) ? 0 : parseInt(jumpToSlide[0]) - 1;
			jumpToSlide[1] = isNaN(jumpToSlide[1]) ? 0 : parseInt(jumpToSlide[1]) - 1;

			var isFlat = (typeof Reveal.getConfig().slideNumber === "string") ? Reveal.getConfig().slideNumber.indexOf('c') !== -1 : false;
			if (isFlat) {
				jumpToSlide[1] = 0;

				jumpToSlide = getSlideIndex(jumpToSlide[0]);
			}

			// jump to the specified slide
			Reveal.slide(jumpToSlide[0], jumpToSlide[1]);

			// disable event processing, say, if control is active
			event.preventDefault();

			// reset jumpToSlide variable
			jumpToSlide = "";
		}
	}
};

document.onkeydown = keyHandle;