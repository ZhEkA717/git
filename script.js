
// // function whatSign(a,whatFun){
// //     let res;
// //     const firstEl = a[0];
// //     switch(firstEl){
// //         case "+": res = whatFun + +a[1];
// //         break;
// //         case "-": res = whatFun - a[1];
// //         break;
// //         case "*": res = whatFun * a[1];
// //         break;
// //         case "/": res = Math.round(whatFun / a[1]);
// //         break;
// //     }
// //     return res;
// // }

// // function zero(a) {
// //     const whatFun = 0;
// //     if(a){
// //         return whatSign(a,whatFun);
// //      }else{
// //          return whatFun;
// //      }
// // }
// // function one(a) {
// //     const whatFun = 1;
// //     if(a){
// //         return whatSign(a,whatFun);
// //      }else{
// //          return whatFun;
// //      }
// // }
// // function two(a) {
// //     const whatFun = 2;
// //     if(a){
// //         return whatSign(a,whatFun);
// //      }else{
// //          return whatFun;
// //      }
// // }
// // function three(a) {
// //     const whatFun = 3;
// //     if(a){
// //         return whatSign(a,whatFun);
// //      }else{
// //          return whatFun;
// //      }
// // }
// // function four(a) {
// //     const whatFun = 4;
// //     if(a){
// //         return whatSign(a,whatFun);
// //      }else{
// //          return whatFun;
// //      }
// // }
// // function five(a) {
// //     const whatFun = 5;
// //     if(a){
// //         return whatSign(a,whatFun);
// //      }else{
// //          return whatFun;
// //      }
// // }
// // function six(a) {
// //     const whatFun = 6;
// //     if(a){
// //         return whatSign(a,whatFun);
// //      }else{
// //          return whatFun;
// //      }
// // }
// // function seven(a) {
// //     const whatFun = 7;
// //     if(a){
// //         return whatSign(a,whatFun);
// //      }else{
// //          return whatFun;
// //      }
// // }
// // function eight(a) {
// //     const whatFun = 8;
// //     if(a){
// //         return whatSign(a,whatFun);
// //      }else{
// //          return whatFun;
// //      }
// // }
// // function nine(a) {
// //     const whatFun = 9;
// //     if(a){
// //         return whatSign(a,whatFun);
// //      }else{
// //          return whatFun;
// //      }
// // }

// // function plus(fun) {return `+${fun}`;}
// // function minus(fun) {return `-${fun}`;}
// // function times(fun) {return `*${fun}`;}
// // function dividedBy(fun) {return `/${fun}`;}

// // console.log(seven(times(five())));
// // console.log(four(plus(nine())));
// // console.log(eight(minus(three())));
// // console.log(six(dividedBy(two())));


// // function getMiddle(s) {
// //     let amount = s.length;
// //     let evenOrOdd = amount%2?1:0;
// //     let rez;
// //     if(evenOrOdd===1){
// //         rez = s[Math.floor(amount/2)];
// //     }else if(evenOrOdd===0){
// //         rez = s[amount/2-1]+s[amount/2];
// //     }else if(amount===1){
// //         rez = s;
// //     }
// //     return rez;
// // }


// // console.log(getMiddle("test"));
// // console.log(getMiddle("testing"));
// // console.log(getMiddle("middle"));
// // console.log(getMiddle("A"));

// // let items = [1, 2, 3, 4, 5, 6];


// // function isEven(n) {
// //     return n % 2 == 0;
// // }

// // function partitionOn(pred, items) {
// //     let evenMas = [],
// //         oddMas = [],
// //         newMas = [];
// //     const itemsLenght = items.length;
// //     for (let i = 0; i < items.length; i++) {
// //         if (pred(items[i])) {
// //             evenMas.push(items[i]);
// //         } else {
// //             oddMas.push(items[i]);
// //         }
// //         delete items[i];
// //     }
// //     newMas = oddMas.concat(evenMas);
// //     for (let i = 0; i < itemsLenght; i++) {
// //         items[i] = newMas[i];
// //     }
// //     items = oddMas.concat(evenMas);
// //     for (let i = 0; i < items.length; i++) {
// //         if (items[i] == items[oddMas.length]) {
// //             return i;
// //         }
// //     }
// //     return items[oddMas.length];
// // }
// // console.log(partitionOn(isEven, items));

// // console.log(items);


// function orderWeight(string) {
//     let arr = string.split(" ");
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

//     arrays
//     .sort(sortByFirstOrSecondEl)
//     .forEach(item=>{
//         resStr += `${item[0]} `;
//     });

//     return resStr.trim();
// }

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

// Array.prototype.myMap = function (callback,context) {
//     let newArray = new Array(this.length);
//         for (let i = 0; i < this.length; i++) {
//             if(i in this){
//                 newArray[i] = callback.apply(context,[this[i], i, this]);
//             }
//         }
//     return newArray;
// };

// let arr = new Array(3);

// let newArr = arr.myMap(item=>item*2);

// console.log(newArr);

// полифилл filter

// Array.prototype.myFilter = function(callback,thisArg){
//     debugger;
//     let newArr = [];
//     let arrLength = this.length;
//     for(let i=0;i<arrLength;i++){
//         if(i in this){
//             if(callback.apply(thisArg,[this[i],i,this])){
//                 newArr.push(this[i]);
//             }
//         }
//     }
//     return newArr;
// }
// console.log([2,3,4,5,6,7,8].myFilter(function(item,i,arr){
//     arr.push(item);
//     return this[i]==i;
// },[0,1,2,3,4]));


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
// -----------------------------------------------
// class File {
//     constructor(fullName,contents){
//         this.countGets = -1;
//         this.countGetc= -1;
//         this._fullName = fullName;
//         this._filename = this.getFileName(fullName);
//         this._extension = this.getExtension(fullName);
//         this.contents = contents; 
//     }

//     getFileName(fullName){
//         let arr = fullName.split("").reverse();
//         let newArr = [];
//         for(let i=0; i<arr.length;i++){
//             if(arr[i]!="."){
//                 newArr.push(arr[i]);
//             }else{
//                 break;
//             }
//         }
//         return arr.reverse().slice(0,arr.length-1-newArr.length).join("");
//     };
//     getExtension(fullName){
//         let arr = fullName.split("").reverse();
//         let newArr = [];
//         for(let i=0; i<arr.length;i++){
//             if(arr[i]!="."){
//                 newArr.push(arr[i]);
//             }else{
//                 break;
//             }
//         }
//         return newArr.reverse().join("");
//     };

//     get fullName(){
//         return this._fullName;
//     }
//     get filename(){
//         return this._filename;
//     }
//     get extension(){
//         return this._extension;
//     }

//     getContents(){
//         return this.contents;
//     }
//     write(newContents){
//         if(this.contents){
//             this.contents+=`/n${newContents}`;
//         }else{
//             this.contents+=`${newContents}`;
//         }
//     }
//     gets(){
//         this.countGets++;
//         let contextEl = this.contents.split("\n");
//         return contextEl[this.countGets];
//     }
//     getc(){
//         this.countGetc++;
//         let contextEl = this.contents.split("");
//         return contextEl[this.countGetc];
//     }
// }

// 
// полифилл bind()
// const person = {
//     name: "Zheka"
// }

// function info(phone,email){
//     console.log(`Name: ${this.name}, Phone: ${phone}, Email: ${email}`)
// }

// info.bind(person)("12345","zheka@mail.ru"); //карированный метод
// info.bind(person,"12345")("zheka@mail.ru"); //
// info.bind(person,"12345","zheka@mail.ru")(); //


// function bind(fn,context){
//     const rest = Array.prototype.slice.call(arguments,2); 
//     console.log(rest);
//     return function(){
//         const args = Array.prototype.slice.call(arguments);
//         return fn.apply(context,rest.concat(args));
//     }
// }

// Function.prototype.myBind = function(context){
//     const fun = this;
//     const rest = Array.prototype.slice.call(arguments,2); 
//     return function(){
//         const args = Array.prototype.slice.call(arguments);
//         if(this){
//             return fun.apply(this,rest.concat(args));
//         }
//         return  fun.apply(context,rest.concat(args));
//     }
// }

// info.myBind(person)("12345","zheka@mail.ru"); //карированный метод
// info.myBind(person,"12345")("zheka@mail.ru"); //
// info.myBind(person,"12345","zheka@mail.ru")(); //


// let object = { 
//     user: { 
//         name: { 
//           first: [ {children: 12},'alex','paul'], 
//           last: 'Snow' 
//         }
//     } 
// };
// let path = 'user.name.first.0.children';

// function find(object, path) {
//     let arr = path.split(".");
//     let a = object[arr[0]];
//     for (let i = 1; i < arr.length; i++) {
//         if(a){
//             a=a[arr[i]]
//         }else{
//             return;
//         }
//     }
//     return a;
// }

// console.log(find(object,path));

// const date = "Wed Sep 14 2022 9:00:00";

// function handAngle (date) {
//     let time = new Date(date),
//         second = time.getSeconds(),
//         minute = time.getMinutes(),
//         hour = time.getHours();

//     let positionMinuteArrow = minute*6,
//         positionHourArrow = hour*30 + (minute*60)*(1/120);
//     let angle = Math.abs(positionHourArrow-positionMinuteArrow)*(Math.PI/180);
// 	return angle>Math.PI?2*Math.PI-angle:angle;
// }

// console.log(handAngle(date));

// function d2h(d) {
//     return d.toString(16);
// }

// function h2d(h) {
//     return parseInt(h, 16);
// }

// let colors = ["#00FF00", "#FFFF00", "#01130F"];

// function brightest(colors) {
//     let arrMaxBright = [];
//     for(let i =0; i< colors.length; i++){
//         let color = colors[i];
//         let r = parseInt(color.substring(1,3),16),
//             g = parseInt(color.substring(3,5),16),
//             b = parseInt(color.substring(5,7),16);
//         let maxBright = Math.max(r,g,b);
//         arrMaxBright.push([color,maxBright]);
//     }

//     let sortArr = arrMaxBright.sort((a,b)=>{
//         return a[1]==b[1]?a[1]:b[1]-a[1];
//     })
//     return sortArr[0][0];
// }

// console.log(brightest(colors));

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }



// Object.defineProperty(Person.prototype, "name", {
//     get: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     set: function (c) {
//         this.firstName = c.split(" ")[0]
//         this.lastName = c.split(" ")[1]
//     }
// });


// let user = new Person("Zheka","Grushevskiy");

// console.log(user.getName());
// console.log(user.name);
// user.name = "sdfsdf asdad";
// console.log(user.name);

// Array.prototype.square = function(){
//     return this.map(item=>Math.pow(item,2));
// }
// Array.prototype.cube = function(){
//     return this.map(item=>Math.pow(item,3));
// }
// Array.prototype.average = function(){
//     const initValue = 0;
//     return this.length?this.reduce((curr,next)=>curr+next,initValue)/this.length:NaN;
// }
// Array.prototype.sum = function(){
//     const initValue = 0;
//     return this.reduce((curr,next)=>curr+next,initValue);
// }
// Array.prototype.even = function(){
//     const initValue = 0;
//     return this.filter(item=>!(item%2));
// }
// Array.prototype.odd = function(){
//     const initValue = 0;
//     return this.filter(item=>item%2);
// }

// console.log([1,2,3,4,5].square());
// console.log([1,2,3,4,5].cube());
// console.log([1,2,3,4,5].average());
// console.log([1,2,3,4,5].sum());
// console.log([1,2,3,4,5].even());
// console.log([1,2,3,4,5].odd());
// полифил reduce
// Array.prototype.myReduce = function (callback, initValue) {
//     let acc = arguments.length >= 2 ? initValue : this[0];
//     // если аргумент передали =>присваиваем в аккумулятор
//     // если нет => присваиваем первый элемент массива
//     let isStart = arguments.length >= 2 ? 0 : 1;
//     // если initValue => начинаем перебор c 0-го индекса
//     // если не передали => начинаем перебор с 1-го индекса

//     for (let i = isStart; i < this.length; i++) {
//         acc = callback(acc, this[i], i, this);
//     }

//     return acc;
// }

  
// console.log([1,2,3].myReduce( function(sum, next){return sum+next}, 0)); 


// function generateName() {
//     let randomStr = "";
//     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//         random6characters=6;
//     for ( var i = 0; i < random6characters; i++ ) {
//         randomStr += alphabet[Math.round(Math.random()*alphabet.length)]
//    }
//    return randomStr;
// }

// console.log(generateName());

var Cat = (function (name,weight) {
    return function(name,weight){
        this.name = name;
        this.weight = weight;
    };

}());


// Object.defineProperties(Cat.prototype,{
//     "name":{
//         value:true,
//         writable:true
//     },
//     "weught":{
//         value:true,
//         writable:true
//     }
// });

let garfield = new Cat('garfield', 25);
let felix = new Cat('felix', 15);

Cat.prototype.averageWeight = function(){
    
};

console.log(garfield.averageWeight());

