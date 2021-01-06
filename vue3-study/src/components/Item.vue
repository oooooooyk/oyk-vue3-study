<template>
    <li
            class="todo-item"
            @mouseenter="mouseHandler(true)"
            @mouseleave="mouseHandler(false)"
    >
        <label>
            <input type="checkbox" v-model="isComptepe"/>
            <span>{{ todo.title }}</span>
            <button
                    class="btn btn-danger"
                    :style="{ float: 'right', display: show ? 'inline' : 'none' }"
                    @click="delItemTodo"
            >
                删除
            </button>
        </label>
    </li>
</template>
<script lang="ts">
    import {defineComponent, ref, computed} from "vue";
    import {Todo} from "../Interface/Todo";

    export default defineComponent({
        name: "Item",
        props: {
            todo: {type: Object as () => Todo}, //函数返回的是todo类型
            delTodo: {
                type: Function,
                require: true,
            },
            updateTodo: {
                type: Function,
                require: true,
            },
            index: {
                type: Number,
                require: true,
            },
        },
        setup(props) {
            const show = ref(false);
            const mouseHandler = (flag: boolean) => {
                if (flag) {
                    show.value = true;
                } else {
                    show.value = false;
                }
            };
            const delItemTodo = () => {
                if (window.confirm('确认删除吗')) {
                    props.delTodo?.(props.index);
                }
            };


            const isComptepe = computed({
                get() {
                    return props.todo?.isCompleted
                },
                set(val) {
                    props.updateTodo?.(props.todo, val)
                }
            })
            return {
                mouseHandler, show, delItemTodo,
                isComptepe
            };
        },
    });
</script>
<style scoped>
    .todo-item {
        border: 1px solid rgb(162, 162, 162);
        margin-bottom: -1px;
        padding-left: 3px;
    }

    .todo-item:hover {
        background-color: pink;
        color: green;
    }

    .btn {
        border: 1px solid rgb(226, 136, 192);
        border-radius: 2px;
        margin: 1px;
    }

    .btn-danger {
        background-color: rgb(240, 85, 111);
        color: #fff;
    }
</style>
