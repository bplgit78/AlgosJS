function linearSearch(arr, searchVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchVal) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 100, 12, 23, 23, 14, 16, 18, 19], 12));
