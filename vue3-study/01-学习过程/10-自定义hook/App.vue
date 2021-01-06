<template>
  <h2>自定义hook函数</h2>
  <h2>X:{{ x }},Y:{{ y }}</h2>
  <hr />
  <h3 v-if="loading">正在加载中---</h3>
  <h3 v-else-if="errorMsg">错误信息：{{ errorMsg }}</h3>
  <ul v-else>
    <li>id:{{ data.id }}</li>
    <li>address:{{ data.address }}</li>
    <li>distance:{{ data.distance }}</li>
  </ul>
  <hr />
  <ul v-for="item in data" :key="item.key">
    <li>id:{{ item.id }}</li>
    <li>name:{{ item.name }}</li>
    <li>price:{{ item.price }}</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import useMousePostion from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";

interface AddressData {
  id: number;
  address: string;
  distance: string;
}

interface ProductsData {
  id: number;
  name: string;
  price: string;
}
export default defineComponent({
  name: "App",
  setup() {
    const { x, y } = useMousePostion();
    // const { loading, data, errorMsg } = useRequest<AddressData>(
    //   "/data/address.json"
    // );
    const { loading, data, errorMsg } = useRequest<ProductsData[]>(
      "/data/products.json"
    );

    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });
    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>
<style></style>
