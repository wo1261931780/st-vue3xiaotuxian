<script>
export default {
  setup() {
    console.log('Hello World')
    const message = 'junw'
    const logMessage = () => console.log(message)
    return{
      message,
      logMessage,
      // 方法和对象都需要打印出来才可以使用
      // 语法糖，经过一定的封装，将复杂写法变成简单写法
    }
  },
  beforeCreate() {
    console.log('Hello World')
  }
}
</script>

<template>
  <div>123</div>
  <div>{{ message }}</div>
  <button @click="logMessage()">Log Message</button>
</template>
