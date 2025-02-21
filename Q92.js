var sumOfTheDigitsOfHarshadNumber = function(x) {
    for(let i =1 ; i<=x ;i++){
        if(x % i === 0 && i + i === x){
    return i
        }
        }
return -1
    }

console.log(sumOfTheDigitsOfHarshadNumber(18))
console.log(sumOfTheDigitsOfHarshadNumber(23))
