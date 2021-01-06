<template>
  <h2>shallowReactive 和 shallowRef</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <h3>m4:{{ m4 }}</h3>
  <hr />
  <button @click="update">更新</button>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  shallowReactive,
  ref,
  shallowRef,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const m1 = reactive({
      name: "鸣人",
      age: 12,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const m2 = shallowReactive({
      name: "鸣人",
      age: 12,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const m3 = ref({
      name: "鸣人",
      age: 12,
      car: {
        name: "奔驰",
        color: "red",
      },
    });
    const m4 = shallowRef({
      name: "鸣人",
      age: 12,
      car: {
        name: "奔驰",
        color: "red",
      },
    });

    const update = ()=>{
      // m1.car.name += '='
      // m2.car.name += '='
      // m3.value.car.name += '='
      m4.value.car.name += '='
      console.log(m1)
      console.log(m2)
      
    };
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>
<style></style>