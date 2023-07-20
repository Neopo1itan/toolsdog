/*
 * @Descripttion:
 * @version:
 * @Author: 雷宇琦
 * @Date: 2023-07-18 16:20:55
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-07-20 16:30:22
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/layout/SwitchIndex.vue'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'HomePage',
          meta:{
            title:'TOOLSDOG'
          },
          component: () => import('@/views/HomePage.vue')
        }
      ]
    }
  ]
})

export default router
