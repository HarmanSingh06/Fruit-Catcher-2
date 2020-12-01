class Drop{
    constructor(x,y){
        var options={
            friction: 0.1,
            density: 1,
        }

        this.x=x;
        this.y=y;
        this.radius = 10
        
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }

    display(){
        push()
        fill("blue")
        
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.radius,this.radius+10);
        pop();
    }
}
