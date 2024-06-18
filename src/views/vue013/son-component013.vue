<script setup>
import { inject } from 'vue'

const grandFatherData = inject('data-key')
// 这里可以多次调用 inject，因为它是单例的
// 这里需要保持 key 是一致的，才可以拿到数据
const grandFatherObject = inject('object-key')

const changeData = inject('changeData')
</script>

<template>
  <div>
    <h2>我是底层组件，孩子组件</h2>
    <p>Grand Father Data: {{ grandFatherData }}</p>
    <div> {{ grandFatherObject }}</div>
    <button @click="changeData()">Change Data</button>
    <!--其实只要是形成了底层和顶层之间的关系，就可以使用这几个 api，和跨越的层级数量无关-->
  </div>
</template>

<style scoped>

</style>
