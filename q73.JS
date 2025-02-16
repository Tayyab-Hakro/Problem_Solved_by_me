var truncateSentence = function(s, k) {
let final = s.split(" ")
let ns =final.slice(0,k)
return ns.toString()
};



    console.log(truncateSentence("Hello how are you Contestant" ,4))