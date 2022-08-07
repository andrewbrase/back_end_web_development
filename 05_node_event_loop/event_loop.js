const fs = require('fs');

// set a timer to log to the console after 0 seconds
setTimeout(() => console.log('timer 1 finished'), 0 );
setImmediate(() => console.log('immediate 1 finished'));

fs.readFile('event_text.txt', () => {
    console.log('I/O finished')
});

// this is the only one that is not inside of a callback
console.log('hello from the top level code');