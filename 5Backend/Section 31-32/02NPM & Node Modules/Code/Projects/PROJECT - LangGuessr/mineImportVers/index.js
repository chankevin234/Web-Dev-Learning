// imports
import { franc, francAll } from "franc";
import langs from "langs";

// grab the userInput
let userInput = process.argv[2];

// gen the langcode
let langCode = franc(userInput);

if (langCode === 'und') {
    console.log("Shoot undefined");
} else {
    let language = langs.where("3", langCode); // gens an obj
    console.log(language.name);
}