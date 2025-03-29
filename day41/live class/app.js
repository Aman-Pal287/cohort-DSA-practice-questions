let prompt = require('prompt-sync')();
// sorting question::


//what is stable sort and unstable sort - video me samajh lena

//BUBBLE SORT :
// let arr = [5,3,1,9,7,8,4,3,1,1,4,3,1,8]
// for(let j= 0;j<arr.length-1;j++){
//     for(let i = 0 ; i<arr.length-1-j;i++){
//         if(arr[i]>arr[i+1]){
//             let temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;
//         }    
//     }
// }
// console.log(arr);


//SELECTION SORT
// let arr = [11, 1, 3, 5, 10, 15]

//mera dimag ka code - ignore maro - ye bc bubble sort jaise hi hogya hai
// for(let i= 0;i<arr.length-1;i++){
//     for(let j = i ;j<arr.length-1;j++){
//         if(arr[j+1]<arr[j]){
//             let temp = arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);

//sir ka code
// for (let i = 0; i < arr.length - 1; i++) {
//     let small = i;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[small] > arr[j]) {
//             small = j;
//         }
//     }
//     if (i != small) {
//         let temp = arr[i]
//         arr[i] = arr[small]
//         arr[small] = temp
//     }
// }
// console.log(arr);
