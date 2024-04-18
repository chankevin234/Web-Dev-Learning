// imports/require() for the node libs
const franc = require('franc');
const langs = require('langs');

// grab userInput from commandLine
const userInput = process.argv[2];

// find the franc code
let langcode = franc(userInput); // produces 'afr
let language = langs.where("3", langcode);

// if the franc code is empty, console
if (language === undefined) {
    console.log('This is undefined');
    // console.log(language);
} else {
    console.log(language.name); // Afikaans
}

