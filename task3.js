function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers in both fields.');
        return;
    }
    var addition = num1 + num2;
    var subtraction = num1 - num2;
    var multiplication = num1 * num2;
    var division = (num2 !== 0) ? num1 / num2 : 'Cannot divide by zero';
    var resultMessage = 'Results:\n'
        + 'Addition: ' + addition + '\n'
        + 'Subtraction: ' + subtraction + '\n'
        + 'Multiplication: ' + multiplication + '\n'
        + 'Division: ' + division;
    document.getElementById('result').innerText = resultMessage;
}
