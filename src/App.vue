<script setup>

</script>
<!--跨层组件通信，说人话就是，爷爷-父亲-孩子。爷爷需要直接跟孩子对话-->
<!--在这样的三层关系中，父组件是存在中间的，需要跨越-->
<template>
  <div class = "father">

  </div>
</template>

<style scoped>
.father {
  background-color: grey;
}
</style>
