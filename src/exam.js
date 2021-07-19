function txt(v) {
  var lang = Array();
  lang["de"] = Array();
  lang["de"]["Exercise"] = "Aufgabe";
  lang["de"]["Max"] = "Max";
  lang["de"]["P"] = "P";
  lang["de"]["Points"] = "Punkte";
  lang["de"]["Total"] = "Gesamt";
  lang["de"]["Grade"] = "Note";
  
  var code = document.getElementsByTagName('html')[0].attributes["lang"].value;
  if(lang[code] == undefined || lang[code][v] == undefined) {
    return v;
  }
  return lang[code][v];
}

(function() {

  var points_tbl_head = '<thead><tr><th>'+txt('Exercise')+':</th>'; //<th style="width: 15mm;">1</th><th style="width: 15mm;">2</th><th style="width: 15mm;">3</th><th style="width: 15mm;">4</th><th style="width: 15mm;">5</th><th style="width: 15mm;">6</th><th style="width: 15mm;">7</th><th style="width: 25mm;">Gesamt</th><th style="width: 25mm;">Note</th></tr></thead>
  var points_tbl_body1 = '<tbody><tr><th>'+txt('Max')+':</th>'; //<td>15</td><td>10</td><td>16</td><td>8</td><td>8</td><td>18</td><td>5</td><td>90</td><td></td></tr>
  var points_tbl_body2 = '<tr><th>'+txt('Points')+':</th>'; //<td><td></td><td></td><td></td></td><td></td><td></td><td></td><td></td><td></td></tr>
        //</tbody>

  var exercise_no = 0;
  var total_points = 0;
  document.querySelectorAll("section.exercise").forEach(
    function(e) {
      exercise_no++;
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

    points_tbl_head += '<th style="width: 25mm;">'+txt('Total')+'</th><th style="width: 25mm;">'+txt('Grade')+'</th></tr></thead>';
    points_tbl_body1 += '<td>'+total_points+'</td><td></td></tr>';
    points_tbl_body2 += '<td></td><td></td></tr></tbody>';

    document.querySelector("table.points").innerHTML = points_tbl_head+points_tbl_body1+points_tbl_body2;

})();