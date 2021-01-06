<template>
  <h2>app父级组件</h2>
  <h3>{{ msg }}</h3>
  <button @click="msg += '-'">更新数据</button>
  <hr />
  <child :msg="msg" msg2="真心" @xxx="xxx"></child>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import Child from "./components/child.vue";

export default defineComponent({
  name: "App",
  components: {
    Child,
  },

  setup() {
    const msg = ref("what are you doing");
    const xxx = (txt: string)=>{
        msg.value += txt
    }
    return {
      msg,
      xxx
    };
  },
});
</script>

<style></style>
