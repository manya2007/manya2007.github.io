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
loader.style.font
