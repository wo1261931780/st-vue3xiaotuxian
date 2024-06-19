import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 用来创建一个app实例
// 首先用app作为实例，生成一个应用实例对象
app.use(createPinia())
// 这里 pinia和插件一样，类似上面的说法去使用
app.use(router)

app.mount('#app')
// 这里挂载在一个app的节点上
// 实际上就是挂载到index.html上面那个app节点上

// main文件也是入口文件，决定了我们的项目如何跑起来
