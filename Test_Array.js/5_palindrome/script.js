let x = [];
let y = parseInt(prompt("Enter the lenght of array:"));
let maxN = 0;
for (let i = 0; i < y; i++) {
  x[i] = parseInt(prompt("Enter the values of array:" + i));
}
function checkPalindrom(array){
    let len = array.length
    for(let i = 0; i < len/2; i++){
        if(array[i]!== array[len-1-i]){
            return false;
        }
    }
    return true;
}
if(checkPalindrom(x)){
    console.log("Palindrome array");
}else{
    console.log("Not Palindrome array");
}
