const navSection = document.querySelector("#nav-section");

const aboutScroll = document.querySelector("#about-nav");
const aboutHeader = document.querySelector("#about-nav-2");
const about = document.querySelector("#about");
const eventScroll = document.querySelector("#events-nav");
const eventHeader = document.querySelector("#events-nav-2");
const events = document.querySelector("#events");
const teamScroll = document.querySelector("#team-nav");
const teamHeader = document.querySelector("#team-nav-2");
const team = document.querySelector("#team");

document.querySelector("#team-nav").addEventListener("mouseenter", function() {
    if (window.matchMedia("(orientation: landscape)").matches){
        document.querySelector("#intro-image").style.height = "36.5vw";
        document.querySelector("#intro-image").style.paddingTop = "0.5vw";
    }
});

document.querySelector("#team-nav").addEventListener("mouseleave", function() {
    document.querySelector("#intro-image").style.paddingTop = "";
    document.querySelector("#intro-image").style.height = ""; // Reset to original height
});

function displayAbout(){
    about.style.display = "block";
    events.style.display = "none";
    team.style.display = "none";

    aboutHeader.classList.add("selected");
    eventHeader.classList.remove("selected");
    teamHeader.classList.remove("selected");

    navSection.scrollIntoView({
        behavior: "smooth"
    });
}

function displayEvents(){
    about.style.display = "none";
    events.style.display = "block";
    team.style.display = "none";

    aboutHeader.classList.remove("selected");
    eventHeader.classList.add("selected");
    teamHeader.classList.remove("selected");

    navSection.scrollIntoView({
        behavior: "smooth"
    });
}

function displayTeam(){
    about.style.display = "none";
    events.style.display = "none";
    team.style.display = "block";

    aboutHeader.classList.remove("selected");
    eventHeader.classList.remove("selected");
    teamHeader.classList.add("selected");

    navSection.scrollIntoView({
        behavior: "smooth"
    });
}

aboutScroll.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default jump
    
    navSection.style.display = "block";
    displayAbout();
});

aboutHeader.addEventListener("click", function() {
    displayAbout();
});

eventScroll.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default jump
    
    navSection.style.display = "block";
    displayEvents();
});

eventHeader.addEventListener("click", function() {
    displayEvents();
});

teamScroll.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default jump
    
    navSection.style.display = "block";
    displayTeam();
});

teamHeader.addEventListener("click", function() {
    displayTeam();
});