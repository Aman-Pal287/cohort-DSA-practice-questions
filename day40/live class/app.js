const prompt = require('prompt-sync')();


///problem 1 : Array left rotation by K element

//method 1: brut  force method (gahtiya tarika)
// let arr = [1, 2, 3, 4, 5]
// let k = prompt("enter a number: ")
// for (let j = 1;j<=k; j++) {
//     let copy = arr[0]
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = copy
// }
// console.log(arr);