function setup(){
  // Creating a canvas with a width 500 and a height 500
  createCanvas(500,500);
  fill(205);//add the color 
  background(305,0,0);//add background
  strokeWeight(3);//border
  rectMode(CENTER);
  
  //to create the shape to two cubes 
  let space = 40;
  for(x = 0; x < width + 40; x+=space){
    for(y = 0; y < height + 40; y+=space){
      // line(x,y,x+space,y);
      // line(x,y,x,y+space);
      square(x,y,10)
      square(x + space/4, y + space/4, 10)
    }
  }
}