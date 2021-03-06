// Creating GameStates
var Rules = 1
var Play  = 2
var End   = 3
var lifeend = 4
var gameState = Rules;

// score
var score =0;

// Creating Variables for the 1 GameState
var start;
var rulePage,backgroundImg; 

// Creating Variables for the 2 GameState
var Garbage,GarbageGroup,g1,g2,g3;
var Coins,CoinGroup,C1;
var hand,left,right;;
var Dustbin,DustbinImg,Basket,BasketImg;

// Creating Variables for the 3 GameState
var GameOver,Game;
var lifes,life1,life2,life3
lifes = [life1,life2,life3]

// Loading All The Images
function preload() {
// Loading All backgroundImgs
backgroundImg =loadImage("Images/Road.png");
backgroundImg1 =loadImage("Images/backGround1.png");

// Loading All Images for the gameState 2
left = loadImage("Images/left.png")
right = loadImage("Images/right.png")

g1 = loadImage("Images/g1.png");
g2 = loadImage("Images/g3.png");
g3 = loadImage("Images/g4.png");

C1 = loadImage("Images/C1.png");

Shooter = loadImage("Images/shooter.png");
Shooter1 = loadImage("Images/shooter1.png");

DustbinImg= loadImage("Images/DustBin.png");
BasketImg = loadImage("Images/Basket.png");

// Loading All Images for the gameState 3
Game =loadImage("Images/Game-Over.jpg");

// Loading Images for lifes
red   = loadImage("Images/Red.png")
black = loadImage("Images/Black.png")

//handimage = loadImage("Hand1.png")

}
// creating objects
function setup() {
  createCanvas(850,600);
  
  // creating objects for game state 1
  rulePage = createSprite(80,300,10,510)
  rulePage2= createSprite(780,300,10,510)
  rulePage3= createSprite(430,050,710,10)
  rulePage4= createSprite(425,550,700,10)
  rulePage.shapeColor = "white"
  rulePage2.shapeColor = "white"
  rulePage3.shapeColor = "white"
  rulePage4.shapeColor = "white"

  start = createSprite(650,500,90,40)

  life1 = createSprite(50,470,30,30)
  life2 = createSprite(50,520,30,30)
  life1.addImage(red)
  life2.addImage(red)
  life1.scale=0.15
  life2.scale=0.15
   
  
   // creating objects for game state 1
    Dustbin = createSprite(200,490,150,50);
    Dustbin.addImage(DustbinImg)
    Dustbin.scale = 0.25

    hand = createSprite(10,10,10,70);
    hand.shapeColor = "red"
    //hand.debug = true
    // hand.addImage(handimage);
    // Hand.scale = 0.5
  
    Basket = createSprite(690,500,150,50);
    Basket.addImage(BasketImg)
    Basket.scale = 0.1;
    
  // spawning objects for game state 1
    GarbageGroup1 = new Group();
    GarbageGroup2 = new Group();
    GarbageGroup3 = new Group();
    CoinsGroup = new Group();
    ArrowGroup1 = new Group();
    ArrowGroup2 = new Group();

    
 
}
// creating gamestates and spawning objects
function draw() {
       if (gameState===Rules) {
          // commands should be done in ruleState
      background(backgroundImg1);
      textSize(50);
      fill("white");
      text("Rules",350,100);
      textSize(25);
      fill("yellow");
      text("1. Coin should be droped in the basket",110,150);
      text("2. Garbage should be droped in the DustBin",110,180);
      text("3. Hand should not touch the arrows",110,210);
      textSize(50);
      fill("white");
      text("Points",350,280)
      textSize(25);
      fill("yellow");
      text("1. If Coin droped in the basket = +10",110,310)
      text("2. If Coin droped in the DustBin = -10",110,340)
      text("3. If Garbage droped in the DustBin = +20",110,370)
      text("4. If Garbage droped in the Basket = -20",110,400)
      textSize(50)
      fill("Pink")
      text("2 Lives Are Avilable",110,500)
      textSize(30)
      text("Start !",630,500)

      
      life1.visible = false;
      life2.visible = false;
      //life3.visible = false;
      

      Dustbin.visible = false;
      Basket.visible = false;
    
      rulePage.visible = true;
      rulePage2.visible = true;
      rulePage3.visible = true; 
      rulePage4.visible = true;

      start.visible = false;
      if (mousePressedOver(start)){
        gameState = Play
        }


    
    }else if (gameState === Play) {
      // commands should be done in playState
        background(backgroundImg);

        textSize(30)
        text('score- '+ score,650,50)
        
        life1.visible = true;
        life2.visible = true;
        // life3.visible = true;

        rulePage.visible = false;
        rulePage4.visible = false;
        rulePage2.visible = false;
        rulePage3.visible = false;
        start.visible = false;
        

        Dustbin.visible = true;
        Basket.visible = true;

        // hand.x=mouseX;
        // hand.y=mouseY;

        if(keyIsDown(LEFT_ARROW)) {
          hand.x=hand.x-8;
        }
      
        if(keyIsDown(RIGHT_ARROW)) {
          hand.x=hand.x+8;
        }
      
        
        if(keyIsDown(UP_ARROW)) {
          hand.y=hand.y-8;
        }
      
        
        if(keyIsDown(DOWN_ARROW)) {
          hand.y=hand.y+8;
        }
      
        var select_garbage = Math.round(random(1,3));
    
        if (frameCount % 100 == 0) {
          if (select_garbage == 1) {
            SpawnGarbage1();
          } else if (select_garbage == 2) {
            SpawnGarbage2();
          } else {
            SpawnGarbage3();
          }
        }


        // if(GarbageGroup1.isTouching(hand)||
        //   GarbageGroup2.isTouching(hand)||
        //   GarbageGroup3.isTouching(hand)){
        //   GarbageGroup1.destroyEach();
        //   GarbageGroup2.destroyEach();
        //   GarbageGroup3.destroyEach();
        //   score+=20;
        
        // }

        if(GarbageGroup1.isTouching(hand)){
          hand.x=500
          hand.y=425
          GarbageGroup1.destroyEach();
          score+=20
        }
        else if(GarbageGroup2.isTouching(hand)){
          hand.x=500
          hand.y=425
          GarbageGroup2.destroyEach();
          score+=20
        }
        else if(GarbageGroup3.isTouching(hand)){
          hand.x=500
          hand.y=425
          GarbageGroup3.destroyEach();
          score+=20
        }

        // if(GarbageGroup1.destroyEach()||GarbageGroup2.destroyEach()||
        // GarbageGroup3.destroyEach()){
        //   hand.x=500
        //   hand.y=425
        // }
       
        
        // if (Dustbin.isTouching(hand)) {
        //   Garbage1.visible = true;
        //   Garbage1.y=470;
        //   Garbage1.x=Dustbin.x;
        //  }

        var count=2;
        if(ArrowGroup1.isTouching(hand)){
              life1.destroy();
              count--;
             
            }
         if(ArrowGroup2.isTouching(hand)){
              life2.destroy();
              count--
              
            }
          SpawnCoins();
          SpawnArrows();

          if (count===0){
            gameState = End;
          }
      
    }
    

    else if(gameState === End){
    end =  createSprite(350,200,1000,800)
    end.shapeColor = "black"
    textSize(50);
    stroke("Yellow");
  text("Game Over ",200,200)
     
    }
   
  
    drawSprites()
}
function SpawnGarbage1() {
    var rand = Math.round(random(10,1200))
    Garbage1 = createSprite(900,15,10,40);
    Garbage1.velocityY = 3;
    Garbage1.x=rand; 
    Garbage1.addImage(g1);
      
    
    //assign scale and lifetime to the obstacle           
    Garbage1.scale = 0.1;
    Garbage1.lifetime = 300;
    hand.depth = Garbage1.depth+1;
    //add each obstacle to the group
    GarbageGroup1.add(Garbage1);
  
}

function SpawnGarbage2() {
  var rand = Math.round(random(10,1200))
    Garbage2 = createSprite(900,15,10,40);
    Garbage2.velocityY = 3;
    Garbage2.x=rand; 
    Garbage2.addImage(g2);
      
    
    //assign scale and lifetime to the obstacle           
    Garbage2.scale = 0.1;
    Garbage2.lifetime = 300;
    hand.depth = Garbage2.depth+1;
    //add each obstacle to the group
    GarbageGroup2.add(Garbage2);
  
}

function SpawnGarbage3() {
  var rand = Math.round(random(10,1200))
    Garbage3 = createSprite(900,15,10,40);
    Garbage3.velocityY = 3;
    Garbage3.x=rand; 
    Garbage3.addImage(g3);
      
    
    //assign scale and lifetime to the obstacle           
    Garbage3.scale = 0.1;
    Garbage3.lifetime = 300;
    hand.depth = Garbage3.depth+1;
    //add each obstacle to the group
    GarbageGroup3.add(Garbage3);
  
}
function SpawnCoins() {
  if(frameCount % 100 === 0) {
    var rand = random(0,800)
    Coins = createSprite(900,15,10,40);
    Coins.velocityY = 3
    Coins.x=rand
Coins.addImage(C1);

 
    //assign scale and lifetime to the obstacle           
    Coins.scale = 0.1;
    Coins.lifetime = 300;
    //add each obstacle to the group
    CoinsGroup.add(Coins);
  }
}
function SpawnArrows() {
if (frameCount % 35 === 0) {
  var leftArrow = createSprite(800,350,10,10)
  leftArrow.addImage(left)
  leftArrow.scale = 0.1
  leftArrow.velocityX=-7
  leftArrow.lifetime=130
  var RightArrow = createSprite(50,300,10,10)
  RightArrow.addImage(right)
  RightArrow.scale = 0.1
  RightArrow.velocityX=7
  RightArrow.lifetime=130

  ArrowGroup1.add(leftArrow);
  ArrowGroup2.add(RightArrow);
}
  
  var shooter = createSprite(50,300,40,40)
  shooter.addImage(Shooter)
  shooter.scale=0.1;
  var shooter1 = createSprite(800,350,40,40)
  shooter1.addImage(Shooter1)
  shooter1.scale=0.1;
}

