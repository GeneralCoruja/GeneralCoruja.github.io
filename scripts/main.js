const DEFAULT_BRUSH_COLOR = '#000000';
var lastMousePos = null; 

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    stroke(DEFAULT_BRUSH_COLOR);
    strokeWeight(10);
    
    if(mouseIsPressed){
        point(mouseX, mouseY);
        if(lastMousePos != null){
            line(lastMousePos[0], lastMousePos[1], mouseX, mouseY);
        }
        lastMousePos = [mouseX, mouseY];
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function mouseReleased(){
    lastMousePos = null;
}