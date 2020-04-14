class Box{
    constructor(x,y,color){

        var options={
            friction:1.0,
            restitution:0.6,
            density:1
        }
        this.body=Bodies.rectangle(x,y,20,20,options);
        this.w=20;
        this.h=20;
        this.color=color;
        World.add(world,this.body);

    }

    show(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }

}