// // // -------Testing computeI----//

var p0 = new Point(200,200);
var p1 = new Point(450,350);
var p2 = new Point(600,250);
var p3 = new Point(620,150);
inEdgeU = new DirectedSegment(p0, p1);
outEdgeU = new DirectedSegment(p0,p1);
outEdgeU2 = new DirectedSegment(p1,p2);
outEdgeU3 = new DirectedSegment(p2,p3);

mySLAV = new SLAV();
mysecondSLAV = new SLAV();
LAVTESTDOUBLE = new DoublyLinkedList();
vertexOne = new Vertex(p0, null, outEdgeU);
vertexTwo = new Vertex(p1, inEdgeU, outEdgeU2);
vertexThree = new Vertex(p2, outEdgeU2, outEdgeU3);
vertex4 = new Vertex(p3, outEdgeU3, null);
LAVTESTDOUBLE.push(vertexOne);
LAVTESTDOUBLE.push(vertexTwo);
LAVTESTDOUBLE.push(vertexThree);
LAVTESTDOUBLE.push(vertex4);

console.log(LAVTESTDOUBLE);

mysecondSLAV.pushLAV(LAVTESTDOUBLE);
console.log(mysecondSLAV);
console.log('This is the DoublyLinkedList() all Nodes');
console.log(ref = mysecondSLAV.allNodes())


//bisector tracking
allEdgeEvents =[];
allBisectors = [];
console.log('ref[2]');
console.log(ref[2]);
allEdgeEvents = computeI(mySLAV, ref[2]);
console.log('allBisectors');
console.log(allBisectors);
drawPoint(p0.x,p0.y);
drawPoint(p1.x,p1.y);
drawPointGreen(p2.x,p2.y);
drawPointGreen(p3.x,p3.y);

console.log('allEdges events');
console.log(allEdgeEvents);
bb = allBisectors;
bb.map(bb => drawBisector(bb,'green'));

