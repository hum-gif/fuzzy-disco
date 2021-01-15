let body;
let jerry,jerryImg;

function preload(){
  jerryImg = loadImage("jerry.png");
}

function setup() {
  createCanvas(800, 400);
  jerry = new Jerry(width/2,height/2);
}

function draw() {
  background("green");
  jerry.update();
  jerry.display();
  
}

class Jerry{
  constructor(x,y){
    this.x = x;
    this.y = y;
    
    this.speedX = random(-6,6);
    this.speedY =  random(-3,3);
    
    if(this.speedX < 0){
      this.direction = -1;
    }
    else{
      this.direction = 1;
    }
    
  }
  update(){
    this.x+= this.speedX;
    if(this.x<0 || this.x>width){
      this.speedX *= -1;
      this.direction *= -1;
    }
    this.y+=  this.speedY;
     if(this.y<0 || this.y>height){
      this.speedY*= -1;
    }
  }
  display(){
    push();
    translate(this.x,this.y);
    scale(this.direction,1);
    imageMode(CENTER);
    image(jerryImg,0,0);
    pop();
    
  }
}