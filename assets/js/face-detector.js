let video = document.getElementById("video");
let model;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const setUpCamera = () => {
  navigator.mediaDevices.getUserMedia({
    video: { width: 600, height: 400 },
    audio: false,
  }).then(stream => {
    video.srcObject = stream;
  })
}

const detectFaces = async () => {
  const prediction = await model.estimateFaces(video, false);
  console.log("hiii")
  console.log(prediction);
  ctx.drawImage(video, 0, 0, 600, 400)
  prediction.forEach((e) => {
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "purple"
    ctx.rect(
      e.topLeft[0],
      e.topLeft[1],
      e.bottomRight[0] - e.topLeft[0],
      e.bottomRight[1] - e.topLeft[1]

    );
    ctx.stroke();
    ctx.fillStyle = "#d24";
    e.landmarks.forEach((landmark) => {
      ctx.fillRect(landmark[0], landmark[1], 5, 5);
    }
    );
  })
}
document.getElementById("btn").addEventListener("click", () => {
  if (document.getElementById("btn").innerHTML == "Close Webcam") {
    canvas.style.display = "none";
    const mediaStream = video.srcObject;
    const tracks = mediaStream.getTracks();
    tracks.forEach(track => track.stop())
    document.getElementById("btn").innerHTML = "Open Webcam";
    console.log(document.getElementById("btn").style);
  }
  else if (document.getElementById("btn").innerHTML == "Open Webcam") {
    document.getElementById("btn").innerText = "Wait for a few seconds...";
    setUpCamera();
    video.addEventListener("loadeddata", async () => {
      canvas.style.display = "block";
      model = await blazeface.load();
      setInterval(detectFaces, 40);
      document.getElementById("btn").innerText = "Close Webcam";
    });
  }
});
