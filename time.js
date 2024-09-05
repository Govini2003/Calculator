//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
    });
    document.getElementById('about-btn').addEventListener('click', function() {
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
    });
});




function convertTime() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

    if (isNaN(inputValue)) {
        result = "Please enter a valid number.";
    } else {
        switch (inputUnit) {
            case 'seconds':
                result = convertFromSeconds(inputValue, outputUnit);
                break;
            case 'minutes':
                result = convertFromMinutes(inputValue, outputUnit);
                break;
            case 'hours':
                result = convertFromHours(inputValue, outputUnit);
                break;
            default:
                result = "Please select a valid unit.";
        }
    }

    document.getElementById('result').innerHTML = result;
}

function convertFromSeconds(value, outputUnit) {
    switch (outputUnit) {
        case 'minutes':
            return `${(value / 60).toFixed(2)} Minutes`;
        case 'hours':
            return `${(value / 3600).toFixed(2)} Hours`;
        default:
            return `${value} Seconds`;
    }
}

function convertFromMinutes(value, outputUnit) {
    switch (outputUnit) {
        case 'seconds':
            return `${(value * 60).toFixed(2)} Seconds`;
        case 'hours':
            return `${(value / 60).toFixed(2)} Hours`;
        default:
            return `${value} Minutes`;
    }
}

function convertFromHours(value, outputUnit) {
    switch (outputUnit) {
        case 'seconds':
            return `${(value * 3600).toFixed(2)} Seconds`;
        case 'minutes':
            return `${(value * 60).toFixed(2)} Minutes`;
        default:
            return `${value} Hours`;
    }
}
