require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    //浏览器环境
    browser: true,
    node: true,
    es2021: true
  },
  root: true,
  extends: [
    //配置自动引入不报错
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential', //eslint vue3插件扩展
    'eslint:recommended', //Eslint官方扩展
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting' //prettier npm扩展
  ],
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['warn', 'never'], //禁止尾部分号
    'no-debugger': 'warn' //禁止出现debugger
  }
}
