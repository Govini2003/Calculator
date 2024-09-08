//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
    });
    document.getElementById('about-btn').addEventListener('click', function() {
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
    });
});


function calculateForce() {
    const known1 = document.getElementById('known1').value;
    const value1 = parseFloat(document.getElementById('value1').value);
    const known2 = document.getElementById('known2').value;
    const value2 = parseFloat(document.getElementById('value2').value);
    
    let force, mass, acceleration;

    if (known1 === 'F' && known2 === 'm') {
        force = value1;
        mass = value2;
        acceleration = force / mass;
        document.getElementById('result').innerHTML = `Acceleration (a) = ${acceleration.toFixed(2)} m/s²`;
    } else if (known1 === 'F' && known2 === 'a') {
        force = value1;
        acceleration = value2;
        mass = force / acceleration;
        document.getElementById('result').innerHTML = `Mass (m) = ${mass.toFixed(2)} kg`;
    } else if (known1 === 'm' && known2 === 'a') {
        mass = value1;
        acceleration = value2;
        force = mass * acceleration;
        document.getElementById('result').innerHTML = `Force (F) = ${force.toFixed(2)} N`;
    } else {
        document.getElementById('result').innerHTML = 'Please select valid combinations of known values.';
    }
}
