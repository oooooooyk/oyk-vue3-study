<template>
<h2>readonly和shallowReadonly</h2>
<h3>state:{{state}}</h3>
<hr>
<button @click="update">更新</button>

</template>
<script lang="ts">
import { defineComponent, reactive, readonly,shallowReadonly } from "vue";
export default defineComponent({
name: 'App',
setup(){

const state = reactive({
  name:'佐助',
  age:20,
  car:{
    name:'奔驰',
    color:'yellow'
  }
})
// const state2 = readonly(state)
const state2 = shallowReadonly(state)
console.log(state)
console.log(state2)
const update = ()=>{
  state2.car.name += '='
}
  return{
    state,
    update
  }
}
});
</script>
<style></style>