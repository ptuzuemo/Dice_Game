document.getElementById("button").addEventListener("click", function () {

  // random number generator based on 6 possibilities/from 1 to 6 
  var selectRandomDice = Math.floor(Math.random() * 6) + 1;

  // checking if it works 
  console.log(selectRandomDice);

  //  changing the dice Image for the first player randomly 

  if (selectRandomDice === 1) {
    document.getElementById("firstDice").src = "images/dice1.png";
    document.getElementById("secondDice").src = "images/dice1.png";
  } else if (selectRandomDice === 2) {
    document.getElementById("firstDice").src = "images/dice2.png";
    document.getElementById("secondDice").src = "images/dice2.png";
  } else if (selectRandomDice === 3) {
    document.getElementById("firstDice").src = "images/dice3.png";
    document.getElementById("secondDice").src = "images/dice3.png";
  } else if (selectRandomDice === 4) {
    document.getElementById("firstDice").src = "images/dice4.png";
    document.getElementById("secondDice").src = "images/dice4.png";
  } else if (selectRandomDice === 5) {
    document.getElementById("firstDice").src = "images/dice5.png";
    document.getElementById("secondDice").src = "images/dice5.png";
  } else if (selectRandomDice === 6) {
    document.getElementById("firstDice").src = "images/dice6.png";
    document.getElementById("secondDice").src = "images/dice6.png"
  } else {
    return
  }

  // changing the dice image for the second player randomly 

  var selectRandomDicePlayer2 = Math.floor(Math.random() * 6) + 1;

  if (selectRandomDicePlayer2 === 1) {
    document.getElementById("secondDice").src = "images/dice1.png";
  } else if (selectRandomDicePlayer2 === 2) {
    document.getElementById("secondDice").src = "images/dice2.png";
  } else if (selectRandomDicePlayer2 === 3) {
    document.getElementById("secondDice").src = "images/dice3.png";
  } else if (selectRandomDicePlayer2 === 4) {
    document.getElementById("secondDice").src = "images/dice4.png";
  } else if (selectRandomDicePlayer2 === 5) {
    document.getElementById("secondDice").src = "images/dice5.png";
  } else if (selectRandomDicePlayer2 === 6) {
    document.getElementById("secondDice").src = "images/dice6.png"
  } else {
    return
  }

// Showing notification who wins

if (selectRandomDice > selectRandomDicePlayer2) {
  document.querySelector("h2").innerHTML="Player 1 wins";
} else if (selectRandomDice < selectRandomDicePlayer2) {
  document.querySelector("h2").innerHTML="Player 2 wins";
} else {
  return document.querySelector("h2").innerHTML= "It's a tie !!";
}
});


// Improved version of the code below/uncomment if you want to use it

// document.getElementById("button").addEventListener("click", function () {
//   // Generate a random number from 1 to 6 for both players
//   var dice1 = Math.floor(Math.random() * 6) + 1;
//   var dice2 = Math.floor(Math.random() * 6) + 1;

//   // Set the dice images
//   document.getElementById("firstDice").src = "images/dice" + dice1 + ".png";
//   document.getElementById("secondDice").src = "images/dice" + dice2 + ".png";

//   // Show the result
//   if (dice1 > dice2) {
//     document.querySelector("h2").innerHTML="Player 1 wins";
//   } else if (dice1 < dice2) {
//     document.querySelector("h2").innerHTML="Player 2 wins";
//   } else {
//     document.querySelector("h2").innerHTML= "It's a tie !!";
//   }
// });


// The game can be made more unpredicatable by adding some code to make random number generator more random