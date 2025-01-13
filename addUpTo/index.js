const addUpControlsContainer = document.getElementById("add_up_controls");
const addUpP = document.createElement("p");
addUpP.textContent = "Add up to:"
addUpControlsContainer.appendChild(addUpP);

const numberInputBox = document.createElement("input");
numberInputBox.type = "text";
numberInputBox.style.width = "50px";
addUpControlsContainer.appendChild(numberInputBox);

const findButton = document.createElement("button");
findButton.textContent = "Find Two Cells that Add Up";
addUpControlsContainer.appendChild(findButton);

findButton.addEventListener("click", function (e) {

    for (let numberBox of allNumbersBoxes) {
        if (numberBox.classList.contains("green")) {
            numberBox.classList.remove("green");
        }
    }

    let inputNumber = parseInt(numberInputBox.value);

    for (let numberX of allNumbersBoxes) {
        for (let numberY of allNumbersBoxes) {
            if (numberX !== numberY) {
                let sum = parseInt(numberX.textContent) + parseInt(numberY.textContent);
                if (sum == inputNumber) {
                    numberX.classList.add("green");
                    numberY.classList.add("green");
                    return;
                }
            }
        }
    }
});