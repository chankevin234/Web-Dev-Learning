/**
 * THIS IS A SEEDS file, this creates the initial data in the DB
 */

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

// SEED DATA HERE ----------------------------------------------------- //
const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

