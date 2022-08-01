// install node
// npm install -g nodemon

// const hello = "hello world";
// console.log(hello);

/* to run file with node.js - node 02_node.js
---> hello world

in order to read files from the file system we need to use a module
that is with the fs module require them in the code to use the 
module and then store the result of the requiring function in a 
variable */

// (fs stands for file system)
// const fs = require('fs');

// // this is the documentation on node - https://nodejs.org/en/docs/
// // how to read and write data from/to files

// // this takes in 2 arguments, the path to the file & the character encoding
// const textIn = fs.readFileSync('02_txt_example.txt','utf-8');
// console.log(textIn);

// // ---> This is text from the 02_txt file

// // how to write to a file
// const textOut = `This is from within the 02_txt_file: ${textIn}.\nCreated on ${Date.now()}`
// // dont save the write to a variable
// fs.writeFileSync('02_output.txt', textOut);
// console.log('file has been written')

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

Reading and writing files in a non-blocking Asynchronous way*/

// const fs = require('fs');
// // the second parameter will be the callback function
// // it calls this callback function with 2 arguments - the first 
// // one is the error, and the second is the actual data
// fs.readFile('02_txt_example.txt', 'utf-8', (err,data) => {
//     console.log(data);
// });
// console.log('which log will happen first?');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// (this is not the recommended use of callbacks, this is just to learn read and write file)

// const fs = require('fs');
// // data 1 is within the 02 async file and it is : "02_txt_example"
// fs.readFile('02_async.txt', 'utf-8', (err,data1) => {
//     if (err) return console.log('There has been an error');

//     // fs will open the file name from data1
//     fs.readFile(`${data1}.txt`, 'utf-8', (err,data2) => {
//         if (err) return console.log('There has been an error');

//         // console.log the data within 02_txt_example.txt
//         // console.log(data2);
//         // --->This is text from the 02_txt file

//         fs.readFile('02_append.txt','utf-8',(err,data3) => {
//             if (err) return console.log('There has been an error');

//             // console.log(data3)
//             // ---> append this!

//             /* the only argument we need is the error because there 
//             is no data that needs to be read, they are already in use
//             first arg is the path, second is what you want to write to the file, 
//             third is encoding and fourth is the error */

//             fs.writeFile('02_final_append.txt', `${data2}`+ ' ' + `${data3}` ,'utf-8', err => {
//                 fs.readFile('02_final_append.txt','utf-8',(err,data4) => {
//                     if (err) return console.log('There has been an error');
//                     console.log(data4);
//                     // ---> This is text from the 02_txt file (append this!)

//                 })
//             })
//         })
//     })
// })

// console.log('this will read first');

/*
node 02_node.js
---> 'this will read first'
---> This is text from the 02_txt file (append this!) 

node is built around this philosophy of callbacks
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// CREATING A SIMPLE WEB SERVER
// you must require the http module

// const http = require('http');

/* we must create the server and then start the server
we use a method that is on that object
create server will accept a callback function which will be fired off everytime a request hits our server 
this callback function gets access to important variables - the request variable & the response variable */

// we need to save the result of the createServer to a variable 
// const server = http.createServer((req, res) => {
//     // we want to send a response back to the client
//     res.end('Hello from the server!');
// });

// // the second part is to listen to incoming requests from the client
// // listen accepts a few parameters, the first is the port # 
// // the second param is the host (we are using the local host)
// // we can optionally use a callback function which will be run as soon as the computer actually starts
// server.listen(8000,'127.0.0.1', () => {
//     console.log('listening to requests on port 8000');
// });

// run the node application 
// http:127.0.0.1:8000

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Hello from the server!');
// });
// server.listen(8000,'127.0.0.1', () => {
//     console.log('listening to requests on port 8000');
// }); 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// ROUTING 
// implementing different actions for URL
// express can be used as a tool to help with routing , 
// while learning node, we will use a built in node module called URL

    // const http = require('http');

    // /*the url module can be used when urls include things 
    // like ids & other parameters
    // what the url module will help us with is parse 
    // through parameters and values into an object */

    // const url = require('url');

    // const server = http.createServer((req, res) => {
    //     const pathName = req.url;
    //     // based on that path name, different routes will be taken
    //     if(pathName === '/' || pathName === '/over'){
    //         res.end('This is the overview page!');
    //     } else if (pathName === '/prod'){
    //         res.end('this is the product page!');
    //     } else{
    //         res.writeHead(404, {
    //             // a piece of information about the response that we are sending back 
    //             // the browser will expect html
    //             // the headers and status code need to be set before
    //             // - we send out the response content after
    //             'Content-type': 'text/html',
    //             'my-own-header': 'hello'
    //         });
    //         // ---> Failed to load resource: the server responded with a status of 404 (Not Found)
    //         res.end('<h1>Sorry, page not found!</h1>');
    //     }
    // });

    // server.listen(8000,'127.0.0.1', () => {
    //     console.log('listening to requests on port 8000');
    // }); 

// http://127.0.0.1:8000
// console.log(req.url);
// ---> /
// ---> /favicon.ico
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// BUILDING A VERY SIMPLE API