const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let A = new Point(20,20,randomNumber(canvas.width),randomNumber(canvas.height),"yellow","yellow");
let B = new Point(20,20,randomNumber(canvas.width),randomNumber(canvas.height),"yellow","yellow");
let l = new LinearFunction(0.5,0.5);
let C = new Point(20,20,100,l.calcY(100),"yellow");
let D = new Point(20,20,100,l.calcY(100),"yellow");
A.drag(); B.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  l.defineLineWithTwoPoint(A,B);

  C.x = 0; C.y = l.calcY(0);
  D.x = canvas.width; D.y = l.calcY(canvas.width);
  C.draw();
  D.draw();

  context.beginPath();
  context.moveTo(C.x,C.y);
  context.lineTo(D.x,D.y);
  context.stroke();

  A.draw();
  B.draw();

}

animate();
function randomNumber(max){
  return Math.random()*max;
}
