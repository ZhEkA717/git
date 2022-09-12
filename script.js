"use strict";

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
//     const itemsLength = items.length;
//     for (let i = 0; i < items.length; i++) {
//         if (pred(items[i])) {
//             evenMas.push(items[i]);
//         } else {
//             oddMas.push(items[i]);
//         }
//         delete items[i];
//     }
//     newMas = oddMas.concat(evenMas);
//     for (let i = 0; i < itemsLength; i++) {
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
    let arr = string.trim().split(" ");
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

    function sortBySecondEl(a, b) {
            return a[1] - b[1];
    }

    let sortArr = arrays.sort(sortBySecondEl)

    // for (let i = 0; i < sortArr.length-1; i++) {
    //     if (sortArr[i][1] === sortArr[i + 1][1]) {
    //         if (sortArr[i][0] > sortArr[i + 1][0]) {
    //             let r = sortArr[i];
    //             sortArr[i] = sortArr[i + 1];
    //             sortArr[i + 1] = r;
    //         }
    //     }   
    // }

    function BubbleSort(A) {
        let n = A.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                if(A[j][1] === A[j+1][1]){
                    if (A[j][0] > A[j + 1][0]) {
                        let t = A[j];
                        A[j] = A[j + 1];
                        A[j + 1] = t;
                    }
                }
            }
        }
        return A;
    }

    BubbleSort(sortArr).forEach(item=>{
        resStr += `${item[0]} `;
    });

    return resStr.trim();
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
                        // "11 11 2000 10003 22 123 1234000 44444444 9999"
