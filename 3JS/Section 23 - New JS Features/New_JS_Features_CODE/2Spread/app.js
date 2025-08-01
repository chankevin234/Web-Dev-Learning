const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// SPREAD IN FUNCTIONS
Math.max(nums) //NaN
Math.max(...nums) //53456


// SPREAD IN ARRAYS
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
// this copies an array, doesn't impact original array
const allPets = [...cats, ...dogs];
// OUTPUT = ['Blue', 'Scout', 'Rocket', 'Rusty', 'Wyatt'];

 
// SPREAD IN OBJECTS
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };
// order matters when you combine the two properties of the objects
const catDog = { ...feline, ...canine };
// OUTPUT = { legs: 4, isFurry: true, family: 'Caninae' };


const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
// THIS WILL CREATE A NEW OBJECT THAT INCLUDES THE PROPS OF original object with extra desirable props
// USED MAINLY IN REACT 
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }
