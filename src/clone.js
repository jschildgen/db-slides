/*
 * Cloning the content of an arbitrary HTML element (e.g. a <div>) in another HTML element.
 * <div id="original_element">Hello</div>
 * <div data-clone="original_element"></div>
 * The second div will also have the "Hello" content. 
 *
 * By Johannes Schildgen, 2019
 */
 
var ClonePlugin = (function(){
    
	return {
		init: function() {        
            document.querySelectorAll('[data-clone]').forEach(function(item) {
                item.innerHTML = document.getElementById(item.getAttribute('data-clone')).innerHTML;
            })
		}
	}

})();

Reveal.registerPlugin( 'clone', ClonePlugin );