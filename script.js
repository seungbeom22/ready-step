const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const result = document.getElementById("result");
const balls = document.getElementById("balls");
const strikes = document.getElementById("strikes");
const speed = document.getElementById("speed");

let ballCount = 0;
let strikeCount = 0;

async function startCamera(){

    try{

        const stream = await navigator.mediaDevices.getUserMedia({
            video:{
                facingMode:"environment",
                width:{ideal:1280},
                height:{ideal:720}
            },
            audio:false
        });

        video.srcObject = stream;

    }catch(e){

        alert("카메라 권한을 허용해주세요.");

    }

}

video.addEventListener("loadedmetadata",()=>{

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    draw();

});

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    requestAnimationFrame(draw);

}

startCamera();
