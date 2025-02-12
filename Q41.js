function Number1(grade) {
    if (grade < 38) {
        return "fail";
    }
    
    let nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    
    if (nextMultipleOf5 - grade < 3) {
        return nextMultipleOf5;
    }
    
    return grade;
}

console.log(Number1(73)); // 75
console.log(Number1(67)); // 67
console.log(Number1(75)); // 75
console.log(Number1(33)); // fail
