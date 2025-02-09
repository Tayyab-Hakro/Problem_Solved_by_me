// Modify the Person class to take name and age as parameters in the constructor.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    Changeing() {
        console.log(`MY NAME is ${this.name} and my age is ${this.age}`);
    }
}

// Creating an instance of Person
let person1 = new Person("Ali", 43);
person1.Changeing(); 
