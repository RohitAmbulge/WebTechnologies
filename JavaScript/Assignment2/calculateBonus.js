let calculateBonus = function(salary , exp){
    if(exp >= 5){
        let bonus = salary * (10 /100);
        console.log("Bonus Amount : "+bonus);  
    }
    else{
        console.log("Bonus Amount : "+salary*5/100);
        
    }
    
}

calculateBonus(2000, 5);