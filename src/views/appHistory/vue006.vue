<script setup>
import { ref } from 'vue'

const list = ref([1, 2, 3, 4, 5])
import { computed } from 'vue'

const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})
// 需要调用computed属性
setTimeout(() => {
  list.value.push(6)
  // 向数组中插入数字6
}, 3000)
</script>

<template>
  <div>
    {{ list.value }}
  </div>
  <div>
    {{ computedList }}
  </div>
</template>
