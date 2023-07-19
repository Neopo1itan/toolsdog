<template>
  <div>hello youyan!</div>
  <icon-ep-alarm-clock />
  <icon-home-great />
  <icon-user-present />
  <a-space>
    <a-button type="primary" size="small" @click="handleClick">Small</a-button>
  </a-space>
  <a-space>
    <a-tooltip content="This is tooltip content">
      <a-button>Mouse over to display tooltip</a-button>
    </a-tooltip>
    <a-tooltip
      content="This is a two-line tooltip content.This is a two-line tooltip content."
    >
      <a-button>Mouse over to display tooltip</a-button>
    </a-tooltip>
  </a-space>

  <HelloWorld />
  <button class="btn-style">
    Button
  </button>
</template>

<script setup lang="ts">
const handleClick = () => {
  alert('clicked')
}
</script>

<style>
.btn-style{
    @apply bg-blue-400 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200;
    @apply hover:bg-blue-500;
    @apply dark:bg-blue-500 dark:hover:bg-blue-600;
}
</style>
