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


// function orderWeight(string) {
//     let arr = string.trim().split(" ");
//     let sumArr = [];
//     let arrays = [];
//     let resStr = "";
//     arr.forEach(item => {
//         let elStrInArr = item.split("").map(el=>+el);
//         const sum = 0;

//         sumArr.push(elStrInArr.reduce(
//             (prev,curr) => prev + curr , sum
//         ));
//     });

//     for(let i=0; i<arr.length; i++){
//        arrays.push([arr[i],sumArr[i]]);
//     }

//     function sortBySecondEl(a, b) {
//             return a[1] - b[1];
//     }

//     let sortArr = arrays.sort(sortBySecondEl)


//     function BubbleSort(A) {
//         let n = A.length;
//         for (let i = 0; i < n - 1; i++) {
//             for (let j = 0; j < n - 1 - i; j++) {
//                 if(A[j][1] === A[j+1][1]){
//                     if (A[j][0] > A[j + 1][0]) {
//                         let t = A[j];
//                         A[j] = A[j + 1];
//                         A[j + 1] = t;
//                     }
//                 }
//             }
//         }
//         return A;
//     }

//     BubbleSort(sortArr).forEach(item=>{
//         resStr += `${item[0]} `;
//     });

//     return resStr.trim();
// }

// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
//                         // "11 11 2000 10003 22 123 1234000 44444444 9999"

// let santa = {
//     sayHoHoHo: function() { console.log('Ho Ho Ho!') },
//     distributeGifts: function() { console.log('Gifts for all!'); },
//     goDownTheChimney: function() { console.log('*whoosh*'); }
// };


// function isSantaClausable(obj) {
//     // TODO
//     let objKeys = {"sayHoHoHo":1,"distributeGifts":1,"goDownTheChimney":1};
//     let count = 0;
//     for(let key in obj){
//         if( key in objKeys && typeof(obj[key]) === "function"){
//             count++;
//         }
//     }

//     return count==3?true:false;
// }

// console.log(isSantaClausable(santa));

// class Animal{
//     constructor(name,type){
//         this.name = name;
//         this.type = type;
//     }

//     toString(){
//         return `${this.name} is ${this.type}`;
//     }

// }

// function Animal(name,type){
//     this.name = name;
//     this.type = type;

//     this.toString = function(){
//         return `${this.name} is ${this.type}`;
//     }
// }

// let dog = new Animal("Max","dog");

// console.log(dog.toString());

// console.log(dog.type);
// console.log(dog.name);
// dog.name = "Lassie";
// console.log(dog.name)


// полифилл Map;
// Array.prototype.myMap = function (callback) {

//     const newArray = [];

//     for (let i = 0; i < this.length; i++) {
//         newArray.push(callback(this[i], i, this));
//     }

//     return newArray;
// };

// let a = [1,2,3];

// let newArr = a.myMap(item => item*2);

// console.log(newArr);
// class Animal {
//     constructor(name, age, legs, species, status) {
//       this.name = name;
//       this.age = age;
//       this.legs = legs;
//       this.species = species;
//       this.status = status;
//     }
//     introduce() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
//   }

// class Shark extends Animal {
//     constructor(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.legs = 0;
//         this.species = "shark";
//         this.status = status;
//     }
// }

// class Cat extends Animal {
//     constructor(name, age, status) {
//         super();
//         this.name = name;
//         this.age = age;
//         this.status = status;
//         this.legs = 4;
//         this.species = "cat";
//     }
//     introduce() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
//     }
// }

// class Dog extends Animal {
//     constructor(name, age, status,master) {
//         super();
//         this.name = name;
//         this.age = age;
//         this.status = status;
//         this.legs = 4;
//         this.species = "dog";
//         this.master = master;   
//     }
//     introduce(){
//         super.introduce();
//     }
//     greetMaster(){
//         return `Hello ${this.master}`;
//     }
// }

// class Cube {
//     constructor(length) {
//         this.length = length;
//     }

//     get surfaceArea() {
//         return 6 * this.length ** 2;
//     }
//     get volume() {
//         return this.length ** 3;
//     }

//     set surfaceArea(s){
//         this.length = (s/6) ** (1/2);
//     }
//     set volume(v){
//         this.length = v ** (1/3);
//     }
// }

class File {
    constructor(fullName,contents){
        this._fullName = fullName;
        this._fileName = this.getFileName(fullName);
        this._extension = this.getExtension(fullName);
        this.contents = contents; 
        this.count = -1;
    }
    
    getFileName(fullName){
        let arr = fullName.split("");
        let newArr = [];
        for(let i=0; i<arr.length;i++){
            if(arr[i]!="."){
                newArr.push(arr[i]);
            }else{
                break;
            }
        }
        return newArr.join("");
    };
    getExtension(fullName){
        let arr = fullName.split("").reverse();
        let newArr = [];
        for(let i=0; i<arr.length;i++){
            if(arr[i]!="."){
                newArr.push(arr[i]);
            }else{
                break;
            }
        }
        return newArr.reverse().join("");
    };

    get fullName(){
        return this._fullName;
    }
    get fileName(){
        return this._fileName;
    }
    get extension(){
        return this._extension;
    }

    getContents(){
        return this.contents;
    }
    write(newContents){
        this.contents+=`\n${newContents}`
    }
    
    gets(){
        let a = this.count;
        a++;
        let con = this.contents.split("\n");
        return can[a];
    }
  
}

var myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
console.log(myFile.gets()); // "Line 1"
console.log(myFile.gets()); // "Line 2"
console.log(myFile.gets()); // "Line 3"
console.log(myFile.gets()); // "Line 4"
console.log(myFile.gets()); // "Line 5"
console.log(myFile.gets()); // undefined
console.log(myFile.gets()); // undefined
console.log(myFile.gets()); // undefined

