// Get references to the color input and the color display element
const colorInput = document.getElementById("color-input");
const colorDisplay = document.getElementById("color-display");

// Add an event listener to the color input
colorInput.addEventListener("input", function () {
    const selectedColor = colorInput.value;
    colorDisplay.style.backgroundColor = selectedColor;
    colorDisplay.textContent = selectedColor;
});