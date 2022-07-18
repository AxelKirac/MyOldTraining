let inputAr = ["Axel", "Daniela", "Doriano", "dylan", "eddy", "hazem"]

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

function pickLearner(inputAr, n)
{
    if(n > 0 && n < inputAr.length)
    {
        let i = 0, r = [];
        while(i < n)
        {
            r.push(inputAr[Math.floor(Math.random() * inputAr.length)]);
            i++;
        }
        return r;
    }
    
}

console.log(rand10(inputAr,5))