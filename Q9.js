
/** 2. Summing Numbers Using Indirect Recursion
Write two functions, sumEven and sumOdd, that work together to 
calculate the sum of numbers from n to 1:
sumEven adds even numbers and calls sumOdd.
sumOdd adds odd numbers and calls sumEven. */

function sumEven(num ,sum =0){
if(num  > 0){
    console.log("Even  +" ,num)
    return sumOdd(num +1)
}
}
function sumOdd(num ,sum =0){
    if(num > 0){
        console.log("Even  +" ,num)
        return sumOdd(num + 1)
    }
}


sumEven(10)