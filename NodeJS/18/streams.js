const fs = require('fs')

// console.log(__dirname)
// console.log(__filename)


// let readStream = fs.createReadStream(__dirname+'/readMe.txt', 'utf-8')
// readStream.on('data', function(chunk){
//     console.log("==========================================================")
//     console.log(chunk)
//     console.log("==========================================================")
// })

// process.on('exit', function(){
//     console.log("Completed")
// })

let readStream = fs.createReadStream(__dirname+'/readMe.txt', 'utf-8')
let writeStream = fs.createWriteStream(__dirname+'/writeMe.txt','utf-8')

// readStream.on('data', function(chunk){
//     console.log('CHUNK Received')
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)