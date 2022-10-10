Status = "";
desk_image = "";

function preload(){
    desk_image = loadImage("desk.avif");
}
function setup(){
    canvas = createCanvas(640,350);
    canvas.position(400,200);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(desk_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(desk_image,0,0,640,350);
}

function back()
{
    window.location = "index.html";
}