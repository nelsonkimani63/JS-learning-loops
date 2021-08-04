let date = new Date();


date.getMonth();// returns a number from 0 to 11
date.getFullYear(); //YYYY (not a zero-based index)
date.getDate(); // day of the month
date.getDay(); // 0-6 day of the week. 0 is sunday
date.getHours(); // returns 0-23
date.getTime(); // milliseconds since 1/1/1970

console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getTime());


//getTime() method
// Ask which date has a larger number of milliseconds since 1970.

//create two date objects
let newYearsDay = new Date(1,1,2021);
let christmasDay = new Date(12/25/2021);


//if the first object is greater than the second, write this

if (newYearsDay.getTime() < christmasDay.getTime() ) {
    console.log("That's Great!")
} else {
    console.log("That's okay.")
}


// setMonth(); // sets a number from 0 to 11
// setFullYear(); //sets the year (not a zero-based index)
// setDate(); // sets the day of month
// setDay(); // sets the day of the week (0-6)
// setHours(); //sets the hours for a day (0-23)
// setTime(); // sets the milliseconds since 1/1/1970.


console.log(date.setMonth(11));