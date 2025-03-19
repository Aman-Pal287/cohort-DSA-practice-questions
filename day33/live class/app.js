const prompt = require('prompt-sync')();
//star pattern printing
// let n = prompt("Enter a number : ")// n rows and n cloumns
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
// }


// problem 1: right angle triangle star pattern
//*
//* *
//* * *
//* * * *
//* * * * *
// let n = prompt("Enter a Number : ")
// for(let i = 1;i<=n;i++){
//     for(let j=1 ;j<=i;j++){
//         process.stdout.write("* ")
//     }
//     console.log();    
// }


// problem 2: right angle triangle number pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
//  let n = prompt("Enter a Number : ")
// for(let i = 1;i<=n;i++){
//     for(let j=1 ;j<=i;j++){
//         process.stdout.write(j+ " ")
//     }
//     console.log();    
// }

// problem 3: inverted right angle triangle star pattern
// * * * * *
// * * * * 
// * * * 
// * * 
// * 
// method:1 (ghatiya tarika)
// let n = prompt("Enter a Number : ")
// let temp = n;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=temp;j++){
//         process.stdout.write("* ");
//     }
//     temp--
//     console.log();    
// }
// method:2 (efficient tarika)
// let n = prompt("Enter a Number : ")
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i+1;j++){
//         process.stdout.write("* ");
//     }
    
//     console.log();    
// }


// abc pattern
// A
// A B
// A B C
// A B C D
// A B C D E
// let n = prompt("Enter a Number : ")
// for (let i=1; i<=n;i++){
//     let alpha = 65;
//     for (let j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(alpha)+ " ");
//         alpha++;
//     }
//     console.log();    
// }