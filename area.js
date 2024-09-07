//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
    });
    document.getElementById('about-btn').addEventListener('click', function() {
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
    });
});


// Function to calculate area
function calculateArea() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    
    if (!isNaN(length) && !isNaN(width)) {
        const area = length * width;
        document.getElementById('areaResult').innerText = `Area: ${area} m²`;
    } else {
        document.getElementById('areaResult').innerText = 'Please enter valid numbers';
    }
}

// Conversion factors for different units
const conversionFactors = {
    nm2: 1e18,
    microm2: 1e12,
    mm2: 1e6,
    cm2: 1e4,
    m2: 1,
    km2: 1e-6,
    mi2: 3.861e-7
};

// Function to convert area
function convertArea() {
    const inputArea = parseFloat(document.getElementById('inputArea').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (!isNaN(inputArea)) {
        // Convert the input area to square meters
        const areaInMeters = inputArea / conversionFactors[inputUnit];

        // Convert square meters to the desired output unit
        const convertedArea = areaInMeters * conversionFactors[outputUnit];

        document.getElementById('conversionResult').innerText = `Converted Area: ${convertedArea} ${outputUnit}`;
    } else {
        document.getElementById('conversionResult').innerText = 'Please enter a valid area';
    }
}
