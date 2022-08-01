// const hello = "hello world";
// console.log(hello);

/* to run file with node.js - node 02_node.js
---> hello world

in order to read files from the file system we need to use a module
that is with the fs module require them in the code to use the 
module and then store the result of the requiring function in a 
variable */

// (fs stands for file system)
const fs = require('fs');

// this is the documentation on node - https://nodejs.org/en/docs/
// how to read and write data from/to files

// this takes in 2 arguments, the path to the file & the character encoding
const textIn = fs.readFileSync('02_txt_example.txt','utf-8');
console.log(textIn);

// ---> This is text from the 02_txt file

// how to write to a file
const textOut = `This is from within the 02_txt_file: ${textIn}.\nCreated on ${Date.now()}`
// dont save the write to a variable
fs.writeFileSync('02_output.txt', textOut);
console.log('file has been written')

/*
---> file has been written
This is from within the 02_txt_file: This is text from the 02_txt file.
Created on 1659319241474
*/

/* this code is synchronous - each statement is processed one after another, line by line
synchronous code is also blocking code - each statement is read line by line
an operation can only be executed after the statement above is executed
the solution to this is to use asynchronous, non-blocking code
in asynchronous code we offload the code to be worked on in the
background, once that is done a callback function that we register before
is called to handle the result. Durring that time all of the code 
can still be executing without being blocked by the heavy task 
-which is now running in the background

const fs = require('fs');

(non-blocking code execution) 
fs.readFile('02_txt_example.txt', 'utf-8', (err,data) => {
    console.log(data);
});
console.log('reading file...');

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
the reason why callbacks are used so often in node.js
a node.js process (where the application is running) - there is
only one single thread, (a thread is like a set of instructions 
that is run in a computers cpu, the thread is where the code is 
executed in the machines processor )  for each application there's only
one thread - all the users accessing the application are using a single
thread - if a user would block the thread with synchronous code,
the other users would have to wait for that execution to finish 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
non-blocking io (input/output) model - accessing the file system 
and handling the network requests

callbacks do not always mean asynchronous automatically,
it only works this way for certain functions

you should use promises or Asynch/Await if you have too many callbacks (touched on later in the course)
*/