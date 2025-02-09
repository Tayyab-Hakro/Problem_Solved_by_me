// Create a class Animal with a method makeSound(), and extend it in a class Dog.
// Override the makeSound() method in Dog to print "Woof! Woof!

class Animal {
    makeSound(){
  console.log()
    }
}
class Dog extends Animal{
makeSound(){
    console.log("woof! woof!" )
}
}

let doger = new Dog()
doger.makeSound()