// // // -------Testing computeI----//

 var p0 = new Point(200,100);
 var p1 = new Point(100,80);
 var p2 = new Point(150,50);
inEdgeU = new DirectedSegment(p0, p1);
outEdgeU = new DirectedSegment(p1,p2);
// var clickSeqTest = [p0,p1,p2];
// var LAVTEST;
// var mySLAV;
mySLAV = new SLAV();
mysecondSLAV = new SLAV();
// LAVTEST = new CircularDoublyLinkedList();
LAVTESTDOUBLE = new DoublyLinkedList();
// console.log('This is a vertex object:');
// vertex = new Vertex(p0, inEdgeU, outEdgeU);


// console.log(vertex);
// console.log('This is a terminal vertex object:');
vertexOne = new Vertex(p0, null, outEdgeU);
vertexTwo = new Vertex(p1, inEdgeU, outEdgeU);
vertexThree = new Vertex(p2, inEdgeU, null);
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

LAVTESTDOUBLE.push(vertexOne);
// // // console.log('This is the DoublyLinkedList() with one vertex object:');
// // // console.log(onedouble);
LAVTESTDOUBLE.push(vertexTwo);
// // twodouble=LAVTESTDOUBLE;
// // // console.log('This is the DoublyLinkedList() with two vertex object:');
// // // console.log(twodouble);
LAVTESTDOUBLE.push(vertexThree);
// // threedouble=LAVTESTDOUBLE;
// // console.log('---------------------------');
// // console.log('This is the DoublyLinkedList() with threee vertex object:');
// // console.log(threedouble);
// // LAVTESTDOUBLE.copy();
console.log(LAVTESTDOUBLE);


// mySLAV.pushLAV(LAVTEST);
// console.log(mySLAV);
// // console.log('This is the CircularlyDoublyLinkedList() all Nodes');
// console.log(mySLAV.allNodes())


mysecondSLAV.pushLAV(LAVTESTDOUBLE);
console.log(mysecondSLAV);
console.log('This is the DoublyLinkedList() all Nodes');
console.log(ref = mysecondSLAV.allNodes())


//bisector tracking
allBisectors = [];
computeI(mySLAV, ref[0]);
console.log('allBisectors');
console.log(allBisectors);
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

