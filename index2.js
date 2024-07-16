//attempt 2 for particles 
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const particlesArray = [];
let hue = 0;


function getsize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
getsize();


window.addEventListener("resize", (e) =>{
    getsize;
});

const mouse = {
    x : null,
    y : null,
}

setInterval(()=> {

    mouse.x = getRandomIntInclusive(canvas.width, 0);
    mouse.y = getRandomIntInclusive(0, canvas.width);;
    for(let i = 0; i < 5; i++){
        particlesArray.push(new Particle());
    }
},100);

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }


canvas.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    for(let i = 0; i < 5; i++){
        particlesArray.push(new Particle());
    }
   
});

class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue}, 100%, 50%)`;   
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2 ) this.size -= 0.1;
    }
}

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].draw();
        particlesArray[i].update();
        for (let j = i; j < particlesArray.length; j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].x - particlesArray[j].x;;
            const distance = Math.sqrt(dx * dx + dy * dy );
            if( distance < 100 ){
                ctx.strokeStyle = particlesArray[i].color;
                // ctx.lineWidth = particlesArray[i].size / 10;
                ctx.beginPath();
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                ctx.stroke();
                ctx.closePath();
            }
        }
        if(particlesArray[i].size <= 0.3){
            particlesArray.splice(i, 1);
            i--;
        }
    }
}


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = 'rgba(0 ,0 ,0 ,0.02)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue+=2;
    requestAnimationFrame(animate);
}
animate();

console.log(canvas);
console.log(ctx);
console.log(particlesArray)

