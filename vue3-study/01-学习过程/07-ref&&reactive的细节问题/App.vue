<template>
  <h2>reactive ref的细节问题</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const m1 = ref("abc");
    const m2 = reactive({
      name: "小明",
      wife: {
        name: "小红",
      },
    });

    //ref中如果放入的是一个对象，那么会得到一个reactive对象
    const m3 = ref({
      name: "小明",
      wife: {
        name: "小红",
      },
    });
    const update = () => {
      console.log(m1);
      console.log(m3);
      m1.value += "def";
      m2.wife.name += "2";
      m3.value.wife.name += "3";
    };
    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>
<style></style>
