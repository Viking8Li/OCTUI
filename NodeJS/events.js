// var events = require('events')

// var emitter = new events.EventEmitter()

// //event fn


// emitter.on('click', function(msg){
//     console.log(msg)
// })

// //similar to clicking
// emitter.emit('click','The event is emitted')


var events = require('events')
var uitl = require('util')

var Person = function(name){
    this.name = name
}

uitl.inherits(Person, events.EventEmitter)

var james = new Person('james')

james.on('speak', function(){
    console.log("hellllloooooo")
})

james.emit('speak')