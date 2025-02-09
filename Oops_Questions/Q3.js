//Write a Object make a method that will sum two number and use it other Objecct to sum the Values
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