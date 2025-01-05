function generateRandomNumber() {
    return Math.floor(Math.random() * 99) + 1;
}

function generateGrid() {
    numbersDiv.innerHTML = "";
    for (let i = 0; i < gridInputBox.value; i++) {
        let numberBox = document.createElement("div");
        let randomNumber = generateRandomNumber();
        numberBox.textContent = randomNumber;
        numberBox.classList.add("numbers_default");
        numbersDiv.appendChild(numberBox);
    }
}

const nav = document.createElement("nav");
nav.className = "menu";

const homeLink = document.createElement("a");
homeLink.href = "../index.html";
homeLink.textContent = "Home";
nav.appendChild(homeLink);
document.body.insertBefore(nav, document.body.firstChild);

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

const numbersDiv = document.getElementById("numbers");
const allNumbersBoxes = document.getElementById("numbers").children;

createGridButton.addEventListener("click", function e() {
    generateGrid();
});