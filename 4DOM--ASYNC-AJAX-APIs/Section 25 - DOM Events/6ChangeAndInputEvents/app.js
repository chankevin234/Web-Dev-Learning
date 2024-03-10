const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// CHANGE EVENT only occurs if you click away from the input box
// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })


// INPUT EVENT - only occurs when the input value is changing
input.addEventListener('input', function (e) {
    console.log("Input event occurring!")
    h1.innerText = input.value;
})