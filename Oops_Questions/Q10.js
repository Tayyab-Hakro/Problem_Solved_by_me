// Create a base class Vehicle with properties:
// brand, model, and year
// A method display_info() that prints vehicle details

// Create a derived class Car that adds:
// fuel_type property
// A method start_engine() that prints "Engine started"
// Create an object of Car and demonstrate its functionality.
class Vehicle {
    constructor(Carbrand , Carmodel , Caryear){
        this.brand = Carbrand
        this.model = Carmodel
        this.year = Caryear
    }

    display_info(){
        console.log(`${this.year} ,${this.model} ,${this.brand} `)
    }
}
class Car extends Vehicle{
    constructor(Carbrand ,Carmodel ,Caryear,  type){
    super(Carbrand ,Carmodel ,Caryear )
    this.fueltype = type    
    }
    start_engine(){
        console.log(`Engine is now started `)
    }
}
let fuel = new Car("Mwn" ,435,2025 ,"pSO")
console.log(fuel)
console.log(fuel.start_engine())
