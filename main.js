status="";
img="";
objects=[];
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: Loading Objects";
}
function modelLoaded(){
    console.log("modelloaded");
    status=true;
    objectdetector.detect(img,gotresult);
}
function gotresult(error,results){
if (error){
    console.log(error);
}
console.log(results);
objects=results;
}
function preload(){
    img=loadImage("hello.jpg");
}
function draw(){
    image(img,0,0,640,420);
   
    if (objectwrote != ""){
        document.getElementById("status").innerHTML="status : Object Found";
        for(i=0;i<objects.length;i++){
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        if (input="lion"){
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            noFill();
            stroke("#FF0000");
            rect(300, 300, 300, 300);  
        }
        if (input="elephant"){
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            noFill();
            stroke("#FF0000");
            rect(300, 300, 300, 300);  
        }
        if (input="tree"){
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            noFill();
            stroke("#FF0000");
            rect(300, 300, 300, 300);  
        }
    
    }
}