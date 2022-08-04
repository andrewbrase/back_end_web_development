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
console.log(changeFun(changed))
// should not have been altered, only returned
console.log(changed)
// --->118
// --->13

// ----------------------------------------------
/* queue -  a collection of entities that are maintained in a 
sequence and can be modified by the addition of entities at one 
end of the sequence and the removal of entities from the other end 
of the sequence. */
// items are kept in order, but things can be added to the start or end

function nextInLine(arrayWeAreUsing, item) {
    arrayWeAreUsing.push(item)
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
