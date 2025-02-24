const DEFAULT_BRUSH_COLOR = '#000000';
var lastMousePos = null;
var isMobile = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
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
    resizeCanvas(windowWidth, windowHeight);
}


function mouseReleased() {
    lastMousePos = null;
}

function touchEnded(){
    lastMousePos = null;
}