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

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
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

/* --->
hello from the top level code
timer 1 finished
immediate 1 finished
I/O finished

---RUNNING IN EVENT LOOP---
immediate 2 finished    - the reason that the timer 2 didnt finish until after the setimmediate
timer 2 finished          is because the event loop waits for things to happen in the poll phase - 
                          the phase where io callbacks are handled
timer 3 finished


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