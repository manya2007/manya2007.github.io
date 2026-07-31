/* ======================================
   Manya Mathur Portfolio
   File: script.js
====================================== */

// Typing Animation

const typingElement = document.getElementById("typing");

const words = [
    "Life Sciences Student",
    "Biology Enthusiast",
    "Future Researcher",
    "Digital Artist",
    "Creative Designer",
    "Web Development Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ===============================
// Dark / Light Mode
// ===============================

const themeBtn = document.getElementById("theme-btn");

let dark = true;

themeBtn.addEventListener("click", () => {

    if (dark) {

        document.body.style.background =
            "linear-gradient(135deg,#ffffff,#f5f5f5,#ffffff)";

        document.body.style.color = "#111";

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    } else {

        document.body.style.background =
            "linear-gradient(135deg,#0f172a,#1e293b,#0f172a)";

        document.body.style.color = "white";

        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

    }

    dark = !dark;

});


// ===============================
// Cursor Effect
// ===============================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// ===============================
// Scroll Animation
// ===============================

const hiddenElements = document.querySelectorAll(
    "section,.goal-card,.timeline-box,.skill,.card,.contact-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

hiddenElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "all 0.8s ease";

    observer.observe(element);

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Image Hover Effect
// ===============================

const image = document.querySelector(".hero-right img");

image.addEventListener("mouseenter", () => {

    image.style.transform = "scale(1.05) rotate(2deg)";

});

image.addEventListener("mouseleave", () => {

    image.style.transform = "scale(1) rotate(0deg)";

});


// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", () => {

    console.log("Welcome to Manya Mathur's Portfolio!");

});


// ===============================
// Smooth Button Click Animation
// ===============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(0.95)";

        setTimeout(() => {

            btn.style.transform = "scale(1)";

        }, 150);

    });

});


// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Manya Mathur | Made with ❤️ using HTML, CSS & JavaScript`;
