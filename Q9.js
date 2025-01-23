function sumEven(num, sum = 0) {
    if (num <= 0) {
      return sum;
    }
    if (num % 2 === 0) {
      sum += num; 
    }
    return sumOdd(num - 1, sum); 
  }
  
  function sumOdd(num, sum = 0) {
    if (num <= 0) {
      return sum; 
    }
    if (num % 2 !== 0) {
      sum += num; 
    }
    return sumEven(num - 1, sum); 
  }
  
  const result = sumEven(10);
  console.log("Total Sum:", result);
  