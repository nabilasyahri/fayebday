function goMenu() {
    window.location.href = "menu.html";
}

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = (3 + Math.random() * 5) + "s";
    sparkle.style.opacity = Math.random();

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 8000);
}

setInterval(createSparkle, 300);
