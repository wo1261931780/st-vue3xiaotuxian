<script setup>
import SonComponent from '@/views/vue010/son-component.vue'
import { ref } from 'vue'

const count = ref(0)
// 这里做了两件事，首先是ref里面的数据是响应式数据，可以方便交互
// 还有一个就是，我将上面定义出来的count放到了父组件的data里面，这样子组件就可以直接使用了。
setTimeout(() => {
  count.value = 100
}, 3000)
</script>

<template>
  <div class = "father">
    <h2>我是父组件</h2>
    <SonComponent message = "父页面传递数据到子页面" :count = "count"></SonComponent>
  </div>
</template>

<style scoped>
.father {
  background-color: grey;
}
</style>
