function soundPlay(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`)
    if(!audio) return; // Do nothing
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}

function removeTransition(e) {
    if(e.propertyName !== "transform") return; 
    this.classList.remove("playing");
}


const drumSet = document.querySelectorAll(".circle"); 
drumSet.forEach( key => key.addEventListener("transitionend", removeTransition));

function domEvents() {
    // snare
    const snare = document.querySelector(".snare");
    snare.addEventListener("mouseenter", function(e) {
        snare.style.transition = "all 2s";
        document.querySelector(".snare .key").textContent = "snare";
        snare.style.transform = "scale(1.1)"; 
    })

    snare.addEventListener("mouseleave", function(e) {
        snare.style.transition = "";
        document.querySelector(".snare .key").textContent = "D";
        snare.style.transform = ""
    })

    // kick
    const kick = document.querySelector(".kick");
    kick.addEventListener("mouseenter", function(e) {
        kick.style.transition = "all 2s";
        document.querySelector(".kick .key").textContent = "kick";
        kick.style.transform = "scale(1.1)"; 
    })

    kick.addEventListener("mouseleave", function(e) {
        kick.style.transition = "";
        document.querySelector(".kick .key").textContent = "spacebar";
        kick.style.transform = ""
    })

    //crash-cymbal
    const crashCymbal = document.querySelector(".crash-cymbal");
    crashCymbal.addEventListener("mouseenter", function(e) {
        crashCymbal.style.transition = "all 2s";
        document.querySelector(".crash-cymbal .key").textContent = "crash-cymbal";
        crashCymbal.style.transform = "scale(1.1)"; 
    })

    crashCymbal.addEventListener("mouseleave", function(e) {
        crashCymbal.style.transition = "";
        document.querySelector(".crash-cymbal .key").textContent = "S";
        crashCymbal.style.transform = ""
    })

    // high-tom
    const highTom = document.querySelector(".high-tom");
    highTom.addEventListener("mouseenter", function(e) {
        highTom.style.transition = "all 2s";
        document.querySelector(".high-tom .key").textContent = "high-tom";
        highTom.style.transform = "scale(1.1)"; 
    })

    highTom.addEventListener("mouseleave", function(e) {
        highTom.style.transition = "";
        document.querySelector(".high-tom .key").textContent = "F";
        highTom.style.transform = ""
    })

    //mid-tom
    const midTom = document.querySelector(".mid-tom");
    midTom.addEventListener("mouseenter", function(e) {
        midTom.style.transition = "all 2s";
        document.querySelector(".mid-tom .key").textContent = "mid-tom";
        midTom.style.transform = "scale(1.1)"; 
    })

    midTom.addEventListener("mouseleave", function(e) {
        midTom.style.transition = "";
        document.querySelector(".mid-tom .key").textContent = "J";
        midTom.style.transform = ""
    })

    //floor-tom 
    const floorTom = document.querySelector(".floor-tom");
    floorTom.addEventListener("mouseenter", function(e) {
        floorTom.style.transition = "all 2s";
        document.querySelector(".floor-tom .key").textContent = "floor-tom";
        floorTom.style.transform = "scale(1.1)"; 
    })

    floorTom.addEventListener("mouseleave", function(e) {
        floorTom.style.transition = "";
        document.querySelector(".floor-tom .key").textContent = "K";
        floorTom.style.transform = ""
    })

    //hihats
    const hihats = document.querySelector(".hihats");
    hihats.addEventListener("mouseenter", function(e) {
        hihats.style.transition = "all 2s";
        document.querySelector(".hihats .key").textContent = "hihats";
        hihats.style.transform = "scale(1.1)"; 
    })

    hihats.addEventListener("mouseleave", function(e) {
        hihats.style.transition = "";
        document.querySelector(".hihats .key").textContent = "A";
        hihats.style.transform = ""
    })

    //ride
    const ride = document.querySelector(".ride");
    ride.addEventListener("mouseenter", function(e) {
        ride.style.transition = "all 2s";
        document.querySelector(".ride .key").textContent = "ride";
        ride.style.transform = "scale(1.1)"; 
    })

    ride.addEventListener("mouseleave", function(e) {
        ride.style.transition = "";
        document.querySelector(".ride .key").textContent = "L";
        ride.style.transform = ""
    })

    
} 
domEvents();

document.addEventListener("keydown", soundPlay);    