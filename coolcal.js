// coolcal.js

//header js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-btn').addEventListener('click', function() {
        alert('Home button clicked');
    });
    document.getElementById('about-btn').addEventListener('click', function() {
        alert('About Us button clicked');
    });
    document.getElementById('contact-btn').addEventListener('click', function() {
        alert('Contact Us button clicked');
    });
});


document.getElementById('pythagoras-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('bmi-btn').addEventListener('click', function() {
    window.location.href = 'bmi.html';
});

document.getElementById('temp-btn').addEventListener('click', function() {
    alert('Temperature Converter coming soon!');
});

document.getElementById('data-btn').addEventListener('click', function() {
    alert('Data Converter coming soon!');
});