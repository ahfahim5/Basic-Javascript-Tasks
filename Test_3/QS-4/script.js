function checkNumber(num) {
    if (num > 0) {
      console.log("The number is positive.");
    } else if (num < 0) {
      console.log("The number is negative.");
    } else if (num === 0) {
      console.log("The number is zero.");
    } else {
      console.log("Invalid input.");
    }
  }
  
  let number = 0;
  checkNumber(number);
  