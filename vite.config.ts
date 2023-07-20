/*
 * @Descripttion:
 * @version:
 * @Author: 雷宇琦
 * @Date: 2023-07-18 16:20:55
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-07-20 16:25:39
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

//Unocss插件
import Unocss from 'unocss/vite'
//Unocss默认预设
import presetUno from '@unocss/preset-uno'
//Unocss属性模式预设
import presetAttributify from '@unocss/preset-attributify'
//Unocss指令转换插件
import transformerDirective from '@unocss/transformer-directives'

// API自动引入插件
import AutoImport from 'unplugin-auto-import/vite'
// 组件自动引入插件
import Components from 'unplugin-vue-components/vite'
import {
  ArcoResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver
} from 'unplugin-vue-components/resolvers'
//icon 插件
import Icons from 'unplugin-icons/vite'
//icon自动引入解析器
import IconsResolver from 'unplugin-icons/resolver'
//icon 加载loader
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, './')
  return {
    base: viteEnv.VITE_BASE,
    server: {
      host: '0.0.0.0',
      port: '8080',
      open: true,
      strictPort: true
    },
    build: {
      outDir: 'dist',
      assetsDir: 'static/assets',
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        //设置需要解析的文件格式
        include: [
          /\.[tj]sx?$/, //.ts,.tsx,.js,.jsx
          /\.vue$/,
          /\.vue\?vue/, //.vue
          /\.md&/ //.md
        ],
        //imports指定自动引入的包位置/包名
        imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
        //生成相应的自动导入json文件
        eslintrc: {
          //启用
          enabled: true,
          //生成自动导入json文件的位置
          filepath: './.eslintrc-auto-import.json/',
          //全局属性值
          globalsPropValue: true
        },
        resolvers: [ArcoResolver()]
      }),
      Components({
        //imports指定组件所在的目录，默认src/components
        dirs: ['src/components/', 'src/views/','src/layout/'],
        //需要解析的文件
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        //解析器
        resolvers: [
          ArcoResolver({
            sideEffect: true
          }),
          VueUseComponentsResolver(),
          VueUseDirectiveResolver(),
          //icon组件自动引入解析器使用
          IconsResolver({
            //icon自动引入组件qianzhui
            prefix: 'icon',
            customCollections: ['user', 'home']
          })
        ]
      }),
      //Icon插件配置
      Icons({
        compiler: 'vue3',
        customCollections: {
          //user图标集
          user: FileSystemIconLoader('src/assets/svg/user', svg =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
          //home模块图标集
          home: FileSystemIconLoader('src/assets/svg/home', svg =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          )
        },
        autoInstall: true
      }),
      Unocss({
        //预设
        presets: [presetUno(), presetAttributify()],
        //指令转换插件
        transformers: [transformerDirective()],
        //自定义规则
        rules: []
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
