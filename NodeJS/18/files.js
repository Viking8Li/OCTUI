const fs = require('fs')

//sync
// try{
//     let data = fs.readFileSync('readMes.txt', 'utf-8');
//     console.log(data)
//     fs.writeFileSync('writeMe.txt', data)
// }
// catch(er){
//     console.log('Error:',er.message)
// }



//async doesnt work with try/catch
//use callbacks
// fs.readFile('readMe.txt', 'utf-8', function(err, data){
//     if(err == null)
//         {
//             console.log(data); 
//             fs.writeFile('writeMe1.txt', data, function(err){
//                 if(err != null){
//                     console.log(err.message)
//                 }
//                 else{
//                     console.log("File Written Successfully")
//                 }
//             })
//         }
//     else
//         console.log(err.message)
// })


//deleting a file
// fs.unlink('writeMe.txt', (err)=>{
//     if(err!=null){
//         console.log(err.message)
//     }
//     else{
//         console.log("File deleted successfully")
//     }
// })


//delete a dir
// fs.mkdir('folder', (err)=>{
//         if(err!=null){
//             console.log(err.message)
//         }
//         else{
//             console.log("Dir created successfully")
//         }
// })

fs.rmdir('folder', (err)=>{
            if(err!=null){
                console.log(err.message)
            }
            else{
                console.log("Dir removed successfully")
            }
})

