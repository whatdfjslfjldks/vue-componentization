export function subjectPost(n, H) {
    const postLocations = []; // 存储每个邮局的位置
    let numOfPosts = 0; // 记录邮局的数量
    let p=[];
     p[0] = H[0]+1000; // 初始化第一个邮局的位置
    // 从第二户人家开始遍历，如果当前房子距离第一个房子超过1000米，就要在前一个房子建立一个邮局
    for (let i =1; i <n; i++) {
        // 如果当前房子距离上一个建立的邮局的距离超过1000米
        // console.log(H[i])
        if (H[i] - p[numOfPosts] > 1000) {
            postLocations.push(p[numOfPosts]);
            numOfPosts++; // 邮局数量加一
            p[numOfPosts] = H[i]+1000; // 更新当前房子加1000为邮局位置
        }
    }
    if(p[numOfPosts]>H[n-1]){ //如果最后一个邮局位置超出了最后一个房子，那改成最后一个房子的位置
        postLocations.push(H[n-1]);
        numOfPosts++;
    }

    // 返回结果
    return {
        numOfPosts,
        postLocations
    };
}
