let str = prompt("Enter your string:");
function isString(str){
    if(str.length == 0 ){
        window.alert("ERROR:There is no string.");
    }else{
        console.log("This is a string::: ", str);
    }
}
isString(str);