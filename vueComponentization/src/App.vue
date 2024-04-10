<template>
<div style="width:200px;height:200px;border:1px solid red" @contextmenu.prevent="rightClick"></div>

<div class="box1">
  this is box1
  <ContextMenu :menu="[
    {label:'test1'},
    {label:'test2'},
  ]">
<div class="inner">222</div>
  </ContextMenu>
</div>
<div class="box2">
this is box2
<!-- <ContextMenu :menu="[
    {label:'test1'},
    {label:'test2'},
  ]">
  sdafdf
  </ContextMenu> -->
<div class="box3">
  this is box3
  <!-- <ContextMenu :menu="[
    {label:'test1'},
    {label:'test2'},
  ]">
  </ContextMenu> -->
</div>
</div>
</template>
<script>
import ContextMenu from "./components/ContextMenu.vue";
export default{
  methods:{
    rightClick (MouseEvent) {
        console.log("鼠标右击事件",MouseEvent)
    },
  },
  components:{
    ContextMenu,
  }
}
</script>
<style>
.box1{
  width: 200px;
  height: 200px;
  background-color: red;
}
.box2{
  width: 200px;
  height: 200px;
  background-color: blue;
}
.box3{
  width: 100px;
  height: 100px;
  background-color: darkkhaki;
}
</style>