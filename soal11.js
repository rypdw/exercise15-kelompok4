function days_passed(date) {
    let current = new Date(date.getTime());
    let previous = new Date(date.getFullYear(), 0);
  
    return Math.ceil((current - previous + 1) / 86400000);
  }
  let result = new Date (2023, 2, 0);
  console.log(days_passed(result) + " Days");
