document.addEventListener("keydown", (e) => {
    console.log(e.code);
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
})