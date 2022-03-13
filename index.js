
// +1 is to define a range between 1 and 6.

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// selecting images and heading
var dice1 = document.querySelector('img.img1');
var dice2 = document.querySelector('img.img2');
var heading = document.querySelector('h1');

// setting attributes to change the images according to the random number generated in the variables.
dice1.setAttribute('src', 'images/dice'+randomNumber1+'.png');
dice2.setAttribute('src', 'images/dice'+randomNumber2+'.png');

// conditions to set the winner
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Player 1 Wins!"";
}
if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 Wins!"";
}
if (randomNumber1 == randomNumber2) {
  heading.innerHTML = "It's a draw!"";
}
