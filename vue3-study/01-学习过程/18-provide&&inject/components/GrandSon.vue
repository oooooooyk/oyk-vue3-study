<template>
<h3 :style="{color}">grandSon组件</h3>
</template>
<script lang="ts">
import { defineComponent,inject } from "vue";
export default defineComponent({
name: 'GranfSon',
setup(){

    const color = inject('color')
    console.log('grandson-color:',color)
    return{
        color
    }
}
});
</script>
<style></style>