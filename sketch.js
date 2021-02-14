const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    var box_options={
        restitution:0.5
    }
box=Bodies.circle(220,220,40,box_options);
   World.add(world,box);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("indigo")
   circle(box.position.x,box.position.y,40);
}
