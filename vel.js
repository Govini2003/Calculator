//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
    });
    document.getElementById('about-btn').addEventListener('click', function() {
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
    });
});



// Velocity Calculator
function calculateVelocity() {
    const distance = parseFloat(document.getElementById('distance').value);
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(distance) || isNaN(time) || time === 0) {
        document.getElementById('velocityResult').textContent = 'Please enter valid numbers for both distance and time.';
    } else {
        const velocity = distance / time;
        document.getElementById('velocityResult').textContent = `The velocity is ${velocity.toFixed(2)} m/s.`;
    }
}

// Velocity Converter
function convertVelocity() {
    const velocity = parseFloat(document.getElementById('velocityInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    if (isNaN(velocity)) {
        document.getElementById('conversionResult').textContent = 'Please enter a valid velocity value.';
        return;
    }

    let convertedVelocity;

    // Conversion logic
    if (fromUnit === toUnit) {
        convertedVelocity = velocity;
    } else if (fromUnit === 'm/s' && toUnit === 'km/h') {
        convertedVelocity = velocity * 3.6;
    } else if (fromUnit === 'm/s' && toUnit === 'mph') {
        convertedVelocity = velocity * 2.23694;
    } else if (fromUnit === 'km/h' && toUnit === 'm/s') {
        convertedVelocity = velocity / 3.6;
    } else if (fromUnit === 'km/h' && toUnit === 'mph') {
        convertedVelocity = velocity / 1.60934;
    } else if (fromUnit === 'mph' && toUnit === 'm/s') {
        convertedVelocity = velocity / 2.23694;
    } else if (fromUnit === 'mph' && toUnit === 'km/h') {
        convertedVelocity = velocity * 1.60934;
    }

    document.getElementById('conversionResult').textContent = `The converted velocity is ${convertedVelocity.toFixed(2)} ${toUnit}.`;
}
