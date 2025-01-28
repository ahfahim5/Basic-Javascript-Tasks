const numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers);

numbers.shift();
console.log(numbers);

const newArray = numbers.map((number) => number * 2);//Creating a new array with the elements multiplied by 2
console.log(newArray);

const newNumber = newArray;
const sum = newNumber.reduce((acc, number) => acc + number, 0);//Calculating the sum of the elements in the array
console.log(`Sum is : ${sum}`);