<template>
  <div class="container" ref="container">
    <slot></slot>
    <Teleport to="body">
      <Transition
      @beforeEnter="handleBeforeEnter"
      @enter="handleEnter"
      @afterEnter="handleAfterEnter"
       >
      <div class="context-menu" v-show="contextMenu.visible" :style="{ top: contextMenu.y + 'px', left: contextMenu.x + 'px' }">
        <!-- 渲染菜单项 -->
        <div @click="handleMenuItemClick(item.label)" v-for="(item, index) in menu" :key="index" class="menu-item">{{ item.label }}</div>
      </div>
    </Transition>
    </Teleport>
  </div>
</template>

<script>
import { ref, onMounted, Teleport, reactive, watchEffect} from "vue";
import { useContextMenu } from "../utils/useContextMenu";

export default {
  props: {
    // 接受菜单项作为 prop
    menu: {
      type: Object,
      default: () => []
    }
  },
  setup(_,context) {
    const contextMenu = reactive({
      x: 0,
      y: 0,
      visible: false
    });
    function handleMenuItemClick(label) {
    const selectedContent = label;
    context.emit('menu-item-clicked', selectedContent);
  }
    const container = ref(null);
    function handleBeforeEnter(el) {
      el.style.height = 0;
    }
    function handleEnter(el) {
  el.style.height = "auto"; // 设置高度为自动以便获取高度
  el.style.opacity = 0; // 设置初始透明度为0
  const h = el.clientHeight;
  el.style.height = 0; // 将高度设置为0，用于动画
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.height = h + "px"; 
      el.style.opacity = 1; // 逐渐显示字体
      el.style.transition = "height 0.5s, opacity 0.5s"; 
    });
  });
}

    function handleAfterEnter(el) {
      el.style.transition='none';
    }

    onMounted(() => {
      const { x: contextMenuX, y: contextMenuY, visible: contextMenuVisible } = useContextMenu(container.value);
      watchEffect(() => {
        contextMenu.x = contextMenuX.value;
        contextMenu.y = contextMenuY.value;
        contextMenu.visible = contextMenuVisible.value;
      });
    });

    return { container, contextMenu,handleBeforeEnter,handleAfterEnter,handleEnter,handleMenuItemClick };
  },
  components: {
    Teleport
  }
};
</script>

<style scoped>
.container {
  position: fixed;
  background-color: aqua;
}
.context-menu {
  position: fixed;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  font-family: Arial, sans-serif;
  /* font-size: 14px; */
  line-height: 1.5;
  color: #333; /* 文本颜色 */
}
.menu-item {
  cursor: pointer;
  padding: 10px;
}

.menu-item:hover {
  background-color: #e5e5e5;
  transition: background-color 0.3s ease; /* 添加渐变效果 */
  border-radius: 5px;
  display: block;
}
</style>
