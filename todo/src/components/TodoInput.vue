<template>
  <form class="input-container" @submit.prevent="submitTodo">
    <input type="text" class="input" v-model="todo" ref="input">
    <div class="btn">
      <input type="submit" value=" ">
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TodoInput',

  setup(_, context) {
    const todo = ref('')
    const input = ref(null)

    const submitTodo = () => {
      context.emit('addTodo', todo.value);
      todo.value = ''
      input.value.focus()
    }

    return {
      todo, input, submitTodo
    }
  }
}
</script>

<style scoped>
.input-container { width: 100%; height: 55px; display: flex; align-items: center; margin-bottom: 20px; border-radius: 6px; overflow: hidden; background: #fff; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3); }
.input-container .input { width: calc(100% - 50px); height: 100%; box-sizing: border-box; margin: 0; padding: 10px 20px; border: none; border-right: none; outline: none; font-size: 20px; }
.input-container .btn { width: 50px; height: 100%; background: linear-gradient(to right, #42E695, #3BB2B8); position: relative; }
.input-container .btn::before,
.input-container .btn::after { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 1px; display: block; background: #fff; pointer-events: none; }
.input-container .btn::before { width: 3px; height: 20px; }
.input-container .btn::after { width: 20px; height: 3px; }
.input-container .btn input { width: 100%; height: 100%; background: transparent; border: none; cursor: pointer; }
</style>