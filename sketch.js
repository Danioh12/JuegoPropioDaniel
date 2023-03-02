var Player1Img, Player2Img, soccerBallImg, FieldImg;

function preload(){

  soccerBallImg = loadImage("assets/Images/soccerBall.png")
  FieldImg = loadImage("assets/Images/Field.jpg")
  Player1Img = loadImage("assets/Images/Player1.png")
  Player2Img = loadImage("assets/Images/Player2.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
  Field = createSprite(displayWidth/2,displayHeight/2,20,20)
Field.addImage(FieldImg)
Field.scale = 5.2
  
edges=createEdgeSprites();

//Crear el sprite del jugador 1
Player1 = createSprite(displayWidth-1300, displayHeight-450, 50, 50);
 Player1.addImage(Player1Img)
   Player1.scale = 0.8

//Crear el sprite del jugador 2
Player2 = createSprite(displayWidth-130, displayHeight-450, 50, 50);
 Player2.addImage(Player2Img)
   Player2.scale = 0.8

//Crear el sprite del balon
SoccerBall = createSprite(displayWidth-720, displayHeight-450, 50, 50);
 SoccerBall.addImage(soccerBallImg)
   SoccerBall.scale = 0.03
 
  //player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
  // player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 

if (keyDown("space")) {
   SoccerBall.velocityX=6;
   SoccerBall.velocityY=7;
}

  //Mover al jugador arriba y abajo y hacer que el juego móvil sea compatible de forma táctil.
if(keyDown("UP_ARROW")){
  Player1.y = Player1.y-20
}
if(keyDown("DOWN_ARROW")){
 Player1.y = Player1.y+20
}

if(keyDown("W")){
  Player2.y = Player2.y-20
}
if(keyDown("S")){
 Player2.y = Player2.y+20
}

  Player2.collide(edges[2]);
  Player2.collide(edges[3]);
  
  Player1.collide(edges[2]);
  Player1.collide(edges[3]);

  SoccerBall.bounceOff(edges[2]);
  SoccerBall.bounceOff(edges[3]);
  SoccerBall.bounceOff(Player2);
  SoccerBall.bounceOff(Player1);
  

  if (SoccerBall.isTouching(edges[0]) || 
 SoccerBall.isTouching(edges[1])){
   resetball();

 }

if (SoccerBall.isTouching(Player1)){
SoccerBall.velocityX +=1; 
 }

if (SoccerBall.isTouching(Player2)){
SoccerBall.velocityX +=1; 
 }

drawSprites();

}
function resetball(){
SoccerBall.x = displayWidth-720
SoccerBall.y = displayHeight-450
SoccerBall.velocityX=0
SoccerBall.velocityY=0
}
