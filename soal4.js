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
let str = "allhhaaa";
console.log(mostString(str));