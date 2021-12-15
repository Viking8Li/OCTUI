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

let sum = doubleAfter2Seconds(10).then(value=>value) + doubleAfter2Seconds(20).then(value=>value) 
+ doubleAfter2Seconds(30).then(value=>value)

console.log(sum)