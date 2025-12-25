let res = fetch("https://api.github.com/users");
let res2 = res.then((stream)=>{
    return stream.json();
});

res2.then((data)=>{
    console.log(data);
});