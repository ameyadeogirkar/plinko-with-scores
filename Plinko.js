class Plinko{
    constructor(x, y){
        var options = {
            isStatic:true,
            'restitution':9
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 10, options);
        this.color = color("cyan");
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10, 10);
    }
}