<script setup>
import { ref } from 'vue'

const name = ref('test name')
const setName = () => {
  name.value = 'test new name'
}
// 用这个属性，来暴露我的名字给父组件
defineExpose({
  name,
  setName
})
// 这个是vue3中的修改，将组件内部的变量封闭起来，避免错误修改
</script>

<template>
  <div>
    <h3>我是子组件012</h3>
  </div>
</template>

<style scoped>

</style>
