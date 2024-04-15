<template>
<ContextMenu :menu="[
  {label:'test1'},
  {label:'test2'},
  {label:'test3'},
  {label:'test4'}
  ]" @menu-item-clicked="handleMenuItemClicked">
<div class="test">这是一个右键菜单</div>
</ContextMenu>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
<Modal :title="'弹窗'" :content="'是否关闭？'"
 >
<div class="test">这是一个弹窗</div>
</Modal>
  <!-- <div v-if="result">
    <p>最少需要建立的邮局数量为：{{ result.numOfPosts }}</p>
    <p>每个邮局到街西头的距离为：</p>
    <ul>
      <li v-for="(distance, index) in result.postLocations" :key="index">{{ distance }}</li>
    </ul>
  </div>
  <div v-if="result">
<p>医院应该建在 {{ result.hospital }} 村庄,使得离医院最远的村庄到医院最近。</p>
<p>医院应该建在 {{ result.home }} 村庄,使得所有村庄到医院的路径和最短。</p>
  </div>
  <div v-if="result">
  <p>获奖赏最多的大臣所获得的金币数为{{ result.gold }}</p>
  </div>
  <div v-if="result">
    <p>最多可以看 {{result.game}} 场比赛</p>
  </div>
  <div v-if="result">
  <p>最小需花费的体力值为{{ result.energy }}</p>
  </div>
  <div v-if="result">
  <p>最小平均等待时间为{{ result.time }}</p>
  </div> -->
</template>

<script>
import ContextMenu from "./components/ContextMenu.vue";
import Modal from "./components/Modal.vue";
// import {subjectPost} from "./utils/subjectPost.js";
// import {subjectDoctor} from "./utils/subjectDoctor.js";
// import {subjectKingGame} from "./utils/subjectKingGame.js";
// import {subjectWatchTV} from "./utils/subjectWatchTV.js";
// import {subjectAppleMerge} from "./utils/subjectAppleMerge.js";
// import {subjectWater} from "./utils/subjectWater.js";
// const MAX=Infinity;//正无穷大
export default{
  // data(){
  //   return{
  //     n:3,
  //     H:[1000,1500,3500],
  //     matrix:[
  //   [0, MAX, 3],
  //   [MAX, 0, 2],
  //   [3, 2, 0]
  //     ],
  //     number:3,
  //     goldArray:[
  //       [1,1],
  //       [2,3],
  //       [7,4],
  //       [4,6]
  //     ],
  //     tv:4,
  //     tvTime:[
  //       [0,2],
  //       [2,4],
  //       [1,3],
  //       [123,4567]
  //     ],
  //     apples:[1,2,9],
  //     water:[56,12,1,99,1000,234,33,55,99,812]
  //   }
  // },
  // computed:{
  //   result() {
  //     // return subjectPost(this.n, this.H); //题目一：最佳邮局设置问题
  //     // return subjectDoctor(this.matrix);//题目二、三：医院设置问题1、2
  //     // return subjectKingGame(this.number,this.goldArray);//题目四：国王游戏问题
  //     // return subjectWatchTV(this.tv,this.tvTime);
  //     // return subjectAppleMerge(this.apples);
  //     return subjectWater(this.water);
  //   }
  // },
  methods: {
  handleMenuItemClicked(selectedContent) {
    // 在这里获取到选中的内容，可以对其进行进一步处理
    console.log('选中的内容：', selectedContent);
  }
},
  components:{
    ContextMenu,
    Modal
  }
}
</script>
<style scoped>
.test{
  width: 100px;
  height: auto;
  background-color:gray;
  border: 1px solid black;
}
</style>