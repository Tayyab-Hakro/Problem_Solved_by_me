// Given two promises promise1 and promise2, return a new 
// promise. promise1 and promise2 will both resolve with a
//  number. The returned promise should resolve with the sum 
// of the two numbers.

const promise1 = new Promise((resolve) =>{
    return resolve(2+5)
})
const promise2 = new Promise((resolve ) =>{
    return resolve(50+4)
})

let sumPromise = Promise.all([promise1 , promise2]).then(([value1 , valu2]) =>{
return value1 + valu2
} ).catch(err => console.log(err )) 
sumPromise.then(res => {
    console.log(res , "Question is solved now")
}).catch(err => console.log(err))
