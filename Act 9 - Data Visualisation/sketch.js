var table;

//Acquiring Data from a CSV file
function preload(){
  table = loadTable("Population Of Entrepreneurs - Sheet1 (1).csv","csv");
}

//filtering data
function setup(){
  createCanvas(795,500);
  background('#003C43')
  noStroke();
}

//filtering data
function draw(){
  push();
  fill('#6FDCE3')
  textSize(28);
  textStyle(ITALIC);
  text('Population Of Entrepreneurs',64,86);
  textSize(14);
  textStyle(NORMAL);
  
//loop for chart based on numbers of enterprenurs
translate(0,405);
  var data = table.getRow(1).arr;
  for(i = 0; i < table.getColumnCount(); i++) {
    var rectHeight = map(data[i], 55.5,150.1, 50,195);
    translate(i + 100,0);
		lerpAm = map(data[i], 98.6, 100.2, 0,1);
    
    var lerpCol = lerpColor(color(0,255,0),color(0,255,255),lerpAm);
    fill(lerpCol);
		textAlign(CENTER);
    rect(0,0, 50,-rectHeight);
		text(data[i],20,-rectHeight - 40);
		fill(0);
		text(table.getRow(0).arr[i],24,30);
  }
	pop();
}