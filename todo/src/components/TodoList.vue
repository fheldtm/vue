<template>
  <section class="todo-list">
    <ul>
      <li
        :key="todo.idx"
        v-for="todo in todos"
      >
        {{ todo.todo }}
        <button type="button" @click="$emit('removeTodo', todo.idx)"></button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TodoList',

  props: {
    todos: Array
  }
}
</script>

<style scoped>
.todo-list { width: 100%; padding: 0; }
.todo-list ul { width: 100%; margin: 0; padding: 0; }
.todo-list ul li { width: 100%; border-radius: 6px; height: 55px; margin-bottom: 10px; margin: 0; list-style: none; display: flex; align-items: center; padding: 10px 20px; position: relative; background: #fff; font-size: 20px; margin-bottom: 10px; }
.todo-list ul li button { position: absolute; right: 20px; border: none; outline: none; background: transparent; width: 30px; height: 30px; cursor: pointer; transition: background .3s; }
.todo-list ul li button:hover { background: #eee; border-radius: 4px; }
.todo-list ul li button::before,
.todo-list ul li button::after { content: ''; position: absolute; display: block; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg); border-radius: 1px; background: #e31212; }
.todo-list ul li button::before { width: 20px; height: 3px; }
.todo-list ul li button::after { width: 3px; height: 20px; }
</style>