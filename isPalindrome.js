function isPalindrome(str) {
  console.log("string is:" + str);
  console.log("string 1st is:" + str[0] + ":: last is::" + str[str.length - 1]);
  if (str.length === 1) {
    return true;
  }

  return str[0] === str[str.length - 1] && isPalindrome(getNewString(str));
}

function getNewString(str) {
  if (str.length > 1) {
    return str.slice(1, -1);
  } else if (str.length === 1) {
    return str;
  } else {
    return " ";
  }
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("malayalam"));
console.log(isPalindrome("topspot"));

function getStringFirstAndLast(str) {
  console.log(str[0] + " and last is::" + str[str.length - 1]);
  str.slice(1, -1);
}

//getStringFirstAndLast("H");
