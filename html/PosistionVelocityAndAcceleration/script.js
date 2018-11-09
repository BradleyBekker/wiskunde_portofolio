const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
epelepsy = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let kineticObject0 = {};
let kineticObject1 = {};


function setUp(){

  kineticObject0.pos = new Vector2d(500,100);
  kineticObject0.vel = new Vector2d(5,8);
  kineticObject0.acc = new Vector2d(0,1);

    kineticObject1.pos = new Vector2d(250,100);
    kineticObject1.vel = new Vector2d(-14,5);
    kineticObject1.acc = new Vector2d(0,0.05);
    kineticObject0.point = new Point(50,50,550,550,"#" + Math.floor(randomNumber(255*255*255)).toString(16),"#" + Math.floor(randomNumber(255*255*255)).toString(16));
    kineticObject1.point = new Point(50,50,550,550,"#" + Math.floor(randomNumber(255*255*255)).toString(16),"#" + Math.floor(randomNumber(255*255*255)).toString(16));

  animate()
}

function animate(){

  if (epelepsy) {

    context.rect(0,0,canvas.width,canvas.height);
    context.fillStyle = "#" + Math.floor(randomNumber(255*255*255)).toString(16);


    kineticObject0.point.fillcolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";
    kineticObject0.point.strokecolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";


    kineticObject1.point.fillcolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";
    kineticObject1.point.strokecolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";

    context.fill();
  }else {
    context.clearRect(0,0,canvas.width,canvas.height);  
  }


  requestAnimationFrame(animate);
  kineticObject0.vel.add(kineticObject0.acc);
kineticObject0.pos.add(kineticObject0.vel);
kineticObject0.point.position(kineticObject0.pos);
kineticObject0.point.draw(context);
if(kineticObject0.pos.dx > canvas.width){
kineticObject0.vel.dx = - kineticObject0.vel.dx;
kineticObject0.pos.dx = canvas.width;
}
if(kineticObject0.pos.dx < 0){
kineticObject0.vel.dx = - kineticObject0.vel.dx;
kineticObject0.pos.dx = 0;
}
if(kineticObject0.pos.dy > canvas.height){
kineticObject0.vel.dy = - kineticObject0.vel.dy;
kineticObject0.pos.dy = canvas.height;
}
if (kineticObject0.pos.dy <0) {
kineticObject0.vel.dy = - kineticObject0.vel.dy;
kineticObject0.pos.dy = 0;
}

kineticObject1.vel.add(kineticObject1.acc);
kineticObject1.pos.add(kineticObject1.vel);
kineticObject1.point.position(kineticObject1.pos);
kineticObject1.point.draw(context);
if(kineticObject1.pos.dx > canvas.width){
kineticObject1.vel.dx = - kineticObject1.vel.dx;
kineticObject1.pos.dx = canvas.width;
}
if(kineticObject1.pos.dx < 0){
kineticObject1.vel.dx = - kineticObject1.vel.dx;
kineticObject1.pos.dx = 0;
}
if(kineticObject1.pos.dy > canvas.height){
kineticObject1.vel.dy = - kineticObject1.vel.dy;
kineticObject1.pos.dy = canvas.height;
}
if (kineticObject1.pos.dy <0) {
kineticObject1.vel.dy = - kineticObject1.vel.dy;
kineticObject1.pos.dy = 0;
}





}
setUp()
function randomNumber(max){
  return Math.random()*max;
}
