
function setup() {
  createCanvas(800, 600);
  noFill();
  stroke(255, 100, 124);
}

  function draw()
  {
  background(0,100,124)

    //ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX, mouseY, 100, 100);
  


if (mouseX < 300) {
  ellipse(200, 200, 100, 100);
}
 else {
  ellipse(400, 200, 100, 100);
}
}
