//sum of arrays
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let sum = 0;
let sum1 = 0;
for(let i=0;i<arr_1.length;i++) {
    sum=sum+arr_1[i]
    sum1=sum1+arr_2[i]
}
console.log(sum+sum1);

//print multiples of 5 numbers upto 100

let arrayFive = [];
for (let a=5;a<=100;a+=5){
    arrayFive.push(a)
}
console.log(arrayFive);

//reverse order
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for(let k=arr.length-1; k>=0; k--) {
    console.log(arr[k])
}
// //sum of the digits in the same position in new array
let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];

let sumArr = [];
for (let n=0; n<arr_3.length; n++) {
    sumArr.push(arr_3[n]+arr_4[n])
}
console.log(sumArr)

//change the every second letter to an uppercase ‘Z’. Assume there are no space.
let str1 = "javascript";  
let changeSecond = str1.split(['']);

console.log(changeSecond);

function upperZ (strZ) {
    for (let x=0; x<strZ.length; x++) {
        if ((x+1) % 2 == 0) {

        }

    }
}