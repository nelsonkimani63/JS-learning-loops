let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let newArraySum = [];
for (let i=0; i<arr_1.length; i++) {
    newArraySum.push(arr_1[i]+arr_2[i])
}
console.log(newArraySum);