let ticketPrice = (age)=>{
    if(age < 12){
        console.log("Your Ticket price is Rs.50");   
    }
    else if(age >= 12 && age <60){
        console.log("Your Ticket price is Rs.100")
    }
    else if(age > 60){
        console.log("Your Ticket price is Rs.70")
    }
}

ticketPrice(11);