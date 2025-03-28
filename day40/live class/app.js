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

//method 2: method 1 ka hi soution hai but k % arr.length karenge taaki unncessary loop naa chale
// let arr = [1, 2, 3, 4, 5]
// let k = prompt("enter a number: ")
// k = k % arr.length;
// for (let j = 1;j<=k; j++) {
//     let copy = arr[0]
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = copy
// }
// console.log(arr);

// method 3 : efficient tarika
// let arr = [1,2,3,4,5]
// let temp = new Array(arr.length);
// let k = prompt('enter a number : ')
// k = k % arr.length;
// for (let i=0 ; i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length]
// }
// console.log(temp);