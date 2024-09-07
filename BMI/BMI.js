// script.js

function calculateBMI() {
    // Get the input values
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        // Convert height from cm to meters
        const heightInMeters = height / 100;

        // Calculate BMI
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        // Determine the BMI category
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        // Display the result
        document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category})`;
    } else {
        alert('Please enter valid weight and height values.');
    }
}
