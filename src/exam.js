function txt(v) {
  var lang = Array();
  lang["*"] = Array();
  lang["de"] = Array();
  lang["de"]["Exercise"] = "Aufgabe";
  lang["de"]["Max"] = "Max";
  lang["de"]["P"] = "P";
  lang["de"]["Points"] = "Punkte";
  lang["de"]["Total"] = "&Sigma;";
  lang["de"]["Grade"] = "Note";
  lang["de"]["Signatures"] = "Unterschr.";
  lang["de"]["1st Reviewer"] = "Erstgutachter";
  lang["de"]["2nd Reviewer"] = "Zweitgutachter";
  lang["de"]["without bonus"] = "ohne Bonus";
  lang["de"]["with bonus"] = "mit evtl. Bonus";

  if(!document.querySelector("table.points").classList.contains("bonus")) {
    lang["*"]["with bonus"] = "";
    lang["*"]["without bonus"] = "";
  }

  hide_grade = false;
  if(document.querySelector("table.points").classList.contains("hide_grade")) {
    hide_grade = true;
  }

  
  
  if(lang["*"][v] != undefined) {
    return lang["*"][v];
  }
  
  var code = document.getElementsByTagName('html')[0].attributes["lang"].value;
  if(lang[code] == undefined || lang[code][v] == undefined) {
    return v;
  }
  return lang[code][v];
}

function show_only_exercises(only_exercises) {
  var exercises = document.querySelectorAll("section.exercise");
  var exercise_no = 0;
  exercises.forEach(function(e) {
    exercise_no++;
    if(only_exercises.indexOf(exercise_no) == -1) {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
  });
}

(function() {

  let only_exercises = null;
  if(window.location.search) {    // exam.html?1,3
    only_exercises = window.location.search.substring(1).split(",");
    only_exercises = only_exercises.map(function(e) { return parseInt(e); });
    show_only_exercises(only_exercises);

    document.getElementById("qrcode").src = "../../qr/qr.php?s="+only_exercises.join(",");
    
    var last_exercise = only_exercises[only_exercises.length-1]+1;
    var last_exercise_title = document.querySelector("section.exercise:nth-of-type("+last_exercise+") h1").innerHTML;
    document.getElementById("edition").innerHTML += "<u>"+last_exercise_title+"</u>";
  } else {
    document.getElementById("edition").innerHTML = "";
  }

  var points_tbl_head = '<thead><tr><th>'+txt('Exercise')+':</th>'; //<th style="width: 15mm;">1</th><th style="width: 15mm;">2</th><th style="width: 15mm;">3</th><th style="width: 15mm;">4</th><th style="width: 15mm;">5</th><th style="width: 15mm;">6</th><th style="width: 15mm;">7</th><th style="width: 25mm;">Gesamt</th><th style="width: 25mm;">Note</th></tr></thead>
  var points_tbl_body1 = '<tbody><tr><th>'+txt('Max')+':</th>'; //<td>15</td><td>10</td><td>16</td><td>8</td><td>8</td><td>18</td><td>5</td><td>90</td><td></td></tr>
  var points_tbl_body2 = '<tr style="background-color:white"><th>'+txt('Points')+':</th>'; //<td><td></td><td></td><td></td></td><td></td><td></td><td></td><td></td><td></td></tr>
        //</tbody>

  var exercise_no = 0;
  var total_points = 0;
  document.querySelectorAll("section.exercise").forEach(
    function(e) {
      exercise_no++;
      if(only_exercises != null && only_exercises.indexOf(exercise_no) === -1) {
        return;
      }
      var exercise_points = 0;
      e.querySelectorAll("span[data-points]").forEach(
        function(p) {
          var points = parseInt(p.getAttribute("data-points"));
          p.innerHTML = "("+points+"P)";
          exercise_points += points;
        });
      total_points += exercise_points;
      e.querySelector("h1").innerHTML = txt('Exercise')+" "+exercise_no+": "+e.querySelector("h1").innerHTML+" ("+exercise_points+txt("P")+")";
      points_tbl_head += '<th style="width: 15mm;">'+exercise_no+'</th>';
      points_tbl_body1 += '<td>'+exercise_points+'</td>';
      points_tbl_body2 += '<td></td>';
    });

    points_tbl_head += '<th style="width: 15mm;">'+txt('Total')+'</th>';
    if(!hide_grade) {
      points_tbl_head += '<th style="width: 20mm;">'+txt('Grade')+'</th>';
    }
    points_tbl_head += '<th style="width: 35mm;">'+txt('Signatures')+'</th></tr></thead>';
    
    points_tbl_body1 += '<td>'+total_points+'</td>';
    if(!hide_grade) {
      points_tbl_body1 += '<td style="font-size:9pt; text-align: right; vertical-align: bottom;">'+txt('without bonus')+'</td>';
    }
    points_tbl_body1 += '<td style="font-size:9pt; text-align: right; vertical-align: bottom;">'+txt('1st Reviewer')+'</td></tr>';
    
    points_tbl_body2 += '<td></td>';
    if(!hide_grade) {
      points_tbl_body2 += '<td style="font-size:9pt; text-align: right; vertical-align: bottom;">'+txt('with bonus')+'</td>';
    }
    points_tbl_body2 += '<td style="font-size:9pt; text-align: right; vertical-align: bottom;">'+txt('2nd Reviewer')+'</td></tr></tbody>';

    document.querySelector("table.points").innerHTML = points_tbl_head+points_tbl_body1+points_tbl_body2;

})();