/*=====================================================
AGAROSE GEL ELECTROPHORESIS
Created by Manya Mathur
======================================================*/

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/*==============================
HEADER EFFECT
==============================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.background="rgba(0,15,30,.9)";

header.style.boxShadow="0 0 25px rgba(0,255,255,.2)";

}

else{

header.style.background="rgba(2,20,35,.6)";

header.style.boxShadow="none";

}

});


/*==============================
SCROLL REVEAL
==============================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:0.2

});

document.querySelectorAll(".glass,.gallery-box img,.quote h2").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition="1s";

observer.observe(el);

});


/*==============================
FLOATING HERO IMAGES
==============================*/

const images=document.querySelectorAll(".hero-images img");

images.forEach((img,index)=>{

setInterval(()=>{

img.style.transform="translateY("+

(Math.sin(Date.now()/700+index)*12)

+"px)";

},30);

});


/*==============================
TYPEWRITER TITLE
==============================*/

const heading=document.querySelector(".hero h1");

const originalText=heading.innerHTML.replace(/<br>/g,"\n");

heading.innerHTML="";

let i=0;

function typeWriter(){

if(i<originalText.length){

if(originalText.charAt(i)==="\n"){

heading.innerHTML+="<br>";

}

else{

heading.innerHTML+=originalText.charAt(i);

}

i++;

setTimeout(typeWriter,55);

}

}

typeWriter();


/*==============================
BUTTON GLOW
==============================*/

const button=document.querySelector(".button");

button.addEventListener("mouseenter",()=>{

button.style.boxShadow="0 0 20px cyan,0 0 60px cyan";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="none";

});


/*==============================
MOUSE GLOW
==============================*/

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="220px";
glow.style.height="220px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle,rgba(0,255,255,.18),transparent)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-110+"px";

glow.style.top=e.clientY-110+"px";

});


/*==============================
RANDOM LAB FLASH
==============================*/

setInterval(()=>{

document.body.style.filter="brightness(1.08)";

setTimeout(()=>{

document.body.style.filter="brightness(1)";

},180);

},12000);


/*==============================
PARTICLE MOVEMENT
==============================*/

const particles=document.getElementById("particles");

let position=0;

function moveParticles(){

position++;

particles.style.backgroundPosition=

`0 ${position}px,
0 ${position/2}px,
0 ${position/3}px`;

requestAnimationFrame(moveParticles);

}

moveParticles();


/*==============================
IMAGE HOVER EFFECT
==============================*/

images.forEach(img=>{

img.addEventListener("mousemove",(e)=>{

const rect=img.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

img.style.boxShadow=

`0 0 40px cyan,
0 0 80px rgba(0,255,255,.5),
${x/20}px ${y/20}px 40px rgba(255,255,255,.2)`;

});

img.addEventListener("mouseleave",()=>{

img.style.boxShadow="0 0 20px rgba(0,255,255,.3)";

});

});


/*==============================
WELCOME MESSAGE
==============================*/

console.log("%cWelcome to Manya's Agarose Gel Electrophoresis Website",

"color:cyan;font-size:18px;font-weight:bold;");
/*=====================================================
PART 2 : ADVANCED LAB ANIMATIONS
======================================================*/


/*==============================
LOADING SCREEN
==============================*/

window.addEventListener("load",()=>{

const loader=document.createElement("div");

loader.id="loader";

loader.innerHTML="<h1>Loading Laboratory...</h1>";

loader.style.position="fixed";
loader.style.top="0";
loader.style.left="0";
loader.style.width="100%";
loader.style.height="100%";
loader.style.background="#02101c";
loader.style.display="flex";
loader.style.justifyContent="center";
loader.style.alignItems="center";
loader.style.fontSize="35px";
loader.style.fontWeight="bold";
loader.style.color="#7efcff";
loader.style.zIndex="9999";

document.body.appendChild(loader);

setTimeout(()=>{

loader.style.transition="1s";
loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},1000);

},1500);

});


/*==============================
SCROLL PROGRESS BAR
==============================*/

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="5px";
progress.style.background="cyan";
progress.style.width="0%";
progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

progress.style.width=(winScroll/height)*100+"%";

});


/*==============================
DNA SYMBOL FLOATING
==============================*/

for(let i=0;i<20;i++){

const dna=document.createElement("div");

dna.innerHTML="🧬";

dna.style.position="fixed";
dna.style.left=Math.random()*100+"vw";
dna.style.top=Math.random()*100+"vh";
dna.style.fontSize=(20+Math.random()*25)+"px";
dna.style.opacity=".08";
dna.style.pointerEvents="none";
dna.style.animation=`floatDNA ${10+Math.random()*15}s linear infinite`;

document.body.appendChild(dna);

}


/*==============================
LAB BUBBLES
==============================*/

setInterval(()=>{

const bubble=document.createElement("div");

bubble.style.position="fixed";
bubble.style.width="10px";
bubble.style.height="10px";
bubble.style.borderRadius="50%";
bubble.style.background="rgba(0,255,255,.4)";
bubble.style.left=Math.random()*window.innerWidth+"px";
bubble.style.bottom="-20px";
bubble.style.pointerEvents="none";

document.body.appendChild(bubble);

let rise=0;

const animate=setInterval(()=>{

rise++;

bubble.style.bottom=rise+"px";

bubble.style.opacity=1-rise/700;

if(rise>700){

clearInterval(animate);

bubble.remove();

}

},10);

},400);


/*==============================
IMAGE CLICK ZOOM
==============================*/

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="85%";
image.style.maxHeight="85%";
image.style.borderRadius="20px";

overlay.appendChild(image);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});


/*==============================
RANDOM SCIENCE FACT
==============================*/

const facts=[

"DNA is negatively charged.",

"Agarose is extracted from seaweed.",

"TAE and TBE are common running buffers.",

"Loading dye makes DNA sink into wells.",

"DNA migrates toward the positive electrode."

];

setInterval(()=>{

console.log(

"%cScience Fact : "+facts[Math.floor(Math.random()*facts.length)],

"color:#7efcff;font-size:15px;"

);

},10000);


/*==============================
BACKGROUND COLOR SHIFT
==============================*/

let hue=190;

setInterval(()=>{

hue++;

document.body.style.backgroundColor=`hsl(${hue},60%,10%)`;

if(hue>220){

hue=190;

}

},300);


/*==============================
END MESSAGE
==============================*/

console.log(

"%cWebsite Designed by Manya Mathur",

"color:cyan;font-size:18px;font-weight:bold;"

);
