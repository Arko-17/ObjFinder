status="";
video="";
object=[];
objects=[];
function draw(){
    image(video,50,50,480,380);
    if(status !=""){
        objectDetector.detect(video,gotResult);
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="Status: Object has been detected";
            document.getElementById("objectcount").innerHTML="No. of objects detected are: "+object.length;
            objectname=document.getElementById("objname");
    
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+" %",object[i].x+15,object[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height,);
            object=objects;
            video.stop();
            objectDetector.detect(gotResult);
         if (object.label=objectname);
         {
             document.getElementById("status").innerHTML="Object Detected";
             video.stop();
         }
       }
    }
    }
function setup(){
canvas=createCanvas(480,380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(480,380);
}
function begin(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
document.getElementById("objname").value;
}
function modelLoaded(){
console.log("The model has been loaded thank you for your patience (:");
status=true;
}
function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        object=results;
    }
}