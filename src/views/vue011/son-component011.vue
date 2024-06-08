<script setup>

const emit = defineEmits(['zi2fuMsg'])
// 这个宏函数是为了生成一个emit方法
// 类似于this.$emit('ziGetMsg')
// 用数组是为了将当前组件触发的所有事件都暴露出来
const ziGetMsg = () => {
  console.log('点击ziGetMsg')
  emit('zi2fuMsg', '我是子组件发送给父组件的消息')
}
</script>

<template>
  <div class = "son">
    <div>我是子组件</div>
    <button @click = "ziGetMsg">发送消息</button>
  </div>
</template>
<!--我的理解是，这个emit绑定和上面的定义无关，-->
<!--父组件告诉子组件，我要绑定你的这个-->
<!--子组件使用defineEmit方法来声明父组件要绑定的东西-->
<!--然后用一个emit来接受-->
<!--在点击事件以后，调用子组件的方法，然后方法中传递数据到emit中-->
<style scoped>
.son {
  background-color: red;
}
</style>
