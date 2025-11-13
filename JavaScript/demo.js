let h1 = document.querySelector('h1');
let count = 0;

let func = () =>{
    count += 1;
}

h1.innerText = func();
