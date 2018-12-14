// Given the following function call:

// character_convert('the cat in the hat');
// And the resulting output:

// "11610410132999711632105110321161041013210497116";
// Create a function definition that achieves the output with the given input.

// Optimization: How would you speed up the processing if you already encountered a value?

/* End of Instructions */

/* pseudocode */
// go through the words in the sentence letter by letter
// at each letter grab and store the ASCII value
// add that ASCII value into the output/result sentence
// print out the final output/result

var strExample = 'the cat in the hat';

function character_convert(str){
    var index = 0;
    var output = "";
    while(str.length > index){
        var eachLetter = str[index];
          if(eachLetter === " "){
            index++
            continue;
          } else {
            output += eachLetter;
            index++;
            console.log('line 13: ', output);
          }
    }
    return console.log('end of conversion');
}

character_convert(strExample);