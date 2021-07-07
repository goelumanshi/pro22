var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	//load animation for fairy here
	fairySound = loadSound("joyMusic.mp3");
}

function setup() {
	createCanvas(1100, 790);

	fairySound.play();
	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(630,60);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(230,470);
	fairy.addAnimation("flyingfairy",fairyImg);
	fairy.scale = 0.3;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

  if (star.y > 470 && starBody.position.y > 470) {
	Matter.Body.setStatic(starBody,true); 
}

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyCode === RIGHT_ARROW) {
		fairy.x= fairy.x+20;
	}
    if (keyCode === LEFT_ARROW) {
		fairy.x= fairy.x-20;
	}
    

	//writw code to move fairy left and right
	
}
