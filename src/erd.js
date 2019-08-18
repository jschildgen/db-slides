/*
 * 
 * By Johannes Schildgen, 2019
 */
 


//createERD(er, document.getElementById('paper'), 695, 600);

/*
document.addEventListener("keyup", function(evt) {
    if(evt.key!='e') { return }
    for(c in graph.getCells()) {
        var cell = graph.getCells()[c];
        if(cell.attributes.position == undefined) { continue }
        if(cell.attr('text/text_original') == undefined || cell.attr('text/text_original') == null) {
         //continue
         cell.attr('text/text_original', ''+cell.attr('text/text'))
         cell.attr('text/text', ''+cell.attributes.position.x+', '+cell.attributes.position.y)
        } else {
         cell.attr('text/text', cell.attr('text/text_original'))
         cell.attr('text/text_original', null)
        }
    }
});*/


var ERDPlugin = (function(){  
    
    return {
		init: function() {  
        
        var erd = joint.shapes.erd;

// Custom highlighter - display an outline around each element that fits its shape.

var highlighter = V('path', {
    'stroke': '#e9fc03',
    'stroke-width': '2px',
    'fill': 'transparent',
    'pointer-events': 'none'
});

// Define a specific highligthing path for every shape.

erd.Attribute.prototype.getHighlighterPath = function(w, h) {

    return ['M', 0, h / 2, 'A', w / 2, h / 2, '0 1,0', w, h / 2, 'A', w / 2, h / 2, '0 1,0', 0, h / 2].join(' ');
};

erd.Entity.prototype.getHighlighterPath = function(w, h) {

    return ['M', w, 0, w, h, 0, h, 0, 0, 'z'].join(' ');
};

erd.Relationship.prototype.getHighlighterPath = function(w, h) {

    return ['M', w / 2, 0, w, w / 2, w / 2, w, 0, w / 2, 'z'].join(' ');
};

erd.ISA.prototype.getHighlighterPath = function(w, h) {

    return ['M', -8, 1, w + 8, 1, w / 2, h + 2, 'z'].join(' ');
};

// Define a specific connection points for every shape

erd.Attribute.prototype.getConnectionPoint = function(referencePoint) {
    // Intersection with an ellipse
    return g.Ellipse.fromRect(this.getBBox()).intersectionWithLineFromCenterToPoint(referencePoint);
};

erd.Entity.prototype.getConnectionPoint = function(referencePoint) {
    // Intersection with a rectangle
    return this.getBBox().intersectionWithLineFromCenterToPoint(referencePoint);
};

erd.Relationship.prototype.getConnectionPoint = function(referencePoint) {
    // Intersection with a rhomb
    var bbox = this.getBBox();
    var line = new g.Line(bbox.center(), referencePoint);
    return (
        line.intersection(new g.Line(bbox.topMiddle(), bbox.leftMiddle())) ||
        line.intersection(new g.Line(bbox.leftMiddle(), bbox.bottomMiddle())) ||
        line.intersection(new g.Line(bbox.bottomMiddle(), bbox.rightMiddle())) ||
        line.intersection(new g.Line(bbox.rightMiddle(), bbox.topMiddle()))
    );
};

erd.ISA.prototype.getConnectionPoint = function(referencePoint) {
    // Intersection with a triangle
    var bbox = this.getBBox();
    var line = new g.Line(bbox.center(), referencePoint);
    return (
        line.intersection(new g.Line(bbox.topMiddle(), bbox.bottomRight())) ||
        line.intersection(new g.Line(bbox.bottomRight(), bbox.bottomLeft())) ||
        line.intersection(new g.Line(bbox.bottomLeft(), bbox.topMiddle()))
    );
};




// Classes

class Paper extends joint.dia.Paper {
 constructor(args = {}) {
   var args_new = {
        linkPinning: false,
        defaultConnectionPoint: function(line, view) {
            var element = view.model;
            return element.getConnectionPoint(line.start) || element.getBBox().center();
        }
    }
    for (var attrname in args) { args_new[attrname] = args[attrname]; }
    super(args_new);
    
    // Unbind orignal highligting handlers.
    this.off('cell:highlight cell:unhighlight');

    // Bind custom ones.
    this.on('cell:highlight', function(cellView) {

        var padding = 5;
        var bbox = cellView.getBBox({ useModelGeometry: true }).inflate(padding);

        highlighter.translate(bbox.x, bbox.y, { absolute: true });
        highlighter.attr('d', cellView.model.getHighlighterPath(bbox.width, bbox.height));

        V(this.viewport).append(highlighter);
    });

    this.on('cell:unhighlight', function() {
        highlighter.remove();
    });
 }
}

class Entity extends erd.Entity {
 constructor(args = {}) {
  var args_new = {
    position: { x: 100, y: 200 },
    attrs: {
        text: {
            fill: '#000000',
            text: '',
            letterSpacing: 0,
            fontWeight: 'bold' /*,
            style: { textShadow: '1px 0 1px #333333' }*/
        },
        '.outer': {
            fill: '#ffaa63',
            stroke: 'none',
            filter: { name: 'dropShadow',  args: { dx: 0.5, dy: 2, blur: 2, color: '#333333' }}
        },
        '.inner': {
            fill: '#ffaa63',
            stroke: 'none',
            filter: { name: 'dropShadow',  args: { dx: 0.5, dy: 2, blur: 2, color: '#333333' }}
        }
    }
  }
  for (var attrname in args) { args_new[attrname] = args[attrname]; }
  super(args_new)
 }     
}

class WeakEntity extends erd.WeakEntity {
 constructor(args = {}) {
  var args_new = {
    position: { x: 530, y: 200 },
    attrs: {
        text: {
            fill: '#000000',
            text: '',
            letterSpacing: 0,
            fontWeight: 'bold'/*,
            style: { textShadow: '1px 0 1px #333333' }*/
        },
        '.inner': {
            fill: '#ffaa63',
            stroke: 'none',
            points: '155,5 155,55 5,55 5,5'
        },
        '.outer': {
            fill: 'none',
            stroke: '#ffaa63',
            points: '160,0 160,60 0,60 0,0',
            filter: { name: 'dropShadow',  args: { dx: 0.5, dy: 2, blur: 2, color: '#333333' }}
        }
    }
    }
    for (var attrname in args) { args_new[attrname] = args[attrname]; }
      super(args_new)
     }     
}

class IdentifyingRelationship extends erd.IdentifyingRelationship {
 constructor(args = {}) {
  var args_new = {
    position: { x: 350, y: 190 },
    attrs: {
        text: {
            fill: '#ffffff',
            text: '',
            letterSpacing: 0,
            style: { textShadow: '1px 0 1px #333333' }
        },
        '.inner': {
            fill: '#797d9a',
            stroke: 'none'
        },
        '.outer': {
            fill: 'none',
            stroke: '#797d9a',
            filter: { name: 'dropShadow',  args: { dx: 0, dy: 2, blur: 1, color: '#333333' }}
        }
    }
  }
  for (var attrname in args) { args_new[attrname] = args[attrname]; }
  super(args_new)
 }     
}

class ISA extends erd.ISA {
 constructor(args = {}) {
  var args_new = {
    position: { x: 160, y: 260 },
    attrs: {
        text: {
            text: '\n\nis-a',
            fontSize: '14px',
            fill: '#ffffff',
            letterSpacing: 0,
            style: { 'text-shadow': '1px 0 1px #333333' }
        },
        polygon: {
            fill: '#42aaaa',
            stroke: 'none',
            filter: { name: 'dropShadow',  args: { dx: 0, dy: 2, blur: 1, color: '#333333' }},
            points: "0,50 50,0 100,50"
        }
    },
    size: {width: 30, height:30}
    }
    for (var attrname in args) { args_new[attrname] = args[attrname]; }
    super(args_new)
 }     
}

class Key extends erd.Key {
 constructor(args = {}) {
  var args_new = {
    position: { x: 10, y: 90 },
    attrs: {
        text: {
            fill: '#000000',
            text: '',
            letterSpacing: 0,
            fontWeight: 'bold'/*,
            style: { textShadow: '1px 0 1px #333333' }*/
        },
        '.outer': {
            fill: '#ffcb63',
            stroke: 'none',
            filter: { name: 'dropShadow',  args: { dx: 0, dy: 2, blur: 2, color: '#222138' }}
        },
        '.inner': {
            fill: '#ffcb63',
            stroke: 'none'
        }
    }
    }
    for (var attrname in args) { args_new[attrname] = args[attrname]; }
    super(args_new)
 }     
}

class Attribute extends erd.Normal {
 constructor(args = {}) {
  var args_new = {
    position: { x: 75, y: 30 },
    attrs: {
        text: {
            fill: '#000000',
            text: '',
            letterSpacing: 0,
            fontWeight: 'bold'/*,
            style: { textShadow: '1px 0 1px #333333' }*/
        },
        '.outer': {
            fill: '#ffcb63',
            stroke: '#ffcb63',
            filter: { name: 'dropShadow',  args: { dx: 0, dy: 2, blur: 2, color: '#222138' }}
        }
    }
    }
    for (var attrname in args) { args_new[attrname] = args[attrname]; }
    super(args_new)
 }    
}

class Multivalued extends erd.Multivalued {
 constructor(args = {}) {
  var args_new = {
    position: { x: 150, y: 90 },
    attrs: {
        text: {
            fill: '#000000',
            text: '',
            letterSpacing: 0,
            fontWeight: 'bold'
            /*style: { 'text-shadow': '1px 0px 1px #333333' }*/
        },
        '.inner': {
            fill: '#ffcb63',
            stroke: '#797d9a',
            rx: 43,
            ry: 21

        },
        '.outer': {
            fill: '#ffcb63',
            stroke: '#797d9a',
            filter: { name: 'dropShadow',  args: { dx: 0, dy: 2, blur: 2, color: '#000000' }}
        }
    }
    }
    for (var attrname in args) { args_new[attrname] = args[attrname]; }
    super(args_new)
 }    
}
class Derived extends erd.Derived {
 constructor(args = {}) {
  var args_new = {
    position: { x: 440, y: 80 },
    attrs: {
        text: {
            fill: '#000000',
            text: '',
            letterSpacing: 0,
            fontWeight: 'bold' /*,
            style: { textShadow: '1px 0 1px #333333' }*/
        },
        '.inner': {
            fill: '#ffcb63',
            stroke: 'none',
            display: 'block'
        },
        '.outer': {
            fill: '#ffcb63',
            stroke: '#000000',
            'stroke-dasharray': '5,5',
            filter: { name: 'dropShadow',  args: { dx: 0, dy: 2, blur: 2, color: '#222138' }}
        }
    }
    }
    for (var attrname in args) { args_new[attrname] = args[attrname]; }
    super(args_new)
 }    
}
class Relationship extends erd.Relationship {
 constructor(args = {}) {
  var args_new = {
    position: { x: 300, y: 390 },
    attrs: {
        text: {
            fill: '#ffffff',
            text: '',
            letterSpacing: 0,
            style: { textShadow: '1px 0 1px #333333' }
        },
        '.outer': {
            fill: '#797d9a',
            stroke: 'none',
            filter: { name: 'dropShadow',  args: { dx: 0, dy: 2, blur: 1, color: '#333333' }}
        }
    }
    }
    for (var attrname in args) { args_new[attrname] = args[attrname]; }
    super(args_new)
 }    
}

// Helpers

var createLink = function(elm1, elm2, graph) {

    var myLink = new erd.Line({
        markup: [
            '<path class="connection" stroke="black" d="M 0 0 0 0"/>',
            '<path class="connection-wrap" d="M 0 0 0 0"/>',
            '<g class="labels"/>',
            '<g class="marker-vertices"/>',
            '<g class="marker-arrowheads"/>'
        ].join(''),
        source: { id: elm1.id },
        target: { id: elm2.id }
    });

    return myLink.addTo(graph);
};

var createLabel = function(txt) {
    return {
        labels: [{
            position: 0.3,
            attrs: {
                text: { dy: -8, text: txt+"\n", fill: '#000000' },
                rect: { fill: 'none' }
            }
        }]
    };
};

function createERD(er, erdDiv, width, height) {
    var entities = er[0];
    var relationships = er[1];
    var entity_index = {}; /* entity_name => cid */
    
    graph = new joint.dia.Graph();

    paper = new Paper({
        el: erdDiv,
        width: width,
        height: height,
        model: graph
    });
    
    // Unbind orignal highligting handlers.
    paper.off('cell:highlight cell:unhighlight');

    // Bind custom ones.
    paper.on('cell:highlight', function(cellView) {

        var padding = 5;
        var bbox = cellView.getBBox({ useModelGeometry: true }).inflate(padding);

        highlighter.translate(bbox.x, bbox.y, { absolute: true });
        highlighter.attr('d', cellView.model.getHighlighterPath(bbox.width, bbox.height));

        V(paper.viewport).append(highlighter);
    });

    paper.on('cell:unhighlight', function() {

        highlighter.remove();
    });
    
    for(e in entities) {
        /* create entity */
        var ent = entities[e];
        if(ent.options==undefined || ent.options==null) { ent.options=[] }
        if(ent.attributes==undefined || ent.attributes==null) { ent.attributes={} }
       
        var ent_obj = ent.options.indexOf("weak")>-1 ? new WeakEntity : new Entity();
        
        ent_obj.attr('text/text', ent._e)
        if(ent.pos != undefined) {
            ent_obj.position(ent.pos[0],ent.pos[1]);
        } else {
            ent_obj.position(Math.floor(Math.random()*paper.getArea().width),
                             Math.floor(Math.random()*paper.getArea().height));
        }
        graph.addCell(ent_obj);
        
        entity_index[ent._e] = graph.getCells()[graph.getCells().length-1].cid;
        
        /* create entity's attributes */
        for(a in ent.attributes) {
            var att = ent.attributes[a];
            if(att.options==undefined || att.options==null) { att.options=[] }
            
            var att_obj = att.options.indexOf("primary")>-1 ? new Key()
                    : att.options.indexOf("multi")>-1 ? new Multivalued()
                    : att.options.indexOf("derived")>-1 ? new Derived() : new Attribute();
            
            att_obj.attr('text/text', att._a);
            
            if(att.pos != undefined) {
                att_obj.position(att.pos[0],att.pos[1]);
            } else {
                att_obj.position(ent_obj.position().x-200+Math.floor(Math.random()*400),
                                 ent_obj.position().y-200+Math.floor(Math.random()*400));
            }
            graph.addCell(att_obj)
            createLink(ent_obj, att_obj, graph);            
        }
        
        /* does the entity extend another entity? */
        if(ent.isa != undefined && ent.isa != null && ent.isa != {}) {
            var isa_obj = new ISA();
            super_obj = graph.getCell(entity_index[ent.isa._e]);
            if(ent.isa.pos != undefined) {
                isa_obj.position(ent.isa.pos[0],ent.isa.pos[1]);
            } else {
                isa_obj.position(super_obj.position().x+60,super_obj.position().y+60);
            }
            graph.addCell(isa_obj)
            createLink(isa_obj, ent_obj, graph);
            createLink(isa_obj, super_obj, graph);
        }
            
    }
    for(r in relationships) {
        /* create relationship */
        var rel = relationships[r]
        if(rel.options==undefined || rel.options==null) { rel.options=[] }
        if(rel.attributes==undefined || rel.attributes==null) { rel.attributes=[] }
        
        var rel_obj = rel.options.indexOf("weak")>-1 ? new IdentifyingRelationship : new Relationship();
        rel_obj.attr('text/text', rel._r);
        graph.addCell(rel_obj);
        default_pos = [0,0]
        for(e in rel._e) {
            var ent = rel._e[e];
            var card = rel.card[e];
            var ent_obj = graph.getCell(entity_index[ent]);
            createLink(ent_obj, rel_obj, graph).set(createLabel(card));
            default_pos[0] += ent_obj.position().x
            default_pos[1] += ent_obj.position().y
        }
        default_pos = [default_pos[0]/rel._e.length+35, default_pos[1]/rel._e.length-10 ]
        if(rel.pos != undefined) {
            rel_obj.position(rel.pos[0],rel.pos[1]);
        } else {
            rel_obj.position(default_pos[0],default_pos[1]);
        }
        
        /* create relationship attributes */
        for(a in rel.attributes) {
            var att = rel.attributes[a];
            if(att.options==undefined || att.options==null) { att.options=[] }
            
            var att_obj = att.options.indexOf("multi")>-1 ? new Multivalued()
                        : att.options.indexOf("derived")>-1 ? new Derived() : new Attribute();
            
            att_obj.attr('text/text', att._a).position(att.pos[0],att.pos[1]);
            graph.addCell(att_obj)
            createLink(rel_obj, att_obj, graph);            
        }
    }
    graph.on('change:position', function(cell) {
        if(cell.attributes.position == undefined) { return }
        /*if(cell.attr('text/text_original') == undefined || cell.attr('text/text_original') == null) {
            cell.attr('text/text_original', ''+cell.attr('text/text'))
        }
        cell.attr('text/text', ''+cell.attributes.position.x+', '+cell.attributes.position.y)*/
        console.log(", pos: ["+cell.attributes.position.x+', '+cell.attributes.position.y+"]")
    });
}
        
        var generate_erds = function(slide_or_document) {
            var erdDivs = slide_or_document.querySelectorAll('.erd');
            for (i = 0; i < erdDivs.length; i++) {  
                if(erdDivs[i].getAttribute('data-erd')) {
                    var er = eval(erdDivs[i].getAttribute('data-erd'))
                } else {
                    var er = eval(erdDivs[i].innerHTML)
                    erdDivs[i].setAttribute('data-erd', erdDivs[i].innerHTML)
                }
                erdDivs[i].style.display = "block"
                createERD(er, erdDivs[i], erdDivs[i].style.width, erdDivs[0].style.height);
            }
        }
        Reveal.addEventListener( 'ready', function(event) { generate_erds(document) } )
        Reveal.addEventListener( 'slidechanged', function(event) { generate_erds(event.currentSlide) })
        }
    }
})();
Reveal.registerPlugin( 'erd', ERDPlugin );