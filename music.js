/// Getting controllers

let playMusic = document.getElementById('playButton');
let stopMusic = document.getElementById('stopButton');

/// Creating Audio

let audio = new Audio('bgmusic.mp3');
audio.loop = true;
// audio.play();

/// Adding Listeners

playMusic.addEventListener('click', () => {
    if (!audio.paused) {
        alert("La musica ya se esta reproduciendo");
    }else{
        audio.play();
    }
});

stopMusic.addEventListener('click', () => {
    if (audio.paused) {
        alert("La musica ya esta pausada");
    }else{
        audio.pause();
    }
});