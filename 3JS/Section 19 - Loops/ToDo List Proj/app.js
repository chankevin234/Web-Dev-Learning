/**
 * 1) Requirements
 * 
 * "add" - Add A Todo
 * "list" - List All Todo
 * "delete" - Remove Specific Todo at Index
 * "quit" - Quit App
 * 
 */

console.log("LET'S START HERE!");
// init todo list arr of arr?
let todo = ['item1', 'item2']; 

// while loop
while (true) {
    // prompt user to enter enter a commmand (lowercase)
    let input = prompt("Please enter a input (quit/q will end the app)");
    // console.log(input); 

    if (input === null) {
        console.log("You pressed cancel...");
        break;
    }

    let command = input.toLowerCase();

    if (command === 'quit' || command === 'q') {
        console.log("Quitting now...");
        break;
    }
    // input = add
    else if (command === 'new') { 
        // prompt to get a value
        let item = prompt("Please enter an item (can't be empty):");
        if (item.length === 0) {
            console.log("You entered an empty item so it was not added...");
            continue;   
        } else {
            todo.push(item);
            console.log(`${item} was added`);
        }
    }
    // input = list 
    else if (input === 'list') {
        // loop through todo list
        let index = 0;
        console.log("**********");
        for (let item of todo) {
            console.log(`${index}: ${item}`);
            index++;
        }
        console.log("**********");
    }
    // input = delete
    else if (input === 'delete') {
        if (todo.length === 0) {
            console.log("There is nothing to delete...");
            continue;
        }
        // prompt for index
        let deleteIndex = prompt("Please enter the index of the item you want to delete:");
        if (deleteIndex > todo.length || deleteIndex < 0) {
            console.log("Invalid Index");
            continue;
        } else {
            // if valid index
            console.log(`Deleted ${todo[deleteIndex]} at index ${deleteIndex}`);
            todo.splice(deleteIndex, 1);
        }
    }
    else {
        // if not one of the above, say try again
        console.log("Invalid command, try again!");
    }
}  
console.log("We are DONE!");