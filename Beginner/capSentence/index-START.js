/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



// Using the .forEach() method
function capSentence(text) {
  //first we make sure the entire sentence is lowercase and then split it up wherever there is a space
  let wordsArray = text.toLowerCase().split(' ')
  //Now we will set an empty array
  let capsArray = []

  //Loops through each word in the array
  wordsArray.array.forEach(word => {

    capsArray.push(word[0].toUpperCase() + word.slice(1))
    
  });
  return capsArray.join(' ')

}

// Using .map() and .splice()
function capSentence(text) {
  //creat an array of the whole sentence that has been converted to lowerCase and separated at the spaces
  let wordsArray = text.toLowerCase().split(' ')
  //create an array from the wordsArray of only the first letters and capitalizes them. It then adds the rest of each word back on
  let capsArray = wordsArray.map(word =>{
    return word[0].toUpperCase() + word.slice(1)
  })
  return capsArray.join(' ')
}

// Using .map() and .replace()
function capSentence(text) {
    //create an array from the whole sentence that has been converted to lowerCase and separated at the spaces
    let wordsArray = text.toLowerCase().split(' ')

    //create an array from the wordsArray and returns the first letter in each array [0] and converts it to upperCase
    let capsArray = wordsArray.map( word =>{
      return word.replace(word[0], word[0].toUpperCase())
    })
    return capsArray.join(' ')
}



module.exports = capSentence