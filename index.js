// array of integers, target int
// The function should return true if any pair of numbers 
// in the array adds up to the target number.

//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    const num1 = array[i]
    // console.log("num1 is", num1)
    for(let j = i + 1; j < array.length; j++){
      
      const num2 = array[j]
      // console.log("num2 is", num2)

      if (num1 + num2 === target){
        return true
      }
    }
  }
  return false
}


// 1. Rewrite the Problem in Your Own Words
/*
Given an array of numbers and a target number, return 2 if any two numbers in the array add to target num.
otherwise, return false
*/


/* 
  Write the Big O time complexity of your function here
*/

/* 3. Pseudocode
  iterate over array to get first num to add
  within that iteration, add new iteration - at next index.
    if nums add to target, return true
    if not, continue inner iteration and repeat process until true is returned or no match is found
  if no match is found in inner iteration, continue in outer iteration and repeat process until true is returned or nothing is found
  if no matches found after both iterations, return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // 2. Write own test cases
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([24, 21, 6, 8, 32], 27));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 4, 7], 6));
}

module.exports = hasTargetSum;
