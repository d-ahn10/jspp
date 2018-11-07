// Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.

// Write a function that takes one parameter
// Parameter 1 - A number
// The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
// Example:
// fibSequence(12);
// Output - 0 1 1 2 3 5 8 13 21 34 55 89

function fibSequence(num){
    let output = [];
    for(let i = 0; i < num - 2; i++){
		let present = i;
		let future = i+1;
		if(i <= 1){
			output.push(present);
			output.push(future);
		} else {
			output.push(output[present] + output[future]);
		}
    }
    return output;
}

fibSequence(12);

//works!