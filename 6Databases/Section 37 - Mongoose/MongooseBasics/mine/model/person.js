// import mongooseJS
const mongoose = require('mongoose');

// connect using the main() async function
main().catch(err => console.log('Connection Error:', err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/phoneBook'); // opening the connection to mongodb and creating shopApp db
    console.log('Connection Open!');
}

// create personSchema (option 1)
const personSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    phoneNum: Number
}, {
    virtuals: {
        fullName: {
            get() {
                return this.name.first + ' ' + this.name.last;
            }
        }
    }
});

// add a virtual method (option 2)
personSchema.virtual('phoneNumber').get(function () {
    return this.fullName + 's Number is : ' + this.phoneNum;
});

// PRE/POST HOOKS (MIDDLEWARE) EXAMPLE
personSchema.pre('save', function () {
    this.name.first = 'Trolling';
    console.log('About to save');
});

personSchema.post('save', function () {
    console.log('Just saved');
    console.log(res => { console.log(res) });
});


// instantiate the model
const Person = new mongoose.model('Person', personSchema);

// instantiate an instance
const person1 = new Person({ name: { first: 'John', last: 'Smith' }, phoneNum: 9056041122 });


