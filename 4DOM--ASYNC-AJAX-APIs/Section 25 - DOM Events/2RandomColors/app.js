// select the button you wish to cause change
let button = document.querySelector('button');

// select the h1, will need to change the innerText into the new RGB 
let h1 = document.querySelector('h1');

// create eventListener for button (onlick)
button.addEventListener('click', function () {
    let newRGB = makeRandomColor();
    // set the .style.backgroundColor prop as the function
    document.body.style.backgroundColor = newRGB;
    console.log("Hey! You clicked on me!");
    h1.innerText = "Changed to: " + newRGB;
})

// create a function that returns a new RGB combo (r,g,b)
function makeRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// SOLUTION

// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }



