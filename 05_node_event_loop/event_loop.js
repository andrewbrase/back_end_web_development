/* const fs = require('fs');

// set a timer to log to the console after 0 seconds
setTimeout(() => console.log('timer 1 finished'), 0 );
setImmediate(() => console.log('immediate 1 finished'));

fs.readFile('event_text.txt', () => {
    console.log('I/O finished')
});

// this is the only one that is not inside of a callback
console.log('hello from the top level code');

--->
hello from the top level code
timer 1 finished
immediate 1 finished
I/O finished

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const fs = require('fs');

setTimeout(() => console.log('timer 1 finished'), 0 );
setImmediate(() => console.log('immediate 1 finished'));

fs.readFile("event_text.txt", () => {
    console.log('I/O finished');

    setTimeout(() => console.log('timer 2 finished'), 0 );
    setTimeout(() => console.log('timer 3 finished'), 3000 );
    setImmediate(() => console.log('immediate 2 finished'));

});

console.log('hello from the top level code');

--->
hello from the top level code
timer 1 finished
immediate 1 finished
I/O finished

---RUNNING IN EVENT LOOP---
immediate 2 finished    - the reason that the timer 2 didnt finish until after the setimmediate
timer 2 finished          is because the event loop waits for things to happen in the poll phase - 
                          the phase where io callbacks are handled
timer 3 finished

*** even though the timer callbacks is first on the diagram,
the I/O finished in the example, next up is the setimmediate callbacks

START     <----------------------------------------------
|                                                        |
|                                                        |
v                                                        |
Expired timer callbacks                                  |
|                                                        |
|                                                        |
v                                                        |
I/O polling and callbacks                                |
|                                                        |
|                                                        |
v                                                        |
setimmediate callbacks                                   |
|                                                        |
|                                                        |
v                                                        |
close callbacks                                          |
|                                                        |
|                                                        |
v                                                        |
Any pending timers or I/O tasks? --> no (exit program)   |
|                                                        |
L________________________________________________________|  yes

*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const fs = require('fs');

// setTimeout(() => console.log('timer 1 finished'), 0 );
// setImmediate(() => console.log('immediate 1 finished'));

// fs.readFile("event_text.txt", () => {
//     console.log('I/O finished');

//     setTimeout(() => console.log('timer 2 finished'), 0 );
//     setTimeout(() => console.log('timer 3 finished'), 3000 );
//     setImmediate(() => console.log('immediate 2 finished'));

//     process.nextTick(() => console.log('process.nextTick'));
// });

// console.log('hello from the top level code');

/*
--->
hello from the top level code
timer 1 finished
immediate 1 finished
I/O finished

process.nextTick (part of the microtasks que which gets executed 
        after EVERY phase, not just after every full around tick)
        set immediate gets executed once per tick, next tick gets executed immediately
immediate 2 finished
timer 2 finished
timer 3 finished
*/

// we're going to use cryptography to encrypt a password to show off the
// thread pool, it's amore complex operation that will be offloaded
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const fs = require('fs');
const crypto = require('crypto');

const start_time = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log('timer 1 finished'), 0 );
setImmediate(() => console.log('immediate 1 finished'));

fs.readFile("event_text.txt", () => {
    console.log('I/O finished');

    setTimeout(() => console.log('timer 2 finished'), 0 );
    setTimeout(() => console.log('timer 3 finished'), 3000 );
    setImmediate(() => console.log('immediate 2 finished'));

    process.nextTick(() => console.log('process.nextTick'));

    //
    crypto.pbkdf2Sync('Password','Salt',100000,1024,'sha512');
    console.log(Date.now - start_time, "Sync Password encrypted");
    //

    crypto.pbkdf2('password','salt1234',100000, 1024, 'sha512', () => {
        console.log(Date.now() - start_time , 'password 1 encrypted');
    });
    crypto.pbkdf2('password','salt1234',100000, 1024, 'sha512', () => {
        console.log(Date.now() - start_time , 'password 2 encrypted');
    });
    crypto.pbkdf2('password','salt1234',100000, 1024, 'sha512', () => {
        console.log(Date.now() - start_time , 'password 3 encrypted');
    });
    crypto.pbkdf2('password','salt1234',100000, 1024, 'sha512', () => {
        console.log(Date.now() - start_time , 'password 3 encrypted');
    });
});

console.log('hello from the top level code');

/*
--->
hello from the top level code
timer 1 finished
immediate 1 finished
I/O finished
process.nextTick
immediate 2 finished
timer 2 finished

// there are 4 thread pools, if you had 4 passwords to encrypt they'd
all be done at the same time
, you can actually change the thread pool size by using - process.env.UV_THREADPOOL_SIZE = 1;
// if you ran the 4 password encryptions, theyd have to wait for the previous password
to be encrypted, since the thread pool is only 1

// if we take an asynchronous crypto .pbkdf2 and make it synchronous,
the rest of the program must wait until it is completed, blocking the event loop

// it took 1034 milliseconds to encrypt
1034 password encrypted
timer 3 finished
*/