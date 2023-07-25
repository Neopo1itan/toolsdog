/*
 * @Descripttion:
 * @version:
 * @Author: 雷宇琦
 * @Date: 2023-07-18 16:20:55
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-07-25 14:59:03
 */
import { createRouter, createWebHistory } from 'vue-router'
//导入菜单路由
import { menuRouter } from './menuRouter'

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
        },
        //使用菜单路由
        ...menuRouter
      ]
    }
  ]
})

export default router
