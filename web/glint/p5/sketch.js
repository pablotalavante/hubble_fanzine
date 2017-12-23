var canvas;

var f=0;

var r, g, b;

function windowResized() {
  console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //canvas = createCanvas(200,200);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  // mic = new p5.AudioIn();
  // mic.start();

  r = random(30,180);
  g = random(30, 100);
  b = random(10,50);
}

function keyPressed() {
  //
}

function draw() {

  background((4.3*f+ r)%255,
              (8.9*f + g)%255,
              (11.3*f + b)%255,
              (10 +f)%255);
  noStroke();
    ellipse(mouseX, mouseY, abs(150*sin(1.9435*f)) + 90,abs(150*cos(2.4*f)) + 90);

  f += 0.01;

}
