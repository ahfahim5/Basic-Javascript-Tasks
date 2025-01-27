let array = [1, 2, 2, 2, 3, 3, 3, 4];
let counts = [];

array.forEach(function(i) {
    counts[i] = (counts[i] || 0) + 1;
});
console.log( array, counts);