// LESSON - extracting data from inputs for forms

const form = document.querySelector('#shelterForm'); // form itself
const input = document.querySelector('#catName');
const catList = document.querySelector('#catList');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(input.value);
    const catName = input.value;
    const newLi = document.createElement("li");
    newLi.innerText = catName;
    console.log(newLi);
    catList.append(newLi);
    input.value = '';
    console.log("Submitted form!");
})

// CREATE A FUNCTION TO ADD NEW CATNAMES TO LIST

function createNewCat() {

}