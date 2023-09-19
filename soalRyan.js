// soal 9
function halve(x) {
    let len = x.length / 2 - 0.5
    let xx = x[len]
    if (x.length % 2 === 0) {
      return x.slice(0, x.length / 2)
    } else {
      return x.slice(0, xx)
    }
  }
  

// soal 10
let getDaysInMonth = function(month,year) {
   
  return new Date(year, month, 0).getDate();
  
};
   
// soal 11
function days_passed(date) {
    let current = new Date(date.getTime());
    let previous = new Date(date.getFullYear(), 0);
    return Math.ceil((current - previous + 1) / 86400000);
}

// soal 12
function calculateAge(year, month, day) {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	let currentMonth = currentDate.getMonth() + 1;
	let currentDay = currentDate.getDate();
	let age = currentYear - year;

	if (currentMonth > month) {
		return age;
	} else {
		if (currentDay >= day) {
			return age;
		} else {
			age--;
			return age;
		}
	}
}


module.exports = {halve, getDaysInMonth, days_passed, calculateAge}