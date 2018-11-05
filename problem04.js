// Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order.

// Write a function that takes one parameter
// Parameter 1 - An Array of strings
// The function should output an array containing all the strings from the input array but in alphabetical order
// Example: -var myArray = ['mouse', 'cat', 'dog', 'human'];
// sort(myArray);
// Output - ['cat', 'dog', 'human', 'mouse']

//psuedocode:
//go through the words in the item box
//use the sort method to organize in alphabetical order
//create an output box to store the new alphabetically ordered words
//print the new output (it should be ordered alphabetically now)

let testStrArr = ['mouse', 'cat', 'dog', 'human'];

function ascendingAlphabetWordArr(strArr){
    let output = strArr.sort();;
    console.log(output);
    return "work done";
}

ascendingAlphabetWordArr(testStrArr);

//work done (next time try creating my own method like a bubble sort);