function askTvSerie()
{
    let result = {
        name: prompt("Ta serie tv preferee ?"),
        productionYear: prompt("Lanne de production de cette serie ?"),
        castMembers: []
    }
    let choose = true;
    while(choose)
    {
        let input = prompt("quel son les personne chargee de la production");
        choose = input.length !== 0;
        if(choose)
        {
            result.castMembers.push(input);
        }
    }
    return result;
}


function askTvSerie()
{
    let result = {
        name: prompt("Ta serie tv preferee ?"),
        productionYear: prompt("Lanne de production de cette serie ?"),
        castMembers: []
    }
    let choose = true;
    while(choose)
    {
        let input = prompt("quel son les personne chargee de la production");
        choose = input.length !== 0;
        if(choose)
        {
            result.castMembers.push(input);
        }
    }
    return result;
}

function randomizeCast(tvSerie)
{
    let cast = tvSerie.castMembers;
    for(let i = 0; i < cast.length; i++)
    {
        let tmp1 = Math.floor(Math.random() * cast.length);
        let tmp2 = Math.floor(Math.random() * cast.length);
        let tmpCast = cast[tmp1];
        cast[tmp1] = cast[tmp2];
        cast[tmp2] = tmpCast;
    }
    return cast;
}

console.log(randomizeCast(askTvSerie()));