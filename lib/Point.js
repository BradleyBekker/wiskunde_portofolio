class Point {
  constructor(linesize, size, x , y, fillcolor, strokecolor) {
this.size= size
this.linesize= linesize
this. x= x;
this. y= y;
this.fillcolor = fillcolor;
this.strokecolor = strokecolor;
this.draggable = false;
  }
  draw(){
      context.lineWidth = this.linesize;
      context.strokeStyle = this.strokecolor;
      context.fillStyle = this.fillcolor
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, 2*Math.PI);
      context.stroke();
      context.fill();}

      printText(mytext){
        context.font = "20px Arial"
        context.fillStyle = "black";
        context.fillText(mytext,this.x - 5,this.y - 8);

      }
  position(vector){
    this.x = vector.dx;
    this.y = vector.dy;
}

distancetopoint(P){
  let dx = this.x - P.x;
  let dy = this.y - P.y;

  return Math.sqrt(dx*dx+dy*dy);
  }
  drag(){
    let dragstatus = false;
    let mousepos = {}
    document.addEventListener('mousedown',(evt)=>{

      mousepos.x = evt.clientX;
      mousepos.y = evt.clientY;
      if(this.distancetopoint(mousepos)<this.size)
      {
        dragstatus = true;
        canvas.style.cursor="Pointer";

        console.log("bingo");
      }
        else{
          dragstatus = false;


        }
      console.log(dragstatus);

    });

    document.addEventListener('mousemove',(evt)=>{

      mousepos.x = evt.clientX;
      mousepos.y = evt.clientY;

      if (dragstatus) {
        this.x = mousepos.x;
        this.y = mousepos.y;
      }

      if(this.distancetopoint(mousepos)<this.size)
      {

        canvas.style.cursor="pointer";
        evt.stopImmediatePropagation();        
      }
      else {
        canvas.style.cursor="default";
      }


    });

    document.addEventListener('mouseup',(evt)=>{
      dragstatus = false;
    });

  }

}
