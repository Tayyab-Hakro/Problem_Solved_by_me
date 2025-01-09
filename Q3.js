function SwapNumber(input) {
    const entries = Object.entries(input);
  
    const temp = entries[0][1];  
    entries[0][1] = entries[1][1]; 
    entries[1][1] = temp; 
  
    const swappedObject = Object.fromEntries(entries);
  
    return swappedObject; 
  }
  
  console.log(SwapNumber({ a: 10, b: 20 })); // Output: { a: 20, b: 10 }
  