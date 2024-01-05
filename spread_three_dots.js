function sum(...numbers) //... basically say tha we can use multiple parameters
{
    let total=0;

    for(let n of numbers)
    {
        total+=n;
    }

    return total;
}

console.log(sum(1,2,"Nya",4));
console.log(sum(5,10));
console.log(sum());