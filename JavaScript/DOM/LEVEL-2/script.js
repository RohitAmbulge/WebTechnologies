//! 1. Event Delegation (VERY IMPORTANT)
//! Task
//! Create a <ul>
//! Add multiple <li> items dynamically
//! When any li is clicked, log its text
//! Use ONLY ONE event listener on <ul>
//! 💡 Hint: event.target

let ul = document.createElement("ul");
let input = document.createElement("input");
document.body.append(input,ul);
input.placeholder = "Enter count";

input.addEventListener("keydown", (e) => {
  if (input.value != "" && e.key === "Enter") {
    let count = Number(input.value);

    for (let i = 1; i <= count; i++) {
      let li = document.createElement("li");
      li.innerText = "Rohit";
      ul.appendChild(li);
    }
  }


  input.value = ""
});

let items = document.querySelectorAll('li');
for(let item : items){

}

