<!--
 * @Descripttion: 
 * @version: 
 * @Author: 雷宇琦
 * @Date: 2023-07-21 16:16:32
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-07-21 16:21:02
-->
<template>
    <a-button type="text" @click="openNewWindow">
        <template #icon>
            <icon-mdi-github class="text-[var-(--color-text-1)] text-16px" />
        </template>
    </a-button>
</template>

<script setup lang="ts">
import { getConfig } from '@/config'
const openNewWindow = () => window.open(getConfig('github'), '_blank')
</script>

<style>
</style>