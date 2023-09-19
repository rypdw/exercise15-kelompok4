// soal 5
function sort(arr) {
  arr = arr.split("");
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.join("");
}

// soal 6
function minDate(a) {
  let minDt = a[0],
    minDtObj = new Date(a[0]);

  a.forEach(function (dt) {
    if (new Date(dt) < minDtObj) {
      minDt = dt;
      minDtObj = new Date(dt);
    }
  });
  return minDt;
}

// soal 7
function sumDimensional(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}

// soal 8
function longestCommonPrefix(a) {
  let arrSize = a.length;

  if (arrSize == 0) return "";

  if (arrSize == 1) return a[0];
  a.sort();

  let end = Math.min(a[0].length, a[arrSize - 1].length);

  let i = 0;
  while (i < end && a[0][i] == a[arrSize - 1][i]) i++;

  let prefix = a[0].substring(0, i);
  return prefix;
}

module.exports = {sort, minDate, sumDimensional, longestCommonPrefix}


