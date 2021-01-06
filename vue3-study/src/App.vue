<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <Header :addTodo="addTodo" />
            <List :todos="todos" :delTodo="delTodo" :updateTodo="updateTodo" />
            <Footer :todos="todos" :checkAll="checkAll" :clearFinish="clearFinish"/>
        </div>
    </div>
</template>
<script lang="ts">
    import {defineComponent, reactive, toRefs,watch,onMounted} from "vue";
    import Header from "./components/Header.vue";
    import List from "./components/List.vue";
    import Footer from "./components/Footer.vue";
    import {Todo} from "./Interface/Todo";

    import { saveTodos,readTodos} from "./utils/localStorageUtils"
    //定义接口约束state数据类型

    export default defineComponent({
        name: "App",
        components: {
            Header,
            List,
            Footer,
        },
        setup() {
            const state = reactive<{ todos: Todo[] }>({
                todos: []
            })

            onMounted(()=>{
                state.todos = readTodos()
            })

            const addTodo = (todo: Todo)=>{
                state.todos.unshift(todo)
            }
            const delTodo = (index: number)=>{
                state.todos.splice(index)
            }
            const updateTodo =(todo: Todo,isCompleted: boolean)=>{
                todo.isCompleted = isCompleted
            }
            const checkAll = (isCompleted: boolean)=>{
                state.todos.forEach((todo)=>{
                    todo.isCompleted = isCompleted
                })
            }
            const clearFinish = ()=>{
                state.todos = state.todos.filter((todo)=>{
                    return !todo.isCompleted
                })
            }

            watch(()=>state.todos,saveTodos,{deep:true})
            return {
                ...toRefs(state),
                addTodo,
                delTodo,
                updateTodo,
                checkAll,
                clearFinish
            };
        },
    });
</script>
<style>
    /* @import url("./css/base.css"); */

    * {
        padding: 0;
        margin: 0;
    }

    .todo-container {
        margin: 0px 30%;
    }

    .todo-wrap {
        border: 1px solid rgb(226, 136, 192);
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
    }

</style>
