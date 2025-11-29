let passwordStrength = (password) =>{
    if(password.length < 6){
        console.log("Weak Password")
    }
    else{
        console.log("Strong Password");     
    }
}

passwordStrength("Rohit")