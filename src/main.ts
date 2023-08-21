/*
 * @Descripttion:
 * @version:
 * @Author: 雷宇琦
 * @Date: 2023-07-18 16:20:55
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-08-21 14:51:45
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import '@/styles/normalize.css'

import 'uno.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.mount('#app')
