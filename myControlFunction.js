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
// // // console.log('This is the DoublyLinkedList() with one vertex object:');
// // // console.log(onedouble);
LAVTESTDOUBLE.push(vertexTwo);
// // twodouble=LAVTESTDOUBLE;
// // // console.log('This is the DoublyLinkedList() with two vertex object:');
// // // console.log(twodouble);
LAVTESTDOUBLE.push(vertexThree);
LAVTESTDOUBLE.push(vertex4);

// // threedouble=LAVTESTDOUBLE;
// // console.log('---------------------------');
// // console.log('This is the DoublyLinkedList() with threee vertex object:');
// // console.log(threedouble);
// // LAVTESTDOUBLE.copy();
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


// // // console.log([LAV,mySLAV, gVtxs, gEdges]=stepOneAB(clickSeqTest));


// // // console.log('this head');
// // // console.log(LAV.head);
// // // console.log(LAV.tail);

// // // console.log('this head content');
// // // console.log(LAV.head.content);

// // // console.log('mob biz');
// // // console.log(LAV.head.content.inEdge);
// // // console.log('Here comes the I, 5 of ssk');
// // // var I;
// // // console.log(straightSkeleton(clickSeqTest)[3]);

// // // var isNodeTerminal;
// // // isNodeTerminal = function(node){
// // //     if (node.content.inEdge === null || node.content.outEdge === null){
// // //       return true;
// // //     }else{
// // //       return false;
// // //     }
// // // };

// // // test = function(I) {
// // //     var Na, Nb, Nc, Nd, Pa, Pb, Pc, aOut, bOut, cOut;
// // //     Na = I[2];
// // //     Nc = Na.pred; //pred Va
// // //     Nd = Nc.pred; //pred of pred Va
// // //     if ( isNodeTerminal(Nc) || isNodeTerminal(Nd)){
// // //       return; 
// // //     };
// // // }
// // // console.log(test(I))

// console.log(vertexOne);
// LAVTEST.push(vertexOne);
// oneCirc=LAVTEST;
// // console.log('This is the CircularDoublyLinkedList() with one vertex object:');
// // console.log(oneCirc);
// LAVTEST.push(vertexTwo);
// deuxCirc=LAVTEST;
// // console.log('This is the CircularDoublyLinkedList() with two vertex objects:');
// // console.log(deuxCirc);
// LAVTEST.push(vertexThree);
// threecirc=LAVTEST;
// console.log('---------------------------');

// console.log('This is the CircularlyDoublyLinkedList() with threee vertex object:');
// console.log(threecirc);



// mySLAV.pushLAV(LAVTEST);
// console.log(mySLAV);
// // console.log('This is the CircularlyDoublyLinkedList() all Nodes');
// console.log(mySLAV.allNodes())

