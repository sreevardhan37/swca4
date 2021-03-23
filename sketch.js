var bananas,obstacles,bananaimg,obstacleimg,score,monkey,monkeyimg,invisibleground,ground,bgimg,GameOvare,GameOvareimg;

function preload(){
  
 monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimg=loadImage("banana.png");
  obstacleimg=loadImage("stone.png");
  
 bgimg=loadImage("jungle.jpg");
 GameOvareimg=loadImage("gameOver.png");
}

function setup() {
  createCanvas(400, 400);
 monkey=createSprite(50,350,10,10);
  monkey.addAnimation("monkey",monkeyimg);
  monkey.scale=0.1;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",bgimg);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  ground.depth=monkey.depth;
  monkey.depth=monkey.depth+1;
  
   
  invisibleground = createSprite(200,378,400,1);
  invisibleground.visible = false;
  
 score=0;
  
 bananas=new Group();

 obstacles=new Group();
  
}

function draw() {
  background(1111);

 spawnbananas();
 spawnObstacles();
  
  monkey.collide(invisibleground);
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(keyDown("space")&&monkey.y>300){
    
   monkey.velocityY=-12; 
    
  }
  
  if(ground.x<0){
   
   ground.x=ground.width/2;
    
  }
  
  if(obstacles.isTouching(monkey)){
    
   monkey.scale=0.1; 
    
  }
  
    if(bananas.isTouching(monkey)){
    
   score=score+2; 
    bananas.destroyEach();
  }
  
  if(obstacles.isTouching(monkey)){
    
   score=0; 
    obstacles.destroyEach();
  }
   
  if(monkey.isTouching(obstacles)){
    stroke("black"); 
    text("YOU LOSE !!!!",200,200)
     
     
    }
  
 drawSprites();
  
  stroke("white");
  textSize(24);
  fill("white");
  text("score :"+score,300,50);
}


function spawnbananas() {
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);
    banana.addImage(bananaimg);
    banana.scale = 0.05;
    banana.velocityX = -4;
    
    
    banana.lifetime = 300;
    player.depth=danana.depth+1;
    FoodGroup.add(banana);
  }
  
 if (FoodGroup.isTouching(player)){
   FoodGroup.destroyEach();
   score=score+2;
   player.scale+=+0.1
 }


}

function spawnObstacles() {
  if(frameCount % 100 === 0) {
    var obstacle = createSprite(460,350,10,40);
    obstacle.y = random(120,200);
    obstacle.addImage(obstacleimg)
    obstacle.scale = 0.05;
    obstacle.velocityX = -4;
    
    
    
    obstacle.lifetime = 300;  
    player.depth=danana.depth+1;  
    StoneGroup.add(obstacle);
  }

  if (StoneGroup.isTouching(player)){
    StoneGroup.destroyEach();
    GameOvare;
    player.scale+=+0.1;
  }



}

function GameOvare(){
  if(obstaclesGroup.isTouching(player)){
    gameStae=END;
  }

 if(gameStae===END){
   backgr.velocityX=0;
   player.visible=false;

   FoodGroup.destroyEach();
   obstaclesGroup.destroyEach();

   textSize(30);
   fill(255);
   text("Game Over !",300,220);

  }



}



