let num = parseFloat(prompt("Enter your number:"));
function isNumInt(num){
    if(Number.isInteger(num)){
        console.log("Integer Number.", num);
    }else{
        window.alert("ERROR:Number is not Integer");
    }
}
isNumInt(num);