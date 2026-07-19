const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x:300,
    y:200,
    size:30
};


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillRect(
        player.x,
        player.y,
        player.size,
        player.size
    );

    requestAnimationFrame(draw);
}

draw();
