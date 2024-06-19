import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
// useCounterStore本身还是一个方法
export const useCounterStore = defineStore('counter', () => {
  // 定义响应式数据
  const count = ref(0)
  // 定义修改数据的方法
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  // 接下来定义一个异步的 action
  const list = ref([])
  const getList = async () => {
    const res = await axios.get('/api/list')
  }

  // 以对象的方式将数据返回，用来给组件使用
  return { count, doubleCount, increment, list, getList }
  // 上面如果发生了变化，下面一定要返回
})
