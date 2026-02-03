function analyzeSoil() {
    // Get values from form inputs
    const climatePattern = document.getElementById('climatePattern').value;
    const cropType = document.getElementById('cropType').value;
    const soilType = document.getElementById('soilType').value;
    const ph = parseFloat(document.getElementById('ph').value);
    const nitrogen = parseFloat(document.getElementById('nitrogen').value);
    const phosphorus = parseFloat(document.getElementById('phosphorus').value);
    const potassium = parseFloat(document.getElementById('potassium').value);

    // Example logic, replace with actual algorithm considering crop and soil type
    let recommendation = '';

    if (cropType && soilType && climatePattern) {
        recommendation += `Analyzing for ${climatePattern} and ${cropType} in ${soilType} soil type:\n `;
    }

    if (ph < 6.5) {
        recommendation += 'Your soil is acidic.\n Consider adding lime to increase pH.\n ';
    } else if (ph > 7.5) {
        recommendation += 'Your soil is alkaline.\n Adding sulfur can help lower pH.\n ';
    } else {
        recommendation += 'Your soil pH is optimal.\n ';
    }

    if (nitrogen < 20) {
        recommendation += 'Nitrogen levels are low.\n Consider adding a nitrogen-rich fertilizer.\n ';
    }

    if (phosphorus < 15) {
        recommendation += 'Phosphorus levels are low.\n Consider adding a phosphorus-rich fertilizer.\n ';
    }

    if (potassium < 10) {
        recommendation += 'Potassium levels are low.\n Consider adding a potassium-rich fertilizer.\n ';
    }

    if (recommendation === '') {
        recommendation = 'Your soil is well-balanced.\n Keep up the good work!\n';
    }

    // Display the recommendation
    document.getElementById('recommendation').innerText = recommendation;
}
