/*
 * @Descripttion: 
 * @version: 
 * @Author: 雷宇琦
 * @Date: 2023-08-14 15:53:22
 * @LastEditors: 雷宇琦
 * @LastEditTime: 2023-08-14 15:55:13
 */
const modules = import.meta.glob('./*.vue',{eager:true})

let switchLayoutList = []
for(const path in modules){
    switchLayoutList.push(modules[path].default)
}

export default switchLayoutList