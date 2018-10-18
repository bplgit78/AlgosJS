const capitalizeFun = i => {
  i = i[0].toUpperCase() + i.slice(1);
  return i;
};

function capitalizeFirst_nonrecursive_es6(arr) {
  return arr.map(capitalizeFun);
}

function capitalizeFirst_nonrecursive(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr;
}

function capitalizeFirst(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));

  newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
  return newArr;
}

console.log(capitalizeFirst_nonrecursive(["car", "taco", "banana"]));
