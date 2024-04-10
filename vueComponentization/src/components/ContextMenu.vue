<template>
    <div class="container" >
      <slot></slot>
  
      <Teleport to="body">
        <div class="context-menu">
          <!-- 渲染菜单项 -->
          <div
           v-for="(item, index) in menu" 
           :key="index" class="menu-item"
           v-show="contextMenu.visible"
           :style="{background:'red',top:'20px',left:'20px',width:'200px',height:'200px'}"
           >{{ item.label }}</div>
        </div>
      </Teleport>
    </div>
  </template>
  
  <script>
  import { ref, onMounted,Teleport,reactive } from "vue";
  import { useContextMenu } from "../utils/useContextMenu";
  export default {
    props: {
      // 接受菜单项作为 prop
      menu: {
        type: Object,
        default: () => []
      }
    },
    setup() {
    const contextMenu = reactive({
      x: 0,
      y: 0,
      visible: false
    });

    onMounted(() => {
      const { x: contextMenuX, y: contextMenuY, visible: contextMenuVisible } = useContextMenu(document.querySelector(".container"));
      contextMenu.x = contextMenuX.value;
      contextMenu.y = contextMenuY.value;
      contextMenu.visible = contextMenuVisible.value;
      console.log(contextMenu.x, contextMenu.y, contextMenu.visible);
    });

    return { contextMenu };
  },
  components:{
    Teleport
  }
  }
  </script>
  
  <style scoped>
  .container {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: aqua;
  }
  /* .context-menu {
    position: fixed;
    background-color: white;
    border: 1px solid #ccc;
    padding: 5px;
  } */
  .menu-item {
    cursor: pointer;
    padding: 5px;
  }
  </style>
  