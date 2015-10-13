/**
    Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

    Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

    As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

function getRange(start, end, step){
    if(step == null) step = 1;
    var arr = [];

    if(step > 0){
        for (var i = start; i <= end; i += step) {
            arr.push(i);
        }
    }
    else {
        for (var i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

console.log("The answer for getRange(1,10,2) is:");
console.log(getRange(1,10,2));

console.log("The answer for getRange(5,2,-1) is:");
console.log(getRange(5,2,-1));

function sumArray(arr) {
    var i = 0,
        tam = arr.length,
        sum = 0;

    for (i; i < tam; i++){
        sum += arr[i];
    }
    return sum;
}

console.log("The answer for sumArray([1,2,3,4,5,6,7,8,9,10]) is: ");
console.log(sumArray(getRange(1,10)));