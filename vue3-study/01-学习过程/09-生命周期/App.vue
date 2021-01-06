<template>
  <h2>app父级组件</h2>
  <button @click="isShow = !isShow">切换</button>
  <hr />
  <Child v-if="isShow" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "./components/child.vue";
export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    const isShow = ref(false);
    return {
      isShow,
    };
  },
});
</script>
<style></style>
