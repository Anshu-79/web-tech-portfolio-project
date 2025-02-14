document.addEventListener("DOMContentLoaded", function () {
    const text = "Anshumaan Tanwar";
    const speed = 100;
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            document.querySelector(".name").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
});


const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 150;

for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random(),
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
    }
}

function animateStars() {
    for (let star of stars) {
        star.opacity = Math.random();
    }
    drawStars();
    setTimeout(animateStars, 1000);
}


drawStars();
animateStars();
