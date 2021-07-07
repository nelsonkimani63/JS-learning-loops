//sum of two arrays
const arr1  = [34, 78, 65, 67, 87, 90, 54, 34, 32, 54, 78, 54, 78];
const arr2 = [56, 76, 65, 34, 12, 45, 90, 87, 66, 98, 56, 56, 56];
//arr1
let sum1 = 0;
for (let i = 0; i <arr1.length; i++) {
    sum1 += arr1[i];
}
console.log(sum1);

//arr2
let sum2 = 0;
for (let i = 0; i <arr2.length; i++) {
    sum2 += arr2[i];
}
console.log(sum2);

//sum of arr1 and arr2

console.log(sum1+=sum2)