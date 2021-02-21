/*
 * Type a number on the keyboard and press enter to jump to the given slide.
 *
 * By Johannes Schildgen, 2019
 */
 
var NumberKeys = (function(){
    
    var pageNumber = "";
    var timeout = null;
    
    var jumpToPage = function() {
        clearTimeout(timeout);
        Reveal.slide( Number(pageNumber)-1 ); /* first slide is 0 */
        pageNumber = "";
    }
    
    var appendPageNumber = function(i) {
        clearTimeout(timeout);
        pageNumber = pageNumber + i.toString();
        /* if no other number or Enter is pressed within 4 seconds => discard */
        timeout = setTimeout(function() { pageNumber = ""; }, 4000)
    }

	return {
		init: function() {
            Reveal.addKeyBinding( { keyCode: 13 }, function() { jumpToPage(); } )
            Reveal.addKeyBinding( { keyCode: 49 }, function() { appendPageNumber(1) } )
            Reveal.addKeyBinding( { keyCode: 50 }, function() { appendPageNumber(2) } )
            Reveal.addKeyBinding( { keyCode: 51 }, function() { appendPageNumber(3) } )
            Reveal.addKeyBinding( { keyCode: 52 }, function() { appendPageNumber(4) } )
            Reveal.addKeyBinding( { keyCode: 53 }, function() { appendPageNumber(5) } )
            Reveal.addKeyBinding( { keyCode: 54 }, function() { appendPageNumber(6) } )
            Reveal.addKeyBinding( { keyCode: 55 }, function() { appendPageNumber(7) } )
            Reveal.addKeyBinding( { keyCode: 56 }, function() { appendPageNumber(8) } )
            Reveal.addKeyBinding( { keyCode: 57 }, function() { appendPageNumber(9) } )
            Reveal.addKeyBinding( { keyCode: 58 }, function() { appendPageNumber(0) } )
		}
	}

})();

Reveal.registerPlugin( 'numberkeys', NumberKeys );
