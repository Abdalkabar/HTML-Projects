function showCalculation() {
    // Assign two variables
    var number1 = 8;
    var number2 = 12;

    // Build a message string using += to concatenate
    var resultMessage = 'The sum of ' + number1 + ' and ' + number2 + ' is ';
    resultMessage += (number1 + number2) + '.';

    // Use document.getElementById to display the concatenated string in the paragraph
    var outputElement = document.getElementById('output');
    outputElement.textContent = resultMessage;
}
