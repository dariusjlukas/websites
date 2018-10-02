var today = new Date();
var hourNow = today.getHours();
var year = today.getFullYear();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if(hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

var gText = document.getElementById('greetingText');
gText.innerHTML = greeting;
//console.log(gText);
//gText.innerHTML() = "Hello";
//document.write('<h3>' + greeting + '</h3>');
//document.write('<h4>' + today + '</h4>');
var copyright = document.getElementById('copyright');
copyright.innerHTML = '&copy ' + year.toString();

