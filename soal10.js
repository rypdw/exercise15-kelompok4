let getDaysInMonth = function(month,year) {
   
    return new Date(year, month, 0).getDate();
  
   };
   console.log(getDaysInMonth(1, 2022));
   console.log(getDaysInMonth(2, 2020));
   console.log(getDaysInMonth(10, 2023));