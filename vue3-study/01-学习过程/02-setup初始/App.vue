<template>
<div>new vue</div>
<strong>{{number}}</strong>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
   setup(){
    const number = 10;
    console.log('im coming')
    return {
      number
    }
  }
});
</script>

<style>
</style>
