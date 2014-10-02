
function setup() {
  createCanvas(800, 600);
  noFill();
  stroke(255, 100, 124);
}

  function draw() {
  background(0,100,124)
fill(255, 100, 124);
    //ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX, mouseY, 100, 100);
  


if (mouseX < 100) {
  fill(255, 100, 124);
  stroke(255, 200, 124);
  ellipse(100, 200, 100, 100);
} 
else if (mouseX < 200){
  fill(12, 192, 147);
  stroke(255, 200, 124);
  ellipse(150, 200, 200, 200);
} 
else if (mouseX < 300){
  fill(211, 31, 56);
  stroke(255, 200, 124);
  ellipse(250, 200, 300, 300);
}
 else if (mouseX < 400){
  fill(40, 58, 134);
  stroke(255, 200, 124);
  ellipse(350, 200, 400, 400);
}
 else if (mouseX < 500){
  fill(255, 234, 0);
  stroke(255, 200, 124);
  ellipse(450, 200, 500, 500);
} 
else {
   fill(132, 41, 144);
  stroke(255, 200, 124);
  ellipse(550, 200, 600, 600);
}
}
