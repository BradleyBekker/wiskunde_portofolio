const canvas = document.getElementById("canvas")
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let balls = [];
let epilepsie= false;
for (var i = 0; i < 8; i++) {
let ball = new Point(20,20,randomNumber(canvas.width),randomNumber(canvas.height),"yellow","yellow");
balls.push(ball);
}

for (var i = 0; i < balls.length; i++) {
  balls[i].drag();
}


function animate(){
  if (epilepsie) {
    context.rect(0,0,canvas.width,canvas.height);
    context.fillStyle = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 0.1+")";
    context.fill();
}else {
  context.clearRect(0,0,canvas.width,canvas.height);
}

  requestAnimationFrame(animate);
  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
  }
if(epilepsie){
  for (var i = 0; i < balls.length; i++) {

    balls[i].fillcolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";
    balls[i].strokecolor = "rgba("+randomNumber(225)+","+ randomNumber(225)+"," +randomNumber(225)+","+ 1+")";

  }
  context.strokeStyle = "#" + Math.floor(randomNumber(255*255*255)).toString(16);
  context.fillStyle = "#" + Math.floor(randomNumber(255*255*255)).toString(16);
}
  context.beginPath();
  context.moveTo(balls[0].x,balls[0].y);

  for (var i = 0; i < balls.length; i++) {
    context.lineTo(balls[i].x,balls[i].y);
  }
  context.closePath();
  context.fill();
  context.stroke();


}

function randomNumber(max){
  return Math.random()*max;
}
animate();
