// Buttons

let freeWriteButton = document.getElementById("freeWriteButton");
let calculatorButton = document.getElementById("calculatorButton");
let faceOrCrossButton = document.getElementById("faceOrCrossButton");
let colorPickerButton = document.getElementById("colorPickerButton");
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
    window.open("/face-or-cross/facre-or-cross.html");
});

colorPickerButton.addEventListener('click', function() {
    alert("En desarrollo");
});

virtualAssistantButton.addEventListener('click', () => {
    window.open("https://skeletoos57.github.io/mora");
});