<!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: 
 * @LastEditTime: 2022-05-19 20:12:48
-->
# 手写函数 bind

## 题目

请手写实现函数 bind

## bind 应用

- 返回一个新的函数（旧函数不会更改）
- 绑定 `this` 和部分参数
- 箭头函数，无法改变 `this` ，只能改变参数

```js
function fn(a, b, c) {
    console.log(this, a, b, c)
}
const fn1 = fn.bind({x: 100})
fn1(10, 20, 30) // {x: 100} 10 20 30
const fn2 = fn.bind({x: 100}, 1, 2)
fn2(10, 20, 30) // {x: 100} 1 2 10 （注意第三个参数变成了 10）

fn(10, 20, 30) // window 10 20 30 （旧函数不变）
```

## 解答

代码参考 bind.ts

```ts
/**
 * @description 手写 bind
 * @author 双越老师
 */

// @ts-ignore
Function.prototype.customBind = function (context: any, ...bindArgs: any[]) {
    // context 是 bind 传入的 this
    // bindArgs 是 bind 传入的各个参数

    const self = this // 当前的函数本身

    return function (...args: any[]) {
        // 拼接参数
        const newArgs = bindArgs.concat(args)
        return self.apply(context, newArgs)
    }
}

// // 功能测试
// function fn(this: any, a: any, b: any, c: any) {
//     console.info(this, a, b, c)
// }
// // @ts-ignore
// const fn1 = fn.customBind({x: 100}, 10)
// fn1(20, 30)
```

要点
- 返回新函数
- 拼接参数（bind 参数 + 执行参数）
- 重新绑定 `this`

## 连环问：手写函数 call 和 apply

`bind` 生成新函数，暂不执行。而 `call` `apply` 会直接立即执行函数
- 重新绑定 `this` （箭头函数不支持）
- 传入参数

```js
function fn(a, b, c) {
    console.log(this, a, b, c)
}
fn.call({x: 100}, 10, 20, 30)
fn.apply({x: 100}, [10, 20, 30])
```

代码参考 call-apply.ts

- 使用 `obj.fn` 执行，即可设置 `fn` 执行时的 `this`
- 考虑 `context` 各种情况
- 使用 `symbol` 类型扩展属性 

注意：有些同学用 `call` 来实现 `apply` （反之亦然），这样是不符合面试官期待的。
