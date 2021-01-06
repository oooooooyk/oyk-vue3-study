<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    /><br />
    名字：<input
      type="text"
      placeholder="请输入名字"
      v-model="user.lastName"
    /><br />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName1" /><br />
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName2" /><br />
    姓名：<input type="text" placeholder="显示姓名" v-model="fullName3" /><br />
  </fieldset>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  watch,
  ref,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const user = reactive({
      firstName: "东方",
      lastName: "不败",
    });

    //vue3的计算属性是一个函数
    //计算属性函数中如果只传一个回调，表示get
    //传一个对象可控制get set
    //计算属性返回的是一个ref
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });

    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: string) {
        const name = val.split("_");
        user.firstName = name[0];
        user.lastName = name[1];
      },
    });
    //监视--监视指定数据
    const fullName3 = ref("");
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + "_" + lastName;
      },
      { immediate: true, deep: true }
    );

    //监视,不需要配置immediate，本身默认就会进行监视（默认执行一次）
    //监视fullName3 改变user数据
    watchEffect(() => {
      const name = fullName3.value.split("_");
      user.firstName = name[0];
      user.lastName = name[1];
    });

    //watch监视多个数据
    watch([()=>user.firstName,()=>user.lastName],(val)=>{
      console.log(val)
    })
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>
<style></style>
