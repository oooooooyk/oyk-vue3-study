<template>
  <h2>child子组件</h2>
  <h4>msg:{{ msg }}</h4>
  <button @click="update">update</button>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default defineComponent({
  name: "App",
  //vue2中的生命周期
  beforeCreate() {
    console.log("2.x---beforeCreate");
  },
  created() {
    console.log("2.x---created");
  },
  beforeMount() {
    console.log("2.x---beforeMount");
  },
  mounted() {
    console.log("2.x---mounted");
  },
  beforeUpdate() {
    console.log("2.x---beforeUpdate");
  },
  updated() {
    console.log("2.x---updated");
  },
  beforeUnmount() {
    console.log("3.x---beforeUnmount");
  },
  unmounted() {
    console.log("3.x---unmounted");
  },
  setup() {
    console.log("3.x---setup");

    const msg = ref("abc");
    const update = () => {
      msg.value += "---";
    };

    onBeforeMount(() => {
      console.log("3.x---onBeforeMount");
    });
    onMounted(() => {
      console.log("3.x---onMounted");
    });
    onBeforeUpdate(() => {
      console.log("3.x---onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("3.x---onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("3.x---onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("3.x---onUnmounted");
    });
    return {
      msg,
      update,
    };
  },
});
</script>
<style></style>
