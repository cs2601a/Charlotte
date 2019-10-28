let button;
let button2; 
let slider; 
function setup() {
	createCanvas(600, 600);
	background(0,148,148);
	
  button = createButton('Click here');
  button.position(10, 10);
  button.mousePressed(writeAWord);
	button.size(100,100);
	
	button2 = createButton('Press');
	button2.position (10,150);
	button2.mousePressed(shoe);
	button2.size(100,100);
	
	
	slider = createSlider(0, width, 100);
	slider.position (450,350);
}


function writeAWord(){ 
	textSize(50);
	fill(random(255), random(255),random(255));
	stroke(random(255), random(255),random(255));
  text ('Sparkle', random(width), random(height));
	
	
}

function shoe(x,y) { 
	fill(142,0,150);
	ellipse(random(width),random(height)+100,100,100); 
}

function draw () {
	fill(255);
  ellipse(slider.value(),450,40,40);
	
}
