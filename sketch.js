var a;
var b;
var c;
var d;

function preload(){
  b1 = loadImage("bacteriagrowth0.png");
  b2 = loadImage("bacteriagrowth1.png");
  b3 = loadImage("bacteriagrowth2.png");
  b4 = loadImage("bacteriagrowth3.png");
  
}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(255);
    if (mouseX<100){
    image(b1, 0, 0,400,400);
  } else if (100<=mouseX<200){
    image(b2, 0, 0,400,400);
  } else if (200<=mouseX<300){  //<--Here
    image(b3, 0, 0,400,400);
  } else if (300<=mouseX<400){
    image(b4, 0, 0,400,400);    
  }
}


//Image credit: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.collectedny.org%2Fframeworkposts%2Fbacteria-population-growth%2F&psig=AOvVaw23TV-tqQdDnUDEkSwQejfq&ust=1602194772803000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCdkee-o-wCFQAAAAAdAAAAABAE