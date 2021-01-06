<template>
    <div class="todo-footer">
        <input type="checkbox" v-model="allTodo"/>
        <span>{{finish}}已完成/{{todos.length}}全部</span>
        <button class="btn btn-danger clear" @click="clearFinish">清空</button>
    </div>
</template>
<script lang="ts">
    import {defineComponent, computed, ref} from "vue";
    import {Todo} from "@/Interface/Todo";

    export default defineComponent({
        name: "Footer",
        props: {
            todos: {
                type: Array as () => Todo[],
                require: true,
            },
            checkAll:{
                type: Function,
                require:true
            },
            clearFinish:{
                type: Function,
                require:true
            }
        },
        setup(props) {
            const allTodo = computed({
                get() {
                    const allT = props.todos?.every((item) => {
                        return item.isCompleted === true
                    })
                    if (allT) {
                        return true
                    }
                    return false
                },
                set(val: boolean) {
                    props.checkAll?.(val)
                }
            });
            const finish = computed(() => {
                const count = props.todos?.filter((item) => {
                    return item.isCompleted
                }).length;
                return count || 0
            })
            return {
                allTodo,
                finish
            }
        }
    });
</script>
<style scoped>
    .todo-footer {
        padding-left: 3px;
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

    .clear {
        float: right
    }
</style>
