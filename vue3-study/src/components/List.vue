<template>
  <div class="todo-main">
    <ul class="todo-list">
      <Item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :index="index"
        :delTodo="delTodo"
        :updateTodo="updateTodo"
      />
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Item from "./Item.vue";
import { Todo } from "../Interface/Todo";
export default defineComponent({
  name: "List",
  props: {
    todos: {
      type: Array as () => Todo[],
      require: true,
    },
    delTodo: {
      type: Function,
      require: true
    },
    updateTodo: {
      type: Function,
      require: true
    },
  },
  components: {
    Item,
  },
});
</script>
<style scoped>
.todo-main {
  margin: 3px 0px;
}

.todo-list {
  list-style-type: none;
}
</style>
