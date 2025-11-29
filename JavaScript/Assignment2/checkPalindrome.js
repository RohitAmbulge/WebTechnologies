let checkPalindrome = function(str){
    let rev = str.toLowerCase().split("").reverse().join("");
    if(str.toLowerCase() == rev){
        console.log("palindrome");
        
    }
    else{
        console.log("Not Palindrome");
        
    }
}

checkPalindrome("lev")