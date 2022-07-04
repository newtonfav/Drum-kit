function soundPlay(e) {
    console.log(e.code);
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    if(!audio) return; // Do nothing
    audio.currentTime = 0;
    audio.play();
}
document.addEventListener("keydown", soundPlay);