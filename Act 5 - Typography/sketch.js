var word = "BATH SPA UNIVERSITY";//write the text
var font1,font2,font3;
function preload(){
  font1 = loadFont ("BlackOpsOne-Regular.ttf");//fonts
  font2 = loadFont ("Comfortaa-Light.ttf");//fonts
  font3 = loadFont ("ShadowsIntoLight.ttf");//fonts
}
function draw(){
  createCanvas(700,500);
  background('#01204E');//color of the background
  fill('#EEEDEB');// color of the text 
  textFont (font1,50);// chosose the font text size
  textAlign(CENTER);
  text(word,width/2,height/2);// text ,x ,y
}