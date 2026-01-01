// let btn = document.querySelector('button');
// btn.addEventListener("click",()=>{
//     alert("Button")
// });

// let p = document.querySelector("p");
// p.addEventListener("click", ()=>{
//     p.innerText = "Hi Im Rohit"
// })

// let btn = document.querySelector('button');
// let h = document.querySelector("h1");
// let count = Number(h.innerText);
// btn.addEventListener("click",()=>{
//     count = count+1;
//     h.innerText = count;
// })

// let input = document.querySelector('input');
// input.placeholder = "Enter you text"
// input.setAttribute('id','myinp')
// let span = document.querySelector('span');
// input.addEventListener("input",(e)=>{
//     console.log(e.id);
//     console.log(e.target.value);
//     span.innerText = e.target.value;
//     // span.innerText =
// })

// Hover Effect
// Change text color when mouse enters a div and revert on mouse leave.
// let div = document.querySelector('div');
// div.addEventListener('mousemove',()=>{
//     div.style.backgroundColor = 'red';
// })
// div.addEventListener('mouseenter',function(){
//     this.style.color = 'red';
// })

// div.addEventListener('mouseleave',function(){
//     this.style.color = 'black';
// })

//! Show / Hide Text
//! Button to hide and show a paragraph.
// let btn = document.querySelector('button');
// let p = document.querySelector('p');
// let temp = true;

// btn.addEventListener('click',()=>{
//     if(temp){
//         p.style.display = 'none'
//         temp = false;
//     }
//     else{
//         p.style.display = 'block'
//         temp = true;
//     }
// })

// Toggle Theme
// Button to toggle background color (light/dark).
//1.
// let btn = document.querySelector('button');
// btn.addEventListener("click",()=>{
//     document.body.classList.toggle("dark");
// });

// // 2.
//! let btn = document.querySelector('button');
//! if(localStorage.getItem('theme') == 'dark'){
//     document.body.classList.add("dark");
//     btn.innerText = "☀️";
// }

// btn.addEventListener("click",()=>{
//     document.body.classList.toggle("dark");

//     if(document.body.classList.contains("dark")){
//         btn.innerText = "☀️";
//         localStorage.setItem("theme","dark");
//     }
//     else{
//         btn.innerText = "🌙";
//         localStorage.setItem("theme","light");
//     }
// });

//! Add List Item
//! Input + button → add text as a new <li> in <ul>.
const list = document.getElementById("list");
const input = document.querySelector("input");

const btn = document.querySelector("#inbtn");

btn.addEventListener("click", () => {
  console.log(input.value);
  const value = input.value.trim();
  if ( value === "") {
    console.log("Please Enter Text");
    return;
  }

  let item = document.createElement("li");
  item.innerText = value;
  item.style.background = "red";
  list.appendChild(item);
  input.value = ""
});

// Remove Element
// Button to remove a paragraph from the page.

// Disable Button
// Disable a button after it is clicked once.
