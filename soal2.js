function gcd(a, b) {
    let c = 0;
    while(b != 0) {
      c = a % b;
      a = b;
      b = c;
    }
    return a;
  }
console.log(gcd(10, 5));

