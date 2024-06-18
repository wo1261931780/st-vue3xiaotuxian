<script setup>
import { ref } from 'vue'
// 一个 name 属性，一个用来修改 name 属性的方法
const name = ref('test name')
const setName = () => {
  name.value = 'test new name'
}
// 默认是不允许父组件访问子组件的属性和方法的，
// 所以需要在父组件中使用这个属性，来暴露我的名字给父组件
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
