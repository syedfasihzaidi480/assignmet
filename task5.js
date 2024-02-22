function printMultiplicationTable() 
{
    var userInput = prompt('Enter any number:');
    var number = parseInt(userInput);
    if (!isNaN(number)) {
        var table = '<p id="table">Multiplication Table for ' + number + ':</p>';
        for (var i = 1; i <= 10; i++) {
            var result = number * i;
            table += '<p id="table">' + number + ' x ' + i + ' = ' + result + '</p>';
        }
        document.getElementById('result').innerHTML = table;
    } else {
        alert('Invalid input. Please enter a valid number.');
    }
}