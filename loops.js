//sum of two arrays
const arr1 = [34, 78, 65, 67, 87, 90, 54, 34, 32, 54, 78, 54, 78];
const arr2 = [56, 76, 65, 34, 12, 45, 90, 87, 66, 98, 56, 56, 56];

//arr_2
let sum1 = 0;
for (let i = 0; i<arr1.length; i++) {
    sum1 += arr1[i];
} 
console.log(sum1); 

//arr_2
let sum2 = 0;
for (let j = 0; j <arr2.length; j++) {
    sum2 += arr2[j];
}
console.log(sum2);

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
for (let k = arr1.length-1; k>=0; k--) {
    console.log(+ arr1[k]);  
}


//summing elements in the same position of two arrays, assuming same array length
const arr3 = [11, 12, 13, 14, 15,];
const arr4 = [16, 17, 18, 19, 20,];
const arr5 = [18, 45, 71, 22, 40,];

let totals = [];

for (let l=0; l<arr3.length; l++) {
  totals.push(arr3[l] + arr4[l] + arr5[l]) //Looped through the array and got the value for the same index from both arrays and added them up.
}
console.log(totals);

//Given a string change the every second letter to an uppercase ‘Z’. Assume there are no space.

