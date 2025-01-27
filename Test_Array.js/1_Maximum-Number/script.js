let x = [];
let y = parseInt(prompt("Enter the lenght of array:"));
let maxN = 0;
for(let i = 0; i < y; i++){
    x[i] = parseInt(prompt("Enter the values of array:" +i));
    function maxNN(array) {
        return Math.max.apply(null, array);
    }
}
console.log("Maximum number of array is:",maxNN(x));