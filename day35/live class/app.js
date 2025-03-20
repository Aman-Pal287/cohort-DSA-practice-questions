const prompt = require('prompt-sync')();
// problem 1: strong number
// let n = prompt("Enter a Number")
// let copy = n;
// let sum = 0;
// while(n>0){ 
//     let rem = n%10;
//     let fact = 1
//     for(let i=1 ;i<=rem;i++){
//         fact = fact*i
//     }
//     sum = sum + fact;
//     n = Math.floor(n/10);
// }   
// if(sum == copy) console.log("strong number");
// else console.log("not a strong number");


//STARTING ARRAYS
// let arr = [10,20,30,40]
//arr.push(val) ->insert At last
//arr.pop() -> delete at last
//arr.ushift(val) -> insert aar first
//arr.shift() -> delete at first

//problem 2 : Taking array size from user input
// let size = Number(prompt("enter array's size"));
// let arr = new Array(size)
// for(let i= 0;i<arr.length;i++){
//     arr[i] = Number(prompt("Enter arrays's values"))
// }
// console.log(arr);

//problem 3: sum of array's element
// let size = Number(prompt("enter array's size"));
// let arr = new Array(size)
// let sum = 0;
// for(let i= 0;i<arr.length;i++){
//     arr[i] = Number(prompt("Enter arrays's values"))
//     sum += arr[i]
// }
// console.log("sum is = "+sum);