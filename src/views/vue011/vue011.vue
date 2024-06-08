<script setup>
import SonComponent011 from '@/views/vue011/son-component011.vue'

const fuGetMsg = (msg) => {
  console.log('我是父组件中的msg：' + msg)
}

</script>

<template>
  <div class = "father">
    <h2>我是父组件</h2>
<!--    <SonComponent011 :zi2fuMsg = "fuGetMsg"/>-->
    <SonComponent011 @zi2fuMsg = "fuGetMsg"/>
<!--    子组件给父组件需要使用@来绑定事件，父组件给子组件需要使用:来绑定数据-->
  </div>
</template>
<!--第一步是父组件fuGetMsg来绑定子组建中的zi2fuMsg事件-->
<!--父组件的数据，就是来自事件传递过来的方法-->

<style scoped>
.father {
  background-color: grey;
}
</style>
