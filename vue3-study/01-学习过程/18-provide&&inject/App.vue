<template>
<h2>provide 与inject的使用</h2>
<p>当前颜色：{{color}}</p>
<hr>
<button @click="updateColor('yellow')">黄色</button>
<button @click="updateColor('red')">红色</button>
<button @click="updateColor('green')">绿色</button>
<hr>
<Son/>
</template>
<script lang="ts">
import { defineComponent,ref,provide } from "vue";
import Son from './components/Son.vue'
export default defineComponent({
name: 'App',
components:{
    Son
},
setup(){
    const color = ref('yellow');

    //提供数据
    provide("color",color);
    const updateColor = (c)=>{
        color.value = c 
    }
    return {
        color,
        updateColor
    }
}
});
</script>
<style></style>