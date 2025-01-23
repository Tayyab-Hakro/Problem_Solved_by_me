function countDownEven(count) {
    if (count > 0) {
      console.log("Even:", count);
      countDownOdd(count - 1); // Call the odd function with a decremented count
    }
  }
  
  function countDownOdd(count) {
    if (count > 0) {
      console.log("Odd:", count);
      countDownEven(count - 1); // Call the even function with a decremented count
    }
  }
  
  countDownEven(10);
  