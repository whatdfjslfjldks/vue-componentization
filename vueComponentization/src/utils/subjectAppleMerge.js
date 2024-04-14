//贪心，每次都找最小的两个
let energy=0;
export function subjectAppleMerge(apples)
{
    apples.sort((a,b)=>a-b);//升序排列
    // console.log(apples);
    while(apples.length>1){//保证还有两个堆
        const min1=apples.shift();
        const min2=apples.shift();//弹出两个最小的
        // console.log(apples);
        const merged = min1 + min2; 
        // console.log("merge"+merged)
        energy += merged; 
        // 将合并后的果子堆放回数组中，保持有序
        // apples.push(merged);
        // apples.sort((a,b)=>a-b);
        //或者插入到正确位置，时间复杂度会小一点
        let index = 0;
        while (index < apples.length && apples[index] < merged) {
            index++;
        }
        apples.splice(index, 0, merged);
        // console.log(apples.length)
        console.log("energyinner "+energy)
    }
    console.log("energy "+energy)

    return {
        energy
    }
}