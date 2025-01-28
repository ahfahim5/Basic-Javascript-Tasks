let number = parseInt(prompt("Enter a number: "));

switch (number) {
    case 1:
    day = "Sunday";
    break;
    case 2:
    day = "Monday";
    break;
    case 3:
    day = "Tuesday";
    break;
    case 4:
    day = "Wednesday";
    break;    
    case 5:
    day = "Thursday";
    break;
    case 6:
    day = "Friday";
    break;
}
console.log(`Today is ${day}`);