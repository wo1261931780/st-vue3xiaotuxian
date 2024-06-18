<script setup>
import { provide, ref } from 'vue'
import FatherComponent013 from '@/views/vue013/father-component013.vue'

const count = ref(0) // 定义一个空的ref
provide('data-key', '我是爷爷组件中的数据')
provide('object-key', count) // 向下提供一个响应式数据
setTimeout(() => {
  count.value = 100 // 改变响应式数据
}, 1000)
// 一般来说，要求单向数据，谁的组件，谁进行修改
// 但是我们可以设置一个修改组件数据的方法，然后把方法传递下去，就是底层组件修改数据了
const changeData = () => {
  count.value = 200
}
provide('change-data', changeData)
</script>
<!--跨层组件通信，说人话就是，爷爷-父亲-孩子。爷爷需要直接跟孩子对话-->
<!--在这样的三层关系中，父组件是存在中间的，需要跨越-->
<template>
  <div class="grandfather">
    我是父亲组件
    <FatherComponent013></FatherComponent013>
  </div>
</template>

<style scoped>
.grandfather {
  background-color: grey;
}
</style>
