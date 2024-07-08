class Cir {
 	constructor(r, g, b) 
 	{
 		this.r = r;
 		this.g = g;
 		this.b = b;
		this.minD = 90; this.maxD = 200;
		//this.r = random(0, 255), this.g = random(0, 255), this.b = random(0, 255);
		this.x = random(this.maxD, width - this.maxD);
		this.y = random(this.maxD, height - this.maxD);
		this.a = random(0, 359);
		this.d = random(this.minD, this.maxD);
		this.v = map(this.d, this.maxD, 90, 2, 6);
  	}
  	paint()
  	{
		stroke(255, 100);
		strokeWeight(3);
  		fill(this.r, this.g, this.b, 100);
		circle(this.x, this.y, this.d);
  	}
  	calcNextCords()
  	{
  		this.vx = this.v * cos(this.a); 
		this.vy = - this.v * sin(this.a); 
		this.x += this.vx;
		this.y += this.vy;
  	}
  	calcAngle()
  	{
  		this.rad = this.d / 2;
		if(this.x >= width - this.rad || this.x <= this.rad)
		{
			this.a = 180 - this.a;
		}
		else if(this.y >= height - this.rad || this.y <= this.rad)
		{
			this.a = 360 - this.a;
		}
  	}
}
