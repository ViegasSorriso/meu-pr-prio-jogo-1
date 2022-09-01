var fundo;
var chao;
var score = 0;







function preload(){
  fundo = loadImage("./imagens/fundoE.png");
   




}
    
  function setup() {
    createCanvas(windowWidth, windowHeight);
     
    chao = createSprite(width/2,height-10,width,10);
    chao.shapeColor = "darkred";

    


  }



 function draw(){
    background(fundo);


    text("score: " + score, width-100,50);








    drawSprites();
 }





 