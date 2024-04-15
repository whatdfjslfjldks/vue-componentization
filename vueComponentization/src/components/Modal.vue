<template>
      <div class="overlay" v-if="visible"></div> <!-- 遮罩层 -->
<div class="container" ref="container"  @click="visible=true">
  <slot></slot>
<div class="modal" v-if="visible">
 <div class="title">{{ title }}</div>
 <div class="content">{{ content }}</div>
 <div class="footer">
    <button @click.stop="visible=false">确定!</button>
 </div>
</div>
</div>
</template>
<script>
import {ref,watch,watchEffect} from 'vue';
export default{
    props:{
        title:{
            type:String,
            default:''
        },
        content:{
            type:String,
            default:''
        },
        duration:{ //持续时间可传可不传
            type:Number,
        }
    },
    setup(props){
        // const container = ref(null)
        const visible=ref(false)
        console.log(props.duration)
        watchEffect(()=>{
            if(visible.value && props.duration!==undefined){
                console.log("enter");
                setTimeout(() => {
                    visible.value=false
                }, props.duration);
            }
        })
        return {
            visible
        }
    }
}
</script>
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  z-index: 999; /* 确保遮罩层在模态框上方 */
}
.modal{
    position:fixed;
    width: 250px;
    height: auto;
    /* border: 1px solid #000; */
    background-color: aqua;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000; /* 确保模态框位于遮罩层之上 */
}
.title{
    text-align: center;
}
.content{
    padding: 5px;
}
.footer{
    display: flex;
    justify-content: flex-end;
    padding: 5px;
    border-top: 1px solid #000;
}
</style>