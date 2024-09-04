//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
    });
    document.getElementById('about-btn').addEventListener('click', function() {
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
    });
});


function convertWeight() {
    const weight = parseFloat(document.getElementById('weightInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result = '';

    if (isNaN(weight)) {
        result = 'Please enter a valid number.';
    } else {
        let weightInGrams;

        // Convert input weight to grams first
        switch (inputUnit) {
            case 'grams':
                weightInGrams = weight;
                break;
            case 'kilograms':
                weightInGrams = weight * 1000;
                break;
            case 'lbs':
                weightInGrams = weight * 453.592;
                break;
            case 'tonnes':
                weightInGrams = weight * 1e6;
                break;
        }

        // Convert grams to the desired output unit
        switch (outputUnit) {
            case 'grams':
                result = `${weightInGrams.toFixed(2)} grams`;
                break;
            case 'kilograms':
                result = `${(weightInGrams / 1000).toFixed(2)} kilograms`;
                break;
            case 'lbs':
                result = `${(weightInGrams / 453.592).toFixed(2)} lbs`;
                break;
            case 'tonnes':
                result = `${(weightInGrams / 1e6).toFixed(2)} tonnes`;
                break;
        }
    }

    document.getElementById('result').innerHTML = result;
}
