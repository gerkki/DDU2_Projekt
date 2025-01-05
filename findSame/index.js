function findSameNumber(n) {

    for (let numberBox of allNumbersBoxes) {
        if (numberBox.classList.contains("same_number")) {
            numberBox.classList.remove("same_number");
        }
    }

    let amountOfCopies = 0;

    for (let numberBox of allNumbersBoxes) {
        if (numberBox.textContent == n) {
            numberBox.classList.add("same_number");
            amountOfCopies++;
        }
    }

    sameTextP.textContent = `${amountOfCopies} copies of the number ${n}`;
}

const sameContainer = document.getElementById("same_controls");

const sameTextP = document.createElement("p");
sameTextP.textContent = "Click on a number to find copies";
sameContainer.appendChild(sameTextP);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
sameContainer.appendChild(resetButton);

numbersDiv.addEventListener("click", function (e) {
    const selectedNumber = e.target.textContent;
    findSameNumber(selectedNumber);
})

resetButton.addEventListener("click", function (e) {
    for (let numberBox of allNumbersBoxes) {
        if (numberBox.classList.contains("same_number")) {
            numberBox.classList.remove("same_number");
        }
    }
    sameTextP.textContent = "Click on a number to find copies";
})