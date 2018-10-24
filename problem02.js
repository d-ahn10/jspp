// Build a function that takes in an array and reverses it

// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output an array that is in reverse order from the input array
// Example:
// var myArray = ['hello', 45, 'Bob', 'what', '23'];
// arrayReverse(myArray);
// Output - ['23', 'what', 'Bob', 45, 'hello']
// Avoid using pre-built functions that do something similar

//go through the input backwards
//grab each item one by one
//throw it into a new output
//print the new output

let inputArr = ['hello', 45, 'Bob', 'what', '23'];

function reverseArr(arr){
    let output = [];

    for(let eachItem = arr.length-1; eachItem >= 0; eachItem--){
        output.push(arr[eachItem]);
    }
    return output;
}

reverseArr(inputArr);

//works!