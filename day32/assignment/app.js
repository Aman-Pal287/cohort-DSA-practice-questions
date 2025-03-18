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

//Question 3 :
// let n = Number(prompt("Enter harshad number"));
// let copy = n;
// let sum = 0;
// rem = 0;
// while(n>0){
//     rem = n%10;
//     sum += rem;
//     n = Math.floor(n/10);
// }
// if(copy % sum == 0) console.log("Harshad Number");
// else console.log("not a harshad number");



//Quesion 4:
// let n = Number(prompt("Enter a number"))
// let answer = isPerfectSquare(n)
// console.log(answer);
// function isPerfectSquare(n) {
//     let sqrt = Math.sqrt(n);
//     return sqrt === Math.floor(sqrt) ? "Perfect Square" : "Not a Perfect Square";
// }



//Question 5:
// let n = Number(prompt("Enter a number"));
// let arr1 = [];
// for(let i = 1; i<=n/2 ; i++){
//     if(n%i == 0 ){
//         arr1.push(i);
//     }
// }
// let sumArr = arr1.reduce((acc,num)=> acc+num , 0);
// if(sumArr>n) console.log("Abundant Number");
// else console.log("Not a Abundant Number");

//Question 6://hold pe hai 
// let n = Number(prompt("Enter a number"))
// let arr =[];
// for (let i = 0; i<=n ; i++ ){

// }


