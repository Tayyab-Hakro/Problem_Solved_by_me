// Implement a debounce function that delays the execution of a function 
// until a certain amount of time has passed since the last call.

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// Example Usage
const debouncedFunction = debounce(() => {
    console.log("Function executed after delay");
}, 2000);

debouncedFunction();
debouncedFunction();
debouncedFunction();  // Only this call will execute after 2 seconds if no further calls are made
