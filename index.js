const {findWeekend, gcd, lcm, mostString} = require ("./soalAndri")
const {sort, minDate, sumDimensional, longestCommonPrefix} = require ("./soalSam")
const {halve, getDaysInMonth, days_passed, calculateAge} = require ("./soalRyan")

// andri soal
console.log(findWeekend('2023-09-23'));
console.log(gcd(10, 5));
console.log(lcm(3, 7));
console.log(mostString("allhhaaa"));
console.log("\n");

// sam soal
console.log(
    sort(
      "zzzzzxczxczxczxcaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddddddddddkklskdlksnfrbgyhbwwwwwwwwwwkmfksmdkfsdkkk"
    )
);
console.log(minDate(["2015/02/01", "2015/02/02", "2015/01/03"]));
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
  console.log(longestCommonPrefix(["arr", "array", "arrayd", "arsds"]));
console.log("\n");

// soal ryan
console.log(halve([1, 2, 3, 4, 5]));
console.log(getDaysInMonth(10, 2023));
let result = new Date (2023, 2, 0);
console.log(days_passed(result) + " Days");
console.log(calculateAge(1995, 9, 21) + " tahun");