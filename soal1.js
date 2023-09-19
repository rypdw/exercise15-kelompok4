const findWeekend = (date) => {
    var dt = new Date(date);
    if(dt.getDay() == 6 || dt.getDay() == 0){
        return "weekend";
    } else {
        return "weekday"
    }
}

console.log(findWeekend('2023-09-23'));
console.log(findWeekend('2023-09-16'));
console.log(findWeekend('2023-09-19'));