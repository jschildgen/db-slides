/** https://github.com/ThomasWeinert/reveal-badges **/

var RevealBadges = window.RevealBadges || (function() {
  var languages = {
    "1c": {
      bg: '#814CCC',
      fg: '#000000',
      label: '1C Enterprise'
    },
    abap: {
      bg: '#E8274B',
      fg: '#000000',
      label: 'ABAP'
    },
    actionscript: {
      bg: '#882B0F',
      fg: '#000000',
      label: 'ActionScript'
    },
    ada: {
      bg: '#02f88c',
      fg: '#000000',
      label: 'Ada'
    },
    agda: {
      bg: '#315665',
      fg: '#ffffff',
      label: 'Agda'
    },
    ags: {
      bg: '#B9D9FF',
      fg: '#000000',
      label: 'AGS%20Script'
    },
    alloy: {
      bg: '#64C800',
      fg: '#000000',
      label: 'Alloy'
    },
    ampl: {
      bg: '#E6EFBB',
      fg: '#000000',
      label: 'AMPL'
    },
    antlr: {
      bg: '#9DC3FF',
      fg: '#000000',
      label: 'ANTLR'
    },
    apiblueprint: {
      bg: '#2ACCA8',
      fg: '#000000',
      label: 'API Blueprint'
    },
    apl: {
      bg: '#5A8164',
      fg: '#000000',
      label: 'APL'
    },
    apollo: {
      bg: '#0B3D91',
      fg: '#ffffff',
      label: 'Apollo Guidance Computer'
    },
    applescript: {
      bg: '#101F1F',
      fg: '#ffffff',
      label: 'AppleScript'
    },
    arc: {
      bg: '#aa2afe',
      fg: '#000000',
      label: 'arc'
    },
    arduino: {
      bg: '#bd79d1',
      fg: '#000000',
      label: 'Arduino'
    },
    asn1: {
      bg: '#aeead0',
      fg: '#000000',
      label: 'ASN.1'
    },
    asp: {
      bg: '#6a40fd',
      fg: '#ffffff',
      label: 'ASP'
    },
    aspectj: {
      bg: '#a957b0',
      fg: '#000000',
      label: 'AspectJ'
    },
    assembly: {
      bg: '#6E4C13',
      fg: '#ffffff',
      label: 'Assembly'
    },
    ats: {
      bg: '#1ac620',
      fg: '#000000',
      label: 'ATS'
    },
    autohotkey: {
      bg: '#6594b9',
      fg: '#000000',
      label: 'AutoHotkey'
    },
    autoit: {
      bg: '#1C3552',
      fg: '#ffffff',
      label: 'AutoIt'
    },
    batchfile: {
      bg: '#C1F12E',
      fg: '#000000',
      label: 'Batchfile'
    },
    bison: {
      bg: '#6A463F',
      fg: '#ffffff',
      label: 'Bison'
    },
    blitzmax: {
      bg: '#cd6400',
      fg: '#000000',
      label: 'BlitzMax'
    },
    boo: {
      bg: '#d4bec1',
      fg: '#000000',
      label: 'Boo'
    },
    brainfuck: {
      bg: '#2F2530',
      fg: '#ffffff',
      label: 'Brainfuck'
    },
    c: {
      bg: '#555555',
      fg: '#000000',
      label: 'C'
    },
    csharp: {
      bg: '#178600',
      fg: '#000000',
      label: 'C 23'
    },
    cpp: {
      bg: '#f34b7d',
      fg: '#000000',
      label: 'C++'
    },
    chapel: {
      bg: '#8dc63f',
      fg: '#000000',
      label: 'Chapel'
    },
    cirru: {
      bg: '#ccccff',
      fg: '#000000',
      label: 'Cirru'
    },
    clarion: {
      bg: '#db901e',
      fg: '#000000',
      label: 'Clarion'
    },
    clean: {
      bg: '#3F85AF',
      fg: '#000000',
      label: 'Clean'
    },
    click: {
      bg: '#E4E6F3',
      fg: '#000000',
      label: 'Click'
    },
    clojure: {
      bg: '#db5855',
      fg: '#000000',
      label: 'Clojure'
    },
    coffeescript: {
      bg: '#244776',
      fg: '#ffffff',
      label: 'CoffeeScript'
    },
    coldfusion: {
      bg: '#ed2cd6',
      fg: '#000000',
      label: 'ColdFusion'
    },
    coldfusioncfc: {
      bg: '#ed2cd6',
      fg: '#000000',
      label: 'ColdFusion CFC'
    },
    commonlisp: {
      bg: '#3fb68b',
      fg: '#000000',
      label: 'Common Lisp'
    },
    componentpascal: {
      bg: '#B0CE4E',
      fg: '#000000',
      label: 'Component Pascal'
    },
    crystal: {
      bg: '#776791',
      fg: '#000000',
      label: 'Crystal'
    },
    css: {
      bg: '#563d7c',
      fg: '#ffffff',
      label: 'CSS'
    },
    cucumber: {
      bg: '#5B2063',
      fg: '#ffffff',
      label: 'Cucumber'
    },
    cuda: {
      bg: '#3A4E3A',
      fg: '#ffffff',
      label: 'Cuda'
    },
    d: {
      bg: '#ba595e',
      fg: '#000000',
      label: 'D'
    },
    dart: {
      bg: '#00B4AB',
      fg: '#000000',
      label: 'Dart'
    },
    dm: {
      bg: '#447265',
      fg: '#000000',
      label: 'DM'
    },
    dogescript: {
      bg: '#cca760',
      fg: '#000000',
      label: 'Dogescript'
    },
    dylan: {
      bg: '#6c616e',
      fg: '#000000',
      label: 'Dylan'
    },
    e: {
      bg: '#ccce35',
      fg: '#000000',
      label: 'E'
    },
    eagle: {
      bg: '#814C05',
      fg: '#000000',
      label: 'Eagle'
    },
    ec: {
      bg: '#913960',
      fg: '#000000',
      label: 'eC'
    },
    ecl: {
      bg: '#8a1267',
      fg: '#ffffff',
      label: 'ECL'
    },
    eiffel: {
      bg: '#946d57',
      fg: '#000000',
      label: 'Eiffel'
    },
    ejs: {
      bg: '#a91e50',
      fg: '#ffffff',
      label: 'EJS'
    },
    elixir: {
      bg: '#6e4a7e',
      fg: '#ffffff',
      label: 'Elixir'
    },
    elm: {
      bg: '#60B5CC',
      fg: '#000000',
      label: 'Elm'
    },
    emacslisp: {
      bg: '#c065db',
      fg: '#000000',
      label: 'Emacs%20Lisp'
    },
    emberscript: {
      bg: '#FFF4F3',
      fg: '#000000',
      label: 'EmberScript'
    },
    eq: {
      bg: '#a78649',
      fg: '#000000',
      label: 'EQ'
    },
    erlang: {
      bg: '#B83998',
      fg: '#000000',
      label: 'Erlang'
    },
    fsharp: {
      bg: '#b845fc',
      fg: '#000000',
      label: 'F#'
    },
    factor: {
      bg: '#636746',
      fg: '#ffffff',
      label: 'Factor'
    },
    fancy: {
      bg: '#7b9db4',
      fg: '#000000',
      label: 'Fancy'
    },
    fantom: {
      bg: '#dbded5',
      fg: '#000000',
      label: 'Fantom'
    },
    flux: {
      bg: '#88ccff',
      fg: '#000000',
      label: 'FLUX'
    },
    forth: {
      bg: '#341708',
      fg: '#ffffff',
      label: 'Forth'
    },
    fortran: {
      bg: '#4d41b1',
      fg: '#ffffff',
      label: 'FORTRAN'
    },
    freemarker: {
      bg: '#0050b2',
      fg: '#ffffff',
      label: 'FreeMarker'
    },
    frege: {
      bg: '#00cafe',
      fg: '#000000',
      label: 'Frege'
    },
    gamemakerlanguage: {
      bg: '#8fb200',
      fg: '#000000',
      label: 'Game Maker Language'
    },
    glyph: {
      bg: '#e4cc98',
      fg: '#000000',
      label: 'Glyph'
    },
    gnuplot: {
      bg: '#f0a9f0',
      fg: '#000000',
      label: 'Gnuplot'
    },
    go: {
      bg: '#375eab',
      fg: '#ffffff',
      label: 'Go'
    },
    golo: {
      bg: '#88562A',
      fg: '#000000',
      label: 'Golo'
    },
    gosu: {
      bg: '#82937f',
      fg: '#000000',
      label: 'Gosu'
    },
    grammaticalframework: {
      bg: '#79aa7a',
      fg: '#000000',
      label: 'Grammatical%20Framework'
    },
    groff: {
      bg: '#ecdebe',
      fg: '#000000',
      label: 'Groff'
    },
    groovy: {
      bg: '#e69f56',
      fg: '#000000',
      label: 'Groovy'
    },
    hack: {
      bg: '#878787',
      fg: '#000000',
      label: 'Hack'
    },
    haml: {
      bg: '#ECE2A9',
      fg: '#000000',
      label: 'Haml'
    },
    handlebars: {
      bg: '#01a9d6',
      fg: '#000000',
      label: 'Handlebars'
    },
    harbour: {
      bg: '#0e60e3',
      fg: '#ffffff',
      label: 'Harbour'
    },
    haskell: {
      bg: '#29b544',
      fg: '#000000',
      label: 'Haskell'
    },
    haxe: {
      bg: '#df7900',
      fg: '#000000',
      label: 'Haxe'
    },
    html: {
      bg: '#e44b23',
      fg: '#ffffff',
      label: 'HTML'
    },
    hy: {
      bg: '#7790B2',
      fg: '#000000',
      label: 'Hy'
    },
    idl: {
      bg: '#a3522f',
      fg: '#ffffff',
      label: 'IDL'
    },
    io: {
      bg: '#a9188d',
      fg: '#ffffff',
      label: 'Io'
    },
    ioke: {
      bg: '#078193',
      fg: '#000000',
      label: 'Ioke'
    },
    isabelle: {
      bg: '#FEFE00',
      fg: '#000000',
      label: 'Isabelle'
    },
    j: {
      bg: '#9EEDFF',
      fg: '#000000',
      label: 'J'
    },
    java: {
      bg: '#b07219',
      fg: '#000000',
      label: 'Java'
    },
    javascript: {
      bg: '#f1e05a',
      fg: '#000000',
      label: 'JavaScript'
    },
    jflex: {
      bg: '#DBCA00',
      fg: '#000000',
      label: 'JFlex'
    },
    jsoniq: {
      bg: '#40d47e',
      fg: '#000000',
      label: 'JSONiq'
    },
    julia: {
      bg: '#a270ba',
      fg: '#000000',
      label: 'Julia'
    },
    jupyternotebook: {
      bg: '#DA5B0B',
      fg: '#000000',
      label: 'Jupyter Notebook'
    },
    kotlin: {
      bg: '#F18E33',
      fg: '#000000',
      label: 'Kotlin'
    },
    krl: {
      bg: '#28431f',
      fg: '#ffffff',
      label: 'KRL'
    },
    lasso: {
      bg: '#999999',
      fg: '#000000',
      label: 'Lasso'
    },
    latte: {
      bg: '#A8FF97',
      fg: '#000000',
      label: 'Latte'
    },
    less: {
      bg: '#A1D9A1',
      fg: '#000000',
      label: 'Less'
    },
    lex: {
      bg: '#DBCA00',
      fg: '#000000',
      label: 'Lex'
    },
    lfe: {
      bg: '#004200',
      fg: '#ffffff',
      label: 'LFE'
    },
    livescript: {
      bg: '#499886',
      fg: '#000000',
      label: 'LiveScript'
    },
    llvm: {
      bg: '#185619',
      fg: '#ffffff',
      label: 'LLVM'
    },
    lolcode: {
      bg: '#cc9900',
      fg: '#000000',
      label: 'LOLCODE'
    },
    lookml: {
      bg: '#652B81',
      fg: '#ffffff',
      label: 'LookML'
    },
    lsl: {
      bg: '#3d9970',
      fg: '#000000',
      label: 'LSL'
    },
    lua: {
      bg: '#000080',
      fg: '#ffffff',
      label: 'Lua'
    },
    makefile: {
      bg: '#427819',
      fg: '#000000',
      label: 'Makefile'
    },
    mask: {
      bg: '#f97732',
      fg: '#000000',
      label: 'Mask'
    },
    matlab: {
      bg: '#bb92ac',
      fg: '#000000',
      label: 'Matlab'
    },
    max: {
      bg: '#c4a79c',
      fg: '#000000',
      label: 'Max'
    },
    maxScript: {
      bg: '#00a6a6',
      fg: '#000000',
      label: 'MAXScript'
    },
    mercury: {
      bg: '#ff2b2b',
      fg: '#000000',
      label: 'Mercury'
    },
    metal: {
      bg: '#8f14e9',
      fg: '#ffffff',
      label: 'Metal'
    },
    mirah: {
      bg: '#c7a938',
      fg: '#000000',
      label: 'Mirah'
    },
    mtml: {
      bg: '#b7e1f4',
      fg: '#000000',
      label: 'MTML'
    },
    ncl: {
      bg: '#28431f',
      fg: '#ffffff',
      label: 'NCL'
    },
    nemerle: {
      bg: '#3d3c6e',
      fg: '#ffffff',
      label: 'Nemerle'
    },
    nesc: {
      bg: '#94B0C7',
      fg: '#000000',
      label: 'nesC'
    },
    netlinx: {
      bg: '#0aa0ff',
      fg: '#000000',
      label: 'NetLinx'
    },
    netlinxerb: {
      bg: '#747faa',
      fg: '#000000',
      label: 'NetLinx-ERB'
    },
    netlogo: {
      bg: '#ff6375',
      fg: '#000000',
      label: 'NetLogo'
    },
    newlisp: {
      bg: '#87AED7',
      fg: '#000000',
      label: 'NewLisp'
    },
    nginx: {
      bg: '#9469E9',
      fg: '#000000',
      label: 'Nginx'
    },
    nimrod: {
      bg: '#37775b',
      fg: '#ffffff',
      label: 'Nimrod'
    },
    nit: {
      bg: '#009917',
      fg: '#000000',
      label: 'Nit'
    },
    nix: {
      bg: '#7e7eff',
      fg: '#000000',
      label: 'Nix'
    },
    nu: {
      bg: '#c9df40',
      fg: '#000000',
      label: 'Nu'
    },
    numpy: {
      bg: '#9C8AF9',
      fg: '#000000',
      label: 'NumPy'
    },
    objectivec: {
      bg: '#438eff',
      fg: '#000000',
      label: 'Objective-C'
    },
    objectivecpp: {
      bg: '#6866fb',
      fg: '#000000',
      label: 'Objective-C++'
    },
    objectivej: {
      bg: '#ff0c5a',
      fg: '#ffffff',
      label: 'Objective-J'
    },
    ocaml: {
      bg: '#3be133',
      fg: '#000000',
      label: 'OCaml'
    },
    omgrofl: {
      bg: '#cabbff',
      fg: '#000000',
      label: 'Omgrofl'
    },
    ooc: {
      bg: '#b0b77e',
      fg: '#000000',
      label: 'ooc'
    },
    opal: {
      bg: '#f7ede0',
      fg: '#000000',
      label: 'Opal'
    },
    oxygene: {
      bg: '#cdd0e3',
      fg: '#000000',
      label: 'Oxygene'
    },
    oz: {
      bg: '#fab738',
      fg: '#000000',
      label: 'Oz'
    },
    pan: {
      bg: '#cc0000',
      fg: '#ffffff',
      label: 'Pan'
    },
    papyrus: {
      bg: '#6600cc',
      fg: '#ffffff',
      label: 'Papyrus'
    },
    parrot: {
      bg: '#f3ca0a',
      fg: '#000000',
      label: 'Parrot'
    },
    pascal: {
      bg: '#E3F171',
      fg: '#000000',
      label: 'Pascal'
    },
    pawn: {
      bg: '#dbb284',
      fg: '#000000',
      label: 'PAWN'
    },
    perl: {
      bg: '#0298c3',
      fg: '#000000',
      label: 'Perl'
    },
    perl6: {
      bg: '#0000fb',
      fg: '#ffffff',
      label: 'Perl6'
    },
    php: {
      bg: '#4F5D95',
      fg: '#000000',
      label: 'PHP'
    },
    piglatin: {
      bg: '#fcd7de',
      fg: '#000000',
      label: 'PigLatin'
    },
    pike: {
      bg: '#005390',
      fg: '#ffffff',
      label: 'Pike'
    },
    plsql: {
      bg: '#dad8d8',
      fg: '#000000',
      label: 'PLSQL'
    },
    pogoscript: {
      bg: '#d80074',
      fg: '#ffffff',
      label: 'PogoScript'
    },
    postscript: {
      bg: '#da291c',
      fg: '#ffffff',
      label: 'PostScript'
    },
    powerbuilder: {
      bg: '#8f0f8d',
      fg: '#ffffff',
      label: 'PowerBuilder'
    },
    processing: {
      bg: '#0096D8',
      fg: '#000000',
      label: 'Processing'
    },
    prolog: {
      bg: '#74283c',
      fg: '#ffffff',
      label: 'Prolog'
    },
    propellerspin: {
      bg: '#7fa2a7',
      fg: '#000000',
      label: 'Propeller Spin'
    },
    puppet: {
      bg: '#302B6D',
      fg: '#ffffff',
      label: 'Puppet'
    },
    puredata: {
      bg: '#91de79',
      fg: '#000000',
      label: 'Pure Data'
    },
    purebasic: {
      bg: '#5a6986',
      fg: '#000000',
      label: 'PureBasic'
    },
    purescript: {
      bg: '#1D222D',
      fg: '#ffffff',
      label: 'PureScript'
    },
    python: {
      bg: '#3572A5',
      fg: '#000000',
      label: 'Python'
    },
    qml: {
      bg: '#44a51c',
      fg: '#000000',
      label: 'QML'
    },
    r: {
      bg: '#198CE7',
      fg: '#000000',
      label: 'R'
    },
    racket: {
      bg: '#22228f',
      fg: '#ffffff',
      label: 'Racket'
    },
    ragelinrubyhost: {
      bg: '#9d5200',
      fg: '#000000',
      label: 'Ragel in Ruby Host'
    },
    raml: {
      bg: '#77d9fb',
      fg: '#000000',
      label: 'RAML'
    },
    rebol: {
      bg: '#358a5b',
      fg: '#000000',
      label: 'Rebol'
    },
    red: {
      bg: '#f50000',
      fg: '#ffffff',
      label: 'Red'
    },
    renpy: {
      bg: '#ff7f7f',
      fg: '#000000',
      label: "Ren'Py"
    },
    rouge: {
      bg: '#cc0088',
      fg: '#ffffff',
      label: 'Rouge'
    },
    ruby: {
      bg: '#701516',
      fg: '#FFFFFF',
      label: 'Ruby'
    },
    runoff: {
      bg: '#665a4e',
      fg: '#000000',
      label: 'RUNOFF'
    },
    rust: {
      bg: '#dea584',
      fg: '#000000',
      label: 'Rust'
    },
    saltstack: {
      bg: '#646464',
      fg: '#000000',
      label: 'SaltStack'
    },
    sas: {
      bg: '#B34936',
      fg: '#ffffff',
      label: 'SAS'
    },
    sass: {
      bg: '#CF649A',
      fg: '#000000',
      label: 'Sass'
    },
    scala: {
      bg: '#c22d40',
      fg: '#ffffff',
      label: 'Scala'
    },
    scheme: {
      bg: '#1e4aec',
      fg: '#ffffff',
      label: 'Scheme'
    },
    scss: {
      bg: '#CF649A',
      fg: '#000000',
      label: 'SCSS'
    },
    self: {
      bg: '#0579aa',
      fg: '#000000',
      label: 'Self'
    },
    shell: {
      bg: '#89e051',
      fg: '#000000',
      label: 'Shell'
    },
    shen: {
      bg: '#120F14',
      fg: '#ffffff',
      label: 'Shen'
    },
    slash: {
      bg: '#007eff',
      fg: '#000000',
      label: 'Slash'
    },
    slim: {
      bg: '#ff8f77',
      fg: '#000000',
      label: 'Slim'
    },
    smalltalk: {
      bg: '#596706',
      fg: '#ffffff',
      label: 'Smalltalk'
    },
    sourcepawn: {
      bg: '#5c7611',
      fg: '#ffffff',
      label: 'SourcePawn'
    },
    sqf: {
      bg: '#3F3F3F',
      fg: '#ffffff',
      label: 'SQF'
    },
    squirrel: {
      bg: '#800000',
      fg: '#ffffff',
      label: 'Squirrel'
    },
    srecodetemplate: {
      bg: '#348a34',
      fg: '#000000',
      label: 'SRecode Template'
    },
    stan: {
      bg: '#b2011d',
      fg: '#ffffff',
      label: 'Stan'
    },
    standardml: {
      bg: '#dc566d',
      fg: '#000000',
      label: 'Standard ML'
    },
    supercollider: {
      bg: '#46390b',
      fg: '#ffffff',
      label: 'SuperCollider'
    },
    swift: {
      bg: '#ffac45',
      fg: '#000000',
      label: 'Swift'
    },
    systemverilog: {
      bg: '#DAE1C2',
      fg: '#000000',
      label: 'SystemVerilog'
    },
    tcl: {
      bg: '#e4cc98',
      fg: '#000000',
      label: 'Tcl'
    },
    terra: {
      bg: '#00004c',
      fg: '#ffffff',
      label: 'Terra'
    },
    tex: {
      bg: '#3D6117',
      fg: '#ffffff',
      label: 'TeX'
    },
    turing: {
      bg: '#cf142b',
      fg: '#ffffff',
      label: 'Turing'
    },
    typescript: {
      bg: '#2b7489',
      fg: '#000000',
      label: 'TypeScript'
    },
    unifiedparallelc: {
      bg: '#4e3617',
      fg: '#ffffff',
      label: 'Unified Parallel C'
    },
    unrealscript: {
      bg: '#a54c4d',
      fg: '#ffffff',
      label: 'UnrealScript'
    },
    vala: {
      bg: '#fbe5cd',
      fg: '#000000',
      label: 'Vala'
    },
    verilog: {
      bg: '#b2b7f8',
      fg: '#000000',
      label: 'Verilog'
    },
    vhdl: {
      bg: '#adb2cb',
      fg: '#000000',
      label: 'VHDL'
    },
    viml: {
      bg: '#199f4b',
      fg: '#000000',
      label: 'VimL'
    },
    visualbasic: {
      bg: '#945db7',
      fg: '#000000',
      label: 'Visual Basic'
    },
    volt: {
      bg: '#1F1F1F',
      fg: '#ffffff',
      label: 'Volt'
    },
    vue: {
      bg: '#2c3e50',
      fg: '#ffffff',
      label: 'Vue'
    },
    webontologylanguage: {
      bg: '#9cc9dd',
      fg: '#000000',
      label: 'Web Ontology Language'
    },
    wisp: {
      bg: '#7582D1',
      fg: '#000000',
      label: 'wisp'
    },
    x10: {
      bg: '#4B6BEF',
      fg: '#000000',
      label: 'X10'
    },
    xbase: {
      bg: '#403a40',
      fg: '#ffffff',
      label: 'xBase'
    },
    xc: {
      bg: '#99DA07',
      fg: '#000000',
      label: 'XC'
    },
    xquery: {
      bg: '#5232e7',
      fg: '#ffffff',
      label: 'XQuery'
    },
    xslt: {
      bg: '#EB8CEB',
      fg: '#000000',
      label: 'XSLT'
    },
    yacc: {
      bg: '#4B6C4B',
      fg: '#ffffff',
      label: 'Yacc'
    },
    zephir: {
      bg: '#118f9e',
      fg: '#000000',
      label: 'Zephir'
    }
  };

  var update = function(node, options, languages) {
    var positions = {
      'tl': 'topLeft',
      'tr': 'topRight',
      'bl': 'bottomLeft',
      'br': 'bottomRight'
    };
    var properties = {
      'bg': '',
      'fg': '',
      'position': '',
      'class': ''
    };
    var i, key, value;
    var badge, container, badgeClass, badgeStyle;

    if (options.languages) {
      var blocks = node.querySelectorAll('pre > code');
      for (i = 0; i < blocks.length; i++) {
        addLanguageBadge(blocks[i], languages);
      }
    }
    var badgeParents = node.querySelectorAll('[data-badge]');
    for (i = 0; i < badgeParents.length; i++) {
      container = badgeParents[i];
      for (key in properties) {
        value = container.getAttribute('data-badge-' + key);
        if (value) {
          properties[key] = value;
        } else if (options.defaults[key]) {
          properties[key] = options.defaults[key];
        } else {
          properties[key] = '';
        }
      }
      if (container.querySelector('span.badge')) {
        return;
      }
      badge = container.appendChild(
          document.createElement('span')
      );
      badge.appendChild(
          document.createTextNode(
              badgeParents[i].getAttribute('data-badge')
          )
      );
      badgeClass = 'badge';
      if (properties.class) {
        badgeClass += ' ' + properties.class;
      }
      if (positions[properties.position]) {
        badgeClass += ' ' + positions[properties.position];
      }
      badgeStyle = '';
      if (properties.fg !== '') {
        badgeStyle += 'color: ' + properties.fg + ';';
      }
      if (properties.bg !== '') {
        badgeStyle += 'background-color: ' + properties.bg + ';';
      }

      badge.setAttribute('class', badgeClass);
      if (badgeStyle !== '') {
        badge.setAttribute('style', badgeStyle);
      }
    }
  };

  var addLanguageBadge = function(code, languages) {
    var properties = ['bg', 'fg', 'position', 'class'];
    var container = code.parentNode;
    var match, language, settings, i, attributeName;
    var classString = code.getAttribute('class') || '';
    if (match = classString.match(/\blanguage-(\S+)/)) {
      language = match[1].toLowerCase();
      if (false === languages[language]) {
        return;
      }
      if (settings = languages[language]) {
        if (!container.getAttribute('data-badge')) {
          container.setAttribute(
              'data-badge',
              settings.label || match[1].toUpperCase()
          );
        }
        for (i = 0; i < properties.length; i++) {
          attributeName = 'data-badge-' + properties[i];
          if (
              settings[properties[i]] && !container.getAttribute(attributeName)
          ) {
            container.setAttribute(
                attributeName, settings[properties[i]]
            );
          }
        }
      } else {
        if (!container.getAttribute('data-badge')) {
          container.setAttribute(
              'data-badge', match[1].toUpperCase()
          );
        }
      }
    }
  };

  var scriptPath = function() {
    // obtain plugin path from the script element
    var path;
    var end = -("/badges.js".length);
    if (document.currentScript) {
      path = document.currentScript.src.slice(0, end);
    } else {
      var scriptTag = document.querySelector('script[src$="/badges.js"]');
      if (scriptTag) {
        path = scriptTag.src.slice(0, end);
      }
    }
    return path;
  };

  var merge = function() {
    var result = {}, i, key, source;
    for (i = 0; i < arguments.length; i++) {
      source = arguments[i];
      for (key in source) {
        if (!source.hasOwnProperty(key)) {
          continue;
        }
        try {
          if (source[key].constructor === Object) {
            result[key] = merge(result[key], source[key]);
          } else {
            result[key] = source[key];
          }
        } catch (e) {
          result[key] = source[key];
        }
      }
    }
    return result;
  };

  var config = Reveal.getConfig() || {};
  config.badges = config.badges || {};
  var options = {
    path: config.badges.path || scriptPath() || 'plugin/language-badges',
    languages: config.badges.languages,
    defaults: config.badges.defaults || {}
  };
  if (options.languages instanceof Object) {
    languages = merge(languages, options.languages);
  }

  var resource = document.createElement('link');
  resource.rel = "stylesheet";
  resource.href = options.path + '/badges.css';
  document.querySelector("head").appendChild(resource);

  update(document, options, languages);
  Reveal.addEventListener(
      'slidechanged',
      function(event) {
        update(event.currentSlide, options, languages);
      }
  );
})();
