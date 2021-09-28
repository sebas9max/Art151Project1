class Brick{
  constructor(bc,x, y){
    this.brickColor = bc;
    this.yPos = y;
    this.xPos = x;
  }

  // this function creates the brick
  createBrick(){
    fill(this.brickColor);
    rect(this.xPos, this.yPos, 100, 50);
  }

  // this function sets the speed
  // of movement of the brick to 1
  setSpeed(){
    this.xSpeed = 60;
  }
  setSpeed2(){
    this.xSpeed = 70;
  }
    setSpeed3(){
    this.xSpeed = 80;
  }
    setSpeed4(){
    this.xSpeed = 70;
  }
    setSpeed5(){
    this.xSpeed = 60;
  }
   setSpeed6(){
    this.xSpeed = 50;
  }
   setSpeed7(){
    this.xSpeed = 90;
  }
   setSpeed8(){
    this.xSpeed = 100;
  }
   setSpeed9(){
    this.xSpeed = 110;
  }
   setSpeed10(){
    this.xSpeed = 120;
  }
   setSpeed11(){
    this.xSpeed = 130;
  }
  setSpeed12(){
    this.xSpeed = 140;
  }
   setSpeed13(){
    this.xSpeed = 50;
  }

  // this function set the bricks in motion
  moveBrick(){
    this.xPos+=this.xSpeed;
    if(this.xPos+100 >= width || this.xPos <= 0){
      this.xSpeed*=-1;
    }
  }
  
   moveBrick2(){
    this.yPos+=this.xSpeed;
    if(this.yPos+100 >= height || this.yPos <= 0){
      this.xSpeed*=-1;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createP("Keep the mouse clicked").style('color','#ffffff');
  createP("to see speed").style('color','#ffffff');
  
  alert("Press mouse to see what's behind the lines");
}

// creating two bricks of 
// colors white and black
let brick1 = new Brick("red",0,50);
let brick2 = new Brick("orange",0,150);
let brick3 = new Brick("yellow",0,250);
let brick4 = new Brick("green",0,350);
let brick5 = new Brick("blue",0,450);
let brick6 = new Brick("gold",0,100);
let brick7 = new Brick("teal",0,200);
let brick8 = new Brick("indigo",0,300);
let brick9 = new Brick("violet",0,400);
let brick10 = new Brick("purple",0,500);
let brick11 = new Brick("pink",0,550);
let brick12 = new Brick("brown",0,600);
let brick13 = new Brick("white",0,0);

let brick14 = new Brick("green",30,0);
let brick15 = new Brick("blue",80,0);
let brick16 = new Brick("gold",130,0);
let brick17 = new Brick("teal",180,0);
let brick18 = new Brick("indigo",230,0);
let brick19 = new Brick("violet",280,0);
let brick20 = new Brick("purple",330,0);
let brick21 = new Brick("pink",380,0);
let brick22 = new Brick("brown",430,0);
let brick23 = new Brick("white",480,0);
//
brick1.setSpeed();
brick2.setSpeed2();
brick3.setSpeed3();
brick4.setSpeed4();
brick5.setSpeed5();
brick6.setSpeed6();
brick7.setSpeed7();
brick8.setSpeed8();
brick9.setSpeed9();
brick10.setSpeed10();
brick11.setSpeed11();
brick12.setSpeed12();
brick13.setSpeed13();

brick14.setSpeed4();
brick15.setSpeed5();
brick16.setSpeed6();
brick17.setSpeed7();
brick18.setSpeed8();
brick19.setSpeed9();
brick20.setSpeed10();
brick21.setSpeed11();
brick22.setSpeed12();
brick23.setSpeed13();

function draw () {
  background(0);
  if(mouseIsPressed){
    background(200);
  }
  brick1.createBrick();
  brick1.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
  brick2.createBrick();
  brick2.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
  brick3.createBrick();
  brick3.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
  brick4.createBrick();
  brick4.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
  brick5.createBrick();
  brick5.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
  brick6.createBrick();
  brick6.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
 brick7.createBrick();
  brick7.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
   brick8.createBrick();
  brick8.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
   brick9.createBrick();
  brick9.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
   brick10.createBrick();
  brick10.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
   brick11.createBrick();
  brick11.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
 brick12.createBrick();
  brick12.moveBrick();
  brick12.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
 brick13.createBrick();
  brick13.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
  
  
brick14.createBrick();
brick14.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
brick15.createBrick();
brick15.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
brick16.createBrick();
brick16.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
brick17.createBrick();
brick17.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }  
brick18.createBrick();
brick18.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }  
brick19.createBrick();
brick19.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }  
brick20.createBrick();
brick20.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
brick21.createBrick();
brick21.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }  
brick22.createBrick();
brick22.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
brick23.createBrick();
brick23.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }}
  
  
  
// this function creates the black and
// white bars across the screen
function createBars() {
  let len = 12;
  for(let i = 0;i<width/len;i++){
    fill("white");
    if(i%2 == 0)
    rect(i*len,height,len,-height); 
  }
function createBars() {
  let width = 12;
  for(let i = 0;i<length/len;i++){
    fill("white");
    if(i%2 == 0)
    rect(i*len,length,len,-length);
}}} 

  