let checkLeap =(year)=>{
    if(year % 100 == 0 && year %400 == 0){
        console.log("its a leap year");  
    }
    else if(year % 4 == 0){
        console.log("Its a leap year");   
    }
    else{
        console.log("Not a leap year");  
    }
}

checkLeap(25)