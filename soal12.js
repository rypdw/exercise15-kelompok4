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
console.log(calculateAge(1995, 9, 21) + " tahun");
