let p = document.querySelector('p');
console.log(p);

let h = document.querySelector('h1');
h.style.color = "pink"
p.textContent = "Hi my name is Rohit";
p.style.color = "red";

document.body.style.backgroundColor = "yellow"

let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter your name : ";
input.id = "userInput";
document.body.appendChild(input);

input.addEventListener("input",(e)=>{
    console.log(e.target.value);
    
})