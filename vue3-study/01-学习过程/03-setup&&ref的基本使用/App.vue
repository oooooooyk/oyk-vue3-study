<template>
<h2>setup 和ref的基本使用</h2>
<h2>{{count}}</h2>
<button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
export default defineComponent({
  name: 'App',
  /* data(){
    return{
      count:0
    }
  },
  methods:{
    updateCount(){
      this.count ++
    }
  } */

  setup(){
    const count = ref(0);
    console.log(count)
    function updateCount(){
      console.log(1);
      count.value++
    }
    return {
      count,
      updateCount
    }
  }
});
</script>

<style>
</style>