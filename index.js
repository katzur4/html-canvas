const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext('2d');

function getsize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
getsize();
window.addEventListener("resize", () =>{
    
    getsize();
    drawCircle;
    drawRect;

    })

function drawCircle(x, y, i, j, angle,d){
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x,y,i,j,Math.PI * angle, d);
    ctx.stroke();
    ctx.fill();
}

function drawRect(x,y,w,h){
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.rect(x,y,w,h);
    ctx.stroke();
    ctx.fill();
    
}
drawRect(100, 40, 100, 250);
drawCircle(145, 110 , 100, 0, 1, true);
drawCircle(100,300 ,50 , 0, 2);
drawCircle(200, 300, 50, 0, 2);

console.log(ctx)

