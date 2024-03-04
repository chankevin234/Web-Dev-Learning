// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    // create a new DIV element
    const pokemon = document.createElement('div');
    // set the class of the new DIV
    pokemon.classList.add('pokemon');

    // create a new span element
    const label = document.createElement('span');
    // add text to the span
    label.innerText = `#${i}`;
    
    // create a new img element
    const newImg = document.createElement('img');
    // add a src prop to the img element
    newImg.src = `${baseURL}${i}.png`

    // add the img, span as children to the pokemon div  
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    // add the div as child of the CONTAINER
    container.appendChild(pokemon)
}
