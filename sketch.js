let cur = 0, schet = 0;
let n = 50;
let arr = [];
let rad;

function setup() 
{
	angleMode(DEGREES);
	createCanvas(windowWidth, windowHeight - 4);
	for (let i = 0; i < n; i++) 
	{
		let r = 0, g = 0, b = 0;
		arr[i] = new Cir(r, g, b);
		print(arr[i]);
	}
}

function draw()
{
	validCur();

	background(0);

	for(let i = 0; i < n; i++)
	{
		/*if(i == cur && schet <= 60)
		{
			arr[i].paintBubble(255);
			schet++;
		}
		else
		{*/
			arr[i].paint();
		//}
		arr[i].calcNextCords();
		arr[i].calcAngle();
	}
}
function validCur()
{
	if(cur == n) 
	{
		cur = 0;
	}
	if(cur == -1) 
	{
		cur = n - 1;
	}
}
function mousePressed()
{
	//let r = random(0, 255), g = random(0, 255), b = random(0, 255);
	//arr[n++] = new Cir(r, g, b);
}
function mouseWheel()
{
	schet = 0;
	cur++;
	print(cur);
}
function keyPressed() {
	schet = 0;
  	if (keyCode === LEFT_ARROW) 
  	{
   		cur--;
  	} 
  	else if (keyCode === RIGHT_ARROW) 
 	{
  		cur++;
 	}
	print(cur);
}
