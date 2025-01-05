const clearControlsContainer = document.getElementById("clear_controls");
const clearButton = document.createElement("button");
clearButton.textContent = "Fill Cleared";
clearControlsContainer.appendChild(clearButton);

numbersDiv.addEventListener("click", function (e) {
    const numberDiv = e.target;

    if (numberDiv.classList.contains("clicked")) {
        numberDiv.classList.remove("clicked");
        numberDiv.textContent = generateRandomNumber();
    } else {
        numberDiv.classList.add("clicked");
        numberDiv.textContent = " ";
    }
});

clearButton.addEventListener("click", function (e) {
    for (let numberBox of allNumbersBoxes) {
        if (numberBox.classList.contains("clicked")) {
            numberBox.classList.remove("clicked");
            numberBox.textContent = generateRandomNumber();
        }
    }
});