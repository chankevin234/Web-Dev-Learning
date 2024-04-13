// import express
const express = require('express');
const app = express();
const port = 3000;

// the app will check for ALL requests coming in
// takes in 2 objs (request, response)

// app.use((request, response) => {
// console.log("REQUEST COMING IN!");
// response.send('Hello, we got your request! Responding!'); // generates/sends HTTP response
// response.send('<h1>YOOO</h1>'); // generates/sends HTTP response
// 
// });

// the app is listening for inputs/user reqs on port 3000
app.listen(port, () => {
    console.log(`Example app listening on port: localhost:${port}`);
});

/** 
 * Time to send a GET request to the app!
 * Routes:
 * 1. Home
 * 2. /cats
 * 3. /dogs
*/
app.get('/', (req, res) => {
    res.send('ROOT/HOME! Root response!!');
})
app.get('/cats', (req, res) => {
    console.log("CAT REQUEST RECEIVED!");
    res.send('MEOW! Cat response!'); // SENDS BACK CONTENT!
});
app.get('/dogs', (req, res) => {
    console.log('DOG REQUEST RECEIVED!');
    res.send('WOOF! Dog response!');
});

// Using Path Params
// :subreddit is the 'pattern'
app.get('/r/:subreddit/:postId', (req, res) => {
    console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1>This is a subreddit named: ${subreddit} with Post Id: ${postId}</h1>`);
});

// QUERY STRINGS
app.get('/search', (req, res) => {
    // console.log(req.query);
    const { q } = req.query;
    if (!q) {
        res.send("You didn't search anything...");
    }
    res.send(`QUERY STRINGING! <h1>Search results for: q=${q}</h1>`);
});

// CATCH ALL PATH --> paths are matched in order so, place this path at end!
app.get('*', (req, res) => {
    res.send('UNKNOWN PATH!');
});