<script setup>
import { onMounted } from 'vue'
// 引入周期函数
onMounted(() => {
  console.log('mounted执行了')
})
// 周期函数可以多次执行
onMounted(() => {
  console.log('mounted2执行了')
})
</script>

<template>
  <div>
    <h1>Hello World</h1>
  </div>

</template>
