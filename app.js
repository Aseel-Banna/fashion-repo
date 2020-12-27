// enable the user to enter her/his name
console.log('Starting the web page!');

var userName= userInputs (userName, 'Please enter your name!');
var userAge= userInputs (userAge, 'Please enter your age, too!');
var userTime=Time (userTime, 'Please insert your time!');
var number= display(number,'It is a fashion website. How many times you want to see images for a dress?');

alert('Home page of a fashion website.');
document.write('<p>Welcome to our website, ' + userName + '!</p>');

//var userName= prompt('Please enter your name!');
/*while(userName === ''){
   userName= prompt ('Please enter your name!');
  }*/
  

/*while(userTime === ''){
    userTime= prompt ('Please enter your time');
   }

while (userTime > 24 || userTime === '') 
{
    userTime= prompt('Please enter a valid time!');
}
if (userTime < 12 ){
    document.write('<p id="prg1">Good Morning!</p>');
} else if(userTime >= 12 || userTime <= 24) {
    document.write('<p id="prg1">Good Evning!</p>');
} */



/*for (var i=1; i <= number; i++){
    console.log(i);
    
    document.write(i + '.'+ '<img id="img1" src="https://i.ebayimg.com/images/g/RJ4AAOSwabBdlRd-/s-l300.jpg" alt="Jacket">');
    
}

alert('Home page of a fashion website.');
document.write('<p>Welcome to our website, ' + userName + '!</p>');*/

function userInputs (uInput, message){
 uInput= prompt(message);
 while(uInput === '' || uInput === null || uInput === undefined){
    uInput= prompt (message);
   }

}

function Time (uTime, message){
    uTime= prompt(message);
    while(uTime === '' || uTime === null || uTime === undefined){
        uTime= prompt (message);
       }
    
    while (uTime > 24 || uTime === '' || uTime === null || uTime === undefined) 
    {
        uTime= prompt('Please insert a valid time');
    }
    if (uTime < 12 ){
        document.write('<p id="prg1">Good Morning!</p>');
    } else if(uTime >= 12 || uTime <= 24) {
        document.write('<p id="prg1">Good Evning!</p>');
    } 

}

function display (num,message){
    while (num > 24 || num === '' || num === null || num === undefined) 
    {
        num= prompt(message);
    }
    for (var i=1; i <= num; i++){        
        document.write(i + '.'+ '<img id="img1" src="https://i.ebayimg.com/images/g/RJ4AAOSwabBdlRd-/s-l300.jpg" alt="Jacket">');
    }
}

