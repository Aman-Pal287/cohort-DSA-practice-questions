const prompt = require('prompt-sync')();
// problem 1: second max khojo
// let arr = [28,28,6,74,2,4,79]
// let max = Math.max(arr[0] , arr[1]);
// let sMax = Math.min(arr[0] , arr[1]);
// for (let i =  2 ; i<arr.length;i++ ){
//     if(arr[i]>max){
//         sMax = max
//         max = arr[i]
//     }else if(arr[i]>sMax && arr[i] != max){
//         sMax = arr[i]
//     }
// }
// console.log("Second max is =  " + sMax);


//problem home work: second minimum number 
// let arr = [28,28,6,74,2,4,79]
// let min = Math.min(arr[0] , arr[1])
// let sMin = Math.max(arr[0] , arr[1])
// for(let i = 2;i<arr.length;i++){
//     if(arr[i]< min){
//         sMin = min;
//         min = arr[i]
//     }else if(arr[i]<sMin arr[i] != min){
//         sMin = arr[i]
//     }
// }
// console.log("second minimum number is = " + sMin);


//problem 2 : reverse of array
//with space
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let temp = new Array(arr.lenght)

// for (let j=0, i = arr.length-1; i>=0; i--,j++){
//     temp[j] = arr[i]
// }
// console.log(temp);

// without creating new space
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let i =0 , j= arr.length-1 , temp;
// while(i<j){
//     temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr);

//problem 3: all zero
// let arr = [1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1]
// let i= 0 , j=0 , temp;
// while(i<arr.length){
//     if(arr[i] == 0){
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
//     i++;
// }
// console.log(arr);
