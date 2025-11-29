let calBMI = function(weight, height){
    let bmi = weight / (height * height);

    if(bmi < 18.5){
        console.log("Underweight");
    }
    else if(bmi >= 18.5 && bmi < 24.9){
        console.log("Normal");
    }
    else if(bmi >= 25){
        console.log("Overweight");
        
    }

}

calBMI(100,4);