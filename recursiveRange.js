//accepts a number and adds up all numbers from 0 to the number passed.

function recursiveRange(n) {
  if (n <= 0) {
    return 0;
  }

  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(10));
