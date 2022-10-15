/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    // // // Initialize counter
    let counter = 0;
    
    // // // Use a For...of Loop to loop through text and make sure everything has been converted to lowercase
    for(let letter of text.toLowerCase()){
        
    // //     //If one of the "vowels" exist in the string
        if (vowels.includes(letter)){
    // //         //we'll the found vowel to the "counter"
            counter++   
        }
    }
    // // //We can return/print out what we found
    console.log(counter) 
    }
    
    function vowelsCounter(text) {
    //     //Search text with Regex and store all matching instances
        let matchingInstances = text.match(/[aeiou]/gi);
    
    //     // Check if matching instances exist then calculate length
        if (matchingInstances){
    //         //Return # of vowels found
            console.log(matchingInstances.length)
        }else{
            console.log("No vowels found")
        }
    
    }
    
    vowelsCounter("asdAsdsdgdfghggjty")
    



module.exports = vowelsCounter;
