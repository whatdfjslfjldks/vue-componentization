<template>
<ContextMenu :menu="[
  {label:'test1'},
  {label:'test2'},
  {label:'test3'},
  {label:'test4'}
  ]" @menu-item-clicked="handleMenuItemClicked">
<div class="test">这是一个右键菜单</div>
</ContextMenu>
</template>
<script>
import ContextMenu from "./components/ContextMenu.vue";
export default{
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
</style>