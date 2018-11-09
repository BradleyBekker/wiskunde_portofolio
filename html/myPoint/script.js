
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let epilepsie = false;


function animate(){
  requestAnimationFrame(animate);
  for (var i = 0; i <10; i++) {
    if (epilepsie) {
    let myPoint = new Point(randomNumber(100),randomNumber(100),randomNumber(canvas.width),randomNumber(canvas.height),"#" + Math.floor(randomNumber(255*255*255)).toString(16),"#" + Math.floor(randomNumber(255*255*255)).toString(16));
      myPoint.draw();
    } else {
      let myPoint = new Point(randomNumber(100),randomNumber(100),randomNumber(canvas.width),randomNumber(canvas.height),"#" + Math.floor(randomNumber(1*1*1)).toString(16),"#" + Math.floor(randomNumber(25*25*25)).toString(16));
        myPoint.draw();
    }


  }

}
animate()
function randomNumber(max){
  return Math.random()*max;
}
