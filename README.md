# Rock-Paper_Scissors-Lizard_Spock

## rules
- Scissors cut Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitate Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock
- Rock crushes Scissors

## How to play my version of this game ?
- Click on the images, That'll be your choice !
- You can see the computer's choice displayed on the screen and the winner of that round.
- You can also check out your scores and computer's!
- The player who reaches 5 scores first is the final winner.
---
### A short explanation about my js code

1. I created an array with all the possibilities that the user wins.
2. Added event listener to each image to return their IDs after click.
3. Made a random number generator so that computer can play against the user.
4. Wrote a few IFs to first compare the chosen values of both sides to determine if it's a tie.
5. If it wasn't tie then check to see if the current state is in the array. if it is then the user is winner! if not? computer wins that round
6. Then the scores are updated based on the winner and will be displayed for the player on their screen.
7. The player who gets 5 scores first is the final winner. the scores get reset automatically after that!

---
### What to do ?
- [x] create index.html , style.css and script.js
- [x] do some research about how to make this game so that you can add your next steps!
- [x] add bootstrap to your page
- [x] buttons so user can choose their move
  - [x] get the value of the chosen btn
  - [x] define the winner using that value-log into console
- [x] add an array with all the ways that user wins
- [x] an array to use converting values to the right choice
- [x] add an element to show the winner
- [x] two elements that shows the scores of each player
  - [x] two var to count each player's score
#### Styling
- [x] add pictures instead of buttons
- [ ] change the html structure
#### To improve js code efficiency 
- [ ] write a function to update the tags and pass the parameters to it
  - [ ] requires some adjustments to make in the html file
