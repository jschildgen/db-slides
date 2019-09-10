/*
 * Write an SQL query in <pre><code class="hlsql" data-trim contenteditable>...</pre>
 * and create a <span class="sqlresult"></span> on the same slide.
 * The result of the query is displayed as a table in the sqlresult span.
 * Add data-sql="some_id" to the <code> element and the result will be
 * displayed in the <span id="some_id">. 
 * 
 * The query can be modified during the presentation. 
 * Press Ctrl+Enter to re-execute it.
 *
 * By Johannes Schildgen, 2019
 */
 
var SQLPlugin = (function(){
    
    if( window.Reveal ) Reveal.registerKeyboardShortcut( 'CTRL + Enter', 'Execute SQL Query' );

	return {
		init: function() {        
            db = create_db();
            document.querySelectorAll('.hlsql').forEach(function(item) {
                if(get_result_element(item) == null
                   || item.classList.contains('dont_execute_sql')) { return; }
                execute_query(item.innerText, get_result_element(item));
                item.addEventListener('keydown', function (e) {
                    if (e.ctrlKey && e.keyCode==13) { // 13 is enter
                      execute_query(item.innerText, get_result_element(this));
                }});
            })
		}
	}

})();

Reveal.registerPlugin( 'sql', SQLPlugin );


/** input:  <code> element with class hlsql 
                output: corresponding <span> element with class sqlresult
                        If data-sql="an_id" is present in the <code> element, this one is taken,
                        otherwise the first element with class sqlresult on the same slide.
**/
function get_result_element(item) {
    if(item.attributes['data-sql'] != undefined) {
        result_element_id = item.attributes['data-sql'].value;
        return document.querySelector('#'+result_element_id);
    } else {
        return item.parentNode.parentNode.querySelector('.sqlresult');
    }
}


function errorFunction(tx, e) {
  alert(e.message);
}

function create_db() {
    
    db = openDatabase("SQL", "1", "SQL", 5*1024*1024);
    
    db.transaction(function(tx) {
        tx.executeSql("DROP TABLE IF EXISTS bestellungen_positionen");
        tx.executeSql("DROP TABLE IF EXISTS bestellungen");
        tx.executeSql("DROP TABLE IF EXISTS bewertungslikes");
        tx.executeSql("DROP TABLE IF EXISTS bewertungen");
        tx.executeSql("DROP TABLE IF EXISTS produkte");
        tx.executeSql("DROP TABLE IF EXISTS hersteller");
        tx.executeSql("DROP TABLE IF EXISTS kunden");
        tx.executeSql("CREATE TABLE kunden (kundennummer INT PRIMARY KEY, name VARCHAR(100), email VARCHAR(500) UNIQUE, passwort CHAR(32), land VARCHAR(100), geworben_von INT REFERENCES kunden(kundennummer) ON DELETE SET NULL)");
        tx.executeSql("CREATE TABLE hersteller (firma VARCHAR(50) PRIMARY KEY, land VARCHAR(100))");
        tx.executeSql("CREATE TABLE produkte (produktnummer INT PRIMARY KEY, bezeichnung VARCHAR(100) NOT NULL, preis DECIMAL(9,2), hersteller VARCHAR(50) REFERENCES hersteller(firma) ON UPDATE CASCADE)");
        tx.executeSql("CREATE TABLE bewertungen (kundennummer INT REFERENCES kunden(kundennummer), produktnummer INT REFERENCES produkte(produktnummer), sterne INT DEFAULT 5 CHECK(sterne BETWEEN 1 AND 5), bewertungstext VARCHAR(100000), PRIMARY KEY(kundennummer, produktnummer))");
        tx.executeSql("CREATE TABLE bewertungslikes (liker INT REFERENCES kunden(kundennummer), kundennummer INT REFERENCES kunden(kundennummer), produktnummer INT REFERENCES produkte(produktnummer))");
        tx.executeSql("CREATE TABLE bestellungen (bestellnummer INT PRIMARY KEY, kundennummer INT REFERENCES kunden(kundennummer), zeit TIMESTAMP, preis DECIMAL(9,2))");
        tx.executeSql("CREATE TABLE bestellungen_positionen (bestellnummer INT REFERENCES bestellungen(bestellnummer), produktnummer INT REFERENCES produkte(produktnummer), anzahl INT, PRIMARY KEY(bestellnummer, produktnummer))");

        
        tx.executeSql("INSERT INTO kunden VALUES(4,'Ute', 'ute@example.com', NULL, 'Deutschland', NULL)");                              
        tx.executeSql("INSERT INTO kunden VALUES(5,'Peter', 'peter@example.com', NULL, 'Deutschland', 4)");
        tx.executeSql("INSERT INTO kunden VALUES(8,'Anna', 'anna@example.com', 5, 'Italien', 5)");
        tx.executeSql("INSERT INTO hersteller VALUES ('Calgonte', 'Italien')");
        tx.executeSql("INSERT INTO hersteller VALUES ('Monsterfood', 'USA')");
        tx.executeSql("INSERT INTO hersteller VALUES ('Holzkopf', 'Österreich')");
        tx.executeSql("INSERT INTO produkte VALUES(17, 'Schokoriegel', 0.89, 'Monsterfood')");
        tx.executeSql("INSERT INTO produkte VALUES(18, 'Müsliriegel', 1.19, 'Monsterfood')");
        tx.executeSql("INSERT INTO produkte VALUES(29, 'Spülmaschinentabs', 3.99, 'Calgonte')");
        tx.executeSql("INSERT INTO produkte VALUES(88, 'Katzenfutter', 4.99, NULL)");
        tx.executeSql("INSERT INTO produkte VALUES(91, 'Maschinenbau-Lehrbuch', 22.90, NULL)");
        tx.executeSql("INSERT INTO produkte VALUES(92, 'Regal', 100.00, NULL)");
        tx.executeSql("INSERT INTO produkte VALUES(998, 'Geschenkverpackung', 0.00, NULL)");
        tx.executeSql("INSERT INTO produkte VALUES(999, 'Katalog', 0.00, NULL)");
        tx.executeSql("INSERT INTO bewertungen VALUES(5, 17, 4, 'Guter Schokoriegel, aber die Verpackung geht schwer auf')");
        tx.executeSql("INSERT INTO bewertungen VALUES(5, 29, 1, 'Mein Geschirr wird nicht sauber!')");
        tx.executeSql("INSERT INTO bewertungslikes VALUES(8,5,17)");
        tx.executeSql("INSERT INTO bestellungen VALUES(101, 5, '2018-05-26 20:31:00', 34.80)");
        tx.executeSql("INSERT INTO bestellungen VALUES(102, 8, '2018-05-26 20:31:01', 100)");
        tx.executeSql("INSERT INTO bestellungen VALUES(103, 8, '2018-05-27 8:15:00', 0.89)");
        tx.executeSql("INSERT INTO bestellungen_positionen VALUES(101, 91, 1)");
        tx.executeSql("INSERT INTO bestellungen_positionen VALUES(101, 18, 10)");
        tx.executeSql("INSERT INTO bestellungen_positionen VALUES(102, 91, 1)");
        tx.executeSql("INSERT INTO bestellungen_positionen VALUES(103, 17, 1)");
    });
    
    
    
    return db
}


function execute_query(query, res_element) {
    db.transaction(function(tx) {
        tx.executeSql(query, [], function(tx, results) {
            if(results.rows.length == 0) { // empty result set
                res_element.innerHTML = '- leere Ergebnismenge -';
                return;
            }
            
            html = '<table style="font-size:0.7em"><thead><tr>';

            //header
            var header = results.rows.item(0);
            for(var column in header) {
                html += '<th>'+column+'</th>';
            }

            html += '</tr><thead>';

            //data rows
            for(i = 0; i < results.rows.length; i++) {
                var row = results.rows.item(i);
                html += '<tr>'

                for(var column in row) {
                    html += '<td>'+row[column]+'</td>';
                }

                html += '</tr>';
            }

            html += '</table>';

            res_element.innerHTML = html;
        }, errorFunction);
    });
}