// import mongooseJS
const mongoose = require('mongoose');

// connect using the main() async function
main().catch(err => console.log('Connection Error:', err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test'); // opening the connection to mongodb
    console.log('Connection Open!');
}

// create cat SCHEMA
const kittySchema = new mongoose.Schema({
    name: String,
    age: Number
});

// create the cats MODEL
const Kitten = mongoose.model('Kitten', kittySchema);

// create 1 instance of a kitten to add to the MODEL
let charlie = new Kitten({ name: 'charlie', age: 16 });

// save the new instance to the collection
// await charlie.save();

// insertMany()
await Kitten.insertMany([
    { name: 'Amelie', age: 1, isFriendly: true },
    { name: 'Andrew', age: 12, isFriendly: false },
    { name: 'Antonio', age: 13, isFriendly: true },
    { name: 'Andre', age: 14, isFriendly: false }
]).catch(err => console.log("Failed to Insert! ", err));

// search/find
console.log('Finding...');
await Kitten.find({}).then(data => console.log(data));

// update
console.log('Updating...');
await Kitten.updateOne({ name: 'Amelie' }, { age: 2 }).then(msg => console.log(msg));

// remove 
console.log('Deleting...');
await Kitten.deleteOne({}, {}).then(res => { console.log(res) });