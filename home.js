// console.log('hello');


//-------------- variables -------------

// var e = 'ice-cream'
// console.log(e);

//----------------------------------------

//------------- manipulate dom with js---------------------

// var age = prompt('what is your age');

// document.getElementById('sometext').innerHTML = age;
// -------------------------------------------------------------

// ------------ numbers in js -----------------------------

// var num1 = 5;
// var num = 5.7;
// we can do +, - , *, /, ++, % -- a number.

// ---------------------------------------------------------

// ------------ Functions --------------------------------

// function fun() {
//     alert("this is a function");
// }

// fun();

// Lets create a function take in a name ans says hello followed
// by your name

// function greeting() {
//     var name = prompt('what is your name');
//     var result = 'hello ' + name;
//     console.log(result);
// }

// greeting();

// ----------------------------------------------------------

// ----------- While vs For loops in js ---------------------

// var num = 0;

// while(num < 100){
//     num += 1;
//     console.log(num);
// }


// for(let num = 0 ; num <= 100 ; num++){
//     console.log(num)
// }

// -------- Data type in js --------------------------------

// let age = 18 // number
// let name = 'Animi' // string
// let name = { first  : 'Jane', last: 'Mary'} // object
// let truth = false; // boolean
// let groceries = ['apple' , 'banana'] // array
// let random; // undefined
// let nothing  = null // null

// ---------------------------------------------------------

// --------- Strings -------------------------------------

// let fruit = 'banana';
// let moreFruits = 'banana\napple';  // new line
// console.log(moreFruits);

// console.log(fruit.length) // banana length(str)

// console.log(fruit.indexOf('an')); // finds index; if not found return -1;
// console.log(fruit.slice(2,4)); // returns section of string
// console.log(fruit.replace('ban', '123'));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);

// let fruit = 'banana,apple,orange';
// console.log(fruit.split(',')); // split by comma

// ---------------------------------------------------------

// ---------- Arrays ---------------------------------------

// let fruits = ['banana', 'apple', 'orange' , 'pineapples'];
// fruits = new Array('banana', 'apple', 'orange' , 'pineapples');

// console.log(fruits[1]); // access value at index

// fruits[0] = 'pear';
// console.log(fruits);

// for(let i =0 ; fruits.length; i++){
//     console.log(fruits[i]);
// }

// ---------------------------------------------------------

// ------- Objects in Js-----------------------------------

// let student = {
//     first: 'Murali', last: 'Krishna',
//     age: '25', height: 178,
//     StudentInfo : function (){
//         return this.first + '\n' + this.last + '\n' + this.age; 
//     }
// };
// console.log(student.first);
// console.log(student.last);

// student.first = 'Animi';
// console.log(student.first);
// student.age++;
// console.log(student.age);

// console.log(student.StudentInfo());

// ---------------------------------------------------------

// ------- conditionals and switch stmts ------------------


// && AND
// || OR
// var age = prompt('what is your age?');
// if (age >= 18 && age <= 35) {
//     status = 'target demo';
//     console.log(status);
// }
// else{
//     status = 'not my audience';
//     console.log(status);
// }


// switch stmts
// switch (6) {
//     case 0:
//         text = 'Sunday';
//         break;
//     case 5:
//         text = 'Weekend';
//         break;
//     case 6:
//         text = 'weekend';
//         break;
//     default:
//         text = 'Weekday';
// }

// console.log(text);

//---------------------------------------------------------

// ------------- JSON ------------------------------------

// let students = `[
//     {
//         "name": "Murali",
//         "age": 25,
//         "hieght": 170
//     },
//     {
//         "name": "Krishna",
//         "age": 28,
//         "hieght": 180
//     }
// ]`
// console.log(students);
// console.log(JSON.parse(students));

// -------------------------------------------------------






