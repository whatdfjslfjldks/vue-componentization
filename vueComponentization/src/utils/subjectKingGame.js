//难点一：向下取整？js中可用Math.floor()\
//难点二：优化排序，排序依据？左手？右手？还是其他什么
//思路：先按照右手大小就行排序，让后面的大臣除后金币尽可能小（右手是分母，分母越大，式子越小），然后遍历计算，找到最小的
export function subjectKingGame(number,goldArray){
    //先按照右手进行排序，注意不要排序国王
//     for(let i=1;i<number;i++){
//         for(let j=i+1;j<=number;j++){
//             if(goldArray[i][1]>goldArray[j][1]){
//                 let temp=goldArray[i];
//                 goldArray[i]=goldArray[j];
//                 goldArray[j]=temp;
//         }
//     }
// }
goldArray.sort((a,b)=>a[1]-b[1]);
// console.log(goldArray);
let gold=-Infinity;
let totalGold=1;
for(let k=1;k<=number;k++){
    totalGold=1;
    for(let l=0;l<k;l++){
        totalGold*=goldArray[l][0];
        console.log(totalGold/goldArray[k][1])
    }
    let tempGold=Math.floor(totalGold/goldArray[k][1])
    if(tempGold>gold){
        gold=tempGold;
    }
}
return {
    gold
}
}