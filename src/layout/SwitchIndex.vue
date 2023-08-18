<!--
 * @Descripttion: 
 * @version: 
 * @Author: 雷宇琦
 * @Date: 2023-07-20 16:20:32
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-08-18 10:32:58
-->
<template>
    <div class="switch-index">
        <!-- <DefaultLayout /> -->
        <!-- <SidebarLayout /> -->
        <component :is="systemStore.currentSwitchlayout"/>
    </div>
</template>

<script setup>
import switchLayoutList from '@/layout/switch/index.js'
import {useSystemStore} from '@/stores/system'
const systemStore = useSystemStore()

// 初始化布局列表
systemStore.initSwitchLayout(switchLayoutList)
console.log(switchLayoutList)
</script>

<style>

</style>