class Rubber{
	constructor(x,y,r)
	{
	var options = {
        restitution:0.3,
        friction:5,
        density:1
	}
		this.x = x;
		this.y = y;
		this.r = r;		
        this.body = Bodies.circle(x,y,(r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberPosition = this.body.position;		
			push()
			translate(rubberPosition.x, rubberPosition.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			pop()
        }

}