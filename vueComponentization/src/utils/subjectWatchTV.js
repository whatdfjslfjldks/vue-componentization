//难点：如何排序，以什么为依据？
export function subjectWatchTV(tv,tvTime)
{
    let game=0;
    tvTime.sort((a, b) => a[0] - b[0]);//按照开始时间升序排序
    console.log(tvTime)
    // let endTime=tvTime[0][1];//初始化结束时间
    let endTime=-Infinity;//为了确保第一场一定能看
    for(let i=0;i<tv;i++){
        console.log(tvTime[i][0],endTime)
        if(tvTime[i][0]>=endTime){ //如果开始时间比前一场的结束时间大，则可以看
            game++;
            endTime=tvTime[i][1];
        }
    }
    
    return{
        game
    }
}