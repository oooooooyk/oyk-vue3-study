<template>
  <h2>toRefs的使用</h2>
  <h3>name:{{ state.name }}</h3>
  <h3>age:{{ state.age }}</h3>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "自来也",
      age: 57,
    });

    const state2 = toRefs(state);
    console.log(state)
    console.log(state2)
    setInterval(() => {
      state.age += 2;
    }, 2000);
    return { state };
  },
});
</script>
<style></style>
