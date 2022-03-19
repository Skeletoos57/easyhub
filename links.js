// Buttons

let freeWriteButton = document.getElementById("freeWriteButton");
let calculatorButton = document.getElementById("calculatorButton");
let faceOrCrossButton = document.getElementById("faceOrCrossButton");
let passwordGeneratorButton = document.getElementById("passwordGeneratorButton")
let virtualAssistantButton = document.getElementById("virtualAssistantButton");
let counterButton = document.getElementById("counterButton");
let watchButton = document.getElementById("watchButton");
let easyTubeButton = document.getElementById("easyTubeButton");
let generateColorsButton = document.getElementById("generateColorsButton");

/// Listeners

// Aplications Buttons 
freeWriteButton.addEventListener('click', function() {
    alert("En desarrollo");
});

calculatorButton.addEventListener('click', function() {
    window.open("https://skeletoos57.github.io/the-impossible-writing");
});

faceOrCrossButton.addEventListener('click', function() {
    window.open("https://skeletoos57.github.io/face-or-cross");
});

passwordGeneratorButton.addEventListener('click', function() {
    window.open("https://skeletoos57.github.io/password-generator");
});

virtualAssistantButton.addEventListener('click', () => {
    window.open("https://skeletoos57.github.io/mora");
});

counterButton.addEventListener('click', () => {
    window.open("https://skeletoos57.github.io/counter");
})

watchButton.addEventListener('click', () => {
    window.open("https://skeletoos57.github.io/watch");
})

easyTubeButton.addEventListener('click', () => {
    window.open("https://skeletoos57.github.io/easytube");
})

generateColorsButton.addEventListener('click', () => {
    window.open("https://skeletoos57.github.io/generate-color");
})
