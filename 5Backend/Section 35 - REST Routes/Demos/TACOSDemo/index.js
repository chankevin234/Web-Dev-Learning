const express = require('express');
const app = express();
/**
 * BUILT-IN PARSING MIDDLEWARES for POST reqs:
 * 1) Form-urlencoded data
 * 2) json() data
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * /TACOS REST REQUESTS TESTS 
 */
app.get('/tacos', (req, res) => {
    console.log('GET REQUEST FROM HTML');
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    console.log('POST REQUEST FROM HTML');
    const { meat, qty } = req.body; //DESTRUCTURING
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})

// GET /comments - list all comments
// POST /comments - Create a new comment 
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment