<script setup>
import { ref } from 'vue'
// ref稍有不同，可以支持简单类型和对象类型
const count = ref(0)

const increase=()=>{
  count.value++
  // 这里就必须通过.value来获取数据，然后进行修改
}

</script>

<template>
  <div>
    <button @click = "increase">{{ count }}</button>
  </div>
</template>
