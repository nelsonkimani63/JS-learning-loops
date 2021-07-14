//sum
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 

let sum = 0;
for (let i=0;i<arr_1.length;i+=2) {
    sum = sum+arr_1[i]+arr_1[i+1];
}
console.log(sum);

//even nums
let n1 = 22; 
for (n=2;n<=n1;n+=2) {
    console.log(n);
}

//reverse
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (let r=arr.length-1;r>=0;r--) {
    console.log(arr[r])
}

//new array sums
let arr_x   = [4, 6, 7,];
let arr_y   = [8, 1, 9,8];

let arr_z= [];

for (let u=0; u<arr_y.length;u++) {
    if (arr_x[u] === undefined) {
        arr_x[u]= 0
    }
    arr_z.push(arr_x[u]+arr_y[u]);
    
}
console.log(arr_z);

//check if 'y'

let str4 = "don’t know why";
let str5 = "I know him";

function noYes(str) {
    for (let a=0; a<str.length; a++) {
        if (str[a] === 'y') {
            console.log('yes');
            return;
            }
    }
    console.log('no');
}

noYes(str4);
noYes(str5);

//factorial

let n2 = 9;

for (let k =n2-1; k>=1;k--) { 
    n2 = n2*k;
}
console.log(n2);

//option2

function factorialise (num) {
    let factor1 =1;
    for (j=1; j<=num; j++) {
        factor1 = factor1*j;
    }
    console.log(factor1);
}
factorialise(9);

//pin guess program 
const pin = 0705;

function guessPin (pinned) {

    for (p=0; p<=3; p++) {
        if (pin === 0704) {
            console.log('Please make your guess: ');
            console.log('That was correct!');
        } else console.log ('Sorry that was wrong.');
    
    }
}
guessPin(pin);

//palindromes

let str10 = "racecar";
let str11 = "Java";

function paliDrms (longStr) {
    str10 = str10.split('');
    str10 = str10.reverse();
    for (p=0; p<str10.length; p++) {
        if (str10[p] === str10) {
            console.log('yes')
        } else console.log('no')
        return
    }

}
paliDrms (str10)

///summation of every number

let num1 = 2; 
let num2 = 8; 

function sumMing (addSum) {
    let summs = 0;
    for (let u = 1; u<=addSum; u++) {
        summs = summs + summs[u];
    }
    console.log(summs);

}

sumMing(num2);

for (let c =0; c<num1.length;c++) { 
    num1 = num1+num1[c];
}
console.log(num1)

for (let d =0; d<num1.length;d++) { 
    num2 = num2+num2[d];
}
console.log(num2)
