//Criando variaveis
var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;

//Fazendo preload das imagens
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

//Criando objetos (função setup)
function setup(){

createCanvas(400,400);

//GRUPS
var appleG,orangeG,redG;
appleG = new Group();
orangeG = new Group();
redG = new Group();

//GARDEM
garden=createSprite(200,200);
garden.addImage(gardenImg);

//RABBIT
rabbit = createSprite(160,280,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

//Fazendo a function draw
function draw() {

//BACKGROUND
background(0);
  
//Movimentação (rabbit)
rabbit.x = World.mouseX;

//colições
edges= createEdgeSprites();
rabbit.collide(edges);

//Ativando funções
createRed();
createOrange();
createApples();
drawSprites();
}

//Função createApples
function createApples() {
if (frameCount % 50 === 0) {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 7;
apple.lifetime = 150; 
}
}

//Função createOrange
function createOrange() {
if (frameCount % 40 === 0) {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 7;
orangeL.lifetime = 150;}
}

//Função createRed
function createRed() {
  if (frameCount % 60 === 0) {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 7;
  redL.lifetime = 150; }
}
