//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
    });
    document.getElementById('about-btn').addEventListener('click', function() {
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
    });
});


// Volume Calculation
function calculateVolume() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(length) || isNaN(width) || isNaN(height)) {
        document.getElementById('volumeResult').innerText = "Please enter valid numbers for all dimensions.";
        return;
    }

    const volume = length * width * height; // Volume in cubic meters
    document.getElementById('volumeResult').innerText = `Volume: ${volume} cubic meters (m³)`;
}

// Volume Conversion
function convertVolume() {
    const inputVolume = parseFloat(document.getElementById('inputVolume').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;

    if (isNaN(inputVolume)) {
        document.getElementById('convertedResult').innerText = "Please enter a valid volume.";
        return;
    }

    // Conversion factors to cubic meters (m³)
    const conversionFactors = {
        m3: 1,
        cm3: 1e-6,
        mm3: 1e-9,
        km3: 1e9,
        microm3: 1e-18,
        cubicMiles: 4.168e+9
    };

    // Convert input volume to cubic meters
    const volumeInM3 = inputVolume * conversionFactors[unitFrom];
    // Convert from cubic meters to the target unit
    const convertedVolume = volumeInM3 / conversionFactors[unitTo];

    document.getElementById('convertedResult').innerText = `Converted Volume: ${convertedVolume} ${unitTo}`;
}
