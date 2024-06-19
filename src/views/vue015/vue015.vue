<script setup>
// 导入方法，然后执行，获得实例对象
import { useCounterStore } from '@/stores/counter.js'

const counterStore = useCounterStore()
console.log(counterStore)
</script>

<template>
  <div>
    <h1>Welcome to my app</h1>
    <!--这一步，相当于同时绑定了 store 中的 state 和方法，并将实例对象保存在了 data 中。-->
    <button @click="counterStore.increment">{{ counterStore.count }}</button>
  </div>
</template>
<style scoped>
</style>
