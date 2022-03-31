// var events = require('events')

// var emitter = new events.EventEmitter()

// //event fn


// emitter.on('click', function(msg){
//     console.log(msg)
// })

// //similar to clicking
// emitter.emit('click','The event is emitted')


// var events = require('events')
// var uitl = require('util')

// var Person = function(name){
//     this.name = name
// }

// uitl.inherits(Person, events.EventEmitter)

// var james = new Person('james')

// james.on('speak', function(){
//     console.log("hellllloooooo")
// })

// james.emit('speak')


var events = require('events')
const { emit } = require('process')

// var emitter = new events.EventEmitter()

// //event fn

// emitter.on('someEvent',function(msg){
//     console.log(msg)
// })
// //similar to clicking
// emitter.emit('someEvent','The event is emitted')

var uitl = require('util')

var Person = function(name){
    this.name = name
}

uitl.inherits(Person,events.EventEmitter)

var james = new Person('james')

james.on('speak',function(){
    console.log('233333333333')
})
james.emit('speak')