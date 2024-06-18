<script setup>
import SonComponent012 from '@/views/vue012/son-component012.vue'
import { ref, onMounted } from 'vue'

const h2Com = ref(null)
const sonCom = ref(null)

onMounted(() => {
  // 用这个函数，表示组件挂载完毕
  console.log(h2Com.value) // 输出：<h2 data-v-7f7a1d5e>我是父组件</h2>
  console.log(sonCom.value) // 输出：
})
</script>

<template>
  <div class = "father">
    <h2 ref = "h2Com">我是父组件</h2>
    <!--通过ref绑定ref对象-->
<!--通过绑定，这里的 h2com 已经被绑定到组件的 value 属性内部-->
    <SonComponent012 ref = "sonCom" />
  </div>
</template>

<style scoped>
.father {
  background-color: grey;
}
</style>
