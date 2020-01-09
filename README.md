# db-slides

Lecture slides based on the HTML/JavaScript framework [reveal.js](https://github.com/hakimel/reveal.js).

This project consists of a custom reveal.js style for interactive lecture slideshows and printable hand-outs with notes, and extensions for code highlighting, jumping to slides with number keys, and more. Custom extensions were added for displaying Entity-Relationship diagrams on slides using JSON input and the live execution of SQL queries on a SQLite database.

## reveal.js
A full documentation of using all features of reveal.js can be found on <https://github.com/hakimel/reveal.js>.

## Folder structure
- **index.php** ** start page to display links to all slides, hand-outs, exercises, and exams (PHP web server required)
- **1.html, 2.html, ...** lecture chapters (slide content)
- **exercises/ex1.html, ...** exercise sheets
- **img/, exercises/img/** image files used in slides and exercise sheets
- **code/** application code that can be imported and displayed in slides
- **exams** symbolic link to ../exams folder which is not part of this repository
- **lib/** thrid-party libraries (e.g., the fontawesome icon set)
- **plugins/** reveal.js plugins (badges, jump, code-focus, sampler)
- **reveal.js/** reveal.js 3.8.0
- **src/** custom libraries (SQL, ER diagrams, exam points calculation, cloning div-content, slide style)

## Installation and Usage
Clone this repository
```sh
   $ git clone https://github.com/jschildgen/db-slides.git
```

1. **Opening .html files directly with a web browser** works in most cases, but does not support all features (e.g. importing code into slides, etc.) and index.php is not usable.
2. **Starting a web server process and accessing slides via <http://localhost>** (e.g. using XAMPP, Apache, or Lighttpd) supports all features; when using npm instead, index.php cannot be used.

## Editing slides
The slides can be edited with any text editor, e.g. Visual Studio Code, Atom, gedit, or Notepad++.

### Visual Studio Code
Visual Studio Code has a lot of features and extensions which help editing slide content:

- **Code Spell Checker** spell checking extension with dictionary extensions for many languages. Underlines typos in the HTML editor, suggests fixes, and allows for adding words to a folder dictionary in .vscode/settings.json
- **HTML editing features** built-in features for HTML tag auto-competion (IntelliSense), closing tags, color picker, code folding, etc. (see <https://code.visualstudio.com/Docs/languages/html>)
- **Emmet sniplets** built-in abbreviations for quick code generation. E.g. `ul>li*5` generates a `<ul>` with five list items `<li>` (see <https://docs.emmet.io/cheat-sheet/>)

## Lecture Slides
1.html etc. in the main folder are lecture slides for one chapter. These HTML files import a lot of JavaScript libaries and CSS styles. Furthermore, `src/init_reveal.js` is imported which configures the settings and extensions of reveal.js

Each slide is a `<section>` element. In these sections, a slide can be designed with HTML:

### Headings

Headings are configured in src/sql.css in the HEADERS section. 

- `<h1>`, `<h2>`, and `<h3>` are very large, large and medium-sized centered headings 
- `<h4>` is a smaller heading and left-aligned

### Text content

Text can be written in paragraph elements `<p>` or lists. `<ul>` uses dots, `<ol>` uses numbered items. `<br>` breaks a line.

- `<p style="margin-left: 1cm">` (also for `<li>`) moves the text 1cm to the right (&Indentation)
- `&nbsp;` is a non-breaking space and can also be used for indentations
- `T<sub>1</sub>` adds a small index substript, `T<sup>2</sup>` is a superscript (T²)
- `<p class="small">` uses only 70% of the font size (defined in src/layout.css)

### Markdown

Instead of writing the content in HTML, markdown can be used. See <https://github.com/hakimel/reveal.js#markdown>

### Special characters and symbols ###

A lot of symbols can be added using their HTML code, e.g. `&pi;` or `&rightarrow;`. Simply trying out - Visual Studio Code has an auto-completion feature for these codes - or using a search engine (&quot;HTML sum symbol&quot;) helps finding them.

### Math equations ###

The reveal.js plugin math.js allows writing LaTeX formulas within slides using the `$...$` syntax. Example: `$\frac{2}{3}$`

### Icons ###

Font Awesome is a library which offers more than 1500 free icons: <https://fontawesome.com/icons?d=gallery&m=free> 

Clicking on an item in the gallery shows its HTML code, e.g. `<i class="fas fa-user"></i>`.

Coloring an icon is possible with `style="color:red"` or using a pre-defined class, e.g. `<i class="fas fa-user green"></i>`. The colors green, yellow, orange, grey, red, and blue are defined in src/layout.css

A `<div style="position: absolute">` element can be used to place an icon, a text, or an image on an arbitrary position within the slide. Example: `<div style="position: absolute; top: 120px; right:50px; font-size:250px"><i class="fas fa-university green"></i></div>`

### Images ###

Images are stored in the img/ folder and can be displayed via `<img src="img/6/console.png">` The size can be configured with `style="width:7cm"`. Using `class="strech"` will strech the image to remaining space on the slide. The class `noborder` will remove the image border. 

### Trackinfo ###

Some slides reference tracks in an audiobook. When adding for example `<div class="trackinfo"><i class="fas fa-headphones"></i> 1</div>`, a headphone symbol and the track number 1 will be displayed on the top right.

### Fragments

A fragment is a hidden element on a slide that will be visible on click. In the hand-outs, all fragments are always visible. They can also be used for highlighting or animating elements.

Adding `class="fragment"` to an HTML element (e.g., `p` or `li`) will show the elements with this class in the order as they appear in the section. A custom order and showing multiple fragments at the same time can be controlled with the additional attribute `data-fragment-index`.

All details about using fragments in reveal.js can be found under <https://github.com/hakimel/reveal.js#fragments>

## Slide Notes for printed Hand-Outs

To generate PDF slides with notes, the HTML file has to be opened with the `print-pdf` and `showNotes=true` parameters, e.g., `6.html?print-pdf&showNotes=true`

Slide notes are written in an `<aside class="notes">` element. These notes are not visible when presenting the slides, but are displayed in a gray box at the bottom of a page in the exported PDF hand-outs. The longer the text in the slide notes is, the more whitespace at the bottom of a slide is required, otherwise the box will overlap contents.

The slide notes are also shown in Speaker mode (press `s`).

## Keyboard Shortcuts in Presenter Mode

- `f` Full screen
- `esc` Exit full screen
- `s` Speaker Mode: a separate browser window opens and shows the current slide, the next slide (or fragment), the current time, the time the presentation is running, and the speaker notes. This window can be moved to a second screen, e. g. a laptop monitor, while the main browser window is visible on a presenter.
- `?` shows help (all keyboard shortcuts)
- `b` screen turns black
- Number + `Enter` (jump plugin) jumps to the slide with the given number, e.g. `1 Enter` jumps to the first slide.

Of course, the arrow keys, and thus, all presenter devices, are supported to go to the next or previous slides.

## Figures and Diagrams using Slides.com

One way to put shapes, arrows, boxes on slides is to draw these figures in a tool like Visio, PowerPoint, etc. and save a screenshot image of it into the img/ folder. Mind that the original file must not be thrown away so that it can later be edited.

Another way of putting figures on a slide is directly writing SVG code in the HTML. The slide editor <https://www.slides.com> can be used to draw elements on the desired position of the slide, and then generate HTML code of it. In the right menu of the slides editor, a `<>` button shows HTML code which can be copy-pasted into the slides. Afterwards, colors, texts, and element positions can be adjusted directly in the HTML/SVG.

There are a lot of useful plugins for reveal.js for displaying other kinds of digrams, figures, or charts: <https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware>

## ER Diagrams

For this project, an ERM plugin for reveal.js was developed (src/erd.js and src/erd.css) to generate ER diagrams using the [joint.js](https://www.jointjs.com) framework.

To put an ER diagram on a slide, a `<div class="erd">` can be used. The content of this element is a JSON string: an array that consists of an array of entities and of another array of relationships. Each entity and relationship is a JSON document. One example: 

```html
<div>
  <div class="stretch erd">
  [[
    { _e: "Person", pos: [150, 100],
    attributes: [
      { _a:"PersNr", options:["primary"], pos: [89, 13] },
      { _a:"Name", pos: [245, 13] }
    ]
    },
    { _e: "Company", pos: [530, 100],
      attributes: [
      { _a:"Companyname", pos: [475, 25], options:["primary"] },
      { _a:"City", pos: [634, 25] },
      { _a:"Street", pos: [722, 106] },
      { _a:"Zip Code", pos: [650, 189]},
      { _a:"Description", pos: [475, 189]}
      ]
    }
  ],
  [
    { _r: "works for",
      _e: ["Person", "Company"],
      card: ["N", "1"]
    }
  ]]
</div></div>
```

### Entities

- `_e` Entity name
- `attributes` an array of attribute documents
- `options`
  - `"weak"` weak entity (double border)
- `pos` Array of length two with the x,y position. [0,0] is on the top left. When the attribute `pos` is missing, the entity is randomly placed.

### Relationships

- `_r` Relationship name
- `_e` Array of entity names which participate in the relationship
- `card` Array with the same length as `_e` with the cardinality which is written next to the corresponding entity, e.g. `"1"` or `"N"` or `"[0,1]"`
- `attributes` relationship attributes as an array of attribute documents
- `options`
  - `"weak"` relationship belongs to a weak entity (double border)
- `pos` Array of length two with the x,y position. [0,0] is on the top left. When the attribute `pos` is missing, the relationship is placed in the middle of the corresponding entities.

### Attributes

- `_a` Attribute name
- `attributes`: sub-attributes as an array of attribute documents
- `options`
  - `"primary"` primary-key attribute (underlined)
  - `"extending-primary"` extending the primary key (for weak entities; dotted-underlined)
  - `"multi"` multivalued attributes (double border)
  - `"derived"` derived attributes (dotted border)

Entities, Relationships, and Attributes can be dragged and dropped with the mouse in slide-presentation mode. The browser console (F12) shows the new position of an element (e.g. `, pos: [475, 189]`). This position can then be simply copy-pasted into the JSON.

## Program Code Listings

Within the text, code elements can be written in `<code>` tags. For longer listings `<pre><code>` can be used. The plugin highlight.js is used for syntax highlighting. Depending on the `class` of a `code` element, highlight.js highlights reserved keywords, string values, etc.:

```html
<pre><code class="java" data-trim contenteditable>
String x = "Hello";
int y = 5;
</code></pre>
```

The attribute `data-trim` removes spaces and new lines at the beginng and the end, `contenteditable` makes the code editable on the slides.

Using the [sampler](https://github.com/ldionne/reveal-sampler) plugin, code can be imported from other files. This way it is possible to write runnable programs in IntelliJ or another IDE, test and execute them there, and just reference to the code on the slides to display them:

```html
<pre><code class="java" data-trim contenteditable data-sample='code/JDBC_Webshop/src/lecture/SomeClass.java#23-24'></code></pre>
```

## SQL

The script src/sql.js implements the interaction with a WebDB database, a client-side SQLite DB which runs within the browser. The script initializes the database by creating tables and inserting data (see src/sql.js).

Within the slides, the tables can be queried using SQL code blocks:

```html
<pre><code class="hlsql" data-trim contenteditable>SELECT * FROM tbl</code></pre>
<span class="sqlresult"></span>
```

Each query in an `<code class="hlsql">` element is actually executed on the SQLite database. If there is an error in the query (syntax error, table not found, ...), the error is shown as an alert. This reduces the probability of invalid queries on the slides. 

The result of the query will be shown in a `<span class="sqlresult">` element if it exists on the same slide.

If there are multiple SQL queries and multiple of those spans, `data-sql="some_id"` has to be added to the <code> element and the result will be displayed in the `<span id="some_id">`. 

As `contenteditable` is used, the queries can be live edited within the presentation. Ctrl+Enter re-executes the query and updates the corresponding result table.

It is also possible to show the result of a query without showing the query itself, e.g. to show the full table, for showing the result of a relational-algebra expression, or for faking or limiting the result:

```html
<span data-sql-query="select * from tbl"></span>
```

## Exercise Sheets

Exercise sheets are stored as exercises/ex1.html etc. They using reveal.js only to support displaying ER diagrams in the same way as in slides. Other reveal.js features and extensions cannot be used in exercise sheets.

The stylesheet exercises/exercises.css defines the print layout. The header is shown on each page. Unfortunately, no page numbers are shown on the exercise sheets. They can be adding by using the print feature in Firefox to generate the PDF. Here, a custom header or footer can be set which contains the page number.

Each `<section>` element is one exercise. An exercise can be moved to the next page by using `<section style="page-break-before:always; padding-top: 2.5cm">`

## Exams

Exams are stored in ../exams and are developed in the same way as exercise sheets.

The script src/exam.js enables the automatic calculation of the total points of the exam.

An exercise is defined by `<section class="exercise">`. The title of the exercise which is written in an `<h1>` tag automatically gets a prefix with the exercise number, and a suffix with the exercise points. E.g. `<h1>SQL</h1>` will actually show: `Exercise 1: SQL (18P)`

Each sub-exercise must consist of a `<span data-points="1"></span>` element which defines the number of points for the sub-exercise, e. g.: `<p>a) Write a TRUNCATE statement to delete all products. <span data-points="1"></span></p>`

The following table can be placed on the first page of the exam. The script src/exam.js will fill it with one column for each exercise and the total number of points.

```html
<div style="text-align: center; font-size: xx-large;">
  <table class="points border" style="margin-left:auto;margin-right:auto;">
  </table>
</div>
```

| Exercise: | 1  | 2  | 3  | Total | Grade |
|-----------|----|----|----|-------|-------|
| Max:      | 30 | 50 | 20 | 100   |       |
| Points:   |    |    |    |       |       |


## License

This work is licensed under a [Creative Commons Attribution 4.0 International
License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

Copyright (C) 2020 Johannes Schildgen