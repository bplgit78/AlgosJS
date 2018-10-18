//uses a helper method recursion
function collectOddValues(nums) {
  let result = [];

  function helper(numArr) {
    if (numArr.length === 0) {
      return;
    }

    if (numArr[0] % 2 !== 0) {
      result.push(numArr[0]);
    }

    helper(numArr.slice(1));
  }

  helper(nums);

  return result;
}

//without helper methods
function collectOddValues_m(nums) {
  let oddNumArr = [];
  if (nums.length === 0) {
    return oddNumArr;
  }

  if (nums[0] % 2 !== 0) {
    oddNumArr.push(nums[0]);
  }

  oddNumArr = oddNumArr.concat(collectOddValues_m(nums.slice(1)));
  return oddNumArr;
}

console.log(collectOddValues_m([1, 4, 6, 3, 2, 7, 9, 20, 5, 8, 13, 11, 12]));
