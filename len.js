//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
    });
    document.getElementById('about-btn').addEventListener('click', function() {
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
    });
});



function convertLength() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }

    // Conversion rates to meters (base unit)
    const conversionRates = {
        m: 1,
        cm: 0.01,
        km: 1000,
        mm: 0.001,
        microm: 1e-6,
        nm: 1e-9,
        miles: 1609.34
    };

    // Convert input value to meters
    const valueInMeters = inputValue * conversionRates[inputUnit];

    // Convert from meters to the desired output unit
    const convertedValue = valueInMeters / conversionRates[outputUnit];

    // Display the result
    document.getElementById("result").textContent = convertedValue.toFixed(5) + " " + outputUnit;
}
