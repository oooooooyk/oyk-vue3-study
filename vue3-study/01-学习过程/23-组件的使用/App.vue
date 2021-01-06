<template>
  <h2>App父级组件：Suspense组件的使用</h2>
  <hr />
  <Suspense>
    <template #default>
        <AsyncAddress />
      <!-- <AsyncComponent /> -->
    </template>
    <template v-slot:fallback>
      <h2>loading</h2>
    </template>
  </Suspense>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AsyncAddress from "./AsyncAddress.vue";
import AsyncComponent from "./AsyncComponent.vue";
//动态引入和静态引入
//vue2中的动态引入 在vue3中不行
// const AsyncComponent = ()=>import('./AsyncComponent.vue')
/* const AsyncComponent = defineAsyncComponent(() =>
  import("./AsyncComponent.vue")
); */
export default defineComponent({
  name: "App",
  components: {
    // AsyncComponent,
    AsyncAddress,
  },
});
</script>
<style></style>
