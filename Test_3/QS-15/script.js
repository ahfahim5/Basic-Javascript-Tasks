let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
try{
    if(num1 == 0|| num2 == 0){
        throw new Error("Division by zero is not allowed.");
    }
    else{
        console.log(`Division of ${num1} by ${num2} is: ${num1/num2}`);
    }    
}
catch(err){
    alert(err.message);
}