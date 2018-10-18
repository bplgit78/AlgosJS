function collectStrings(obj) {
  var resultString = [];
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      resultString = resultString.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      resultString.push(obj[key]);
    }
  }

  return resultString;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
