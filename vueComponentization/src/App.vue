<template>
<!-- <ContextMenu :menu="[
  {label:'test1'},
  {label:'test2'},
  {label:'test3'},
  {label:'test4'}
  ]" @menu-item-clicked="handleMenuItemClicked">
<div class="test">这是一个右键菜单</div>
</ContextMenu> -->
  <div v-if="result">
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
</template>

<script>
import ContextMenu from "./components/ContextMenu.vue";
import {subjectPost} from "./utils/subjectPost.js";
import {subjectDoctor} from "./utils/subjectDoctor.js";
const MAX=Infinity;//正无穷大
export default{
  data(){
    return{
      n:3,
      H:[1000,1500,3500],
      matrix:[
    [0, MAX, 3],
    [MAX, 0, 2],
    [3, 2, 0]
]
    }
  },
  computed:{
    result() {
      // return subjectPost(this.n, this.H); //题目一：最佳邮局设置问题
      return subjectDoctor(this.matrix);//题目二、三：医院设置问题1、2
    }
  },
  methods: {
  handleMenuItemClicked(selectedContent) {
    // 在这里获取到选中的内容，可以对其进行进一步处理
    console.log('选中的内容：', selectedContent);
  }
},
  components:{
    ContextMenu,
  }
}
</script>
<style scoped>
.test{
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>./utils/subjectDoctor.js