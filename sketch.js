const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
var ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options={restitution:0.5}

   object= Bodies.rectangle(200,390,200,20);
    World.add(world,object);
    ball=Bodies.circle(100,50,30,ball_options)
    World.add(world,ball)

   ground = Bodies.rectangle(200,380,400,5,ground_options)
World.add(world,ground)

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
rect(ground.position.x,ground.position.y,400,5)
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30,30)
}

