function flatten(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }

  if (Array.isArray(arr[0])) {
    newArr = newArr.concat(flatten(arr[0]));
  } else {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(flatten(arr.slice(1)));
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, 2, [3, 4], [[5]]]));
console.log(flatten([[1], [2], [3, 4], [[5]]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3, 4]]]]]]], [[5]]]]]));
