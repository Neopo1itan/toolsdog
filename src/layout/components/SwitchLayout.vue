<!--
 * @Descripttion: 
 * @version: 
 * @Author: 雷宇琦
 * @Date: 2023-08-18 10:40:56
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-08-18 10:55:45
-->
<template>
    <a-dropdown @select="handleSelect" trigger="hover" class="layout-dropdown">
        <a-button type="text" @click="next()">
            <template #icon>
                <component 
                    :is="currentSwitchlayout.icon" 
                    class="text-[var(--color-text-1)] text-16px">
                </component>
            </template>
        </a-button>
        <template #content>
            <a-doption
                v-for="item in switchLayoutList"
                :key="item.name"
                :value="item"
            >
                <template #icon v-if="currentSwitchlayout.name === item.name">
                    <icon-material-symbols-check-small class="text-[var(--color-text-1)] text-14px"/>
                </template>
                <template #default>{{ item.title }}</template>
            </a-doption>
        </template>
    </a-dropdown>
</template>

<script setup>
import { useSystemStore } from '@/stores/system.js'
const { currentSwitchlayout, switchLayoutList } = storeToRefs(useSystemStore())

// 下拉菜单选中
const handleSelect = val => (currentSwitchlayout.value = val)
const { next } = useCycleList(switchLayoutList.value,{
    initialValue: currentSwitchlayout
})
</script>

<style scoped>
.layout-dropdown .arco-dropdown-option{
    @apply flex-justify-end items-center;
}
</style>