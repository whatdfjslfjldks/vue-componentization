import { onMounted,onUnmounted, ref,watchEffect } from "vue"

export function useContextMenu(container:any) {
    const x = ref(0);
    const y = ref(0);
    const visible = ref(false);

    function showMenu(e:any){
        e.preventDefault();
        e.stopPropagation();
        x.value=e.clientX;
        y.value=e.clientY;
        visible.value=true;
    }
    function closeMenu(){
        visible.value=false;
    }
    container.addEventListener('contextmenu',showMenu);
    window.addEventListener('click',closeMenu,true);
    window.addEventListener('contextmenu',closeMenu,true);
    // true将事件监听器绑定在捕获阶段
    // 设三个事件监听器为123，点击3，则会123执行
    // false则是冒泡阶段，即点击3,321执行，不满足要求
return { x, y, visible };

}