const { get } = require("server/router");

// finding the shortest word in an array
// Bdd
//Given an arrayof string
//word1 | word2 | word3
//when the shortest word is found
//The result should be prear


//BEGIN
//  Set shortest word to null
//  For each word in the array
//   If shortestword is null
//    SET shortestword to the current word
//    end If
// end for
// Return shortestword
//End

// const words = ["America", "Australia", "Russia", "India", "Kenya", "UK"]


// function getShortestWord(w){
//    let shortestWord = w[0];
//    for(let i = 1; i< w.length; i++){
//     shortestWord.length > w[i].length && (shortestWord = w[i]);
//    }
//    return shortestWord
// }

// console.log(getShortestWord(words));


//Alternative
function findShortestWord(words) {
    let shortestWord = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length < shortestWord.length) {
        shortestWord = words[i];
      }
    }
  
    return shortestWord;
  }
  
  const words = ["apple", "banana", "orange", "pear"];
  
  const shortestWord = findShortestWord(words);
  
  console.log(shortestWord); // Output: "pear"

  