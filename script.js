function scrollToBlog(){

document.getElementById("blog").scrollIntoView({

behavior:"smooth"

});

}

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 15px 30px rgba(123,44,191,.3)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="0 10px 20px rgba(0,0,0,.08)";

});

});

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.background="#ffffff";

}

else{

header.style.background="white";

}

});
