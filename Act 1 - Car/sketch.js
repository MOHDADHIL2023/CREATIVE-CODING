function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(246);
  fill(225,0,0);
  
  //red light indicator
  rect(92, 350, 50, 30);
  fill(26,250,0);
  
  //green light indicator
  rect(600, 350, 8, 30);
  fill(0);
  
  //left tyre
  ellipse(200,400,100,100);
  
  //right tyre
  ellipse(524,400,100,100);
  fill('#050C9C');
 
  //Car Making Frame By Starting Here
  beginShape();
  vertex(100,300);
  vertex(250,300);
  vertex(250,200);
  vertex(400,200);
  vertex(500,300);
  vertex(600,300);
  vertex(600,400);
  vertex(100,400);
  vertex(100,300);
  endShape();
  fill(255);
  
  //no stroke remove the outline of the shape
  noStroke();
  
  //right side window from staring itself
  stroke(0);
  beginShape();
  vertex(350,250);
  vertex(400,250);
  vertex(450,300);
  vertex(350,300);
  vertex(350,250);
  endShape();
  stroke(0);
  rect(280,250,50,50);
  fill(0);
  
  //left door handle
  ellipse(300,330,15,15);
  
  //right door handle
  ellipse(380,330,15,15);
  fill(225,250,0);
  
  //stroke for line like automatic
  stroke(0);
  strokeWeight(3);
  //line(x1, y1, x2, y2)
  line(100, 50, 120, 300);
}