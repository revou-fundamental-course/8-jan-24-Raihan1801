function calculate() {
    // Get the input value
    const sideLength = parseFloat(document.getElementById("sideLength").value);

    // Validate input
    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Panjang sisi harus berupa angka positif.");
        return;
    }

    // Calculate Luas and Keliling
    const luas = sideLength * sideLength;
    const keliling = 4 * sideLength;

    // Display results
    document.getElementById("resultLuas").innerText = "Luas: " + luas;
    document.getElementById("resultKeliling").innerText = "Keliling: " + keliling;

    // Show result container
    document.getElementById("resultContainer").style.display = "block";
}
