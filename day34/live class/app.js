const prompt = require("prompt-sync")();


// problem :1 mirrored
//          * 
//        * * 
//      * * * 
//    * * * * 
//  * * * * * 
// let n = prompt("enter a number : ");
// for(let i=1;i<=n;i++){
//     for(let j = 1 ;j<=n-i;j++){
//         process.stdout.write("  ")
//     }
//     for(let k = 1;k<=i;k++){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }

//
//       *     
//      * *    
//     * * *   
//    * * * *  
//   * * * * * 

// let n = prompt("enter a number : ");
// for(let i=1;i<=n;i++){
//     for(let j = 1 ;j<=n-i;j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1;k<=i;k++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }    


// problemm :X pattern
let n = Number(prompt("enter a number : "));
for(let i= 1;i<=n;i++){
        for(let j=1;j<=n;j++ ){
                if(i==j || i+j === n+1){
            process.stdout.write("* ")
        }else process.stdout.write("  ")
    }
    console.log();

}



// V pattern
// let n = Number(prompt("enter a number : "));
// for(let i= 1;i<=n;i++){
//     for(let j=1;j<=(n*2)-1;j++ ){
//         if(i==j || i+j === n*2){
//             process.stdout.write("* ")
//         }else process.stdout.write("  ")
//     }
//     console.log();
    
// }