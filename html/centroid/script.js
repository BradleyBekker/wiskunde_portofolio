const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(20,20,100,550,"gold","green");
let B = new Point(20,20,600,150,"blue","black");
let C = new Point(20,20,200,200,"red","silver");

let AB = new Point(0,10,600,150,"blue","black");
let BC = new Point(0,10,600,150,"blue","black");
let AC = new Point(0,10,600,150,"blue","black");

let D = new Point(20,20,500,500,"silver","aquamarine");

let k = new LinearFunction(1,1);
let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

let n = new LinearFunction(1,1);
let o = new LinearFunction(1,1);
let p = new LinearFunction(1,1);
let points =[];
points.push(A);
points.push(B);
points.push(C);
points.push(D);
points.push(AB);
points.push(BC);
points.push(AC);

let epilepsie = false;
A.drag();B.drag();C.drag();


function animate(){
  if (epilepsie){
    context.fillStyle = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 0.1+")";
    context.rect(0,0,canvas.width,canvas.height);
    context.fill();

    for (var i = 0; i < points.length; i++) {
      points[i].fillcolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";
      points[i].strokecolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";
      points[3].fillcolor = "rgba("+randomNumber(125)+","+ randomNumber(125)+"," +randomNumber(125)+","+ 0.4+")";

    }
    }else {
    context.clearRect(0,0,canvas.width,canvas.height);
  }
  requestAnimationFrame(animate);

  AB.x = (A.x+B.x)/2;
  AB.y = (A.y+B.y)/2;

  BC.x = (B.x+C.x)/2;
  BC.y = (B.y+C.y)/2;

  AC.x = (A.x+C.x)/2;
  AC.y = (A.y+C.y)/2;

  k.draw(context);l.draw(context);m.draw(context);
  n.draw(context);o.draw(context);p.draw(context);

  D.x = o.intercection(n).x;
  D.y = o.intercection(n).y;

  A.draw();B.draw();C.draw();AB.draw();BC.draw();AC.draw();
  k.defineLineWithTwoPoint(A,B);
  l.defineLineWithTwoPoint(B,C);
  m.defineLineWithTwoPoint(C,A);

  n.defineLineWithTwoPoint(A,BC);
  o.defineLineWithTwoPoint(B,AC);
  p.defineLineWithTwoPoint(C,AB);
  D.draw();

}

animate();
function randomNumber(max){
  return Math.random()*max;
}
