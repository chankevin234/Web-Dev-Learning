const express = require('express');
const path = require('path'); // MODULE USED TO REF THE DIR YOU ARE LOOKING IN 
const app = express();
const port = 3000;

/**
 * TELL EXPRESS TO USE EJS (embedded JS)
 * stores in views/ --> with home.ejs
 * */ 
app.set('view engine', 'ejs');
// determine where 'views' dir is!
// join current path (where index.js is) to /views
app.set('views', path.join(__dirname, '/views'));

// we can send an entire file!
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// let's render an EJS file called 'random'
app.get('/rand', (req, res) => {
    res.render('random');
})



app.listen(port, (req, res) => {
    console.log("Listening to reqs!");
});
