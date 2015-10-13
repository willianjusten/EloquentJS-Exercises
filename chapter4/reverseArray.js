/**
Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?
 */

function reverseArray(arr) {
    var newArr = [];
    for(var index = arr.length - 1; index >= 0;index--){
        newArr.push(arr[index]);
    }
    return newArr;
}

console.log("Answer for reverseArray([1,2,3,4]): ");
console.log(reverseArray([1,2,3,4])); // [4,3,2,1]

function reverseArrayInPlace(arr) {
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    var old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
  return arr;
}

console.log("Answer for reverseArrayInPlace([1,2,3,4]): ");
console.log(reverseArrayInPlace([1,2,3,4])); // [4,3,2,1]