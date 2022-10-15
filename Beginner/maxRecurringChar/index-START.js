/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
// //initialized an empty object
let charMap= {}
let maxCharValue = 0
let maxChar = ''

// //iterates through the string of text.
for (let char of text){
//     //we check every character to see if it has been mapped already to the object (hasOwnProperty checks that)
    if (charMap.hasOwnProperty(char)){
//         //adds to it by 1
        charMap[char]++
    }else{
//         //adds it if it doesn't exist
        charMap[char] = 1;
    }
}

// //iterates through the object.
for (let char in charMap) {
//     //if the character in the object has a value greater than 0
    if (charMap[char] > maxCharValue){
//         //changes the value to become the char in the object with the higher value
        maxCharValue = charMap[char]
//         //will become the character that has the highest ending value
        maxChar = char
    }
}
return maxChar
}



function maxRecurringChar(text){
    //Intialize an empty object
    let charMap = {}
    //Initialize an empty array
    let charArray = []
    //Initialize an empty array for the values
    let valuesArray = []
    //Set a max value for the characters
    let maxCharValue = 0 

    //Now we'll set up a for loop to go through the text
    for (let char of text){
        //if the char already exists in the object
        if (charMap.hasOwnProperty(char)){
            //add one to that particular char in the object
            charMap[char]++
        //we give that char in the object 1 point
        }else{
            charMap[char] = 1
        }
    }

    charArray = Object.keys(charMap);
    console.log(charArray)
    valuesArray = Object.values(charMap);
    console.log(valuesArray)
    maxCharValue = Math.max(...valuesArray);
    console.log(maxCharValue)

    return charArray[valuesArray.indexOf(maxCharValue)]

}

console.log(maxRecurringChar('WhatTheHellIsSoulCycleDoing'))


module.exports = maxRecurringChar;