<template>
  <h2>toRef的使用及特点</h2>
  <h3>state:{{ state }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>money:{{ money }}</h3>
  <hr />
  <button @click="update">更新</button>
  <hr>
  <Child :age="age"/>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRef } from "vue"
import Child from './components/Child.vue'
export default defineComponent({
  name: "App",
  components:{
      Child
  },
  setup() {
    const state = reactive({
      age: 4,
      money: 100,
    });

    //把响应式数据state对象中的某个属性变成ref对象
    const age = toRef(state, "age");
    const money = ref(state.money);
    const update = () => {
      age.value += 2;
    //   money.value += 10;
    };
    return { state, age, money, update };
  },
});
</script>
<style></style>
