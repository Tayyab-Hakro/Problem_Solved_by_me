var addTwoPromises = async function(promise1, promise2) {
    // Await both promises and add their results
    const value1 = await promise1;
    const value2 = await promise2;

    return value1 + value2;
};

// Creating two promises that resolve to numbers
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve(2), 60);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve(3), 100);
});

// Calling the function and logging the result
addTwoPromises(promise1, promise2).then(sum => console.log("Sum is:", sum));
