<!--
 * @Descripttion: 
 * @version: 
 * @Author: 雷宇琦
 * @Date: 2023-07-25 16:48:18
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-07-25 17:00:51
-->
<template>
  <template v-if="!menu.children">
    <a-menu-item :key="menu.path">
        <template #icon v-if="menu?.icon">
            <component :is="menu?.icon"></component>
        </template>
        {{menu.title}}
    </a-menu-item>
  </template>
  
  <a-sub-menu v-else :key="menu.path" :title="menu.title">
    <template #icon v-if="menu?.icon">
        <component :is="menu?.icon"></component>
    </template>
    <MenuItem 
        v-for="menuChild of menu.children"
        :key="menuChild.path"
        :menu="menuChild"
        />
  </a-sub-menu>
</template>

<script setup>
const props = defineProps({
    menu:{
        type:Object,
        required:true
    }
})
const {menu} = toRefs(props)
</script>

<style>

</style>