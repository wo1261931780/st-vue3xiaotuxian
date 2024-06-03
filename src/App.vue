<script setup>
import { reactive } from 'vue'
// 这里通过reactive函数将state对象包装成响应式对象，使得其中的属性可以响应式地绑定到视图上。
// 说人话就是，state对象中的属性值发生变化时，视图也会自动更新。
// 本来count是data中的一个普通变量，现在变成了响应式变量，可以直接绑定到视图上。
const state = reactive({
  count: 0
})

const increase = () => {
  state.count++
}
</script>

<template>
  <div>
    <button @click="increase">{{ state.count }}</button>
  </div>
</template>
