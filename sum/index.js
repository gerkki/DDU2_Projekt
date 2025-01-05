function sumAllNumbersInGrid() {
    let sumAll = 0;
    for (let numberBox of allNumbersBoxes) {
        sumAll += parseInt(numberBox.textContent);
    }
    return sumAll;
}

function sumMarkedNumbersInGrid() {

}

const sumAllContainer = document.getElementById("sum_all_controls");
const sumAllP = document.createElement("p");
sumAllP.textContent = "Sum of all:";
sumAllContainer.appendChild(sumAllP);

const sumAllBox = document.createElement("div");
sumAllBox.textContent = "-";
sumAllContainer.appendChild(sumAllBox);

createGridButton.addEventListener("click", function e() {
    newTotalSum = sumAllNumbersInGrid();
    sumAllBox.textContent = newTotalSum;
});

const sumMarkedContainer = document.getElementById("sum_marked_controls");
const sumMarkedP = document.createElement("p");
sumMarkedP.textContent = "Sum of marked:";
sumMarkedContainer.appendChild(sumMarkedP);

const sumMarkedBox = document.createElement("div");
sumMarkedBox.textContent = "-";
sumMarkedContainer.appendChild(sumMarkedBox);


numbersDiv.addEventListener("click", function (e) {
    const numberDiv = e.target
    numberDiv.classList.add("marked");
});