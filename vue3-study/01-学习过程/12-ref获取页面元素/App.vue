<template>
  <h2>ref的另一个作用：获取页面元素</h2>
  <input type="text" ref="inputRef" placeholder=""/>
</template>
<script lang="ts">
import { defineComponent, ref,onMounted } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const inputRef = ref<HTMLElement | null>(null);
    onMounted(()=>{
      inputRef.value && inputRef.value.focus()
    })
    return {inputRef};
  },
});
</script>
<style></style>
