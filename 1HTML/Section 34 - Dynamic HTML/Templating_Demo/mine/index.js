const express = require('express');
const path = require('path'); // MODULE USED TO REF THE DIR YOU ARE LOOKING IN 
const app = express();
const port = 3000;
const redditData = require('./data.json'); // grab the json data foor complex reddit example

// MIDDLEWARE! SERVE STATIC ASSESTS HERE (refs the /public dir)
app.use(express.static(path.join(__dirname, '/public')));

/**
 * TELL EXPRESS TO USE EJS (embedded JS)
 * stores in views/ --> with home.ejs
 * */
app.set('view engine', 'ejs');
/** 
 * determine where 'views' dir is! join current path (where index.js is) to /views
*/
app.set('views', path.join(__dirname, '/views')); // THIS IS THE ABSOLUTE PATH

// we can send an entire file!
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// subreddit EXAMPLE
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params; // pulls in the request's subreddit name (/r/<sub name>) - STRING
    const data = redditData[subreddit]; // determine the json object matching this subreddit name
    if (data) {
        console.log('Subreddit exists in DB!');
        res.render('subreddit', { ...data })
    } else {
        console.log('Subreddit does not exists!');
        res.render('notfound', { subreddit });
    }
});

// let's render an EJS file called 'random'
app.get('/rand', (req, res) => {
    // generate number first, then pass it in as an object
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num: num });
});

// looping EXAMPLE
app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
    res.render('cats', { cats: cats });
});

app.listen(port, (req, res) => {
    console.log("Listening to reqs!");
});
