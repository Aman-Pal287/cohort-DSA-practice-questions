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


//method 4(block-swap reverse algorithm): method 3 se bhi optimize solution aur effiecnt tarika (two pointer algorithm reverse ka tarika se banayenge ye solution)
// let arr = [1,2,3,4,5]
// let k = prompt ("enter a number : ");
// k = k % arr.length;
// reverse(arr , 0 , k-1)
// reverse(arr , k , arr.length-1)
// reverse(arr , 0 , arr.length-1)
// function reverse(arr, i , j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }
// console.log(arr);


//problem 2 : linear search
// method 1 : brutforce method puree array ke element pe itration karna hoga 
// let target = Number(prompt("Enter a target value : "));
// let arr = [10,5,3,15,19,69,20]
// let index = -1;
// for(let i =0 ; i<arr.length;i++){
//     if(arr[i] == target ){
//         index = i;  
//         break;
//     }
// }
// if(index == -1) console.log("Element not found");
// else console.log("Element found at index at " + index+' index');
