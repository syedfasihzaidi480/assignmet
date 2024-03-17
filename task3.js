$(document).ready(function() {
    function displayTime() {
      var d = new Date();
      var hour = d.getHours(); // 0-23
      var min = d.getMinutes(); // 0-59
      var sec = d.getSeconds(); // 0-59
      var amOrPm = (hour >= 12) ? "PM" : "AM";
      hour = (hour > 12) ? hour - 12 : hour;
      hour = (hour < 10) ? "0" + hour : hour;
      min = (min < 10) ? "0" + min : min;
      sec = (sec < 10) ? "0" + sec : sec;
      $("#clock").text(hour + ":" + min + ":" + sec + " " + amOrPm);
    }

    displayTime();
    setInterval(displayTime, 1000);//after 1 sec it update the time
  });