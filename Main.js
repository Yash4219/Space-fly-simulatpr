var part , part2,part3 ,part4 ,part5 ,part6 ,part7 ,part8 ,part9 ,part10 ,
part11 ,part12 ,part13 ,part14 ,part15 ,part16 ,part17 ,part18 ,part19 ,part20 ,part21, Earth , Rocket,Rocket1,Rocket2,Rocket3,grid

var partimg1 , partimg2,partimg3 ,partimg4 ,partimg5 ,partimg6 ,partimg7 ,partimg8 ,partimg9 ,partimg10 ,
partimg11 ,partimg12 ,partimg13 ,partimg14 ,partimg15 ,partimg16 ,partimg17 ,partimg18 ,partimg19 ,partimg20 ,
partimg21, Earthimg, Rocketimg,Rocket1img,Rocket2img,gridimg

var bg1,bg1img
var play,playimg
var gameState="play"

function preload(){
    partimg1 = loadImage("Image/Parts.png");
    partimg2 = loadImage("Image/Part2.png");
    partimg3 = loadImage("Image/Part3.png");
    partimg4 = loadImage("Image/Part4.png");
    partimg5 = loadImage("Image/Part5.png");
    partimg6 = loadImage("Image/Part6.png");
    partimg7 = loadImage("Image/Part7.png");
    partimg8 = loadImage("Image/Part8.png");
    partimg9 = loadImage("Image/Part9.png");
    partimg10 = loadImage("Image/Part10.png");
    partimg11 = loadImage("Image/Part11.png");
    partimg12 = loadImage("Image/Part12.png");
    partimg14 = loadImage("Image/Part14.png");
    partimg15 = loadImage("Image/Part15.png");
    partimg16 = loadImage("Image/Part16.png");
    partimg17 = loadImage("Image/Part17.png");
    partimg18 = loadImage("Image/Part18.png");
    partimg19 = loadImage("Image/Part19.png");
    partimg20 = loadImage("Image/Part20.png");
    partimg21 = loadImage("Image/Part21.png");
    bg1img = loadImage("Image/Space_Logo.jpg");
    playimg = loadImage("Image/Play.png");
}


function setup(){
createCanvas(1300,800);
bg1 = createSprite(600,450);
bg1.addImage(bg1img);
bg1.scale=3.3
play=createSprite(1000,600)
play.addImage(playimg);
part= createSprite(40, 20);
part.addImage(partimg1)
part.scale=0.2
part2=createSprite(80,20)
part2.addImage(partimg2)
part2.scale=0.2
part3=createSprite(120,20)
part3.addImage(partimg3)
part3.scale=0.2
part4=createSprite(160,20)
part4.addImage(partimg4)
part4.scale=0.2
part5=createSprite(200,20)
part5.addImage(partimg5)
part5.scale=0.2
part6=createSprite(240,20)
part6.addImage(partimg6)
part6.scale=0.2
part7=createSprite(280,20)
part7.addImage(partimg7)
part7.scale=0.2
part8=createSprite(320,20)
part8.addImage(partimg8)
part8.scale=0.2
part9=createSprite(360,20)
part9.addImage(partimg9)
part9.scale=0.2
part10=createSprite(400,20)
part10.addImage(partimg10)
part10.scale=0.2
part11=createSprite(440,20)
part11.addImage(partimg11)
part11.scale=0.2
part12=createSprite(480,20)
part12.addImage(partimg12)
part12.scale=0.001
part14=createSprite(500,20)
part14.addImage(partimg14)
part14.scale=0.2
part15=createSprite(560,20)
part15.addImage(partimg15)
part15.scale=0.2
part16=createSprite(600,20)
part16.addImage(partimg16)
part16.scale=0.2
part17=createSprite(640,20)
part17.addImage(partimg17)
part17.scale=0.2
part18=createSprite(680,20)
part18.addImage(partimg18)
part18.scale=0.2
part19=createSprite(700,20)
part19.addImage(partimg19)
part19.scale=0.2
part20=createSprite(740,20)
part20.addImage(partimg20)
part20.scale=0.2
part21=createSprite(780,20)
part21.addImage(partimg21)
part21.scale=0.2



}





function draw(){
    background("#00FFFF")
if(gameState==="play"){
    bg1.visible = true
    play.visible = true
}
    drawSprites();
}



