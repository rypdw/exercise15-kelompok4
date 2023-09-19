const lcm = (a, b) => {
    let min = (a > b) ? a : b;
    do {
        if (min % a == 0 && min % b == 0) {
            return min
        }
        min++;
    } while (true);
}
console.log(lcm(3, 7));