/**
 * Learning getElementsByTagName, ...ById, ...ByClassName
 * they ALL return a HTML Collection object
 */
const allImages = document.getElementsByTagName('img');
for (let img of allImages) {
    console.log(img.src);
}

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}

// by class
const squareImg = document.getElementsByClassName('square');
for (let sqImg of squareImg) {
    console.log(sqImg.src);
}

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

/**
 * BETTER METHOD TO DO SELECTING
 * querySelector()
 */
// grab ALL <a> tags under the parent <p> tag
const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}