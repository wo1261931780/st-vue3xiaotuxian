<!--
 * @Author: junw wo1261931780@gmail.com
 * @Date: 2024-06-03 14:46:12
 * @LastEditors: junw wo1261931780@gmail.com
 * @LastEditTime: 2024-06-03 14:47:00
 * @FilePath: \st-vue3xiaotuxian\src\views\vue001.vue
 * @Description: 1111
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <button @click = "addCount">{{ count }}</button>
</template>

<!--<script>-->
<!--// vue2的代码-->
<!--// export default {-->
<!--//   data() {-->
<!--//     return {-->
<!--//       count: 0-->
<!--//     }-->
<!--//   },-->
<!--//   methods: {-->
<!--//     addCount() {-->
<!--//       this.count++-->
<!--//     }-->
<!--//   }-->
<!--// }-->
<!--</script>-->
<script setup>
import { Ref } from 'vue'
// 生成响应式数据的
const count = Ref(0)
const addCount = () => count.value++
// 下面这个就是组合式api，上面是响应式api
// 为了支持vue2，vue3是可以兼容的，但是vue3的组合式api更加简洁，所以这里使用组合式api
// vue2的脚手架底层是使用webpack，vue3的脚手架底层是vite，所以vue3的脚手架更加简洁，更加适合vue3的开发
</script>

<style>

</style>
