// some if else questions and its importent 

// Q1 checking leap year
//method:1
// let year = Number(prompt("Enter a year"));
// let isLeap = false;

// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0) isLeap = true;
//         else isLeap=false;
//     }
//     else{
//         isLeap = true;
//     }
// }else isLeap = false;

// console.log(isLeap? "Leap Year":"Not a Leap Year")

//method(efficient(optimized) method):2
// let year = Number(prompt("Enter a year"));
// let isLeap = false;
// if((year%4==0 && year%100!=0)){
//     console.log("Leap Year");
// }else if (year%400==0){
//     console.log("Leap Year")
// }else console.log("Not a Leap year");


// Q2. shop disountcount
// let amount = Number(prompt("Enter amount"));
// if(amount>=0 && amount<=5000){
//     console.log(amount);
// }else if(amount>5000 && amount<=7000){
//     console.log(amount - (5*amount)/100);
// }else if(amount>7000 && amount<=9000){
//     console.log(amount - (10*amount)/100);
// }else if(amount>9000){
//     console.log(amount - (20*amount)/100);
// }else{
//     console.log("invalid input");
// }

//efficient tarika shop disount count waale question ka
// let amount = Number(prompt("Enter amount"));
// let disount = 0;
// if(amount>=0 && amount<=5000) disount = 0;
// else if(amount>5000 && amount<=7000) disount = 5;
// else if(amount>7000 && amount<=9000) disount = 10;
// else if(amount>9000) disount = 20;
// else console.log("invalid input");
// console.log(amount -  (disount*amount)/100);
