var createCounter = function(n) {
    return function() {
        createCounter(n +1)
    };
};

console.log(createCounter(10))
console.log(createCounter())

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */