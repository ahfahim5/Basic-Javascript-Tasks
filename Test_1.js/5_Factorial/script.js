function fact(i)
{
    if (i == 0)
        return 1;
    return i * fact(i - 1);
}
let i = parseInt(prompt("Enter Your Number:"));
console.log("Factorial of " + i + " is "+ fact(i));