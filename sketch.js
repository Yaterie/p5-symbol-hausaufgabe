let x = 0;
let y = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(130+x, 130+y, 150)
  rect(240+x, 60+y, 35)
  triangle(205+x, 30+y, 100+x, 130+y, 310+x, 130+y)
  rect(160+x, 160+y, 30)  
  rect(220+x, 210+y, 35)
  rect(220+x, 245+y, 35)
  
}