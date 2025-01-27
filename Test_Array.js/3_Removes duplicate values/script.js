let array = [];
let y = parseInt(prompt("Enter the length of array:"));
for(let i = 0; i < y; i++){
    array[i] = parseInt(prompt("Enter the values of array:" + i));
}
function removeDuplicates(arr){
    let uniqueArray = [];
    for(let i = 0; i < arr.length; i++){
        if(uniqueArray.indexOf(arr[i]) === -1){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

let uniqueArray = removeDuplicates(array);
console.log(uniqueArray);