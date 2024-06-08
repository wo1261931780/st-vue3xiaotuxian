<script setup>
const props =
  defineProps({
    name: {
      type: String,
      default: 'world'
    },
    message: {
      type: String,
      default: 'hello'
      
    },
    count: Number
  })
console.log(props.name)
console.log(props.message)
</script>

<template>
  <div class = "son">
    <h3>我是子组件</h3>
    <div>{{ message }}-{{ count }}</div>
  </div>
</template>

<style scoped>
.son {
  background-color: red;
}
</style>
