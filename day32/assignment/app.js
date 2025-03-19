const prompt = require('prompt-sync')()

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
// let a,b,c;
// a=0;
// b=1;
// process.stdout.write(a +", " + b +", ")
// for(let i = 1;i<=n;i++){    
//     if(n>2){
//         c = a+b;
//     process.stdout.write(c + ", ")
//     a=b;
//     b=c;
//     }
    
// }   




//Question 8:prime factors
//ghatiya tarika
// let n = Number(prompt("Enter a number"))
// let result = [];
// let div =2;
// while(n>=2){
//     if(n % div == 0){
//         result.push(div);
//         n /= div
//     }
//     else{
//         div++;
//     }
// }
// console.log(result);

// Question 9. Calculate area using switch statement
// let shape = prompt("What shape of area you want circle , rectangle or trianle : ");


// switch (shape) {
//     case "circle":{
//         let radius = prompt("Enter radius") ;
//         let area = Math.PI*Math.pow(radius,2);
//         console.log("the area of cirle is : " +area);
//     }       
//         break;
//     case "rect":{
        
//         let lenght = Number(prompt("enter length of rectangle"))
//         let width = Number(prompt("enter width of rectangle"))
        
//         console.log("the area of rectangle is : " + (length*width));
        
//     }
//          break;
    
    
    
//     default: console.log("enter a valid sahpe");
// }



//Question 10:
// let n = prompt("Enter a number");
// let square = n*n;
// let copy = square;
// let rem = 0;
// sum = 0;
// while(square>0){
//     rem = square%10;
//     sum += rem;
//     square = Math.floor(square/10);
// }
// if(sum == n) console.log("Neon Number");
// else console.log("not a neon number");

