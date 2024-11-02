document.querySelector("#team-nav").addEventListener("mouseenter", function() {
    document.querySelector("#intro-image").style.height = "37vw";
    document.querySelector("#intro-image").style.marginTop = "-5vw";
});

document.querySelector("#team-nav").addEventListener("mouseleave", function() {
    document.querySelector("#intro-image").style.marginTop = "-3vw";
    document.querySelector("#intro-image").style.height = ""; // Reset to original height
});
