document.querySelector("#team-link").addEventListener("mouseenter", function() {
    document.querySelector("#intro-image").style.height = "36vw";
    document.querySelector("#intro-image").style.marginTop = "-4vw";
});

document.querySelector("#team-link").addEventListener("mouseleave", function() {
    document.querySelector("#intro-image").style.height = "35vw";
    document.querySelector("#intro-image").style.marginTop = "-3vw";
});

document.querySelector("#team-link").addEventListener("mouseleave", function() {
    document.querySelector("#intro-image").style.height = ""; // Reset to original height
});
