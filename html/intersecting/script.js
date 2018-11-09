const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let balls = [];
let epilepsie = false;
let A = new Point(20,20,100,150,"yellow","yellow");
let B = new Point(20,20,200,200,"yellow","yellow");
let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
let C = new Point(20,20,500,190,"red", "silver");
let D = new Point(20,20,300,190,"blue", "gold");
let E = new Point(20,20,500,590,"silver", "black");

balls.push(A);
balls.push(B);
balls.push(C);
balls.push(D);
balls.push(E);

A.drag(); B.drag(); C.drag(); D.drag();

function animate(){
  requestAnimationFrame(animate);
  if(!epilepsie){
    context.clearRect(0,0,canvas.width,canvas.height);
  }
  context.fill();

  l.defineLineWithTwoPoint(A,B);
  l.draw(context);
  A.draw();
  B.draw();

  m.defineLineWithTwoPoint(C,D);
  m.draw(context);
  C.draw();
  D.draw();

  E.x = l.intercection(m).x;
  E.y = l.intercection(m).y;
  //console.log(l.intercection(m).x + ", "+l.intercection(m).y +", "+E.x+", "+E.y);


  E.draw();
if (epilepsie) {
  for (var i = 0; i < balls.length; i++) {
    balls[i].fillcolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";
    balls[i].strokecolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";
    context.fillStyle = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 0.1+")";
    context.rect(0,0,canvas.width,canvas.height);
  }
}






}

animate();
function randomNumber(max){
  return Math.random()*max;
}
