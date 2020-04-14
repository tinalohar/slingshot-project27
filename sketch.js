const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    var engine,world;
    var pendulum;
    var holder ,chain;

    function setup(){
      createCanvas(400,400);
      // create an engine
      engine = Engine.create();
      world=engine.world;
    
      // create two boxes and a ground
      
      pendulum = Bodies.circle(mouseY,300,50);
      World.add(world, pendulum);
      holder = Bodies.rectangle(200, 50, 100,20, { isStatic: true });

      // add all of the bodies to the world
     
      World.add(world, holder);
      var options={
        bodyA:holder,
        bodyB:pendulum,
        length:100,
        stiffness:0.04
      }
      chain=Matter.Constraint.create(options);
      World.add(world,chain);
     
    }
    function draw(){
      background("red")
      Engine.update(engine);
      fill("white");
      rectMode(CENTER);
      rect(holder.position.x,holder.position.y,100,20);
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(pendulum.position.x,pendulum.position.y,50,50);
      strokeWeight(3);
      line(holder.position.x,holder.position.y,pendulum.position.x,pendulum.position.y);

    }
    