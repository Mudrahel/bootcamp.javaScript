var present_dt=new Date();
console.log(present_dt);
console.log(present_dt.getDate());
console.log(present_dt.getDay()); //also starts from 0, 0 is Sunday
console.log(present_dt.getFullYear());
console.log(present_dt.getMonth()); //months starts with 0 ,Januray = 0
console.log(present_dt.getHours());
console.log(present_dt.getMinutes());

var custom_dt= new Date("1990/05/25");
console.log(custom_dt);
console.log(present_dt.setDate(2))
console.log("date changed:",present_dt.getDate());
console.log(present_dt.setFullYear(2023))
console.log("date changed:",present_dt.getFullYear());
console.log(present_dt.setMonth(12));//set to 01 of next year
console.log("date changed:",present_dt);
console.log(present_dt.setDate(11))
console.log("date changed:",present_dt);
console.log("date changed:",present_dt.getDay());
