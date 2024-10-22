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
console.log(JSON.stringify(askTvSerie()));