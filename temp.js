//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
    });
    document.getElementById('about-btn').addEventListener('click', function() {
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
    });
});



function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number.';
    } else {
        switch (unit) {
            case 'Celsius':
                result = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)} °F<br>Kelvin: ${(temperature + 273.15).toFixed(2)} K`;
                break;
            case 'Fahrenheit':
                result = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)} °C<br>Kelvin: ${((temperature - 32) * 5/9 + 273.15).toFixed(2)} K`;
                break;
            case 'Kelvin':
                result = `Celsius: ${(temperature - 273.15).toFixed(2)} °C<br>Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
                break;
            default:
                result = 'Please select a valid unit.';
        }
    }

    document.getElementById('result').innerHTML = result;
}
