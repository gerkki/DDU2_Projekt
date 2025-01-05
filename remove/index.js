const removeControlsContainer = document.getElementById("remove_controls");

const newNumberButton = document.createElement("button");
newNumberButton.textContent = "New Random Number";
removeControlsContainer.appendChild(newNumberButton);

const newNumberDisplay = document.createElement("div");
newNumberDisplay.textContent = "-";
newNumberDisplay.classList.add("number_display");
removeControlsContainer.appendChild(newNumberDisplay);

const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeControlsContainer.appendChild(removeButton);

const removeNumberDisplay = document.createElement("div");
removeNumberDisplay.textContent = "-";
removeNumberDisplay.classList.add("remove_display");
removeControlsContainer.appendChild(removeNumberDisplay);

newNumberButton.addEventListener("click", function (e) {
    removeNumberDisplay.textContent = "-";
    newNumber = generateRandomNumber();
    newNumberDisplay.textContent = newNumber;

    for (let numberBox of allNumbersBoxes) {
        if (numberBox.classList.contains("orange")) {
            numberBox.classList.remove("orange");
        }
    }

    for (let numberBox of allNumbersBoxes) {
        if (numberBox.textContent == newNumber) {
            numberBox.classList.add("orange");
        }
    }

});

removeButton.addEventListener("click", function (e) {

    let number = newNumberDisplay.textContent;
    let amountOfTimes = 0;

    for (let numberBox of allNumbersBoxes) {
        if (numberBox.textContent == number) {
            numberBox.classList.add("red");
            numberBox.textContent = "X";
            amountOfTimes++;
        }
    }

    if (amountOfTimes == 0) {
        removeNumberDisplay.textContent = "Nothing to remove";
    } else {
        removeNumberDisplay.textContent = `${number} removed ${amountOfTimes} times`;
    }
});