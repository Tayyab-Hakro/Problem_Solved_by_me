//Write a function that two common factor of two numbers


function CommonFactor(Input1 , Input2){
    let factor1 = [];
    let factor2 = [];

for(let i = 1 ; i<=Input1 ;i++){
   if(Input1 % i === 0 ){
    factor1.push(i)
}else{
    console.log("Not adviser")
}
}
for(let j = 1 ; j<=Input2 ; j++){
if(Input2 % j ===0 ){
    factor2.push(j)

}else{
    console.log("Not adviser")

}
}
factor1.filter(factor => factor2.includes(factor) ?  factor1 : false)
return factor1
}

console.log(CommonFactor(12 , 24))