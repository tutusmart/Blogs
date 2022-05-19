<!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: 
 * @LastEditTime: 2022-05-19 20:12:28
-->
# 手写 instanceof

## 题目

instanceof 的原理是什么，请用代码来表示

## 原型链

![](./img/原型链.png)

## instanceof 原理

例如 `a instanceof b` 就是：顺着 `a` 的 `__proto__` 链向上找，能否找到 `b.prototype`

代码参考 instanceof.ts

```ts
/**
 * @description 手写 instanceof
 * @author 双越老师
 */

/**
 * 自定义 instanceof
 * @param instance instance
 * @param origin class or function
 */
export function myInstanceof(instance: any, origin: any): boolean {
    if (instance == null) return false // null undefined

    const type = typeof instance
    if (type !== 'object' && type !== 'function') {
        // 值类型
        return false
    }

    let tempInstance = instance // 为了防止修改 instance
    while (tempInstance) {
        if (tempInstance.__proto__ === origin.prototype) {
            return true // 配上了
        }
        // 未匹配
        tempInstance = tempInstance.__proto__ // 顺着原型链，往上找
    }

    return false
}

// // 功能测试
// console.info( myInstanceof({}, Object) )
// console.info( myInstanceof([], Object) )
// console.info( myInstanceof([], Array) )
// console.info( myInstanceof({}, Array) )
// console.info( myInstanceof('abc', String) )

```
## 总结

- 原型链
- 循环判断
