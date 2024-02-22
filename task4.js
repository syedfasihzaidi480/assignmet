
    function calculateDays() {
        var monthInput = prompt('Enter the name of the month (e.g., Jan, Feb):');
        var lowercaseMonth = monthInput.toLowerCase();
        var daysInMonth = {
            'jan': 31,
            'feb': 28,
            'mar': 31,
            'apr': 30,
            'may': 31,
            'jun': 30,
            'jul': 31,
            'aug': 31,
            'sep': 30,
            'oct': 31,  
            'nov': 30,
            'dec': 31
        };
        if (daysInMonth.hasOwnProperty(lowercaseMonth)) {
            var totalDays = daysInMonth[lowercaseMonth];
            document.getElementById('result').innerHTML = 'Total number of days in ' + monthInput + ': <span style="color:red;">' + totalDays + '</span>';
        } else {
            alert('Invalid month entered. Please use shorthand notation (e.g., Jan, Feb).');
        }
    }