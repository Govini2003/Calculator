//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
    });
    document.getElementById('about-btn').addEventListener('click', function() {
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
    });
});



function convertData() {
    const dataValue = parseFloat(document.getElementById('dataInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    const conversionRates = {
        'Bytes': 1,
        'KB': 1024,
        'MB': 1024 * 1024,
        'GB': 1024 * 1024 * 1024,
        'TB': 1024 * 1024 * 1024 * 1024,
        'PB': 1024 * 1024 * 1024 * 1024 * 1024
    };

    // Convert input value to Bytes
    const bytesValue = dataValue * conversionRates[inputUnit];

    // Convert Bytes to the desired output unit
    const convertedValue = bytesValue / conversionRates[outputUnit];

    document.getElementById('result').innerHTML = `${dataValue} ${inputUnit} is equal to ${convertedValue.toFixed(2)} ${outputUnit}`;
}
