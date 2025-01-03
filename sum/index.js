function sumAllNumbersInGrid() {
    let sumAll = 0;
    for (let numberBox of allNumbersBoxes) {
        sumAll += parseInt(numberBox.textContent);
    }
    return sumAll;
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