// enable the user to enter her/his name
console.log('Starting the web page!');
var userName= prompt('Please enter your name!');
var userTime=prompt('Please enter your time, too!');
alert('Home page of a fashion website.');
if (userTime < 12){
    document.write('Good Morning!');
} else{
    document.write('<p>Good evning!</p>');
}

document.write('<p>Welcome to our website, ' + userName + '!</p>');

