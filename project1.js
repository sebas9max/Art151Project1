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
    this.xSpeed = 80;
  }
  setSpeed2(){
    this.xSpeed = 140;
  // }
  //   setSpeed3(){
  //   this.xSpeed = 70;
  // }
  //   setSpeed4(){
  //   this.xSpeed = 70;
  // }
  //   setSpeed5(){
  //   this.xSpeed = 70;
  // }
  //  setSpeed6(){
  //   this.xSpeed = 70;
  // }
  //  setSpeed7(){
  //   this.xSpeed = 70;
  // }
  //  setSpeed8(){
  //   this.xSpeed = 70;
  // }
  //  setSpeed9(){
  //   this.xSpeed = 70;
  // }
  //  setSpeed10(){
  //   this.xSpeed = 70;
  // }
  //  setSpeed11(){
  //   this.xSpeed = 70;
  // }
  // setSpeed12(){
  //   this.xSpeed = 70;
  // }
  //  setSpeed13(){
  //   this.xSpeed = 70;
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

// creating bricks of colors
// up to down, moving horizontally
let brick1 = new Brick('rgba(255,0,0,5)',0,0);
let brick2 = new Brick('rgba(250,0,30,5)',0,50);
let brick3 = new Brick('rgba(220,0,60,5)',0,100);
let brick4 = new Brick('rgba(180,0,90,5)',0,150);
let brick5 = new Brick('rgba(150,0,120,5)',0,200);
let brick6 = new Brick('rgba(120,0,150,5)',0,250);
let brick7 = new Brick('rgba(90,0,180,1)',0,300);
let brick8 = new Brick('rgba(60,0,210,1)',0,350);
let brick9 = new Brick('rgba(30,0,240,1)',0,400);
let brick10 = new Brick('rgba(0,0,250,1)',0,450);
let brick11 = new Brick('rgba(0,30,220,1)',0,500);
let brick12 = new Brick('rgba(0,60,180,1)',0,550);
let brick13 = new Brick('rgba(0,90,150,1)',0,600);
let brick14 = new Brick('rgba(0,120,120,1)',0,650);
let brick15 = new Brick('rgba(0,150,90,1)',0,700);
let brick16 = new Brick('rgba(0,180,60,1)',0,750);
let brick17 = new Brick('rgba(0,200,30,1)',0,800);
let brick18 = new Brick('rgba(0,230,20,1)',0,850);
let brick19 = new Brick('rgba(0,255,0,1)',0,900);
//left to right, moving bricks vertically
let brick20 = new Brick('rgba(255,0,0,0.8)',0,0);
let brick21 = new Brick('rgba(230,0,50,0.8)',100,0);
let brick22 = new Brick('rgba(210,0,100,0.8)',200,0);
let brick23 = new Brick('rgba(200,0,150,0.8)',300,0);
let brick24 = new Brick('rgba(170,0,200,0.8)',400,0);
let brick25 = new Brick('rgba(110,0,220,0.8)',500,0);
let brick26 = new Brick('rgba(60,0,250,0.8)',600,0);
let brick27 = new Brick('rgba(0,0,255,0.8)',700,0);
let brick28 = new Brick('rgba(0,50,220,0.8)',800,0);
let brick29 = new Brick('rgba(0,90,190,0.8)',900,0);
let brick30 = new Brick('rgba(0,150,150,0.8)',1000,0);
let brick31 = new Brick('rgba(0,190,90,0.6)',1100,0);
let brick32 = new Brick('rgba(0,220,60,0.6)',1200,0);
let brick33 = new Brick('rgba(0,250,0,0.6)',1300,0);
//
brick1.setSpeed();
brick2.setSpeed2();
brick3.setSpeed();
brick4.setSpeed2();
brick5.setSpeed();
brick6.setSpeed2();
brick7.setSpeed();
brick8.setSpeed2();
brick9.setSpeed();
brick10.setSpeed2();
brick11.setSpeed();
brick12.setSpeed2();
brick13.setSpeed();
brick14.setSpeed2();
brick15.setSpeed();
brick16.setSpeed2();
brick17.setSpeed();
brick18.setSpeed2();
brick19.setSpeed();

brick20.setSpeed2();
brick21.setSpeed();
brick22.setSpeed2();
brick23.setSpeed();
brick24.setSpeed2();
brick25.setSpeed();
brick26.setSpeed2();
brick27.setSpeed();
brick28.setSpeed2();
brick29.setSpeed();
brick30.setSpeed2();
brick31.setSpeed();
brick32.setSpeed2();
brick33.setSpeed();

function draw () {
  background(0);
  if(mouseIsPressed){
    background(0,0,0);
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
brick14.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
brick15.createBrick();
brick15.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
brick16.createBrick();
brick16.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
brick17.createBrick();
brick17.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }  
brick18.createBrick();
brick18.moveBrick();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }  
brick19.createBrick();
brick19.moveBrick();
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
  }
  brick24.createBrick();
  brick24.moveBrick2();
    if(!mouseIsPressed){
      createBars();
      noStroke();
  }
  brick25.createBrick();
brick25.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
  brick26.createBrick();
brick26.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
  }
  brick27.createBrick();
brick27.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
}
brick28.createBrick();
brick28.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
}
brick29.createBrick();
brick29.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
}
brick30.createBrick();
brick30.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
}
brick31.createBrick();
brick31.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
}
brick32.createBrick();
brick32.moveBrick2();
  if(!mouseIsPressed){
    createBars();
    noStroke();
}
brick33.createBrick();
brick33.moveBrick2();
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
// function createBars() {
//   let width = 12;
//   for(let i = 0;i<length/len;i++){
//     fill("white");
//     if(i%2 == 0)
//     rect(i*len,length,len,-length);
// }}
} 

  