<template>
  <h2>使用customRef</h2>
  <input type="text" v-model="keyword" />
  <p>keyword:{{ keyword }}</p>
</template>
<script lang="ts">
import { defineComponent,customRef } from "vue";

function useDebouncedRef<T>(value: T, dalay = 200) {
    console.log('自定义防抖ref');
    let timeOutId;
    return customRef((track,trigger)=>{
        return {
            get(){
                //告诉vue追踪数据
                track();
                return value;
            },
            set(newVal: T){
                clearTimeout(timeOutId)
                timeOutId = setTimeout(()=>{
                    value = newVal
                    //告诉vue更新界面
                    trigger()
                },dalay)
            }
        }
    })
}

export default defineComponent({
  name: "App",
  setup() {
    // const keyword = ref("abc");
    const keyword = useDebouncedRef<string>("abc", 500);
    return {
      keyword,
    };
  },
});
</script>
<style></style>
