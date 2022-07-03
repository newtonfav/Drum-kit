document.addEventListener("keydown", (e) => {
    console.log(e.code);
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    console.log(audio)
})