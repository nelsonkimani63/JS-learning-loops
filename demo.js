//arrays integers
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

let sum = 0;
for(i=0; i<arr_2.length; i++) {
    sum = sum+arr_2[i]
}
console.log(sum)


//summing elements in the same position of two arrays, assuming same array length
const arr3 = [11, 12, 13, 14, 15,];
const arr4 = [16, 17, 18, 19, 20,32,45,];
const arr5 = [18, 45, 71, 22, 40,];

// output ====>>>> [45,74,102,55,75]

const arrOutput = [];

const length1 = arr3.length;
const length2 = arr4.length;
const length3 = arr5.length;
console.log(length1,length2,length3);
for(let a=0;a<7; a++){
    let curSum = 0;
    curSum = arr3[a]+arr4[a]+arr5[a];
    console.log('At this point the values are: ', 'index,', a, curSum, arr3[a],arr4[a],arr5[a]);
    arrOutput.push(curSum);
}

console.log(arrOutput)




function arrayLog (array){
    for(let k=0; k<array.length; k++){
        console.log(array[k])
    }
}
// arrayLog(arr3);
// console.log('arr3 ended here')
// arrayLog(arr4);
// console.log('arr4 ended here')
// arrayLog(arr5);
// console.log('arr5 ended here')
// arrayLog([54, 87, 76, 56])
// console.log('new arr ended here')



//let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
//[26,25,90,5,4,22,71,55,42,2,9]
function arrayReverse (array) {
    for (let m=array.length-1; m>=0;m--) {
        console.log(array[m])
    }
}
arrayReverse(arr_2);

arr_2.push(45);
console.log(arr_2);
arr_2.shift();
console.log(arr_2);
arr_2.unshift(10);
console.log(arr_2);
arr_2.pop();
console.log(arr_2);
arr_2.push(88);
console.log(arr_2);