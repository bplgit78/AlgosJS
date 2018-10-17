//search and return true or false
//this is good for array of numbers
function binarySearch(arr, searchVal) {
  let foundit = false;

  while (!foundit && arr.length > 0) {
    let start = 0;
    let end = arr.length - 1;
    let midPoint = Math.round((start + end) / 2);
    if (searchVal === arr[midPoint]) {
      foundit = true;
      return true;
    } else if (searchVal < arr[midPoint]) {
      arr = arr.slice(0, midPoint);
    } else {
      arr = arr.slice(midPoint + 1, arr.length);
    }
  }

  return false;
}

//search sorted array and return index if found, if not, return 0
//this is good for array of numbers
function binarySearch_index(arr, searchVal) {
  let leftPtr = 0;
  let rightPtr = arr.length - 1;
  let found = false;
  let midPoint = Math.round((leftPtr + rightPtr) / 2);
  while (!found && leftPtr <= arr.length && rightPtr >= 0) {
    midPoint = Math.round((leftPtr + rightPtr) / 2);
    if (searchVal === arr[midPoint]) {
      found = true;
      return midPoint;
    } else if (searchVal < arr[midPoint]) {
      rightPtr = midPoint - 1;
    } else {
      leftPtr = midPoint + 1;
    }
  }

  return -1;
}

console.log(binarySearch_index([1, 3, 6, 8, 12, 15, 18, 19], 188));
