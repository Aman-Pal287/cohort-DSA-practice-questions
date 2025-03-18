// Question 1: checking isbn number
// let n = Number(prompt("Enter a isbn number"));
// let copy = n;
// let i= 10 , sum = 0 ,isbnNum = 0 , rem = 0;
// do{
//     rem = n%10;
//     sum = rem * i;
//     i--;
//     isbnNum += sum;
//     n = Math.floor(n/10);
// }while(n>0);

// if(isbnNum%11 == 0){
//     console.log("Valid isbn");    
// }else console.log("Invalid isbn");


//Question 2: 
// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));
// let arr1 = [];
// let arr2 = [];

// for(let i = 1; i<=a ; i++){
//     if(a%i == 0 ){
//         arr1.push(i);
//     }
// }
// console.log(arr1);

// for(let i = 0; i<=b ; i++){
//     if(b%i == 0){
//         arr2.push(i);
//     }
// }

// let commonElem = arr1.filter(element => arr2.includes(element));
// let commonFactor = Math.max(...commonElem);
// console.log("the highest commonFactor is = " + commonFactor);

