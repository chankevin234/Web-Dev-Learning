const path = require('path');
const express = require('express');

const methodOverride = require('method-override')
const { v4: uuid } = require('uuid'); //For generating ID's
let { comments } = require('./data/commentDB'); // fake db

const app = express();

// BUILT-IN PARSING MIDDLEWARES for POST reqs:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'));

// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views')); // absolute path
app.set('view engine', 'ejs'); // use /views dir (w/ .ejs)

// **********************************
// INDEX/GET_ALL - renders multiple comments
app.get('/comments', (req, res) => {
    console.log('INDEX/GET response!');
    res.render('comments/index', { comments });
});

// **********************************
// NEW - renders a form
app.get('/comments/new', (req, res) => {
    console.log('Render a form!');
    res.render('comments/new');
});

// **********************************
// CREATE - creates a new comment (uses same route as GET)
app.post('/comments', (req, res) => {
    console.log('Posting a new comment!');
    // take in a username & comment from req.body
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() }); // POST new obj to the fakeDB arr
    res.redirect('/comments'); // send back to the comments page (shows changes!)
});

// *******************************************
// SHOW - details about one particular comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params; // take in 'id' from req.params (as string)
    const comment = comments.find(c => c.id === id); // look through array
    res.render('comments/show', { comment }) // render the new comment out in show.ejs
});

// *******************************************
// EDIT - renders a form to edit a comment
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
});

// *******************************************
// UPDATE - updates a particular comment
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    //get new text from req.body
    const newCommentText = req.body.comment;

    const foundComment = comments.find(c => c.id === id); 
    //update the comment with the data from req.body:
    foundComment.comment = newCommentText;
    res.redirect('/comments'); //redirect back to index (or wherever you want)
});

// *******************************************
// DELETE/DESTROY- removes a single comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});

app.get('/', (req, res) => {
    res.render('comments/root');
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})

/**
 * CRUD Blueprint:
 * GET-ALL /comments - list all comments
 * POST /comments - Create a new comment 
 * GET /comments/:id - Get ONE comment (using ID)
 * PATCH /comments/:id - Update ONE comment
 * DELETE /comments/:id - Destroy ONE comment
 */




















