function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(250);
  
  //sensor point
  fill('#CD1818')
  line(255, 222, 255, 60);
  circle(255, 65, 20);
  
  //alien body
  fill('#00224D');
  rect(194,190,120,200);

  //alien face
  fill('#00224D');
  circle(255,200,180);
  
  //alien two eyes 
  fill(2,2,2);
  ellipse(230,150,40,40);
  ellipse(280,150,40,40);
  
  //alien mouth
  fill(0);
  ellipse(255,250,100,40);
  
  //alien two arms 
  fill('#1597BB');
  ellipse(176,300,40,40);
  ellipse(330,300,40,40);
  
  //feet
  fill('#1597BB');
  ellipse(206,400,40,40);
  ellipse(303,400,40,40);
}