/*
 * Set metadata in the slides (speaker, email, lecture times, etc.)
 * 
 *
 * By Florian Heinz, Johannes Schildgen, 2021
 */

var metadata = {
  "":  {
	    "speaker_name"      : "Prof. Dr. Johannes Schildgen",
	    "speaker_email"     : "johannes.schildgen@oth-regensburg.de",
	    "lecture_startdate" : "2023-03-17",
			"first_exercise_sheet_date": "2023-03-28",
			"exercise_startdate": "2023-04-03",
			"exercise_times"			: [
				"Mo, 13:45 Uhr (K006)",
				"Mi, 8:15 Uhr (K222)",
				"Mi, 13:45 Uhr (K006)",
	],
	    "lecture_times"     : [
                                "Di, 8:15 Uhr (K018 + YouTube)",
                                "Fr, 10:00 Uhr (K017 + YouTube)",
	                        ],
          }
};

var MetadataPlugin = (function(){
	return {
		init: function() {
			var id = window.location.search.substring(1);
			
			var md = metadata[id] != undefined ? metadata[id] : metadata[""];
			
			document.querySelectorAll('[data-metadata]').forEach(function(item) {
				var key = item.getAttribute("data-metadata");

				if(md[key] != undefined && typeof md[key] == "object") {
					var child = item.firstElementChild.cloneNode();
					item.innerHTML = "";
					for(i in md[key]) {
						var newChild = child.cloneNode();
						newChild.innerHTML = md[key][i];
						item.appendChild(newChild);
					}
					return;
				}

				if(md[key] != undefined) {
					item.innerHTML = md[key];
				} else if(item.getAttribute("data-metadata-default") != null) {
					item.innerHTML = item.getAttribute("data-metadata-default");
				}

				switch(item.getAttribute("data-metadata-type")) {
					case "mailto": 
						item.href = "mailto:"+item.innerHTML; 
					break;
					case "href": 
						item.href = item.innerHTML; 
					break;
					case "src": 
						item.src = item.innerHTML;
						item.innerHTML = ""; 
					break;
				}

			});
			
		}

	}})();

Reveal.registerPlugin( 'metadata', MetadataPlugin );

