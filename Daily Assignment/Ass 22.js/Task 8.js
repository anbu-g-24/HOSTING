function checkGrade(marks){
    if(marks >=90){
        return "A";
    }
    else if(marks >=80){
        return "B";
    }  
    else if(marks >=70){
        return "c";
    }
    else if(maarks >=60){
        return "D";
    }else{
        return "F";
    }
}

let studentMarks = 86;
console.log("Your grade is:", checkGrade(studentMarks));