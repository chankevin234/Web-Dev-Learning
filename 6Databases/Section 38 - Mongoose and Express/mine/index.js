// import express
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const methodOverride = require('method-override');

// import mongoose
const mongoose = require('mongoose');
// require the mongoose model
const Product = require('./models/product');

// connect using the main() async function
main().catch(err => console.log('Mongo Connection Error:', err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand'); // opening the connection to mongodb and creating shopApp db
    console.log('Mongo Connection Open!');
}

app.set('views', path.join(__dirname, 'views')); // set the folder for ejs files + use EJS
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({ extended: true }))
// method override
app.use(methodOverride('_method'));

// CRUD OPERATIONS ------------------------------------------------------------------------------- //
const categories = ['fruit', 'vegetable', 'dairy', 'junk']; // categories

// 1) INDEX (get list of all products)
app.get('/products', async (req, res) => {
    const products = await Product.find({}); // get ALL PRODUCTS
    res.render('products/index', { products });
});

/** 
 * 2) CREATE NEW PRODUCTS
 *      a) SERVE the form
 *      b) SUBMIT the form */
//A) SERVE Form 
app.get('/products/new', (req, res) => {
    res.render('products/new', {categories});
});
// B) SUBMIT the form
app.post('/products', async (req, res) => {
    // console.log(req.body);
    const newProduct = new Product(req.body); // instantiate new product
    await newProduct.save(); // save it to mongodb
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
});

// 3) GET PRODUCT DETAILS (SHOW)
app.get('/products/:id', async (req, res) => {
    const { id } = req.params; // grab mongo id
    const foundProduct = await Product.findById(id);
    console.log(foundProduct);
    // res.send('details page')
    res.render('products/show', { foundProduct });
});

/**
 * 4) Updating
 *      a) Serve an Update Form
 *      b) Post the changes
 */
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id)
    res.render('products/edit', { foundProduct, categories });
});

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    // console.log(req.body);
    // res.send('PUTT');
    res.redirect(`/products/${product._id}`);
});

/**
 * 5) Deleting
 */
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
    console.log("Deleted: ",  deletedProduct);
    // res.send('ATTEMPTING TO DELETE');
});

app.listen(port, () => {
    console.log(`APP IS LISTENING ON PORT ${port}`);
});


