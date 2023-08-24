<script setup>
import * as regPresetsObj from '@/utils/regexp.js'

// 大小
const size = ref('large')
// 正则表达式字符串
const regStr = ref('')
// 正则表达式修饰符
const regFlag = ref([])
// 正则表达式对象
const reg = ref(null)
watchEffect(() => {
  try {
    reg.value = regStr.value
      ? new RegExp(regStr.value, regFlag.value.join(''))
      : null
  } catch (err) {
    reg.value = null
  }
})

// 预设自动搜索
const auto = ref(true)
// 正则预设列表
const regPresets = ref([])
// 正则预设匹配方法
const regPresetMatch = value => {
  if (value && auto.value) {
    regPresets.value = [...Object.values(regPresetsObj)]
      .filter(r => r.name.includes(value) || r.source.includes(value))
      .map(v => {
        return {
          label: v.name,
          regexp: v,
          value: v.source
        }
      })
  } else {
    regPresets.value = []
  }
}
// 正则预设选中方法
const regPresetSelect = r => {
  let selected = regPresets.value.find(v => v.value === r)
  if (selected) regFlag.value = selected.regexp.flags.split('')
}
</script>
<template>
  <div class="max-w-1200px w-full p-20px box-border">
    <!-- 上 -->
    <div class="flex justify-start items-center">
      <a-tooltip
        :content="`点击${auto ? '关闭' : '开启'}预设正则自动匹配`"
        position="bottom"
      >
        <a-button :size="size" @click="auto = !auto">
          <template #icon>
            <icon-material-symbols-astrophotography-auto
              :class="auto ? 'text-[rgb(var(--arcoblue-6))]' : ''"
            />
          </template>
        </a-button>
      </a-tooltip>

      <a-auto-complete
        class="ml-10px"
        v-model="regStr"
        :data="regPresets"
        @search="regPresetMatch"
        @select="regPresetSelect"
        :placeholder="`请输入正则表达式${
          auto ? '或输入文字选择自动匹配的预设正则' : ''
        }`"
        allow-clear
        :size="size"
      >
        <template #prepend>
          <a-tooltip
            :content="reg ? '正则表达式正确' : '正则表达式有误'"
            position="bottom"
            mini
          >
            <icon-jam-triangle-danger-f
              class="text-[rgb(var(--orange-6))]"
              v-if="!reg"
            />
            <icon-mdi-hand-okay class="text-[rgb(var(--green-6))]" v-else />
          </a-tooltip>

          <span class="ml-5px">/</span>
        </template>
        <template #append>
          <span> /{{ reg?.flags || regFlag?.join('') }}</span>
        </template>
      </a-auto-complete>

      <a-popover title="选择修饰符" position="bl">
        <a-button :size="size" class="ml-10px">
          <template #icon>
            <icon-mdi-filter-multiple
              :class="regFlag.length > 0 ? 'text-[rgb(var(--arcoblue-6))]' : ''"
            />
          </template>
        </a-button>
        <template #content>
          <div class="min-w-200px">
            <a-checkbox-group
              :size="size"
              v-model="regFlag"
              direction="vertical"
            >
              <a-checkbox value="g"> -g：全局匹配 </a-checkbox>
              <a-checkbox value="i"> -i：忽略大小写</a-checkbox>
              <a-checkbox value="m"> -m：多行匹配</a-checkbox>
              <a-checkbox value="s"> -s：特殊字符. 包含换行符</a-checkbox>
            </a-checkbox-group>
          </div>
        </template>
      </a-popover>
    </div>
		
    <!-- 中 -->
    <div class="mt-20px bg-[var(--color-fill-2)]"></div>
		
    <!-- 下 -->
    <div class="w-full mt-20px"></div>
  </div>
</template>