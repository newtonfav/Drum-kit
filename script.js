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
document.addEventListener("keydown", soundPlay);    