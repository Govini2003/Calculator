//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
    });
    document.getElementById('about-btn').addEventListener('click', function() {
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
    });
});



function calculateRoot() {
    const number = document.getElementById('number').value;
    const rootType = document.getElementById('root-type').value;
    let result;

    if (number === '') {
        result = 'Please enter a valid number.';
    } else {
        result = `The ${rootType} root of ${number} is ${Math.pow(number, 1/rootType).toFixed(4)}.`;
    }

    document.getElementById('result').innerHTML = result;
}
