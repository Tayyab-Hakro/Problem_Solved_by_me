//Create a Employee Object with class and constructor and 5 new emplooyes with constructor data
const Employees = {
    AllData : class{
        constructor(name , salary , ){
            this.name = name
            this.salary = salary

        }
    }
}

const Employee = new Employees.AllData("Tayyab" ,400)
const Employee2 = new Employees.AllData("ali"       ,    54        )


console.log(Employee)
console.log(Employee2)