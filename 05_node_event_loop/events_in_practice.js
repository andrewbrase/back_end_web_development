// to use the built in node events we need to require the events module
const EventEmitter = require('events');

// to create a new emitter we simply create an instance of the class that we just imported
const myEmitter = new EventEmitter();
// event emitters can emit named events and we can listen for these events and then react accordingly 
// this is similar to the DOM event listeners

// THIS IS THE OBSERVER PATTERN 

myEmitter.on('newEventNameSale', () => {
    console.log('this item was added to you cart');
})

// there can be multiple events listening for the same event
myEmitter.on('newEventNameSale', () => {
    console.log('thank you for your purchase');
})

// this is like the result of if a button was clicked for a sale
myEmitter.emit('newEventNameSale');
// ---> this item was added to you cart
// ---> thank you for your purchase