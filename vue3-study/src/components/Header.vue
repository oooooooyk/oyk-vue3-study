<template>
    <div class="todo-header">
        <input class="todo-header-input" v-model="todoValue" type="text" placeholder="请输入新的任务" @keyup.enter="add">
    </div>
</template>
<script lang="ts">
    import {defineComponent, ref} from "vue";
    import {Todo} from "../Interface/Todo"
    export default defineComponent({
        name: "Header",
        props: {
            addTodo: {
                type: Function,
                require: true
            }
        },
        setup(props) {

            const todoValue = ref('')
            const add = () => {
                const text = todoValue.value;
                if (!text.trim()) return
                const todo = {
                    id: Date.now(),
                    title: text,
                    isCompleted: false
                }
                props.addTodo?.(todo)
                todoValue.value = ''
            }
            return {
                todoValue,
                add
            }
        }
    });
</script>
<style scoped>
    .todo-header {
        width: 100%;
    }

    .todo-header-input {
        width: 100%;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid rgb(162, 162, 162);
        padding: 2px;
    }
</style>
