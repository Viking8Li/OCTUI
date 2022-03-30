function doubleAfter2Seconds(x){
    return new Promise(resolve => {
        setTimeout(
            () => {
                resolve(x*2)
            }, 2000
        )
    })
}

//this
//super
//IIFE
// doubleAfter2Seconds(10).then(
//     (value) => console.log(value)
// )

// let sum = doubleAfter2Seconds(10).then(value=>value) + doubleAfter2Seconds(20).then(value=>value) + doubleAfter2Seconds(30).then(value=>value);

// console.log(sum)

// function addPromise(){
//     return new Promise(resolve => {
//         doubleAfter2Seconds(10).then(a=>{                   //waiting for a promise to resolve
//             doubleAfter2Seconds(20).then(b=>{               //waiting for a promise to resolve
//                 doubleAfter2Seconds(30).then(c=>{           //waiting for a promise to resolve
//                     resolve(a+b+c)
//                 })
//             })
//         })
//     })
// }
// addPromise().then(result=>{
//     console.log(result)
// })


