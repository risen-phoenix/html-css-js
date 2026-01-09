const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.id = sound;
    btn.innerText = (sound.charAt(0).toUpperCase() + sound.slice(1));

    document.getElementById('buttons').appendChild(btn);

    btn.addEventListener("click", function() {
        stopSong();
        let audio = document.getElementById(sound);
        audio.play();
    })
})

stopSong = () => {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })   
}