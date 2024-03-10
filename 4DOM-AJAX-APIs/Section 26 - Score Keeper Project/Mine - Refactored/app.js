/**
 * REFACTORED WITH OBJECTS
 */

// PLAYER 1 & 2 OBJECT (takes in the default score, button, displayedScore)
let p1 = {
    score: 0, // set initial scores for p1, p2
    button: document.querySelector('#p1Button'), // grab the p1Button
    display: document.querySelector('#p1Display') // grab the p1Display
};

let p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
};

let resetButton = document.querySelector('#reset');

// grab the gamepoint (playto)
let gamepointSelector = document.querySelector('#playto');

// set gamepoint default
let gamepoint = 3;

// set a flag to determine if gamepoint was reached
let isGameOver = false;

// do something when gamepointSelector is changed
gamepointSelector.addEventListener('change', function () {
    gamepoint = parseInt(this.value); 
    // console.log("New Gamepoint = " + gamepoint);
    reset();
});

// FUNCTION TO UPDATE SCORES
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === gamepoint) {
            isGameOver = true;            
            console.log("Game Over!");
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            p1Button.button.disabled = true;
            p2Button.button.disabled = true;
        }    
        player.display.textContent = player.score;
    } 
}

// do something when p1Button is clicked
p1.button.addEventListener('click', updateScores(p1, p2));

// do something when p2Button is clicked
p2.button.addEventListener('click', updateScores(p2, p1));

// RESET FUNCTIONALITY
// define reset function
function reset() {
    p1.score = 0;
    p2.score = 0;
    isGameOver = false;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    
    console.log("Resetting...");
};

resetButton.addEventListener('click', reset);

