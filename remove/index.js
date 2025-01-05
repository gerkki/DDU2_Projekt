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