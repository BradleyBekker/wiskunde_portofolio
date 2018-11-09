const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let balls = [];

let A = new Point(20,20,100,550,"gold","green");
let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let B = new Point(20,20,600,150,"blue","black");
let C = new Point(20,20,200,200,"red","silver");
A.drag();B.drag();C.drag();

let epilepsie = false;

balls.push(A);
balls.push(B);
balls.push(C);
function animate(){
  if (!epilepsie) {
    context.clearRect(0,0,canvas.width,canvas.height);
  } else {
    context.fillStyle = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 0.1+")";
    context.rect(0,0,canvas.width,canvas.height);
    context.fill();
  }

  m.slope = -1/l.slope;
  m.intercept=C.y - m.slope*C.x;
  requestAnimationFrame(animate);
  l.defineLineWithTwoPoint(A,B);
  l.draw(context);
  m.draw(context);
  A.draw();
  B.draw();
  C.draw();

if(epilepsie){
  for (var i = 0; i < balls.length; i++) {
    balls[i].fillcolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";
    balls[i].strokecolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";
  }
}
}

animate();
function randomNumber(max){
  return Math.random()*max;
}
