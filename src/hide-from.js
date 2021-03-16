/*
 * Hides specific slides and slide elements when an URL parameter is set
 * <slide data-hide-from="version2"> will be hidden when URL parameter ?version2 is set
 * <slide data-hide-from="!version2"> will be hidden when URL parameter ?version2 is not set
 * Does not only work for slides, but also for for li, p, img, etc.
 * 
 * By Johannes Schildgen, 2021
 */

var HideFromPlugin = (function(){
	return {
		init: function() {        
            document.querySelectorAll('[data-hide-from]').forEach(function(item) {
							var hide_from = item.getAttribute('data-hide-from');
							if(window.location.search.substr(1).split("&").indexOf(hide_from)>-1) {
									item.setAttribute("data-visibility", "hidden");
									item.style.display = "none";
							}
							if(hide_from.startsWith("!") &&
                 window.location.search.substr(1).split("&").indexOf(hide_from.substr(1))<0) {
										item.setAttribute("data-visibility", "hidden");
										item.style.display = "none";
								}
            })
		}
	}
})();

Reveal.registerPlugin( 'hide-from', HideFromPlugin );