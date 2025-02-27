const DEFAULT_BRUSH_COLOR = '#000000';
var lastMousePos = null;

function setup() {
    if(!mobileCheck() || windowWidth > 600){
        createCanvas(document.body.offsetWidth, document.body.offsetHeight);
    }
}

function draw() {
    pencilDraw();
}

function pencilDraw() {
    stroke(DEFAULT_BRUSH_COLOR);
    strokeWeight(10);
    if (mouseIsPressed) {
        point(mouseX, mouseY);
        if (lastMousePos != null) {
            line(lastMousePos[0], lastMousePos[1], mouseX, mouseY);
        }
        lastMousePos = [mouseX, mouseY];
    }
}


function windowResized() {
    resizeCanvas(document.body.offsetWidth, document.body.offsetHeight);
}


function mouseReleased() {
    lastMousePos = null;
}

function touchEnded(){
    lastMousePos = null;
}