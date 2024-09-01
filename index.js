// Function to calculate Side C given Side A and Side B
document.getElementById("submitBtn").onclick = function() {
    let a = Number(document.getElementById("aTxtBox").value);
    let b = Number(document.getElementById("bTxtBox").value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter valid numbers for Side A and Side B.");
        return;
    }

    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = "Side C: " + c.toFixed(2);
}

// Function to calculate Side B given Side A and Side C
document.getElementById("submitBtn2").onclick = function() {
    let a = Number(document.getElementById("aTxtBox2").value);
    let c = Number(document.getElementById("cTxtBox2").value);

    if (isNaN(a) || isNaN(c)) {
        alert("Please enter valid numbers for Side A and Side C.");
        return;
    }

    if (c <= a) {
        alert("Side C must be greater than Side A.");
        return;
    }

    let bSquared = Math.pow(c, 2) - Math.pow(a, 2);

    if (bSquared < 0) {
        alert("Invalid input: b^2 cannot be negative.");
        return;
    }

    let b = Math.sqrt(bSquared);
    document.getElementById("bLabel2").innerHTML = "Side B or A: " + b.toFixed(2);
}
