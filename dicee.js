let dice1 = Math.random();
dice1 = dice1 * 6;
dice1 = Math.floor(dice1) + 1;

// alert(dice);

let dice2 = Math.random();
dice2 = dice2 * 6;
dice2 = Math.floor(dice2) + 1;

// alert(dice2);

// document.querySelector(".dice1").setAttribute("class", "dice3");

// Setting the attribute to the first dice
// document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");

//Setting the attribute to the second dice
// document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");

// Testing the if statement for the dice roll
if (dice1 === 1) {
   document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
} else if (dice1 === 2) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
} else if (dice1 === 3) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
} else if (dice1 === 4) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
} else if(dice1 === 5) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
}

// If statement for dice 2
if (dice2 === 1) {
   document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
} else if (dice2 === 2) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
} else if (dice2 === 3) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
} else if (dice2 === 4) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
} else if(dice2 === 5) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
}

// If statement for choosing the winner
if(dice1 > dice2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if(dice1 === dice2) {
  document.querySelector("h1").innerHTML = "It's a tie!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}


// Notes
/* I created a variable for the first dice, and I made it a random one. I multiplied by 6, and I added one, in order for it to start from 1 instead of 0.
In order for the face of the die to change, I used the document.querySelector.(".dice .img1"), which is the class for the first die, and I set it's attribute
based on the number the die fell on. If the math.random chose 2, I changed the set attribute to the picture with the second die, and so on.
I created an if statement which made the changes based on the result. If die is 1, modify the picture to the die with 1, if 2 to the picture with #2, etc.
I created a second variable for the second die, and I repeated the process.
I then created an if statement for comparing the two results, and I used document.querySelector("h1").innerHTML = in order to change the text on the page.
*/
