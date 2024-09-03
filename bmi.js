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
        document.getElementById('3Label').innerText = `Your BMI is ${bmi.toFixed(2)} Kgm⁻²`;

        // Update BMI indicator position
        updateBmiIndicator(bmi);
    } else {
        document.getElementById('3Label').innerText = 'Please enter valid height and weight.';
    }
});



function getIndicatorPosition(bmi) {
    const startPercent = 25; // Starting position of the gradient line in percentage
    const middlePercent = 50; // Middle of the gradient line in percentage
    const endPercent = 75; // Ending position of the gradient line in percentage

    let position;
    if (bmi <= 15.00) {
        position = startPercent; // Indicator at the start (25% of the screen width)
    } else if (bmi >= 30.00) {
        position = endPercent; // Indicator at the end (75% of the screen width)
    } else if (bmi > 15.00 && bmi < 25.00) {
        position = startPercent + ((bmi - 15.00) / (25.00 - 15.00)) * (middlePercent - startPercent); // Move within the first part of the gradient line
    } else if (bmi >= 25.00 && bmi < 30.00) {
        position = middlePercent + ((bmi - 25.00) / (30.00 - 25.00)) * (endPercent - middlePercent); // Move within the second part of the gradient line
    } else {
        position = endPercent; // Default to end if out of bounds
    }
    return position; // Return position as a percentage
}

// Update indicator position function
function updateBmiIndicator(bmi) {
    const position = getIndicatorPosition(bmi);
    const indicator = document.getElementById('newBmiIndicator');
    indicator.style.display = 'block'; // Always show the indicator
    indicator.style.left = `${position}%`; // Move indicator based on percentage
}



function getBmiCategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25.0) {
        return "Healthy Weight";
    } else if (bmi >= 25.0 && bmi < 30.0) {
        return "Overweight";
    } else if (bmi >= 30.0) {
        return "Obesity";
    } else {
        return "Invalid BMI";
    }
}



// Update indicator position and message function
function updateBmiIndicator(bmi) {
    const position = getIndicatorPosition(bmi);
    const indicator = document.getElementById('newBmiIndicator');
    const messageDiv = document.getElementById('bmiMessage');

    indicator.style.display = 'block'; // Always show the indicator
    indicator.style.left = `${position}%`; // Move indicator based on percentage

    // Set the BMI category message
    messageDiv.textContent = `BMI Category: ${getBmiCategory(bmi)}`;
}
