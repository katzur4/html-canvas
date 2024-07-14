const canvas = document.getElementById("canvas1");

const ctx = canvas.getContext('2d');
const particlesArray = [];

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

// function drawCircle(x, y, i = 50, j = 0, angle = 2,d){
//     ctx.fillStyle = 'blue';
//     ctx.strokeStyle = 'red';
//     ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.arc(x,y,i,j,Math.PI * angle, d);
//     ctx.stroke();
//     ctx.fill();
// }

function drawRect(x,y,w,h){
    ctx.fillStyle = 'blue';
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.rect(x,y,w,h);
    ctx.stroke();
    ctx.fill();
    
}

// drawRect(100, 40, 100, 250);
// drawCircle(145, 110 , 100, 0, 1, true);
// drawCircle(100,300 ,50 , 0, 2);
// drawCircle(200, 300, 50, 0, 2);

const mouse = {
    x: null,
    y: null,
}

canvas.addEventListener("click", e =>{
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    // mouse.x = e.x;
    // mouse.y = e.y;
    // drawCircle(mouse.x, mouse.y);
});

canvas.addEventListener("mousemove", e =>{
    mouse.x = e.x;
    mouse.y = e.y;
//     drawCircle(mouse.x, mouse.y);
});

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);

}
animate();

class Particle{
    constructor(){
        this.x = Math.random () * canvas.width;
        this.y = Math.random () * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(){
        ctx.fillStyle = 'blue';
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 50 ,0 ,Math.PI * 2);
        ctx.stroke();
        ctx.fill(); 
    }
}

function init(){
    for (let i = 0; i < 100; i++){
        particlesArray.push(new Particle());
    }
}
init();

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}




console.log(ctx)
console.log(particlesArray)

//https://www.youtube.com/watch?v=Yvz_axxWG4Y&list=PLYElE_rzEw_v8TXJ_ITSSBP_ypUKfQ7K-