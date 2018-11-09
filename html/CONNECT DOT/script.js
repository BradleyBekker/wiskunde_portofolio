const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let epilepsie = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];

for (var i = 0; i < 25; i++) {
addpoint();
}


function animate(){
  if(!epilepsie){
  context.clearRect(0,0,canvas.width,canvas.height);

}
else {
    context.fillStyle = "#" + Math.floor(randomNumber(255*255*255)).toString(16);
    context.rect(0,0,canvas.width,canvas.height);
    context.fill();
}
  context.strokeStyle = "silver";
  requestAnimationFrame(animate);
  //if (Math.random() < 0.01) {
    dots.splice(0,1);
    addpoint();


  //}
  if (epilepsie) {
    context.strokeStyle = "#" + Math.floor(randomNumber(255*255*255)).toString(16);
    context.fillStyle = "#" + Math.floor(randomNumber(255*255*255)).toString(16);
    context.rect(0,0,canvas.width,canvas.height);
    context.fillStyle = "#" + Math.floor(randomNumber(255*255*255)).toString(16);

  }

  context.beginPath();
  context.lineWidth = 5;
  context.moveTo(dots[0].x,dots[0].y);
  for (var i = 0; i < dots.length; i++) {
    context.lineTo(dots[i].x,dots[i].y);

  }
  context.closePath();
  context.fill();
  context.stroke();
  for (var i = 0; i < dots.length; i++) {
    dots[i].draw()
    dots[i].printText(i)
  }
}

animate();

function randomNumber(max){
  return Math.random()*max;
}

function addpoint() {
  let dot = new Point(5,5,randomNumber(canvas.width - 20),randomNumber(canvas.height - 20),"#" + Math.floor(randomNumber(255*255*255)).toString(16),"#" + Math.floor(randomNumber(255*255*255)).toString(16));
  dots.push(dot);
}
