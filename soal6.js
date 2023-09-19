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
console.log(minDate(["2015/02/01", "2015/02/02", "2015/01/03"]));
