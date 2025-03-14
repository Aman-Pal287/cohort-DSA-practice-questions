// problem 1: print hello world 5 times
// let n = Number(prompt("Enter a number"));//5
// if(isNaN(n)){
//     console.log("Invalid Input");
// }else{
//     let i;
//     for(i=1;i<=n;i++){
//     console.log("hello world")  
//     }
//     console.log("failed at " + i );
// }


//problem 2: print natural number up to n terms.
// let n = Number(prompt("Enter a number"));

// //1 to n
// for(let i = 1;i<=n;i++){
//     console.log(i);    
// }
// console.log("-------------------------------------------------");

// //n to 1
// for(let i = n;i>=1;i--){
//     console.log(i);    
// }


//problem 3: take a number as input and print its table
// let n = Number(prompt("Enter a number"));
// for (let i = 1; i<=10;i++) console.log(n + " * " + i + " = " + (n*i));

//problem 4 : sum up to n terms
// let n = Number(prompt("Enter a number"));
// let sum = 0;
// for (let i=1;i<=n;i++) sum += i;
// console.log(sum);

//problem 5: factorial of a given number
// let n = Number(prompt("Enter a number"));
// let factorial = 1;
// for(let i=1;i<=n ; i++){
//     factorial *= i
// }
// console.log(factorial);


// problem 6: print the sum of all even and odd numbers in a range seperately
// let num = Number(prompt("Enter a number"))
// let oddSum = 0 , evenSum = 0;

// for(let i= 1;i<=num;i++){
//     if(i%2 == 0) evenSum += i;
//     else oddSum += i;
// }
// console.log("oddSum is = " + oddSum );
// console.log("evenSum is = " + evenSum );




//problem 7: Print all the factors of a number.
//note : agr hum itself number ko chor de toh uske just last wala factor uss number ka half hota hai example:jaise 10 ka factor 1,2,5,10. toh ismein 10 jo hai wo itself number hai aur uske just last pehle fator 5 hai jo 10 ka addha hai. 
//note : ha to agar hum itself ko bhi loop mein gin lete hai toh wo loop us number ke half se us number tak loop ko chalna hai parega jo performace ki ga**d mar dega isliye hum itself jo number hota hai usse hum direct print kar dete hai
// let n = Number(prompt("Enter a number"))

// for(let i=1;i<=n;i++){
//     if(n%i == 0){
//         console.log("the factors is = " + i )
//     }
// }
//efficient tarika
// for (let i = 1; i <= n / 2; i++) {
//     if (n % i == 0) {
//         console.log("the factor is = " + i)
//     }
// }
// console.log("the factors is = " + n)  



//problem 8(Important): check if the number is Prime or not.

// let n = Number(prompt("Enter a number"));
// let isPrime = true;

// method 1:
// for (let i = 2; i<n; i++){ // loop 2 se (n-1) tak chalega
//     if(n%i==0){
//         isPrime = false;
//         break
//     }
// }
// console.log(isPrime ? "prime number" : "Not a prime number");

// method 2 : (efficient tarika)
// for (let i = 2; i<=n/2; i++){ // loop 2 se (n-1) tak chalega
//     if(n%i==0){
//         isPrime = false;
//         break
//     }
// }
// console.log(isPrime ? "prime number" : "Not a prime number");
