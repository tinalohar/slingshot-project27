const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    var engine,world;
    var ground1;
    var chain;
    var box,box1,box2,box3,box4,box5;
    var box6,box7,box8,box9,box10,box11;

    var ground,ball;
    function setup(){
      createCanvas(400,400);
      // create an engine
      engine = Engine.create();
      world=engine.world;
      box=new Box(250,300,"blue");
      box1=new Box(270,300,"green");
      box2=new Box(260,270,"yellow");
      box3=new Box(250,320,"pink");
      box4=new Box(270,320,"white");
      ground=Bodies.rectangle(250,340,100,20,{isStatic:true});
      World.add(world,ground);
      //ball=new Box(100,300,"red");
      ball=Bodies.polygon(100,300,5,10);
      World.add(world,ball);

        box6=new Box(250,170,"blue");
      box7=new Box(270,170,"green");
      box8=new Box(260,130,"yellow");
      box9=new Box(250,180,"pink");
      box10=new Box(270,180,"white");
      ground1=Bodies.rectangle(270,220,100,20,{isStatic:true});
      World.add(world,ground1);
      console.log(ball.vertices);
    
      var options={
        bodyA:ball,
        pointB:{x:100,y:300},
        length:7,
        stiffness:0.04
      }
      chain=Matter.Constraint.create(options);
      World.add(world,chain); 
      
     
    }
    function draw(){
      background("black")
      //circle(200,200);
      Engine.update(engine);
      box.show();
      box1.show();
      box2.show();
      box3.show();
      box4.show(); 
      //ball.show();
      box6.show();
      box7.show();
      box8.show();
      box9.show();
      box10.show();
      rectMode(CENTER);    
    rect(ground.position.x,ground.position.y,120,20);
    rectMode(CENTER);    
    rect(ground1.position.x,ground1.position.y,120,20);

    stroke("yellow");
   line(ball.position.x,ball.position.y,100,300);

     var ver = ball.vertices;
     console.log(ver[0].x,ver[0].y)
    fill("blue");
    noStroke();
    beginShape();
    vertex(ver[0].x,ver[0].y);
    vertex(ver[1].x,ver[1].y);
    vertex(ver[2].x,ver[2].y);
    vertex(ver[3].x,ver[3].y);
    vertex(ver[4].x,ver[4].y);
    endShape();
    
    }
    function mouseDragged(){
        Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
    }