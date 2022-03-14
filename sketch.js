var box
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,20,20)
}

function draw() 
{ 
  background("white")
  if(keyDown("left")){
    box.x = box.x-2
  }
  if(keyIsDown(RIGHT_ARROW)){
      box.x = box.x+2
  }
drawSprites()
}




