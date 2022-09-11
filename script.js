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

// let items = [1, 2, 3, 4, 5, 6];


// function isEven(n) {
//     return n % 2 == 0;
// }

// function partitionOn(pred, items) {
//     let evenMas = [],
//         oddMas = [],
//         newMas = [];
//     const itemsLenght = items.length;
//     for (let i = 0; i < items.length; i++) {
//         if (pred(items[i])) {
//             evenMas.push(items[i]);
//         } else {
//             oddMas.push(items[i]);
//         }
//         delete items[i];
//     }
//     newMas = oddMas.concat(evenMas);
//     for (let i = 0; i < itemsLenght; i++) {
//         items[i] = newMas[i];
//     }
//     items = oddMas.concat(evenMas);
//     for (let i = 0; i < items.length; i++) {
//         if (items[i] == items[oddMas.length]) {
//             return i;
//         }
//     }
//     return items[oddMas.length];
// }
// console.log(partitionOn(isEven, items));

// console.log(items);


function orderWeight(string) {
    let arr = string.split(" ");
    let sumArr = [];
    let arrays = [];
    let resStr = "";
    arr.forEach(item => {
        let elStrInArr = item.split("").map(el=>+el);
        const sum = 0;

        sumArr.push(elStrInArr.reduce(
            (prev,curr) => prev + curr , sum
        ));
    });

    for(let i=0; i<arr.length; i++){
       arrays.push([arr[i],sumArr[i]]);
    }

    function sortByFirstOrSecondEl(a, b) {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    }

    arrays
    .sort(sortByFirstOrSecondEl)
    .forEach(item=>{
        resStr += `${item[0]} `;
    });

    return resStr.trim();
}

console.log(orderWeight("103 123 4444 99 2000"));
