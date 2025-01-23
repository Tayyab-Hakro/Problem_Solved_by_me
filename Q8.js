function functionA(count) {
  if (count > 0) {
    console.log("Function A:", count);
    functionB(count - 1);
    console.log( "Check here count value",count)
  }
}

function functionB(count) {
  if (count > 0) {
    console.log("Function B:", count);
    functionA(count - 1);
  }
}

functionA(5);
