/**
 * innerHTML, textContext, innerText PROPERTIES
 */

const heading1Tag = document.querySelector('h1').innerText;
// produces all text in the h1 tag
console.log(heading1Tag);


const h1 = document.querySelector('h1').textContent;
// produces all text in the h1 tag, but with all the SPACING of the html file


const allLinks = document.querySelectorAll('a').innerHTML;
// produces all text in the h1 tag INCLUDING the html tags

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'cyan';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}
