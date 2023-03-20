//subtractrating one list from another and returns the result in arrays
// It should remove all values from list a, which are present in list b keeping their order.


// function arrayDiff(a, b) {

//     // use the filter method to create a new array that only contains elements from a that are not in b
//     return a.filter(element => !b.includes(element));
//   }

// console.log(arrayDiff([1, 2], [1])); // Output: [2]
// console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // Output: [1, 3]



//alternative

//  create an empty array called result to store the elements in a that are not in b
//   use a for loop to iterate over each element in a
//    Inside the loop, we use an if statement to check if the current element is not present in b using the includes method
//    If the element is not in b, we add it to result using the push method
//    Return result
function arrayDiff(a, b) {
    const result = [];
  
    for (let i = 0; i < a.length; i++) {
      if (!b.includes(a[i])) {
        result.push(a[i]);
      }
    }
  
    return result;
  }
console.log(arrayDiff([1,2],[1])); // Output: [2]
console.log(arrayDiff([1,2,2,2,3],[2])); // Output: [1,3]
