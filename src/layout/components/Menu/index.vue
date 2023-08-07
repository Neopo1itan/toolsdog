<!--
 * @Descripttion: 
 * @version: 
 * @Author: 雷宇琦
 * @Date: 2023-07-25 16:10:30
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-08-07 17:30:44
-->
<template>
  <a-menu
    class="menu"
    auto-open-selected
    :selected-keys="selectedKeys"
    @menuItemClick="onClickMenuItem"
    mode="horizontal"
    :accordion="true"
    >
    <MenuItem v-for="menu of menuList" :key="menu.path" :menu="menu" />
  </a-menu>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import {menuRouterFormatList} from '@/router/menuRouter.js'
//菜单数据
const menuList = ref(menuRouterFormatList)
const router = useRouter()
//子菜单点击事件
const onClickMenuItem = key =>{
    router.push(key)
    // console.log(menuList.value)
}
const route = useRoute()
//当前选中菜单
const selectedKeys = computed(()=>[route.path])
</script>

<style scoped>
.menu.arco-menu-horizontal {
  @apply bg-[var(--color-bg-3)];
}
.menu.arco-menu-horizontal :deep(.arco-menu-icon) {
  @apply mr-4px leading-[1.2] flex-none align-inherit;
}
.menu.arco-menu-horizontal :deep(.arco-menu-pop-header) {
  @apply bg-transparent;
}
.menu.arco-menu-horizontal :deep(.arco-menu-pop-header):hover {
  @apply bg-[var(--color-fill-2)];
}
.menu :deep(.arco-menu-overflow-wrap) {
  @apply flex justify-end;
}
</style>