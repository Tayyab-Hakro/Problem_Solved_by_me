class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseString(str) {
    let stack = new Stack();

    // Push all characters to stack
    for (let char of str) {
        stack.push(char);
    }

    let reversedStr = "";

    // Pop characters to reverse the string
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Test the function
console.log(reverseString("hello")); // Output: "olleh"
