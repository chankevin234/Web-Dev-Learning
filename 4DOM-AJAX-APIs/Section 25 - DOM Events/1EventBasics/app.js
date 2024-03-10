const btn = document.querySelector('#v2'); // select a button

// OPTION 2 - onclick property/setting a function in an event prop
btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

// ========================================================== //

// OPTION 3 - addEventListener
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("EventListener CLICKED!");
})

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// CAN'T HAVE 2 DIFF FUNCTIONS ON THE SAME ONCLICK PROP
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// ADD EVENTLISTENER LET'S YOU!
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
