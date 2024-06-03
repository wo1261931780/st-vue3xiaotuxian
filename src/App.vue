<script setup>
const message = 'Hello World!'
const logMessage = () => console.log(message)
</script>

<template>
  <div>123</div>
  <div>{{ message }}</div>
  <button @click="logMessage()">Log Message</button>
</template>
