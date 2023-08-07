/*
 * @Descripttion: 
 * @version: 
 * @Author: 雷宇琦
 * @Date: 2023-07-25 14:57:11
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-08-07 17:31:18
 */
import IconMaterialSymbolsCodeBlocksOutline from '~icons/material-symbols/code-blocks-outline'
export const menuRouter = [
    {
        path:'devtools',
        name:'DevTools',
        meta:{
            title:'开发工具',
            icon:markRaw(IconMaterialSymbolsCodeBlocksOutline)
        },
        redirect:{name:'RegularPage'},
        children:[
            {
                path:'regular',
                name:'RegularPage',
                meta:{
                    title:'正则在线校验'
                },
                component:()=>import('@/views/RegularPage.vue')
            }
        ]
    }
]

/* 
    @description 菜单路由数组format
    @param {Array} router 路由数组
    @param {String} parentPath 父级路由path
    @return {Array}
*/
export const menuRouterFormat = (router,parentPath) => {
    return router.map(item=>{
        //拼接路由，'devtools' -> '/devtools' 'regular'->'devtools/regular'
        item.path = parentPath ? `${parentPath}/${item.path}` : `/${item.path}`

        //存爱children属性并且长度大于0开始递归
        if(item.children && item.children.length >0){
            item.children = menuRouterFormat(item.children,item.path)
        }

        return Object.assign({},item,item.meta || {})
    })
}

//解析后 路由菜单列表
export const menuRouterFormatList = menuRouterFormat([...menuRouter])
