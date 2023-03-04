<script setup>
import { ref } from 'vue';
const greeting = ref("")

const update_greeting = (_greeting) => {
  greeting.value = _greeting
}
const click = () => {
  eel.get_greeting("user")(update_greeting)
  eel.hello_world()
  console.log("clicked")
}
</script>

<template>
  <div>
    <p>{{ greeting }}</p>
    <button type="button" @click="click()">Click me</button>
  </div>
</template>
