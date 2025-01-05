const sameContainer = document.getElementById("same_controls");

const sameTextP = document.createElement("p");
sameTextP.innerHTML = "Click on a number to find copies";
sameContainer.appendChild(sameTextP);

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
sameContainer.appendChild(resetButton);