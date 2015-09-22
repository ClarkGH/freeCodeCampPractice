var events = require('events');
var eventEmitter = new events.EventEmitter();

// Listener #1
var list1 = function list1() {
  console.log('list1 executed.');
}

// Listener #2
var list2 = function list2() {
  console.log('list2 executed.');
}

// Bind the connection event with the listener1 function
eventEmitter.addListener('connection', list1);

// Bind the connection event with the listener2 function
eventEmitter.addListener('connection', list2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) are listening to the connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of list1 func
eventEmitter.removeListener('connection', list1);
console.log("Listener 1 will no longer be listening");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log("Program ended.")