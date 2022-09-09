// "use strict";

// function whatSign(a,whatFun){
//     let res;
//     const firstEl = a[0];
//     switch(firstEl){
//         case "+": res = whatFun + +a[1];
//         break;
//         case "-": res = whatFun - a[1];
//         break;
//         case "*": res = whatFun * a[1];
//         break;
//         case "/": res = Math.round(whatFun / a[1]);
//         break;
//     }
//     return res;
// }

// function zero(a) {
//     const whatFun = 0;
//     if(a){
//         return whatSign(a,whatFun);
//      }else{
//          return whatFun;
//      }
// }
// function one(a) {
//     const whatFun = 1;
//     if(a){
//         return whatSign(a,whatFun);
//      }else{
//          return whatFun;
//      }
// }
// function two(a) {
//     const whatFun = 2;
//     if(a){
//         return whatSign(a,whatFun);
//      }else{
//          return whatFun;
//      }
// }
// function three(a) {
//     const whatFun = 3;
//     if(a){
//         return whatSign(a,whatFun);
//      }else{
//          return whatFun;
//      }
// }
// function four(a) {
//     const whatFun = 4;
//     if(a){
//         return whatSign(a,whatFun);
//      }else{
//          return whatFun;
//      }
// }
// function five(a) {
//     const whatFun = 5;
//     if(a){
//         return whatSign(a,whatFun);
//      }else{
//          return whatFun;
//      }
// }
// function six(a) {
//     const whatFun = 6;
//     if(a){
//         return whatSign(a,whatFun);
//      }else{
//          return whatFun;
//      }
// }
// function seven(a) {
//     const whatFun = 7;
//     if(a){
//         return whatSign(a,whatFun);
//      }else{
//          return whatFun;
//      }
// }
// function eight(a) {
//     const whatFun = 8;
//     if(a){
//         return whatSign(a,whatFun);
//      }else{
//          return whatFun;
//      }
// }
// function nine(a) {
//     const whatFun = 9;
//     if(a){
//         return whatSign(a,whatFun);
//      }else{
//          return whatFun;
//      }
// }

// function plus(fun) {return `+${fun}`;}
// function minus(fun) {return `-${fun}`;}
// function times(fun) {return `*${fun}`;}
// function dividedBy(fun) {return `/${fun}`;}

// console.log(seven(times(five())));
// console.log(four(plus(nine())));
// console.log(eight(minus(three())));
// console.log(six(dividedBy(two())));


// function getMiddle(s) {
//     let amount = s.length;
//     let evenOrOdd = amount%2?1:0;
//     let rez;
//     if(evenOrOdd===1){
//         rez = s[Math.floor(amount/2)];
//     }else if(evenOrOdd===0){
//         rez = s[amount/2-1]+s[amount/2];
//     }else if(amount===1){
//         rez = s;
//     }
//     return rez;
// }


// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));
// console.log(getMiddle("A"));

var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {
    return n % 2 == 0
}

function partitionOn(pred, items) {
    let evenMas=[],
        oddMas=[];
    for(let i=0; i<items.length;i++){
        if(pred(items[i])){
            evenMas.push(items[i]);
        }else{
            oddMas.push(items[i]);
        }
    }
    console.log(evenMas);
    console.log(oddMas);
}

console.log(partitionOn(isEven,items));
