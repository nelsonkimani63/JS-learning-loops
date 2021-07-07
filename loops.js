//sum of two arrays
const arr1  = [34, 78, 65, 67, 87, 90, 54, 34, 32, 54, 78, 54, 78];
const arr2 = [56, 76, 65, 34, 12, 45, 90, 87, 66, 98, 56, 56, 56];

//Initialize variables (sum1 and sum2) as 0 to store the values of the sums and use for loop to visit each element and add them to the sum of the arrays.

//arr1
let sum1 = 0; //declaring the variable 'sum1' to store the value of the sum of arr1

for (let i = 0; i<arr1.length; i++) {
    sum1 += arr1[i];
} // for loop, starts the loop at index 0, stops the sum at the length of the arr1, and increments

console.log(sum1); // logs the value of the sum of arr1 into the console

//arr2
let sum2 = 0;
for (let i = 0; i <arr2.length; i++) {
    sum2 += arr2[i];
}
console.log(sum2);

//sum of arr1 and arr2

console.log('The sum of the two arrays is: ' + (sum1+=sum2));