var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([Promise.resolve(promise1), Promise.resolve(promise2)])
      .then(([value1, value2]) => value1 + value2);
  };
  
  // Example usage:
  addTwoPromises(Promise.resolve(2), Promise.resolve(4)).then(console.log); // Output: 6
  
  // Also works with plain numbers:
  addTwoPromises(2, 4).then(console.log); // Output: 6
  