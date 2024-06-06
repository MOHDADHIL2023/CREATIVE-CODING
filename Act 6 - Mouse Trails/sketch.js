let trails = []

function setup(){
  createCanvas(400,400);
}

function draw(){
  // it draws the shape wherever the cursor moves
  background('#0C0C0C');// fill the color
  
  //moving with mouseX mouseY
  trails.push(createVector(mouseX , mouseY))
  
  //bubbles shape
  if (trails.length > 80){
    trails.shift()
  }
  
  for (let i = 0; i < trails.length; i++){
    let pos = trails[i]
    
    ellipse(pos.x, pos.y, i/2)
  }
}