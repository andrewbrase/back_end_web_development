/* a lot of my previous Javascript practice has been w/ the frontend
folder - this is to catch up and practice and new things that I didn't previously know
*/

/* this is 
a mult
line
comment */

var hisName = "bob";
let myName = "andrew";
const pi = 3.14;

/*
difference between var let and const
VAR is going to be able to be used throughout the entire program
LET will only be used within the scope of where it was declared
CONST is a variable that cannot change / should not change
*/

var a; //declaring a variable to be called a
var b = 2; // - declaring and assigning b to = (assign) 2

// ----------------------------------------------
// function 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = '';
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));

// ---> The big dog ran to the store quickly

// ----------------------------------------------
// to add an item to the end of an array, use push
var addToEnd = [1,2,3,4,5];
addToEnd.push(6);
console.log(addToEnd);
// ---> [1, 2, 3, 4, 5, 6]

// ----------------------------------------------
// to add something to the beginning of an array
var addToBeg = [1,2,3,4,5,6];
addToBeg.unshift(0);
console.log(addToBeg);
// ---> [0,1,2,3,4,5,6]


// These do not need anything entered into the (), unlike push and unshift

// ----------------------------------------------
// mutate arrays with .pop()
// .pop()
var newArr = [1,2,3,4,5,"last"];
var removedFromArr = newArr.pop();
console.log(removedFromArr);
// ---> "last"

// ----------------------------------------------
// shift - removes the front element of an array -> reverse of unshift
// shift off the first element
// .shift()
shiftArr = [1,2,3,4,5];
newShift = shiftArr.shift();
console.log(newShift);
console.log(shiftArr);
// ---> 1
// ---> [2,3,4,5]

// ----------------------------------------------
// array of arrays
var nestList = [["cereal", 3],['milk', 6],['juice',3],['eggs',3]];
var shopitem = nestList[1][0];
console.log(shopitem);
// ---> milk

// ----------------------------------------------
// args
function ourFunctionWithArgs(a,b){
    console.log(a-b);
}
ourFunctionWithArgs(10,6);
// ---> 4

// ----------------------------------------------
// return function
var changed = 13;
function changeFun(num){
    return num + 105;
}
console.log(changeFun(changed));
// should not have been altered, only returned
console.log(changed);
// --->118
// --->13

// ----------------------------------------------
/* queue -  a collection of entities that are maintained in a 
sequence and can be modified by the addition of entities at one 
end of the sequence and the removal of entities from the other end 
of the sequence. */
// items are kept in order, but things can be added to the start or end

function nextInLine(arrayWeAreUsing, item) {
    arrayWeAreUsing.push(item);
    return arrayWeAreUsing.shift();
}

var testArr = [1,2,3,4,5];

//JSON.stringify can convert an array into a string to be printed out to the screen
console.log("Before " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("after: " + JSON.stringify(testArr));

// ---> Before [1,2,3,4,5]
// ---> 1
// ---> [2,3,4,5,6]

function addToStart(arr,addItem) {
    arr.unshift(addItem);
    return "added item is : " + addItem;
}

var arrayTwo = [6,7,8,9,10];

console.log('this is before: ' + JSON.stringify(arrayTwo));
addToStart(arrayTwo,5);
console.log('this is after: ' + JSON. stringify(arrayTwo));

// ---> this is before: [6,7,8,9,10]
// ---> this is after: [5,6,7,8,9,10]

// ----------------------------------------------
// Equality Operators 
function checkIfEqual(num){
    if (num % 2 === 0){
        return "Yes this is even";
    }else{
        return "No this is not even";
    }
}

checkIfEqual(10);
// ---> 'Yes this is even'

///
boolVal = true;
function checkBool(bool){
    if (bool){
        return "Bool is true";
    }else{
        return "Bool is false";
    }
}

checkBool(boolVal);
// ---> 'Bool is true'

// ----------------------------------------------
function testSize(num){
    if (num < 5){
        return 'tiny';
    } else if (num < 10){
        return 'small';
    } else if (num < 20){
        return 'normal';
    } else{
        return 'BIG!';
    }
}

testSize(19);
//instead of using chained else if statements, you can use a switch statement
// https://www.youtube.com/watch?v=PkZNo7MFNFg&t=1294s - 1:32:23


//
// ---> normal 

// && and op
// || or op

// ----------------------------------------------
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// ----------------------------------------------
// For Loop
// Statement 1 is executed (one time) before the execution of the code block.
// Statement 2 defines the condition for executing the code block
// Statement 3 is executed (every time) after the code block has been executed.
for(let i = 0; i < 77; i ++){
    console.log(i);
}
// ---> logs 1 - 77

// ----------------------------------------------
var car = ['red car ','green car ','blue car '];
for (let i = 0; i < car.length; i ++){
    console.log(car[i] + (i+1));
}
// ---> red car 1
// ---> green car 2
// ---> blue car 3
// ----------------------------------------------
// reversing a string in JS
string = 'hello';

function solution(str){
  var newArr = str.split("");
  newArr.reverse();
  newArr = newArr.join("");
  return newArr;
}

solution(string);

///

newStr = 'cool are lizards'

function splitAndReverse(string){
    return string.split(' ').reverse().join(' ')
}

splitAndReverse(newStr);
// ---> lizards are cool
// ----------------------------------------------
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
numb = 2;

var summation = function (num) {
    for (sum = 0, i = 0; i < num; i++, sum += i);
    return sum;
  }

  summation(numb);
// ----------------------------------------------

hay = ["find","the","needle"];

function findNeedle(haystack) {
    var indexN = haystack.indexOf("needle");
    return "found the needle at position " + indexN;
}

findNeedle(hay);
// ----------------------------------------------

op = '+'
val1 = 2;
val2 = 2;

function basicOp(op, v1, v2) {
    if (op === '+'){
        return v1+v2
    }
    if (op === '-'){
        return v1-v2
    }
    if (op === '*'){
        return v1*v2
    }
    if (op === '/'){
        return v1/v2
    }
}

basicOp(op,val1,val2);

// better method
op = '+'
v1 = 2;
v2 = 10;

switch (op) {
    case '+':
        console.log(v1+v2);
        break;
    case '-':
        console.log(v1-v2);
        break;
    case '*':
        console.log(v1*v2);
        break;
    case '/':
        console.log(v1/v2);
        break;
    default:
        console.log('please use +, -, * or /');
        break;
}
// ---> 12

classa = [2,3];
youra = 5;

function betterThanAverage(classPoints, yourPoints) {
    var classAv = 0
    var len = classPoints.length
    for (var number of classPoints) {
      classAv += number
    }
    var classAv = classAv / len
    
    if (classAv < yourPoints){
      return true;
    }else{
      return false;
    }
  }

  betterThanAverage(classa,youra)

  // better way
  function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }
// ----------------------------------------------

  // repeat method
  num = 3
  str = 'hello'
  function repeatStr (n, s) {
    return s.repeat(n);
  }

  repeatStr(num,str)

// ----------------------------------------------
// ----------------------------------------------
newArr = [100,89,66,90,78,99,56,100,100];

  function find_average(array){
    sum = 0;
    count = 0;
    for (var item of array){
        sum += item;
        count ++;
    }
    if (array.length > 0){
        return sum/count;
    } else {
        return 0;
    }
  }

find_average(newArr);
// ----------------------------------------------
//
  function invert(array) {
    return array.map( x => x === 0 ? x : -x);
 }
 //
 const invert = array => array.map(num => -num);
 //
 function invert(array) {
    return array.map(i => 0 - i);
 }
 //
 function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
 }
// ----------------------------------------------
