// arrow functions

// implicit return (this doesn't explicitly have a return statement,
// but returns param1 and param2)
let crazyLooking = param1,param2 => param1, param2

// callback
const callback12 = (value,index) => {
    console.log(`${index}. ${value}`)
}

["alex","brendon","charlie","daniel","evan"].forEach(callback12)
// ^ this callback function logs 0. alex, 1. brendon, etc.
// with an array the forEach takes the VALUE as the first argument, then the INDEX 
// as the second, even if the first argument was called "foo" and the second "bar"

