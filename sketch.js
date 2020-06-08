var shad;
var off;
var look_val;

function preload(){
	shad = loadShader('shad.vert', 'shad.frag');
}

function setup(){
	createCanvas(768, 768, WEBGL);
	off = false;
	look_val = 1;
	uplook_val = 1;
}

function draw(){
	background(0);
	camera(cos(look_val)*300, uplook_val*20, sin(look_val)*300, 0, 0, 0, 0, 1, 0);

	stroke(0);
	fill(200, 0, 0);
	translate(0, 0, 0);
	//rotateY(frameCount/5);
	box(50, 50, 50);

	noStroke();

	if(!off){
		shader(shad);
		shad.setUniform("u_resolution", [width, height]);
		shad.setUniform("u_time", frameCount*0.01);
		shad.setUniform("u_mouse", [mouseX, mouseY]);
	}

	sphere(50);
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		look_val++;
	}
	if(keyCode === LEFT_ARROW){
		look_val--;
	}
	if(keyCode === UP_ARROW){
		uplook_val++;
	}
	if(keyCode === DOWN_ARROW){
		uplook_val--;
	}
}
