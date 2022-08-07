// to use the built in node events we need to require the events module
// const EventEmitter = require('events');

// // to create a new emitter we simply create an instance of the class that we just imported
// const myEmitter = new EventEmitter();
// // event emitters can emit named events and we can listen for these events and then react accordingly 
// // this is similar to the DOM event listeners

// // THIS IS THE OBSERVER PATTERN 

// myEmitter.on('newEventNameSale', () => {
//     console.log('this item was added to you cart');
// });

// // there can be multiple events listening for the same event
// myEmitter.on('newEventNameSale', () => {
//     console.log('thank you for your purchase');
// });

// ////////////////////////////////
// myEmitter.on('newEventNameSale', stock => {
//     console.log(`there are now ${stock} items in stock`);
// });

// // this is like the result of if a button was clicked for a sale
// myEmitter.emit('newEventNameSale', 900);
/*
---> this item was added to you cart
---> thank you for your purchase
---> there are now 900 items in stock

you can event pass arguments to the event listener by passing them 
as an additional argument in the emitter

if you were to use this pattern outide of an example , it is best practice to make 
a new class that would inheirit from the node class emitter - something like this
*/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const EventEmitter = require('events');
// this is es6 (look up class syntax for class inheritance)
// sales inheirits everything from the EventEmitter class
class Sales extends EventEmitter {
    // a function that is run as soon as we create a new object from a class
    constructor() {
        // by running super we get access to all the methods from the parent class
        super();
    }
}