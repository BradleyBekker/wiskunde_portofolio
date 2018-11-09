const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width=window.innerWidth-20;
canvas.height=window.innerHeight -20;
let balls = [];

for (let i = 0; i < 5; i++) {
  let ball = {};

  ball.point = new Point(4,40,50,50,"#" + Math.floor(randomNumber(255*255*255,0)).toString(16),"#" + Math.floor(randomNumber(255*255*255,0)).toString(16));
  ball.pos = new Vector2d(randomNumber(canvas.width,0),randomNumber(canvas.height,0));
  ball.accl = new Vector2d(randomNumber(2,-1),randomNumber(1,-1));
  ball.vel = new Vector2d(1,1);
  balls.push(ball);
}

animate();

function animate() {
 context.clearRect(0,0,canvas.width,canvas.height);
 for (let i = 0; i < balls.length; i++) {
   balls[i].point.color = "#" + Math.floor(randomNumber(255*255*255,0)).toString(16);
   balls[i].point.draw();
 }
  requestAnimationFrame(animate);


  for (let i = 0; i < balls.length; i++) {

    balls[i].pos.add(balls[i].vel)
    balls[i].vel.add(balls[i].accl);
    balls[i].point.position(balls[i].pos);
    balls[i].point.draw(context);
    if (balls[i].pos.dx < 0) {
      balls[i].vel.dx = -balls[i].vel.dx;
    }

    if (balls[i].pos.dx > canvas.width) {
      balls[i].vel.dx = -balls[i].vel.dx;
    }
    if (balls[i].pos.dy < 0) {
          balls[i].vel.dy = -balls[i].vel.dy;
    }

    if (balls[i].pos.dy > canvas.height) {
          balls[i].vel.dy = -balls[i].vel.dy;
    }
  }

}



function randomNumber(max,min) {
return Math.random() * (max - min) + min;}
