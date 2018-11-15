// Igpay Atinlay
// Build a function that will translate text into "Pig Latin" Take the first consonant and move it to the end of 
// a word and then affix "ay" to the end of that word."

// Write a function that takes one parameter
// Parameter 1 - A string
// The function should output your input string translated into Pig Latin
// Example:
// var myString = "Hello my name is Stu"
// `translate(myString);
// Output - "ellohay ymay ameya siay tusay"
// Making it better!
// There are several more rules to Pig Latin, try incorporating as many as you can into your function.
// There are different rules for words that start with vowel sounds or silent letters for example.
// Here is a link to an explanation of all the rules.
// Also try maintaining capitalization of words that are capitalized in your input string.
// Example:
// "Hello there" would be "Ellohay heretay"
// *********************
// differentiate consonants and nouns
// check each word
// add -ay after consonants

function igpayAtinlay(str){
    let eachWord = str.split(' ');
    for(let wordIndex = 0; wordIndex < eachWord.length; wordIndex++){
        let eachFirstLetter = eachWord[wordIndex][0];
        // console.log('inside first function line 27: ', eachFirstLetter);
        if(eachFirstLetter){
            console.log(eachFirstLetter);
            let vowelCheck = vowelChecker(eachFirstLetter);
            if(eachFirstLetter === vowelCheck){
                console.log('line 33 running; also vowelCheck: ', vowelCheck);
            }
        }
    }
    return eachWord;
}

function vowelChecker(passVowel){
    let vowels = ['a','e','i','o','u'];
    for(let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
        let eachVowel = vowels[vowelIndex];
        if(passVowel === eachVowel){
            console.log('line 45: ', eachVowel);
            return eachVowel;
        }
    }
}

igpayAtinlay('Hello there apple');

