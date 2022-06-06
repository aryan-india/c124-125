
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log('poseNet loaded')
}

function draw() {

    background('cyan')
    fill("blue")
    textSize(difference)
    text("Aryan", 200, 200)
    document.getElementById("font_size").innerHTML="Text size is: "+ difference+"px"

}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
    }

}