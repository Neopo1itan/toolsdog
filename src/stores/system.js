/*
 * @Descripttion:
 * @version:
 * @Author: 雷宇琦
 * @Date: 2023-08-18 10:23:21
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-08-21 15:02:55
 */
import {getConfig} from '@/config/index'
// 项目系统配置模块，存放布局相关的状态数据
export const useSystemStore = defineStore(
  'system',
  () => {
    // 当前可切换布局
    const currentSwitchlayout = shallowRef(null)
    // 可切换布局列表
    const switchLayoutList = shallowRef([])

    // 初始化可切换布局的方法
    const initSwitchLayout = list => {
      if (list && list.length > 0) {
        switchLayoutList.value = [...list]

        if (!currentSwitchlayout.value) {
          currentSwitchlayout.value = switchLayoutList.value[0]
        }else{
          // 通过name属性找到布局对象并赋值，因为持久化数据中没有组件渲染的render函数
          currentSwitchlayout.value = switchLayoutList.value.find(
            item => item.name === currentSwitchlayout.value.name
          )
        }
      }
    }

    return {
      currentSwitchlayout,
      switchLayoutList,
      initSwitchLayout
    }
  },
  {
    persist: {
      key: `${getConfig('appCode')}-pinia-system`,
      enable: true,
      storage: window.localStorage,
      paths: ['currentSwitchlayout.name']
    }
  }
)
