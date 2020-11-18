var p1 = new Point(139,350);
var p2 = new Point(134,200);
var p3 = new Point(370,217);
var p4 = new Point(200,340);
var clickSeqTest = [p1,p2,p3,p4];
var inDirSeg = new DirectedSegment (p1,p2);
var outDirSeg = new DirectedSegment (p1,p2);


LAV = new CircularDoublyLinkedList();
var terminalVertex = new Vertex(p1,inDirSeg,null);


myTestSlav = stepOneAB(clickSeqTest)[0];


//console.log(LAV.push(terminalVertex))
//console.log('Planar graph');
console.log(stepOneAB(clickSeqTest));


//console.log(angleBisector(p1, null, outDirSeg))




