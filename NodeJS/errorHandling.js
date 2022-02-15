// Write Javascript code here 
// Define divider as a syncrhonous function 

var divideSync = function(x, y) { 
    // if error condition? 
    if ( y === 0 ) { 
        // "throw" the error safely by returning it 
        return new Error("Can't divide by zero") 
    } 
    else { 
        // no error occurred, continue on 
        return x/y 
    } 
} 
  
// console.log(divideSync(33,11))
// console.log(divideSync(33,0))

// try{
//     // c = divideSync(33,0)
//     console.log(divideSync(33,0))
// }
// catch(e){
//     console.log("Inside Catch")
//     console.log(e)
// }

// var c = 33/0
////////////////////////////////////////////////////////////////////////////
// Divide 9/3 
// var result = divideSync(9, 0) 
// // did an error occur? 
// if ( result instanceof Error ) { 
//     // handle the error safely 
//     console.log("9/3=err", result) 
// } 
// else { 
//     // no error occurred, continue on 
//     console.log("9/3="+result) 
// } 
  
//////////////////////////////////////////////////////////////////////////////
// Write Javascript code here 
var divide = function(x, y, next) { 
    // if error condition? 
    if ( y === 0 ) { 
        // "throw" the error safely by calling the completion callback 
        // with the first argument being the error 
        next(new Error("Can't divide by zero")) 
    } 
    else { 
        // no error occurred, continue on 
        next(null, x/y) 
    } 
} 
  
// divide(9, 3, function(err, result){ 
//     // did an error occur? 
//     if ( err ) { 
//         // handle the error safely 
//         console.log("9/3=err", err) 
//     } 
//     else { 
//         // no error occurred, continue on   
//         console.log("9/3="+result) 
//     } 
// }) 
  
// divide(9, 0, function(err, result){ 
//     // did an error occur? 
//     if ( err ) { 
//         // handle the error safely 
//         console.log("9/0=err", err) 
//     } 
//     else { 
//         // no error occurred, continue on 
//         console.log("9/0="+result) 
//     } 
// })


/////////////////////////////////////////////////////////////////////////////////

// Write Javascript code here 
// Definite our Divider Event Emitter 
var events = require("events") 
var Divider = function(){ 
    events.EventEmitter.call(this) 
} 
require('util').inherits(Divider, events.EventEmitter) 
  
// Add the divide function 
Divider.prototype.divide = function(x, y){ 
    // if error condition? 
    if ( y === 0 ) { 
        // "throw" the error safely by emitting it 
        var err = new Error("Can't divide by zero") 
        this.emit("error", err) 
    } 
    else { 
        // no error occurred, continue on 
        this.emit("divided", x, y, x/y) 
    } 
  
    // Chain 
    return this; 
} 
  
// // Create our divider and listen for errors 
var divider = new Divider() 
divider.on('error', function(err){ 
    // handle the error safely 
    console.log(err) 
}) 
divider.on('divided', function(x, y, result){ 
    console.log(x+"/"+y+"="+result) 
}) 
  
// // Divide 
// divider.divide(9, 3)
divider.divide(9, 0)
