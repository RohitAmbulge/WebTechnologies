function gradeStudent(marks){
    if(marks >= 90){
        console.log("Grade : A+");  
    }
    else if(marks >= 75){
        console.log("Grade : A");   
    }
    else if(marks >= 60){
        console.log("Grade : B");
    }
    else{
        console.log("Grade : Fail"); 
    }
}

gradeStudent(65);