function soundPlay(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    if(!audio) return; // Do nothing
    audio.currentTime = 0;
    audio.play();
}
document.addEventListener("keydown", soundPlay);    