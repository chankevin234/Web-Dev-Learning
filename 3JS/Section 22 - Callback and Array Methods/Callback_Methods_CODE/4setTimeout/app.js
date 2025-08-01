console.log("HELLO!!!...")

/** setTimeout() method takes 2 args
 * 1) function to do something
 * 2) how long in millisecs to actually run the function
 */

setTimeout(() => {
    console.log("...are you still there?")
}, 3000)
// the line below runs before the setTimeout() line
console.log("GOODBYE!!")

// SIMILAR to above, but will run endlessly ever 2 secs
const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// clearInterval(id);