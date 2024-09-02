document.getElementById("submitBtn").onclick = function() {
    let side1Select = document.getElementById("1Select").value;
    let side2Select = document.getElementById("2Select").value;
    let side1Value = Number(document.getElementById("1TxtBox").value);
    let side2Value = Number(document.getElementById("2TxtBox").value);

    if (isNaN(side1Value) || isNaN(side2Value)) {
        alert("Please enter valid numbers for the sides.");
        return;
    }

    let result;
    let resultLabel = document.getElementById("3Label");

    if ((side1Select === "A" && side2Select === "B") || (side1Select === "B" && side2Select === "A")) {
        // Calculate Side C when A and B are provided
        result = Math.sqrt(Math.pow(side1Value, 2) + Math.pow(side2Value, 2));
        resultLabel.innerHTML = "Side C: " + result.toFixed(2);
    } else if ((side1Select === "A" && side2Select === "C") || (side1Select === "C" && side2Select === "A")) {
        // Calculate Side B when A and C are provided
        if (side1Select === "C" && side1Value <= side2Value || side2Select === "C" && side2Value <= side1Value) {
            alert("Side C must be the largest side.");
            return;
        }
        result = Math.sqrt(Math.pow(Math.max(side1Value, side2Value), 2) - Math.pow(Math.min(side1Value, side2Value), 2));
        resultLabel.innerHTML = "Side B: " + result.toFixed(2);
    } else if ((side1Select === "B" && side2Select === "C") || (side1Select === "C" && side2Select === "B")) {
        // Calculate Side A when B and C are provided
        if (side1Select === "C" && side1Value <= side2Value || side2Select === "C" && side2Value <= side1Value) {
            alert("Side C must be the largest side.");
            return;
        }
        result = Math.sqrt(Math.pow(Math.max(side1Value, side2Value), 2) - Math.pow(Math.min(side1Value, side2Value), 2));
        resultLabel.innerHTML = "Side A: " + result.toFixed(2);
    } else {
        alert("Invalid selection. Please select different sides.");
        return;
    }
}

document.getElementById('1TxtBox').addEventListener('focus', function() {
    // Clear the input field when the user clicks (focuses) on it
    this.value = '';
});

document.getElementById('1TxtBox').addEventListener('blur', function() {
    // Restore placeholder text if the input is empty after losing focus
    if (this.value === '') {
        this.placeholder = 'Input the value';
    }
});

