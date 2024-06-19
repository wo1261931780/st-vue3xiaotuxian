<script setup>
// 导入方法，然后执行，获得实例对象
import { useCounterStore } from '@/stores/counter.js'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
console.log(counterStore)
// 解构出实例对象中的属性和方法，但是依旧保持响应式
const { count, doubleCount } = storeToRefs(counterStore)
// 用方法包裹以后，变成了两个响应式对象
// 方法的解构赋值需要这样操作：
const { getList } = counterStore
onMounted(() => {
  // 调用实例方法
  counterStore.getList()
})
</script>

<template>
  <div>
    <button @click="getList">{{ doubleCount }}</button>
    <div>{{ count }}</div>
  </div>
</template>
<style scoped>
</style>
