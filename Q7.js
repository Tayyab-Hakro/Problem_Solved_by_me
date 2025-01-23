// Write a Recursion function that reverse the string

function RecursionReverse(str){
if(str === ""){
return ""
}
return RecursionReverse(str.slice(1))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    + str[0]
}

console.log( RecursionReverse("String"))