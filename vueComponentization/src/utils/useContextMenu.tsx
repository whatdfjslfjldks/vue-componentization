import { onMounted,onUnmounted, ref } from "vue"

export function useContextMenu(container:any) {
    console.log(container)
    const x = ref(0);
    const y = ref(0);
    const visible = ref(false);
    function showMenu(e:any){
        console.log("showmenu");
        e.preventDefault();
        e.stopPropagation();
        x.value=e.clientX;
        y.value=e.clientY;
        visible.value=true;
        console.log(e.clientX);
        console.log(e.clientY);
    }
    function closeMenu(){
        console.log("closeMenu");
        visible.value=false;
    }
    // 组件挂载
onMounted(()=>{
    console.log('组件挂载');
    container.addEventListener('contextmenu',showMenu);
    window.addEventListener('click',closeMenu,true);
    window.addEventListener('contextmenu',closeMenu,true);
    //true将事件监听器绑定在捕获阶段
    //设三个事件监听器为123，点击3，则会123执行
    //false则是冒泡阶段，即点击3,321执行，不满足要求
})
//组件卸载
onUnmounted(()=>{
    container.removeEventListener('contextmenu',closeMenu);//TODO q?
})
    return {
        x,
        y,
        visible
}

}