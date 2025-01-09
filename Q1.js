//Find the factors of the numbers


function FindFactors(fac ){
    for(let i =1 ; i<=fac ;i++){
        if(fac % i ===0){
            console.log( "factor is ",i)
        }
    }

}


console.log(FindFactors(4))