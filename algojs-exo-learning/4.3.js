function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand(n) {

    let a = [];
    for(let i = 0; i < n; i++)
    {
        a.push(rand10());
    }
    return a;
}

let o = prompt('Cb de nombre a generer ?');
console.log(multiRand(o));


