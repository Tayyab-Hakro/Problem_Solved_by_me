const TotalSum = {
    Calculate(a , b){
return a + b
    }
}

const Emoplye =  {
    salary : 200,
    bonus :19
}
Emoplye.__proto__ = TotalSum
console.log(Emoplye.Calculate(Emoplye.salary ,Emoplye.bonus))