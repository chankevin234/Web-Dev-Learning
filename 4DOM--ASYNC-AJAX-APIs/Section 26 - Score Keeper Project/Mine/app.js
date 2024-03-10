/**
 * Ask: Create a score keeper game between 2 players, first to desired gamepoint wins!
 */

// GRAB the 3 buttons
let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');
let resetButton = document.querySelector('#reset');

// grab the p1 & p2 score (<spans>)
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');

// grab the gamepoint (playto)
let gamepointSelector = document.querySelector('#playto');

// set initial scores for p1, p2
let p1Score = 0
let p2Score = 0;

// set gamepoint default
let gamepoint = 3;

// set a flag to determine if gamepoint was reached
let isGameOver = false;

// do something when gamepointSelector is changed
gamepointSelector.addEventListener('change', function () {
    gamepoint = parseInt(this.value);
    console.log("New Gamepoint = " + gamepoint);
    reset();
});

// do something when p1Button is clicked
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === gamepoint) {
            isGameOver = true;
            console.log("Game Over!");
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
});

// do something when p2Button is clicked
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === gamepoint) {
            isGameOver = true;
            console.log("Game Over!");
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
    }
});

// RESET FUNCTIONALITY
// define reset function
function reset() {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;

    console.log("Resetting...");
};

resetButton.addEventListener('click', reset);

