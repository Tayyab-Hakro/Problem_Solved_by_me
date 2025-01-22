//Write a function that will do sum all numbers

function RecursionSum(n){
    if(n === 0){
        return 0
    }
    return n+RecursionSum(n-1)

}


console.log(RecursionSum(5)) //5+4+3+2+1  Output will  15