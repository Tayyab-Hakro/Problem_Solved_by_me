//Create A class car and make it's private speed
class Car {
    constructor() {
        this._speed = 0; // Private property with default value
    }

    // Setter method to set speed
    set speed(value) {
        this._speed = value; 
    }

    // Getter method to get speed
    get speed() {
        return this._speed;
    }
}

const myCar = new Car();
myCar.speed = 180;  // Setting speed
console.log(myCar.speed); // Output: 80
