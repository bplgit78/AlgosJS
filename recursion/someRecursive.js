//returns true if any value in the array matches the condition in the function passed to the function
function someRecursive(arr, fun) {
  //console.log(arr);
  if (arr.length == 0) {
    return false;
  }

  return fun(arr[0]) || someRecursive(arr.slice(1), fun);
}

function someNotRecursive(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    console.log(fun(arr[i]));
  }
}

var isOdd = x => x % 2 !== 0;
console.log(someRecursive([1, 2, 3, 4], isOdd));
//console.log(someRecursive([1, 2, 3, 4], val => val > 10));
console.log(someRecursive([4, 6, 8, 9], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([5, 7, 13, 15], isOdd));
