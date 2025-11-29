let calculateElectricityBill =(units)=>{
    if(units <= 100){
        console.log(`Total Bill : Rs.${5*units}`);
    }
    else if(units <= 200){
        console.log(`Total Bill : Rs.${7*units}`);
    }
    else{
        console.log(`Total Bill : Rs.${10*units}`);
    }
}

calculateElectricityBill(300)