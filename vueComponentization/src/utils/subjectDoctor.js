//对于无向矩阵 n*n，n为顶点数
//难点一：如何表示无向加权图？二维数组(邻接矩阵matrix），a[2][1]=3 a[1][2]=3
//如何表示不相连？用MAX表示，但是有个问题，会混淆两点之间不想连和点自身的环，所以最后决定自己到自己为0，其他不想连为MAX
export function subjectDoctor(matrix) {
    const n = matrix.length; // 村庄数量
// console.log(n);
    // 初始化最短路径矩阵
    const shortestPaths = [];
    for (let i = 0; i < n; i++) {
        shortestPaths[i] = matrix[i].slice(); // 拷贝邻接矩阵
    }
    // console.log(shortestPaths);
    // 使用 Floyd-Warshall 算法计算最短路径  用于计算图中任意两个顶点之间的最短路径
    //首节点 中转节点 末节点
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== j && shortestPaths[i][k] + shortestPaths[k][j] < shortestPaths[i][j]) { //注意自己到自己不应该被赋值 i!==j
                    shortestPaths[i][j] = shortestPaths[i][k] + shortestPaths[k][j];
                }
            }
        }
    }
    
    
//此时经过Floyd算法后，邻接矩阵shortestPaths[i][j]已经可以表示从i到j的最短路径
console.log(shortestPaths)

// ------------------------------------------------------- 通用代码-------------------------------------------------------

//--------------------------------------------------1-------------------------------------
 // 找出最远村庄到医院的距离
 const distancesToHospital = [];
 for (let i = 0; i < n; i++) {
     let minDistance=0;
     for (let j = 0; j < n; j++) {
         if (shortestPaths[i][j] > minDistance) {
             minDistance = shortestPaths[i][j];
         }
     }
     distancesToHospital.push(minDistance);
 }
//  console.log(distancesToHospital);

 // 选择最短的距离的村庄作为医院位置
 let hospital = Infinity;
 let min = distancesToHospital[0];
 for (let i = 1; i < n; i++) {
     if (distancesToHospital[i] < min) {
         hospital = i;
         min = distancesToHospital[i];
     }
 }
//  console.log(hospital);
//-----------------------------------------------2-------------------------------------------
    // 遍历每个村庄，计算到其他所有村庄的最短路径之和
    const minTotalDistance = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            minTotalDistance[i] += shortestPaths[i][j];
        }
    }
    // console.log(minTotalDistance);

    // 选择最小的最短路径之和作为医院的位置
    let home = 0;
    let minDistance = minTotalDistance[0];
    for (let i = 1; i < n; i++) {
        if (minTotalDistance[i] < minDistance) {
            home = i;
            minDistance = minTotalDistance[i];
        }
    }
    // console.log(minDistance);
    // console.log(home);

    return {
        hospital,
        home
    }; // 返回医院的位置（村庄编号）
}
