/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function reverseString(text) {
//     return text.split('').reverse().join('')
    
// }

function reverseString(text) { 
    let result = ""

    for(let i = text.lenght - 1; i >= 0; i--){
        result += text[i]
    }
    console.log(result)
}

// function reverseString(text) {
//     console.log([...text].reverse().join("")) 
//     }
//     console.log(result)


// function reverseString(text) {
//     let result = "";

//     for(let char of text){
//         result = char + result
//     }
//     return result;
// }

// function reverseString(text) {
//    if (text === ""){
//    return ''
//    }else{
//     return reverseString(text.substr(1)) + text[0]
//    }
// }

// function reverseString(text) {
//    //First we are splitting the string into an array at every char
//    //Then we begin with an empty string as the initial value
//    // Then it accumulates each character in reverse until it has gone through all characters in the array
//    // At this point, it returns the completely reversed string.
//    return text.split("").reduce((acc, char) => char + acc, '')
//  }

//  function reverseString(text) {
//     //Same as the last one, except [...arguement] is a spread operator and does the same thing
//     return [...text].reduce((acc, char) => char + acc, '')  
//  }

// reverseString("reverseString")


module.exports = reverseString