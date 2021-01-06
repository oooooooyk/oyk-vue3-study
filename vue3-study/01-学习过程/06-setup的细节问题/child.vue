<template>
  <h2>child子级组件</h2>
  <h3>{{ msg }}</h3>
  <h3>{{ count }}</h3>
  <button @click="emitXxx">emit</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "child",
  props: ["msg"],

  beforeCreate() {
    console.log("beforecreate执行", this);
  },
  setup(props,context) {
    // console.log("props", props);
    console.log("context", context);
    console.log("child setup执行", this);
    const showMsg1 = () => {
      console.log("showMsg1");
    };
    const emitXxx = ()=>{
        context.emit('xxx','+value')
    }
    return {
      showMsg1,
      emitXxx
    };
  },
  data() {
    return {
      count: 10,
    };
  },
  mounted() {
    console.warn("mounted:", this);
  },
  methods: {
    showMsg2() {
      console.log("showMsg2");
    },
  },
});
</script>
<style></style>
