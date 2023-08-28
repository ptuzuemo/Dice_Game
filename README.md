# Dice_Game

## Overview

This repository contains the code for a simple dice game that determines the winner between two players based on random dice rolls. When the button on the webpage is clicked, the game randomly selects a number between 1 and 6 for each player, changes the dice images accordingly, and then displays a message indicating which player won or if it was a tie.

## Features

- **Random Number Generation**: A random number between 1 and 6 is generated for each player when the button is clicked.
- **Dynamic Dice Images**: The dice images change dynamically based on the randomly generated numbers.
- **Winner Declaration**: A message is displayed on the webpage indicating the winner or if it was a tie.

## How It Works

1. **Button Click Event**: An event listener is added to the button with the id "button". When the button is clicked, the event listener triggers a function that generates random numbers, changes the dice images, and displays the winner.

2. **Random Number Generation**: Two random numbers between 1 and 6 are generated, one for each player.

3. **Changing Dice Images**: The `src` attribute of the `img` elements for each player's dice is changed based on the randomly generated numbers.

4. **Winner Declaration**: The generated numbers are compared, and a message is displayed on the webpage indicating whether Player 1 wins, Player 2 wins, or if it's a tie.

## Installation and Usage

To run the game locally on your machine, follow these steps:

1. Clone this repository to your local machine.
2. Open the `dicee.html` file in your web browser.
3. Click the button to roll the dice and determine the winner.
