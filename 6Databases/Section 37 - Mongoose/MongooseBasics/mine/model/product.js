// import mongooseJS
const mongoose = require('mongoose');

// connect using the main() async function
main().catch(err => console.log('Connection Error:', err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp'); // opening the connection to mongodb and creating shopApp db
    console.log('Connection Open!');
}

// create a product schema w/ validations
let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive!'] // validation msg!
    },
    onSale: {
        type: Boolean,
        required: false
    },
    categories: [String], // enforce string arr
    qty: { // object
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'L'] // enforce specific values
    }

});

// INSTANCE METHODS FOR SCHEMA (ON EACH INSTANCE)
productSchema.methods.greet = function () {
    console.log('Hello world');
    console.log(`- from ${this.name}`); // prints name of the instance
}

productSchema.methods.toggleOnSale = function () {
    console.log("Checking if on sale!");
    this.onSale = !this.onSale; // flipping true or false
    return this.save();
}

productSchema.methods.addCategory = function (newCategory) {
    this.categories.push(newCategory);
    return this.save();
}

// STATIC METHODS - ON MODEL ITSELF
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 });
}

productSchema.statics.scamming = function () {
    return this.updateMany({}, { onSale: false, price: 1000 });
}

// create a Model/collection/table
const Product = mongoose.model('Product', productSchema);

// instantiate new Product doc/item
let bike = new Product({ name: 'Mountain Bike', price: 69 });
let helmet = new Product({ name: 'Helmet', price: 29.99 });

// updating example
let tirePump = new Product({ name: 'Tire Pump', price: 9.99, onSale: false, categories: ['Cycling', 'Tools'] });

// validation examples
let jersey = new Product({ name: 'Jersey', price: 19.99, categories: ['Cycling', 'Tools'], size: 'S' });

// INSTANCE METHOD RUN
const findProduct = async () => {
    // simple custom method 
    const foundProduct = await Product.findOne({ name: 'Tire Pump' });
    foundProduct.greet(); // using the custom instance method 

    // toggelOnSave example
    console.log("Before: ", foundProduct);
    await foundProduct.toggleOnSale();
    console.log("After: ", foundProduct);

    // addCategory example
    await foundProduct.addCategory('Two Wheels');
    console.log("Added Category: ", foundProduct);
}

// INSTANCE METHOD RUN
findProduct();

// STATIC METHOD RUN
Product.fireSale().then(res => console.log(res));
Product.scamming().then(res => { console.log(res) });

// SAVE the docS into the collection //
/* bike.save()
    .then(data => {
        console.log('Saved!');
        console.log(data);
    })
    .catch(err => {
        console.log("Failed to save! ", err)
    });
helmet.save().catch(err => { console.log(err) });

// UPDATING EXAMPLE
tirePump.save().catch(err => { console.log(err) });

Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -10 }, { new: true, runValidators: true })
    .catch(err => { console.log(err) });
*/
