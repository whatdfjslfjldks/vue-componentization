let time=0;
let total=0;
export function subjectWater(water)
{
    water.sort((a,b)=>a-b);
    console.log(water);
    total=0;
    for(let i=0;i<water.length;i++)
    {
        total+=water[i]*(water.length-i-1);
        console.log(water[i]*(water.length-i-1));
    }
    console.log(total);
    time=total/water.length;
    return{
        time
    }
}