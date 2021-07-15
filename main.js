function preload(){}

function setup(){
    canvas = createCanvas(380,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 100, 100, 200, 200);

    noStroke();
    fill('blue');
    ellipse(40, 40, 70, 50);
    ellipse(340, 40, 70, 50);
    ellipse(340, 340, 70, 50);
    ellipse(40, 340, 70, 50);

    stroke('grey');
    fill('red');
    triangle(340, 40, 320, 340, 360, 340);
    triangle(40, 40, 20, 340, 60, 340);
    
}

function takeSnapshot(){
    save('image.png');
}