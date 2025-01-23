function countDownEven(count) {
    if (count > 0) {
      console.log("Even:", count);
      countDownOdd(count - 1); 
    }
  }
  
  function countDownOdd(count) {
    if (count > 0) {
      console.log("Odd:", count);
      countDownEven(count - 1);
    }
  }
  
  countDownEven(10);
  