<script setup>
import { ref, watch } from 'vue'

const list = ref({
  name: '张三',
  age: 20
})
const changeName = () => {
  list.value.name = '李四'
}
watch(
  () =>
    list.value.name
  , () => {
    console.log('name changed')
  })
// deep是存在性能损耗的，所以尽量不要使用deep
</script>

<template>
  <button @click = "changeName">
    我是list.value：{{ list.name }}, {{ list.age }}
  </button>
</template>
