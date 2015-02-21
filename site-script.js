var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var g = 0.1;
var radius = 20;
var color = "#0000ff";
var balls;
var numBalls = 5;
canvas.width = 800;
canvas.height = 500;

window.onload = init;

function Ball (radius, color) {
    this.radius = radius;
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
}

Ball.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
    ctx.closePath();
    ctx.fill();
};


function init() {

    balls = new Array();
    for (var i = 0; i < numBalls; i++){

        var ball = new Ball(radius,color);
        ball.x = 50;
        ball.y = 75;
        ball.vx = Math.random()*5;
        ball.vy = (Math.random()-0.5)*4;
        ball.draw(ctx);
        balls.push(ball);

        console.log(balls);

    }

    setInterval(onEachStep, 1000/60); // 60 fps

};

function onEachStep() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i=0; i<numBalls; i++){
        var ball = balls[i];
        ball.vy += g;

        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.y > canvas.height - radius){
            ball.y = canvas.height - radius;
            ball.vy *= -0.8;
        }
        if (ball.x > canvas.width + radius){
            ball.x = -radius;
        }
        ball.draw(ctx);
    }
};


 