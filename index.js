
// gives the randomize number from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

// the selector of dice in the image folder
var randomImage1 = "./images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var randomImage2 = "./images/dice" + randomNumber2 + ".png";

// the selector that targets the image in the HTML file
var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');


// Select the h1 element to display the result
var resultText = document.querySelector('.refresh-me');


// Update the 'src' attributes with the new image paths
image1.src = randomImage1;
image2.src = randomImage2;


if (randomNumber1 > randomNumber2) {
    resultText.innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    resultText.innerHTML = "Player 2 Wins!";
} else {
    resultText.innerHTML = "It's a Draw!";
}
