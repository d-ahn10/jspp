// Build a function that sorts an array into a multidimensional array grouped by data type

// Write a function that takes one parameter
// Parameter 1 - An array of anything
// The function should output a multidimensional array grouped by data type
// Example:
// var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
// groupArray(myArray);
// Output - [['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]

//create datatype storage output
//go through the input
//check each item in input of datatype
//if it matches datatype storage unit, throw each item into output for that datatype
//print out all datatype outputs

let inputArr = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function dataTypeSort(arr){
    let totalOutput = [];
	let stringArr = [];
	let numArr = [];
	let booleanArr = [];
    
    for(let i = 0; i < arr.length; i++){
        let eachItem = arr[i];

        switch(typeof eachItem){
            case 'string':
                stringArr.push(eachItem);
                break;
            case 'number':
                numArr.push(eachItem);
                break;
            case 'boolean':
                booleanArr.push(eachItem);
                break;
            default:
                console.log("something broke");
        }
    }
    totalOutput.push(stringArr)
    totalOutput.push(numArr)
    totalOutput.push(booleanArr);
    return totalOutput;
}

dataTypeSort(inputArr);
//works! (but need to improve)