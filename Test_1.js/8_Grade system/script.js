function gradeSystem(marks){
    if(marks>=90 && marks <=100){
        console.log("Your Grade is A")
        return;
    }if(marks>=80 && marks<=89){
        console.log("Your Grade is B")
        return;
    }if(marks>=70 && marks<=79){
        console.log("Your Grade is C")
        return;
    }if(marks>=60 && marks<=69){
        console.log("Your Grade is D")
        return;
    }if(marks == 0 || marks > 100){
        window.alert("Invalid Number. Number should be more than 0 and less than 100.")
    }
    else{
        console.log("Your Grade is F")
        return;
    }
}
gradeSystem(parseInt(prompt("Enter Your Mark.")));