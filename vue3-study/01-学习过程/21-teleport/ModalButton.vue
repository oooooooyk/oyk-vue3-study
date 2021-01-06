<template>
<button @click="modalOpen=true">打开一个对话框</button>
<!-- <teleport to="body"> -->
<div v-if="modalOpen">
    <div>
        <p>这是一个对话框</p>
        <button @click="modalOpen=false">关闭对话框</button>
    </div>
</div>
<!-- </teleport>  -->
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
name: 'ModalButton',
setup(){
    const modalOpen = ref(false)
    return {
        modalOpen
    }
}
});
</script>
<style></style>