//sum of two arrays
const arr1 = [34, 78, 65, 67, 87, 90, 54, 34, 32, 54, 78, 54, 78];
const arr2 = [56, 76, 65, 34, 12, 45, 90, 87, 66, 98, 56, 56, 56];

//Initialize variables (sum1 and sum2) as 0 to store the values of the sums and use for loop to visit each element and add them to the sum of the arrays.

//arr1
let sum1 = 0; //declaring the variable 'sum1' to store the value of the sum of arr1

for (let i = 0; i<arr1.length; i++) {
    sum1 += arr1[i];
} // for loop, starts the loop at index 0, stops the sum at the length of the arr1, and increments

console.log(sum1); // logs the value of the sum of arr1

//arr2
let sum2 = 0;
for (let i = 0; i <arr2.length; i++) {
    sum2 += arr2[i];
}
console.log(sum2);

//sum of arr1 and arr2

console.log('The sum of the two arrays is: ' + (sum1+=sum2));

//Using a for loop to print all even numbers up to and including n. Don’t include 0.

for (let ev1 = 2; ev1<=44; ev1+=2) {
    console.log(ev1)
}

//Using a for loop output the elements in reverse order
//step 1: creating a variable i (index) and starting at -1(the right of the array)
//step 2: As long as is = or > than 0, the loop should continue
//step 3: Decrement by 1 (--)
console.log(arr1);
for (let i = arr1.length-1; i>=0; i--) {
    console.log(+ arr1[i]);  
}


//summing elements in the same position of two arrays, assuming same array length
const arr3 = [11, 12, 13, 14, 15,];
const arr4 = [16, 17, 18, 19, 20,];

let totals = [];

for (var i=0; i<arr3.length; i++) {
  totals.push(arr3[i] + arr4[i]) //Looped through the array and get the value for the same index from both arrays and add them up.
}
console.log(totals);
