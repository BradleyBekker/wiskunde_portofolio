const canvas = document.getElementById("canvas")
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let balls = [];
let epilepsie = false;

document.addEventListener('mousedown',(evt)=>{
let mousepos = {}
mousepos.x = evt.clientX;
mousepos.y = evt.clientY;

for (var i = 0; i < balls.length; i++) {
  if(balls[i].point.distancetopoint(mousepos) <balls[i].point.size){
    balls[i].point.fillcolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";
  }
}
});

animate();

function animate(){

  if (Math.random() < 0.5) {
      let ball = {};

      ball.point = new Point(20,20,100,100,"yellow","yellow");
      ball.pos = new Vector2d(randomNumber(canvas.width -30),0);
      ball.vel = new Vector2d(0,2);
    balls.push(ball);


  }
  if(epilepsie){
for (var i = 0; i < balls.length; i++) {
  balls[i].point.strokecolor = "#" + Math.floor(randomNumber(255*255*255,0)).toString(16);
}

  context.rect(0,0,canvas.width,canvas.height);
  context.fillStyle = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 0.1+")";
  context.fill();
}else {
  context.clearRect(0,0,canvas.width,canvas.height);
}
  requestAnimationFrame(animate);
for (var i = 0; i < balls.length; i++) {
  balls[i].point.position(balls[i].pos);
  balls[i].pos.add(balls[i].vel);
  balls[i].point.draw();
  if (balls[i].pos.dy  > canvas.height + 20) {
    balls.splice(0,1);
  }
}

}



function randomNumber(max){
  return Math.random()*max;
}
