class Shape {
    area() {
        console.log("First log");
    }
}

class Circle extends Shape {
    area() {
        console.log("First log");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(); // Calling the parent class constructor
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height; // Returning area of the rectangle
    }
}

let a = new Rectangle(5, 10); // Creating a rectangle with width=5 and height=10
console.log(a.area()); // Output: 50
