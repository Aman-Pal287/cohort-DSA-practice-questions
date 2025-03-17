//break statement
// let n = 10;
// for(let i = 1;i<=n;i++){
//     if(i==8) break;
//     console.log(i);
// }
// console.log("============================")
// for(let i = 1;i<=n;i++){
//     if(i==8) continue;
//     console.log(i);
// }



//while loop

//------------
// declare.initialize 
//while(//condition){

    //change

//}
//---------------
//example :1
// let n = 5;
// let i = 1;
// while(i<=n){
//     console.log("hello world");
//     i++;
// }

//example:2
// let n=5 , sum =0 , i=1;
// while(i<=n){
//     sum =sum+i
//     i++;
// }
// console.log(sum);


//example 3:
// let n = Number(prompt("enter a number"))//sum of digit
// let sum = 0;
// while(n>0){
//     let rem = n%10;
//     sum = sum + rem;
//     n= Math.floor(n/10);
// }
// console.log("the sum of your digit is = " + sum);


//examle 4: reverse of a digits (281->182)
// let n = Number(prompt("enter a number"));
// let sum = 0;
// reverse = 0;
// while(n>0){
//     let reminder = n%10;
//     reverse = (reverse*10)+reminder;
//     n = Math.floor(n/10);
// }
// console.log(reverse)



//AUTOMORPHIC NUMBER 
// let n = Number(prompt("enter a number"));
// let copy = n;
// let sq = n*n;

// let count = 0;
// while(n>0){
//     count++
//     n = Math.floor(n/10);
// }

// if(sq%Math.pow(10,count) == copy) console.log("Automorphic Number");
// else console.log("Not a automorphic number");


//switch statement
// example 1
// let n = Number(prompt("Enter a number"));
// switch(n){
//     case 1:{ 
//         console.log("Monday");
//     }
//     break

//     case 2: console.log("Tuesday");
//     break

//     case 3: console.log("wednesday");
//     break

//     case 4: console.log("thrusday");
//     break

//     case 5: console.log("friday");
//     break

//     case 6: console.log("saturday");
//     break

//     case 7: console.log("sunday");
//     break

//     default : console.log("main toh chalunga hi agar kuch nhi chala toh");    
// }
//example 2: multiple case ke liye ke hi execution
// let n = Number(prompt("Enter a number"));
// switch(n){
//     case 1:
//     case 2:
//     case 3:    
//     case 4:
//         console.log("Monday");
//         break

//     case 5:
//     case 6:
//     case 7:    
//     case 8:
//         console.log("Tuesday");
//         break

//     default : console.log("main toh chalunga hi agar kuch nhi chala toh");    

// }


//switch case : true and false wala
// switch (true) {
//     case 10>9: console.log("hello");        
//         break;
//     case 18>7 && 45>9: console.log("hey");
//         break;
    
//     default: console.log("main toh chalunga hi agar kuch nhi chala toh");
    
    
// }