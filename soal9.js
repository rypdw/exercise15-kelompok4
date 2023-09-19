function halve(x) {
    let len = x.length / 2 - 0.5
    let xx = x[len]
    if (x.length % 2 === 0) {
      return x.slice(0, x.length / 2)
    } else {
      return x.slice(0, xx)
    }
  }
  console.log(halve([1, 2, 3, 4, 5]));