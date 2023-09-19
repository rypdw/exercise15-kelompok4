// soal 1
const findWeekend = (date) => {
    var dt = new Date(date);
    if(dt.getDay() == 6 || dt.getDay() == 0){
        return "weekend";
    } else {
        return "weekday"
    }
}




// soal 2
function gcd(a, b) {
    let c = 0;
    while(b != 0) {
      c = a % b;
      a = b;
      b = c;
    }
    return a;
  }


// soal 3
const lcm = (a, b) => {
    let min = (a > b) ? a : b;
    do {
        if (min % a == 0 && min % b == 0) {
            return min
        }
        min++;
    } while (true);
}


// soal 4
function mostString(params) {
    let newStr = params.split("")
    let freq = {};
    for (let i of newStr){
        if (i in freq){
            freq[i] += 1;
        }
        else{
            freq[i] = 1;
        }
    }
    let penampung = [];
    for (let [key, value] of Object.entries(freq)){
        penampung.push(value);
    }
    const arrMax = () => Math.max(...penampung);
    for (let x in freq){
        if (freq[x] == arrMax()) {
            return `${x} = ${arrMax()}`
        }
    }
}

module.exports = {findWeekend, gcd, lcm, mostString}