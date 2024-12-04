function setup() {
    createCanvas(800, 800);
    strokeWeight(0)
  }
  
  function draw() {
      background(220);
    fill(abs(400-mouseX),abs(400-mouseY),abs(sqrt((mouseX-400)*(mouseY-400))));
    if(mouseX%100>=50){
      if(mouseY%100>=50){
        ellipse(mouseX,mouseY,400-mouseX,400-mouseY);
      }
      else{
        rect(mouseX-abs(400-mouseX)/2,mouseY-abs(400-mouseY)/2,400-mouseX,400-mouseY);
      }
    }
    else{
      if(mouseY%100>=50){
        triangle(2*mouseX-400,2*mouseY-400,mouseX-0.25*sqrt(3)*(400-mouseX),mouseY+0.5*(400-mouseY),mouseX+0.5*(400-mouseX),mouseY-0.25*sqrt(3)*(400-mouseY))
      }
    }
  }