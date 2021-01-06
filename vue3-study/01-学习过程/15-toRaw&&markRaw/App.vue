<template>
  <h2>toRaw 和 markRaw</h2>
  <h3>state:{{ state }}</h3>
  <hr />
  <button @click="testToRaw">toRaw</button>
  <button @click="testMarkRaw">markRaw</button>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from "vue";

interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive<UserInfo>({
      name: "小明",
      age: 12,
    });

    const testToRaw = () => {
      //将代理对象变成普通对象，数据变化，视图不变化
      const user = toRaw(state);
      user.name += "+";
      console.log(state);
    };
    const testMarkRaw = () => {
      const likes = ['吃','喝']
      //markRaw标记的对象数据，之后数据变化，视图不变化
      state.likes = markRaw(likes)
      setInterval(()=>{
        console.log('setInterval');
        if(state.likes){
          state.likes.push('-')
          console.log(state);
          
        }
      },1000)

    };
    return {
      state,
      testToRaw,
      testMarkRaw,
    };
  },
});
</script>
<style></style>
