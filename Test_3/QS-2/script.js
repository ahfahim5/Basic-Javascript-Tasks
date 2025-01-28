function addNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Error: Both inputs must be numbers.';
    }
      return num1 + num2;
  };
  console.log(addNumbers(10, 10));
  console.log(addNumbers(5, 'abc'));
  