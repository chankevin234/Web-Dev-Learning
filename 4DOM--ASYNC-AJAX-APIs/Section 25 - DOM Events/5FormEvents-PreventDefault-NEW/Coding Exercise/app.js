// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

// 2 inputs
const productInput = document.querySelector('#product');
const qtyInput = document.querySelector('#qty');

// form is submitted, prevent default behaviour
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // grab product & qty
    let product = productInput.value;
    let qty = qtyInput.value;
    
    // create new <li>
    let parentUL = document.querySelector('#list');
    let newLi = document.createElement('li');
    newLi.innerText = `${qty} ${product}`;
    parentUL.appendChild(newLi);
    productInput.value = "";
    qtyInput.value = "";
})