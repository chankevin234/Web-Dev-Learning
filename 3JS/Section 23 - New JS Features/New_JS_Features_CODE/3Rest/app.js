// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// COLLECT THE "REST" IN NUMS:
// ..nums --> collects ALL of the rest of parameters inputed into function into a single parameter
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
    // return nums.reduce((total, el) => { return total + el })
}
// sum(3,5,6,7,8,0)


function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

// EX: raceResults('Dave', 'Greg', 'Bob', ' Tina')
