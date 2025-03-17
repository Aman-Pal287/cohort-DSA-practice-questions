//do-while loop : exit control loop
//example- for start of do-while loop
// let i = 1
// do{
//     console.log("namaste duniya!");
//     i++;
// }while(i<=5)



// problem 1: repeat hello
// let userInput;
// do{
//     console.log("namaste duniya");
//     userInput = prompt("aap continue karna chahte ho kya? yes/no").toLowerCase();
// }while(userInput === 'yes');


//problem 2 : guess the number ek program bnao
// let com = Math.floor(Math.random() * 100) + 1;
// let userInput;
// do {
//     userInput = Number(prompt("Guess the number in b/w 1 to 100"))
//     if (isNaN(userInput) || userInput < 0 || userInput > 100) {
//         console.log("please enter a valid number");
//         continue
//     }
//     if (userInput > com) console.log("too high, try again");
//     else if (userInput < com) console.log("too low, try again");
//     else console.log("congrats 🎉 and number was " + com);
// } while (userInput !==   com); 
