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