function sumDimensional(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

console.log(
  sumDimensional([
    1,
    2,
    3,
    [1, 2, 3],
    7,
    10,
    [11, 12],
    2,
    1,
    3,
    [1, 3, 4, 5, 5],
  ])
);
