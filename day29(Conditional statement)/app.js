// some if else questions and its importent 
let year = Number(prompt("Enter a year"));
let isLeap = false;

if(year%4==0){
    if(year%100==0){
        if(year%400==0) isLeap = true;
        else isLeap=false;
    }
    else{
        isLeap = true;
    }
}else isLeap = false;

console.log(isLeap? "Leap Year":"Not a Leap Year")