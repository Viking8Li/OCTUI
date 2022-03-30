// class A{
//     constructor(
//         a = x
//     )
//     // A(x){
//     //     a = x
//     // }
// }
// class B extends A{
//     // B(y){
//     //     b = y
//     // }
//     constructor(
//         b = y
//     )
// }
// class C extends B{
//     // C(z){
//     //     c = z
//     // }
//     constructor(
//         c = z
//     )
// }

// obj = new C(11)
// console.log(obj.a + " "+ obj.b + " "+obj.c)
function doubleAfter2Seconds(x){
    return new Promise(resolve => {
        setTimeout(
            () => {
                resolve(x*2)
            }, 2000
        )
    })
}

async function addAsync(){
    const a = await doubleAfter2Seconds(10)   //waiting for a promise to resolve
    const b = await doubleAfter2Seconds(20)   //waiting for a promise to resolve
    const c = await doubleAfter2Seconds(30)   //waiting for a promise to resolve

    return a+b+c
}

addAsync().then(r=>{
    console.log(r)
})