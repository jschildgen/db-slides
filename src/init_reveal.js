Reveal.initialize({
 width:960, height:700,
 controls: false, 
 navigationMode: 'linear',
 slideNumber: 'c', 
 showSlideNumber: 'all',
 pdfMaxPagesPerSlide: 1,
 progress: false,
 hash: true, 
 center: false,
 mouseWheel: true,
 pdfSeparateFragments: false,
 transition: 'none', // none/fade/slide/convex/concave/zoom
 keyboard: { 
    27: null // don't do anything when ESC is pressed 
 },
 sampler : {
   removeIndentation: true
 },
 plugins: [ RevealMarkdown, RevealHighlight, RevealZoom, RevealMath, RevealNotes, RevealSearch ],
 dependencies: [
    { src: 'src/sql.js', async: true },
    { src: 'src/clone.js', async: true },
    { src: 'src/erd.js' },
    { src: 'plugins/plantuml.js' },
    { src: 'plugins/jump.js', async: true },
    { src: 'plugins/badges.js' },
    { src: 'plugins/sampler.js' },
    { src: 'poll/poll.js', async: true }
]
});