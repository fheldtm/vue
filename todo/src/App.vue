<template>
  <section class="main-root">
    <todo-input
      @addTodo="addTodo"
    ></todo-input>

    <todo-list
      :todos="todos"
      @removeTodo="removeTodo"
    ></todo-list>
  </section>
</template>

<script>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import { onMounted, ref } from 'vue'

export default {
  name: 'App',
  components: {
    TodoInput, TodoList
  },
  setup() {
    let todoCount = 0
    const todos = ref([])

    const addTodo = (todo) => {
      todos.value.push({ idx: todoCount, todo: todo })
      todoCount++
      localStorage.setItem('todo-items', JSON.stringify(todos.value));
    }

    const removeTodo = (idx) => {
      todos.value = todos.value.filter(todo => todo.idx !== idx)
      localStorage.setItem('todo-items', JSON.stringify(todos.value));
    }

    onMounted(() => {
      const local = JSON.parse(localStorage.getItem('todo-items'))
      todos.value = local == null ? [] : local;
    })

    return {
      todos, addTodo, removeTodo
    }
  }
}
</script>

<style>
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);
* {
  box-sizing: border-box;
  font-family: 나눔스퀘어, 'NanumSquare', sans-serif;
}
html, body { margin: 0; padding: 0; width: 100%; height: 100%; }
#app { width: 100%; height: 100%; }
</style>

<style scoped>
.main-root { width: 100%; height: 100%; padding: 20px; background: #eee; }
</style>
