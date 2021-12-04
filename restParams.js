// function sum(a,b, ...args){

//     let sum=0;
//      for(let n of args){
//         sum += n
//      }
//    return sum
// }

// console.log(sum(1,2,3,4,5,6))

function sum(){

    let sum=0;
     for(let n of arguments){
        sum += n
     }
   console.log(arguments instanceof Array)
   return sum
}

console.log(sum(1,2,3,4,5,6))

