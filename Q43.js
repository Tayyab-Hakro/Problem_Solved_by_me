const Check = new Promise((resolve, reject) => {
    const Str = "fsaasds"; // Define the string inside the function
    if (Str.length > 5) {
        resolve("Ok");
    } else {
        reject("Something is wrong");
    }
});

// Handling the promise correctly
Check
    .then((message) => console.log("Function is working fine:", message))
    .catch((error) => console.log("Error:", error))
    .finally(() => console.log("Everything is working fine"));

console.log(Check);
