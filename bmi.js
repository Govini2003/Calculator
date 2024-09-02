document.getElementById('submitBtn').addEventListener('click', function() {
    // Get height and weight values
    const heightInput = document.getElementById('1TxtBox').value;
    const weightInput = document.getElementById('2TxtBox').value;
    
    // Get selected units
    const heightUnit = document.getElementById('1Select').value;
    const weightUnit = document.getElementById('2Select').value;

    // Convert height and weight to meters and kilograms
    let heightInMeters;
    let weightInKg;

    // Convert height
    if (heightUnit === 'A') {
        heightInMeters = heightInput / 100; // cm to meters
    } else {
        heightInMeters = heightInput; // meters
    }

    // Convert weight
    if (weightUnit === 'A') {
        weightInKg = weightInput / 1000; // grams to kilograms
    } else {
        weightInKg = weightInput; // kilograms
    }

    // Calculate BMI
    if (heightInMeters > 0 && weightInKg > 0) {
        const bmi = weightInKg / (heightInMeters * heightInMeters);
        document.getElementById('3Label').innerHTML = `Your BMI is ${bmi.toFixed(2)} Kgm<sup>-2</sup>`;
    } else {
        document.getElementById('3Label').innerText = 'Please enter valid height and weight.';
    }
});


function getIndicatorPosition(bmi) {
    let position;
    if (bmi < 18.5) {
        position = (bmi / 18.5) * 25; // Maps to the first 25% of the gradient line
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        position = 25 + ((bmi - 18.5) / (24.9 - 18.5)) * 25; // Maps to the next 25%
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        position = 50 + ((bmi - 25.0) / (29.9 - 25.0)) * 25; // Maps to the next 25%
    } else {
        position = 75 + ((bmi - 30.0) / (40 - 30.0)) * 25; // Maps to the last 25%, assuming a max BMI of 40
    }
    return Math.min(position, 100); // Ensure the position does not exceed 100%
}
