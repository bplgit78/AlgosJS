function naiveStringSearch(str1, searchVal) {
  let matchCount = 0;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < searchVal.length; j++) {
      if (str1[i + j] !== searchVal[j]) {
        break;
      }
      if (j === searchVal.length - 1) {
        matchCount += 1;
      }
    }
  }
  return matchCount;
}

console.log(naiveStringSearch("omzgzomg zzomg", ""));
