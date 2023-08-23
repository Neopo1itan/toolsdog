/*
 * @Descripttion:
 * @version:
 * @Author: 雷宇琦
 * @Date: 2023-08-18 10:23:21
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-08-23 14:26:15
 */
import { getConfig } from '@/config/index'
import IconMaterialSymbolsWbSunnyRounded from '~icons/material-symbols/wb-sunny-rounded'
import IconMaterialSymbolsDarkModeRounded from '~icons/material-symbols/dark-mode-rounded'
import IconMaterialSymbolsComputer from '~icons/material-symbols/computer'
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
        } else {
          // 通过name属性找到布局对象并赋值，因为持久化数据中没有组件渲染的render函数
          currentSwitchlayout.value = switchLayoutList.value.find(
            item => item.name === currentSwitchlayout.value.name
          )
        }
      }
    }
    // 模式列表
    const modeList = ref([
      {
        name: 'auto',
        icon: markRaw(IconMaterialSymbolsComputer),
        title: '自动模式'
      },
      {
        name: 'light',
        icon: markRaw(IconMaterialSymbolsWbSunnyRounded),
        title: '亮色模式'
      },
      {
        name: 'dark',
        icon: markRaw(IconMaterialSymbolsDarkModeRounded),
        title: '暗色模式'
      }
    ])
    // 当前模式
    const currentMode = ref(null)
    const mode = useColorMode({
      attribute: 'arco-theme',
      emitAuto: true,
      selector: 'body',
      initialValue: currentMode.value?.name,
      storageKey: null
    })
    watchEffect(() => (mode.value = currentMode.value?.name))

    // 初始化模式
    const initMode = () => {
      if (!currentMode.value) {
        currentMode.value = modeList.value[0]
      } else {
        currentMode.value = modeList.value.find(
          item => item.name === currentMode.value.name
        )
      }
    }
    return {
      currentMode,
      modeList,
      initMode,
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
      paths: ['currentSwitchlayout.name', 'currentMode.name']
    }
  }
)
