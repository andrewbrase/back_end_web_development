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

// 13:00 - https://www.youtube.com/watch?v=PkZNo7MFNFg

// function 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = '';
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));

// ---> The big dog ran to the store quickly

// to add an item to the end of an array, use push
var addToEnd = [1,2,3,4,5];
addToEnd.push(6);
console.log(addToEnd);
// ---> [1, 2, 3, 4, 5, 6]

// to add something to the beginning of an array
addToBeg = [1,2,3,4,5,6];
addToBeg.unshift(0);
console.log(addToBeg);
// ---> [0,1,2,3,4,5,6]