const sentence = "I love hybritech 2024";
// const sentence = prompt("Enter Your Sentence");
const number = sentence.match(/\d+/)[0];

const string = sentence.replace(/\d+/, '').trim();

console.log("String:", string);
console.log("Number:", number);