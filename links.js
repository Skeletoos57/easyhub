// Buttons

let freeWriteButton = document.getElementById("freeWriteButton");
let calculatorButton = document.getElementById("calculatorButton");
let faceOrCrossButton = document.getElementById("faceOrCrossButton");
let passwordGeneratorButton = document.getElementById("passwordGeneratorButton");
let virtualAssistantButton = document.getElementById("virtualAssistantButton");

/// Listeners

// Aplications Buttons 
freeWriteButton.addEventListener('click', function() {
    alert("En desarrollo");
});

calculatorButton.addEventListener('click', function() {
    alert("En desarrollo");
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
