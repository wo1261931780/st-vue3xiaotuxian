<script setup>
import { ref, watch } from 'vue'

const list = ref([1, 2, 3, 4, 5])
// ref监听的不需要使用.value去处理
const demo = ref(0)
const demoCount = () => {
  demo.value++
  console.log(demo.value)
}
import { computed } from 'vue'

const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})
// 需要调用computed属性
setTimeout(() => {
  list.value.push(6)
  // 向数组中插入数字6
}, 3000)

// watch(list, (newVal, oldVal) => {
//   console.log('list发生了变化', newVal, oldVal)
// })
// watch(demo, (newVal, oldVal) => {
//   console.log('demo', newVal, oldVal)
// })
// 如果要同时监听多个数据，使用数组的形式就可以
// watch([list, demo], ([newVal, newName], [oldVal, oldName]) => {
//     console.log('list或demo发生了变化', [newVal, newName], [oldVal, oldName])
//   }
// )
// watch([list, demo], ([newVal, newName], [oldVal, oldName]) => {
//     console.log('list或demo发生了变化', [newVal, newName], [oldVal, oldName])
//   },
//   {
//     immediate: true
//     // 在创建的时候就执行一次,注意是watch内部
//   }
// )
// 上面我们会发现，list的变化不会被监听到，因为默认是浅层监听的，这里不会进行回调
// watch([list, demo], ([newVal, newName], [oldVal, oldName]) => {
//     console.log('list或demo发生了变化', [newVal, newName], [oldVal, oldName])
//   },
//   {
//     deep: true
//   }
// )
// 上面使用递归进行深层监听，如果一个对象中有任意属性变化，都会监听到
</script>

<template>
  <div>
    我是list.value：{{ list }}
  </div>
  <br>
  <div>
    我是fancyList：{{ computedList }}
  </div>
  <br>
  <button @click = "demoCount">
    我是demo：{{ demo }}
  </button>
</template>
