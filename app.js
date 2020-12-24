// enable the user to enter her/his name
console.log('Starting the web page!');

var userName= prompt('Please enter your name!');
while(userName === ''){
   userName= prompt ('Please enter your name!');
  }
  
var userTime=prompt('Please enter your time');

while(userTime === ''){
    userTime= prompt ('Please enter your time');
   }

while (userTime > 24 || userTime === '') 
{
    userTime= prompt('Please enter a valid time!');
}
if (userTime < 12 ){
    document.write('<p>Good Morning!</p>');
} else if(userTime >= 12 || userTime <= 24) {
    document.write('<p>Good Evning!</p>');
} 

var number= prompt('It is a fashion website. How many times you want to see images for a dress?')
var image= document.createElement("image");
var id='x';

for (var i=1; i <= number; i++){
    console.log(i);
    
    document.write(i + '<img src="https://i.ebayimg.com/images/g/RJ4AAOSwabBdlRd-/s-l300.jpg" alt="Jacket">');
    
    /*image.src="https://i.ebayimg.com/images/g/RJ4AAOSwabBdlRd-/s-l300.jpg";
    var src = document.getElementById("x");
    //src.appendChild(img);*/
}

alert('Home page of a fashion website.');
document.write('<p>Welcome to our website, ' + userName + '!</p>');

