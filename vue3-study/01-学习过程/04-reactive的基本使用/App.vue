<template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>性别：{{ user.gender }}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <br />
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const obj: any = {
      name: "小明",
      age: 20,
      wife: {
        name: "小红",
        age: 18,
        cars: ["奔驰", "宝马", "奥迪"],
      },
    };
    const user = reactive(obj);
    console.log(user);
    const updateUser = () => {
      // user.age++;
      // user.name += "==";
      // user.wife.cars[0] = "比亚迪";
      user.gender = "男";
    };
    return {
      user,
      updateUser,
    };
  },
});
</script>

<style></style>
