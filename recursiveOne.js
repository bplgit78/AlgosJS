function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function countdown(num) {
  if (num <= 0) {
    console.log("All done!!!");
    return;
  }
  console.log(num);
  num--;
  countdown(num);
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
