const controlsDiv = document.getElementById("controls");
const howManyParagraph = document.createElement("p");
howManyParagraph.textContent = "How many numbers in the grid?";
controlsDiv.appendChild(howManyParagraph);

const gridInputBox = document.createElement("input");
gridInputBox.type = "text";
gridInputBox.style.width = "50px";
controlsDiv.appendChild(gridInputBox);

const createGridButton = document.createElement("button");
createGridButton.textContent = "Create";
controlsDiv.appendChild(createGridButton);