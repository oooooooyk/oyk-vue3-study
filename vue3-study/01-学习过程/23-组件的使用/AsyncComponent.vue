<template>
<h2>AsyncComponent组件</h2>
<h3>msg:{{msg}}</h3>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
name: 'AsyncComponent',
setup(){
    console.log("setup");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("settimeOut");
            resolve({msg:'what are you doing'})
        },2000)
    })
},
//生命周期属性(包括API)会等到setup（包括异步）执行完之后执行
beforeCreate() {
    console.log("beforeCreated");
  },
  created() {
    console.log("created");
  },
});
</script>
<style></style>