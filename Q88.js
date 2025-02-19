//Write a function that resolve 3 second later and the plus both valyes
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([Promise.resolve(promise1), Promise.resolve(promise2)])
      .then(([value1, value2]) => value1 + value2);
  };
  
  addTwoPromises(Promise.resolve(2), Promise.resolve(4)).then(console.log); // Output: 6
  addTwoPromises(2, 4).then(console.log); // Output: 6
  