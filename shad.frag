precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution.xy;

	gl_FragColor = vec4(0, 90, 220, 1.0);
}
