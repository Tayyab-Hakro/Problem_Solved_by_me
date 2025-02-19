function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
  }
  
  // Testing the function
  let t = Date.now();
  sleep(100).then(() => {
    console.log(Date.now() - t); // Should print approximately 100
  });
  