<script setup>
import { onMounted, ref } from 'vue'
import { ElButton, ElTable, ElTableColumn } from 'element-plus'
import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-table.css'
import 'element-plus/theme-chalk/el-table-column.css'
import axios from 'axios'


const tableData = ref([
  { id: 1, name: '张三', place: '上海', address: '上海市浦东新区' },
  { id: 2, name: '李四', place: '北京', address: '北京市朝阳区' },
  { id: 2, name: '李四', place: '北京', address: '北京市朝阳区' }
])
const getList = async () => {
  // axios.get('/api/list').then(res => {
  //   tableData.value = res.data
  // })
  const res = await axios.get('/api/list')
  tableData.value = res.data
}
const handleEdit = async (index) => {
  console.log(index)
  await axios.put('/api/put/' + index)
}
const handleDelete = async (index) => {
  console.log(index)
  await axios.delete('/api/delete/' + index)
  await getList()
}
onMounted(async () => {
  await getList()
})
</script>

<template>
  <div>
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column label="ID" prop="id" width="180" />
      <el-table-column label="姓名" prop="name" width="180" />
      <el-table-column label="籍贯" prop="place" width="300" />
      <el-table-column label="地址" prop="address" width="300" />
      <el-table-column label="操作" prop="operation" width="300">
        <template v-slot="scope">
          <!--这里用 scope 其实已经完成了当前行的 id 传递-->
          <el-button type="default" @click="handleEdit(scope.$index)">编辑</el-button>
          <el-button type="default" @click="handleDelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style scoped>
</style>
