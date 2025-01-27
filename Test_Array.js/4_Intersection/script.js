let array1 = [10,5,7,8,4,3,1];
let array2 = [10,5,2,21,3,1,12];

function getIntersection(array1,array2){
    let len = array1.length;
    let uniqueArray = [];
    for(let i = 0;i < len; i++){
        if(array2.includes(array1[i])){
            uniqueArray.push(array1[i]);
        }
    }
    return uniqueArray.sort(function(a,b){return a - b});
}
let uniqueArray = getIntersection(array1,array2);
console.log(uniqueArray);