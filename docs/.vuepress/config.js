// const { defaultTheme } = require('vuepress')
const { hopeTheme } = require("vuepress-theme-hope");
module.exports = {
  // 站点选项
  theme: hopeTheme({
    plugins:{
      blog: true,
    },
    pure: true,
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '面试之道',
        link: 'https://tuwei.site/ui/mszd/',
      },
      {
        text: '面试手册',
        link: 'https://vue3js.cn/interview/',
      },
    ],
    sidebar: [
      { 
        text: '前端基础知识',
        collapsable: true,
        // collapsible: true,
        children: [
          {
            text: '00-开始',
            link: '/fe/前端基础知识/00-开始.md',
          },
          {
            text: '01-ajax-fetch-axios-区别',
            link: '/fe/前端基础知识/01-ajax-fetch-axios-区别.md',
          },
          {
            text: '02-节流和防抖',
            link: '/fe/前端基础知识/02-节流和防抖.md',
          },
          {
            text: '03-px-em-rem-vw-vh-区别',
            link: '/fe/前端基础知识/03-px-em-rem-vw-vh-区别.md',
          },{
            text: '04-箭头函数的缺点',
            link: '/fe/前端基础知识/04-箭头函数的缺点.md',
          },
          {
            text: '05-TCP三次握手四次挥手',
            link: '/fe/前端基础知识/05-TCP三次握手四次挥手.md',
          },{
            text: '06-for-in和for-of的区别',
            link: '/fe/前端基础知识/06-for-in和for-of的区别.md',
          },
          {
            text: '07-offsetHeight-scrollHeight-clientHeight-区别',
            link: '/fe/前端基础知识/07-offsetHeight-scrollHeight-clientHeight-区别.md',
          },{
            text: '08-HTMLCollection-NodeList-区别',
            link: '/fe/前端基础知识/08-HTMLCollection-NodeList-区别.md',
          },
          {
            text: '09-vue-computed-watch-区别',
            link: '/fe/前端基础知识/09-vue-computed-watch-区别.md',
          },
          {
            text: '10-vue组件通讯',
            link: '/fe/前端基础知识/10-vue组件通讯.md',
          },{
            text: '11-vuex-action-mutation-区别',
            link: '/fe/前端基础知识/11-vuex-action-mutation-区别.md',
          },
          {
            text: '12-JS严格模式',
            link: '/fe/前端基础知识/12-JS严格模式.md',
          },
          {
            text: '13-options请求',
            link: '/fe/前端基础知识/13-options请求.md',
          },
          {
            text: '14-总结',
            link: '/fe/前端基础知识/14-总结.md',
          },
          {
            text: 'x1-文本小节-前端知识体系',
            link: '/fe/前端基础知识/x1-文本小节-前端知识体系.md',
          },
          {
            text: 'x2-文本小节-Restful-API-method',
            link: '/fe/前端基础知识/x2-文本小节-Restful-API-method.md',
          },
        ],
      },
      { 
        text: '数据结构和算法',
        // collapsible: true,
        collapsable: true,
        children: [
          {
            text: '00-开始',
            link: '/fe/数据结构和算法/00-开始.md',
          },
          {
            text: '01-旋转数组',
            link: '/fe/数据结构和算法/01-旋转数组.md',
          },
          {
            text: '02-括号匹配',
            link: '/fe/数据结构和算法/02-括号匹配.md',
          },
          {
            text: '03-用两个栈实现一个队列.md',
            link: '/fe/数据结构和算法/03-用两个栈实现一个队列.md',
          },{
            text: '04-反转链表',
            link: '/fe/数据结构和算法/04-反转链表.md',
          },
          {
            text: '05-二分查找',
            link: '/fe/数据结构和算法/05-二分查找.md',
          },{
            text: '06-两数之和',
            link: '/fe/数据结构和算法/06-两数之和.md',
          },
          {
            text: '07-BST第K小值',
            link: '/fe/数据结构和算法/07-BST第K小值.md',
          },{
            text: '08-为何二叉树重要.md',
            link: '/fe/数据结构和算法/08-为何二叉树重要.md',
          },
          {
            text: '09-斐波那契数列',
            link: '/fe/数据结构和算法/09-斐波那契数列.md',
          },
          {
            text: '10-移动0',
            link: '/fe/数据结构和算法/10-移动0.md',
          },{
            text: '11-连续最多的字符.md',
            link: '/fe/数据结构和算法/11-连续最多的字符.md',
          },
          {
            text: '12-快速排序',
            link: '/fe/数据结构和算法/12-快速排序.md',
          },
          {
            text: '13-options请求',
            link: '/fe/数据结构和算法/13-options请求.md',
          },
          {
            text: '14-字符串前缀匹配',
            link: '/fe/数据结构和算法/14-字符串前缀匹配.md',
          },
          {
            text: '15-数字千分位',
            link: '/fe/数据结构和算法/15-数字千分位.md',
          },
          {
            text: '16-切换字母大小写',
            link: '/fe/数据结构和算法/16-切换字母大小写.md',
          },
          {
            text: '17-小数相加',
            link: '/fe/数据结构和算法/17-小数相加.md',
          },
          {
            text: '18-总结',
            link: '/fe/数据结构和算法/18-总结.md',
          },
          {
            text: 'x1-文本小节-常见数据结构',
            link: '/fe/数据结构和算法/x1-文本小节-常见数据结构.md',
          },
          {
            text: 'x2-文本小节-常见算法时间复杂度',
            link: '/fe/数据结构和算法/x2-文本小节-常见算法时间复杂度.md',
          },
        ],
      },
      { 
        text: '知识广度',
        // collapsible: true,
        collapsable: true,
        children: [
          {
            text: '00-开始',
            link: '/fe/知识广度/00-开始.md',
          },
          {
            text: '01-移动端click-300ms-延迟',
            link: '/fe/知识广度/01-移动端click-300ms-延迟.md',
          },
          {
            text: '02-文本小节-Retina屏幕1px宽度',
            link: '/fe/知识广度/02-文本小节-Retina屏幕1px宽度.md',
          },
          {
            text: '03-token和cookie区别',
            link: '/fe/知识广度/03-token和cookie区别.md',
          },
          {
            text: '04-http-udp区别',
            link: '/fe/知识广度/04-http-udp区别.md',
          },{
            text: '05-https中间人攻击',
            link: '/fe/知识广度/05-https中间人攻击.md',
          },
          {
            text: '06-defer和async',
            link: '/fe/知识广度/06-defer和async.md',
          },{
            text: '07-前端攻击',
            link: '/fe/知识广度/07-前端攻击.md',
          },
          {
            text: '08-websocket',
            link: '/fe/知识广度/08-websocket.md',
          },{
            text: '09-输入url到页面展示',
            link: '/fe/知识广度/09-输入url到页面展示.md',
          },
          {
            text: '10-网页多标签通讯',
            link: '/fe/知识广度/10-网页多标签通讯.md',
          },
          {
            text: '11-koa2洋葱圈模型',
            link: '/fe/知识广度/11-koa2洋葱圈模型.md',
          },{
            text: '12-文本小节-为何需要nodejs',
            link: '/fe/知识广度/12-文本小节-为何需要nodejs.md',
          },
          {
            text: '13-总结',
            link: '/fe/知识广度/13-总结.md',
          }
        ],
      },
      { 
        text: '知识深度',
        // collapsible: true,
        collapsable: true,
        children: [
          {
            text: '00-开始',
            link: '/fe/知识深度/00-开始.md',
          },
          {
            text: '01-JS内存泄漏',
            link: '/fe/知识深度/01-JS内存泄漏.md',
          },
          {
            text: '02-浏览器和nodejs事件循环的区别',
            link: '/fe/知识深度/02-浏览器和nodejs事件循环的区别.md',
          },
          {
            text: '04-vdom真的很快吗',
            link: '/fe/知识深度/04-vdom真的很快吗.md',
          },{
            text: '05-for-vs-forEach',
            link: '/fe/知识深度/05-for-vs-forEach.md',
          },
          {
            text: '06-nodejs多进程',
            link: '/fe/知识深度/06-nodejs多进程.md',
          },{
            text: '07-js-bridge原理',
            link: '/fe/知识深度/07-js-bridge原理.md',
          },
          {
            text: '08-requestIdleCallback.md',
            link: '/fe/知识深度/08-requestIdleCallback.md',
          },{
            text: '09-Vue生命周期',
            link: '/fe/知识深度/09-Vue生命周期.md',
          },
          {
            text: '10-vue-react-diff',
            link: '/fe/知识深度/10-vue-react-diff.md',
          },
          {
            text: '11-vue-router-模式',
            link: '/fe/知识深度/11-vue-router-模式.md',
          },
          {
            text: '12-总结',
            link: '/fe/知识深度/12-总结.md',
          },
          {
            text: 'x1-文本小节-知识深度很重要',
            link: '/fe/知识深度/x1-文本小节-知识深度很重要.md',
          },
        ],
      },
      { 
        text: '软技能',
        collapsable: true,
        // collapsible: true,
        children: [
          {
            text: '00-开始',
            link: '/fe/软技能/00-开始.md',
          },
          {
            text: '01-是否看过红宝书',
            link: '/fe/软技能/01-是否看过红宝书.md',
          },
          {
            text: '02-如何做code-review',
            link: '/fe/软技能/02-如何做code-review.md',
          },
          {
            text: '03-如何学习一门新语言',
            link: '/fe/软技能/03-如何学习一门新语言.md',
          },{
            text: '04-你目前有和不足',
            link: '/fe/软技能/04-你目前有和不足.md',
          },
          {
            text: '05-总结',
            link: '/fe/软技能/05-总结.md',
          }
        ],
      },
      { 
        text: '实际工作经验',
        collapsable: true,
        // collapsible: true,
        children: [
          {
            text: '00-开始',
            link: '/fe/实际工作经验/00-开始.md',
          },
          {
            text: '01-首屏优化',
            link: '/fe/实际工作经验/01-首屏优化.md',
          },
          {
            text: '02-渲染10w条数据',
            link: '/fe/实际工作经验/02-渲染10w条数据.md',
          },
          {
            text: '03-文本小节-用CSS实现文字超出省略',
            link: '/fe/实际工作经验/03-文本小节-用CSS实现文字超出省略.md',
          },{
            text: '04-设计模式',
            link: '/fe/实际工作经验/04-设计模式.md',
          },
          {
            text: '05-vue优化',
            link: '/fe/实际工作经验/05-vue优化.md',
          },
          {
            text: '06-react优化',
            link: '/fe/实际工作经验/06-react优化.md',
          },
          {
            text: '08-vue错误监听',
            link: '/fe/实际工作经验/08-vue错误监听.md',
          },
          {
            text: '09-react错误监听',
            link: '/fe/实际工作经验/09-react错误监听.md',
          },
          {
            text: '10-排查性能问题',
            link: '/fe/实际工作经验/10-排查性能问题.md',
          },
          {
            text: '11-项目难点',
            link: '/fe/实际工作经验/11-项目难点.md',
          },
          {
            text: '12-文本小节-处理项目沟通冲突',
            link: '/fe/实际工作经验/12-文本小节-处理项目沟通冲突.md',
          },
          {
            text: '13-总结',
            link: '/fe/实际工作经验/13-总结.md',
          },
        ],
      },
      {
        text: '编写高质量代码',
        collapsable: true,
        // collapsible: true,
        children: [
          {
            text: '00-开始',
            link: '/fe/编写高质量代码/00-开始.md',
          },
          {
            text: '01-文本小节-高质量代码的特点',
            link: '/fe/编写高质量代码/01-文本小节-高质量代码的特点.md',
          },
          {
            text: '02-array-flatten',
            link: '/fe/编写高质量代码/02-array-flatten.md',
          },
          {
            text: '03-类型判断',
            link: '/fe/编写高质量代码/03-类型判断.md',
          },{
            text: '04-手写new',
            link: '/fe/编写高质量代码/04-手写new.md',
          },
          {
            text: '05-遍历DOM树',
            link: '/fe/编写高质量代码/05-遍历DOM树.md',
          },{
            text: '06-手写lazyman',
            link: '/fe/编写高质量代码/06-手写lazyman.md',
          },
          {
            text: '07-curry-add',
            link: '/fe/编写高质量代码/07-curry-add.md',
          },{
            text: '08-手写instanceof',
            link: '/fe/编写高质量代码/08-手写instanceof.md',
          },
          {
            text: '09-手写函数bind',
            link: '/fe/编写高质量代码/09-手写函数bind.md',
          },
          {
            text: '10-手写event-bus',
            link: '/fe/编写高质量代码/10-手写event-bus.md',
          },{
            text: '11-手写LRU',
            link: '/fe/编写高质量代码/11-手写LRU.md',
          },
          {
            text: '12-深拷贝',
            link: '/fe/编写高质量代码/12-深拷贝.md',
          },
          {
            text: '13-文本小节-dom转vdom',
            link: '/fe/编写高质量代码/13-文本小节-dom转vdom.md',
          },
          {
            text: '14-总结',
            link: '/fe/编写高质量代码/14-总结.md',
          },
        ],
      },
      {
        text: '分析解决问题',
        // collapsible: true,
        collapsable: true,
        children: [
          {
            text: '00-开始',
            link: '/fe/分析解决问题/00-开始.md',
          },
          {
            text: '01-数组转树',
            link: '/fe/分析解决问题/01-数组转树.md',
          },
          {
            text: '02-连环问-树转数组',
            link: '/fe/分析解决问题/02-连环问-树转数组.md',
          },
          {
            text: '03-map-parseInt',
            link: '/fe/分析解决问题/03-map-parseInt.md',
          },{
            text: '04-原型',
            link: '/fe/分析解决问题/04-原型.md',
          },
          {
            text: '05-promise调用顺序',
            link: '/fe/分析解决问题/05-promise调用顺序.md',
          },{
            text: '06-react-setState',
            link: '/fe/分析解决问题/06-react-setState.md',
          },
          {
            text: '07-对象赋值',
            link: '/fe/分析解决问题/07-对象赋值.md',
          },{
            text: '08-对象属性赋值',
            link: '/fe/分析解决问题/08-对象属性赋值.md',
          },
          {
            text: '09-函数参数',
            link: '/fe/分析解决问题/09-函数参数.md',
          },
          {
            text: '10-文本小节-解决问题的常见思路',
            link: '/fe/分析解决问题/10-文本小节-解决问题的常见思路.md',
          },{
            text: '11-总结',
            link: '/fe/分析解决问题/11-总结.md',
          }
        ],
      },
      {
        text: '项目设计',
        // collapsible: true,
        collapsable: true,
        children: [
          {
            text: '00-开始',
            link: '/fe/项目设计/00-开始.md',
          },
          {
            text: '01-文本小节-项目负责人的职责',
            link: '/fe/项目设计/01-文本小节-项目负责人的职责.md',
          },
          {
            text: '03-前端统计sdk',
            link: '/fe/项目设计/03-前端统计sdk.md',
          },
          {
            text: '04-SPA-MPA',
            link: '/fe/项目设计/04-SPA-MPA.md',
          },{
            text: '05-H5编辑器',
            link: '/fe/项目设计/05-H5编辑器.md',
          },
          {
            text: '06-文本小节-何时使用SSR',
            link: '/fe/项目设计/06-文本小节-何时使用SSR.md',
          },
          {
            text: '07-角色权限模型',
            link: '/fe/项目设计/07-角色权限模型.md',
          },{
            text: '08-hybrid更新机制',
            link: '/fe/项目设计/08-hybrid更新机制.md',
          },
          {
            text: '09-H5抽奖页',
            link: '/fe/项目设计/09-H5抽奖页.md',
          },
          {
            text: '10-技术选型',
            link: '/fe/项目设计/10-技术选型.md',
          },{
            text: '11-图片懒加载',
            link: '/fe/项目设计/11-图片懒加载.md',
          },
          {
            text: '12-文本小节-B端-C端',
            link: '/fe/项目设计/12-文本小节-B端-C端.md',
          },
          {
            text: '13-总结.md',
            link: '/fe/项目设计/13-总结.md',
          }
        ],
      },
    ],
  }),
};

// module.exports = {
//   base: "/ui/ms100/",
//   hostname: "http://tuwei.site/",
//   theme: defaultTheme({
//     // 默认主题配置
//     navbar: [
//       {
//         text: '首页',
//         link: '/',
//       },
//     ],
//     sidebar: [
//       { 
//         text: '前端基础知识',
//         collapsible: true,
//         children: [
//           {
//             text: '00-开始',
//             link: '/fe/前端基础知识/00-开始.md',
//           },
//           {
//             text: '01-ajax-fetch-axios-区别',
//             link: '/fe/前端基础知识/01-ajax-fetch-axios-区别.md',
//           },
//           {
//             text: '02-节流和防抖',
//             link: '/fe/前端基础知识/02-节流和防抖.md',
//           },
//           {
//             text: '03-px-em-rem-vw-vh-区别',
//             link: '/fe/前端基础知识/03-px-em-rem-vw-vh-区别.md',
//           },{
//             text: '04-箭头函数的缺点',
//             link: '/fe/前端基础知识/04-箭头函数的缺点.md',
//           },
//           {
//             text: '05-TCP三次握手四次挥手',
//             link: '/fe/前端基础知识/05-TCP三次握手四次挥手.md',
//           },{
//             text: '06-for-in和for-of的区别',
//             link: '/fe/前端基础知识/06-for-in和for-of的区别.md',
//           },
//           {
//             text: '07-offsetHeight-scrollHeight-clientHeight-区别',
//             link: '/fe/前端基础知识/07-offsetHeight-scrollHeight-clientHeight-区别.md',
//           },{
//             text: '08-HTMLCollection-NodeList-区别',
//             link: '/fe/前端基础知识/08-HTMLCollection-NodeList-区别.md',
//           },
//           {
//             text: '09-vue-computed-watch-区别',
//             link: '/fe/前端基础知识/09-vue-computed-watch-区别.md',
//           },
//           {
//             text: '10-vue组件通讯',
//             link: '/fe/前端基础知识/10-vue组件通讯.md',
//           },{
//             text: '11-vuex-action-mutation-区别',
//             link: '/fe/前端基础知识/11-vuex-action-mutation-区别.md',
//           },
//           {
//             text: '12-JS严格模式',
//             link: '/fe/前端基础知识/12-JS严格模式.md',
//           },
//           {
//             text: '13-options请求',
//             link: '/fe/前端基础知识/13-options请求.md',
//           },
//           {
//             text: '14-总结',
//             link: '/fe/前端基础知识/14-总结.md',
//           },
//           {
//             text: 'x1-文本小节-前端知识体系',
//             link: '/fe/前端基础知识/x1-文本小节-前端知识体系.md',
//           },
//           {
//             text: 'x2-文本小节-Restful-API-method',
//             link: '/fe/前端基础知识/x2-文本小节-Restful-API-method.md',
//           },
//         ],
//       },
//       { 
//         text: '数据结构和算法',
//         collapsible: true,
//         children: [
//           {
//             text: '00-开始',
//             link: '/fe/数据结构和算法/00-开始.md',
//           },
//           {
//             text: '01-旋转数组',
//             link: '/fe/数据结构和算法/01-旋转数组.md',
//           },
//           {
//             text: '02-括号匹配',
//             link: '/fe/数据结构和算法/02-括号匹配.md',
//           },
//           {
//             text: '03-用两个栈实现一个队列.md',
//             link: '/fe/数据结构和算法/03-用两个栈实现一个队列.md',
//           },{
//             text: '04-反转链表',
//             link: '/fe/数据结构和算法/04-反转链表.md',
//           },
//           {
//             text: '05-二分查找',
//             link: '/fe/数据结构和算法/05-二分查找.md',
//           },{
//             text: '06-两数之和',
//             link: '/fe/数据结构和算法/06-两数之和.md',
//           },
//           {
//             text: '07-BST第K小值',
//             link: '/fe/数据结构和算法/07-BST第K小值.md',
//           },{
//             text: '08-为何二叉树重要.md',
//             link: '/fe/数据结构和算法/08-为何二叉树重要.md',
//           },
//           {
//             text: '09-斐波那契数列',
//             link: '/fe/数据结构和算法/09-斐波那契数列.md',
//           },
//           {
//             text: '10-移动0',
//             link: '/fe/数据结构和算法/10-移动0.md',
//           },{
//             text: '11-连续最多的字符.md',
//             link: '/fe/数据结构和算法/11-连续最多的字符.md',
//           },
//           {
//             text: '12-快速排序',
//             link: '/fe/数据结构和算法/12-快速排序.md',
//           },
//           {
//             text: '13-options请求',
//             link: '/fe/数据结构和算法/13-options请求.md',
//           },
//           {
//             text: '14-字符串前缀匹配',
//             link: '/fe/数据结构和算法/14-字符串前缀匹配.md',
//           },
//           {
//             text: '15-数字千分位',
//             link: '/fe/数据结构和算法/15-数字千分位.md',
//           },
//           {
//             text: '16-切换字母大小写',
//             link: '/fe/数据结构和算法/16-切换字母大小写.md',
//           },
//           {
//             text: '17-小数相加',
//             link: '/fe/数据结构和算法/17-小数相加.md',
//           },
//           {
//             text: '18-总结',
//             link: '/fe/数据结构和算法/18-总结.md',
//           },
//           {
//             text: 'x1-文本小节-常见数据结构',
//             link: '/fe/数据结构和算法/x1-文本小节-常见数据结构.md',
//           },
//           {
//             text: 'x2-文本小节-常见算法时间复杂度',
//             link: '/fe/数据结构和算法/x2-文本小节-常见算法时间复杂度.md',
//           },
//         ],
//       },
//       { 
//         text: '知识广度',
//         collapsible: true,
//         children: [
//           {
//             text: '00-开始',
//             link: '/fe/知识广度/00-开始.md',
//           },
//           {
//             text: '01-移动端click-300ms-延迟',
//             link: '/fe/知识广度/01-移动端click-300ms-延迟.md',
//           },
//           {
//             text: '02-文本小节-Retina屏幕1px宽度',
//             link: '/fe/知识广度/02-文本小节-Retina屏幕1px宽度.md',
//           },
//           {
//             text: '03-token和cookie区别',
//             link: '/fe/知识广度/03-token和cookie区别.md',
//           },
//           {
//             text: '04-http-udp区别',
//             link: '/fe/知识广度/04-http-udp区别.md',
//           },{
//             text: '05-https中间人攻击',
//             link: '/fe/知识广度/05-https中间人攻击.md',
//           },
//           {
//             text: '06-defer和async',
//             link: '/fe/知识广度/06-defer和async.md',
//           },{
//             text: '07-前端攻击',
//             link: '/fe/知识广度/07-前端攻击.md',
//           },
//           {
//             text: '08-websocket',
//             link: '/fe/知识广度/08-websocket.md',
//           },{
//             text: '09-输入url到页面展示',
//             link: '/fe/知识广度/09-输入url到页面展示.md',
//           },
//           {
//             text: '10-网页多标签通讯',
//             link: '/fe/知识广度/10-网页多标签通讯.md',
//           },
//           {
//             text: '11-koa2洋葱圈模型',
//             link: '/fe/知识广度/11-koa2洋葱圈模型.md',
//           },{
//             text: '12-文本小节-为何需要nodejs',
//             link: '/fe/知识广度/12-文本小节-为何需要nodejs.md',
//           },
//           {
//             text: '13-总结',
//             link: '/fe/知识广度/13-总结.md',
//           }
//         ],
//       },
//       { 
//         text: '知识深度',
//         collapsible: true,
//         children: [
//           {
//             text: '00-开始',
//             link: '/fe/知识深度/00-开始.md',
//           },
//           {
//             text: '01-JS内存泄漏',
//             link: '/fe/知识深度/01-JS内存泄漏.md',
//           },
//           {
//             text: '02-浏览器和nodejs事件循环的区别',
//             link: '/fe/知识深度/02-浏览器和nodejs事件循环的区别.md',
//           },
//           {
//             text: '04-vdom真的很快吗',
//             link: '/fe/知识深度/04-vdom真的很快吗.md',
//           },{
//             text: '05-for-vs-forEach',
//             link: '/fe/知识深度/05-for-vs-forEach.md',
//           },
//           {
//             text: '06-nodejs多进程',
//             link: '/fe/知识深度/06-nodejs多进程.md',
//           },{
//             text: '07-js-bridge原理',
//             link: '/fe/知识深度/07-js-bridge原理.md',
//           },
//           {
//             text: '08-requestIdleCallback.md',
//             link: '/fe/知识深度/08-requestIdleCallback.md',
//           },{
//             text: '09-Vue生命周期',
//             link: '/fe/知识深度/09-Vue生命周期.md',
//           },
//           {
//             text: '10-vue-react-diff',
//             link: '/fe/知识深度/10-vue-react-diff.md',
//           },
//           {
//             text: '11-vue-router-模式',
//             link: '/fe/知识深度/11-vue-router-模式.md',
//           },
//           {
//             text: '12-总结',
//             link: '/fe/知识深度/12-总结.md',
//           },
//           {
//             text: 'x1-文本小节-知识深度很重要',
//             link: '/fe/知识深度/x1-文本小节-知识深度很重要.md',
//           },
//         ],
//       },
//       { 
//         text: '软技能',
//         collapsible: true,
//         children: [
//           {
//             text: '00-开始',
//             link: '/fe/软技能/00-开始.md',
//           },
//           {
//             text: '01-是否看过红宝书',
//             link: '/fe/软技能/01-是否看过红宝书.md',
//           },
//           {
//             text: '02-如何做code-review',
//             link: '/fe/软技能/02-如何做code-review.md',
//           },
//           {
//             text: '03-如何学习一门新语言',
//             link: '/fe/软技能/03-如何学习一门新语言.md',
//           },{
//             text: '04-你目前有和不足',
//             link: '/fe/软技能/04-你目前有和不足.md',
//           },
//           {
//             text: '05-总结',
//             link: '/fe/软技能/05-总结.md',
//           }
//         ],
//       },
//       { 
//         text: '实际工作经验',
//         collapsible: true,
//         children: [
//           {
//             text: '00-开始',
//             link: '/fe/实际工作经验/00-开始.md',
//           },
//           {
//             text: '01-首屏优化',
//             link: '/fe/实际工作经验/01-首屏优化.md',
//           },
//           {
//             text: '02-渲染10w条数据',
//             link: '/fe/实际工作经验/02-渲染10w条数据.md',
//           },
//           {
//             text: '03-文本小节-用CSS实现文字超出省略',
//             link: '/fe/实际工作经验/03-文本小节-用CSS实现文字超出省略.md',
//           },{
//             text: '04-设计模式',
//             link: '/fe/实际工作经验/04-设计模式.md',
//           },
//           {
//             text: '05-vue优化',
//             link: '/fe/实际工作经验/05-vue优化.md',
//           },
//           {
//             text: '06-react优化',
//             link: '/fe/实际工作经验/06-react优化.md',
//           },
//           {
//             text: '08-vue错误监听',
//             link: '/fe/实际工作经验/08-vue错误监听.md',
//           },
//           {
//             text: '09-react错误监听',
//             link: '/fe/实际工作经验/09-react错误监听.md',
//           },
//           {
//             text: '10-排查性能问题',
//             link: '/fe/实际工作经验/10-排查性能问题.md',
//           },
//           {
//             text: '11-项目难点',
//             link: '/fe/实际工作经验/11-项目难点.md',
//           },
//           {
//             text: '12-文本小节-处理项目沟通冲突',
//             link: '/fe/实际工作经验/12-文本小节-处理项目沟通冲突.md',
//           },
//           {
//             text: '13-总结',
//             link: '/fe/实际工作经验/13-总结.md',
//           },
//         ],
//       },
//       {
//         text: '编写高质量代码',
//         collapsible: true,
//         children: [
//           {
//             text: '00-开始',
//             link: '/fe/编写高质量代码/00-开始.md',
//           },
//           {
//             text: '01-文本小节-高质量代码的特点',
//             link: '/fe/编写高质量代码/01-文本小节-高质量代码的特点.md',
//           },
//           {
//             text: '02-array-flatten',
//             link: '/fe/编写高质量代码/02-array-flatten.md',
//           },
//           {
//             text: '03-类型判断',
//             link: '/fe/编写高质量代码/03-类型判断.md',
//           },{
//             text: '04-手写new',
//             link: '/fe/编写高质量代码/04-手写new.md',
//           },
//           {
//             text: '05-遍历DOM树',
//             link: '/fe/编写高质量代码/05-遍历DOM树.md',
//           },{
//             text: '06-手写lazyman',
//             link: '/fe/编写高质量代码/06-手写lazyman.md',
//           },
//           {
//             text: '07-curry-add',
//             link: '/fe/编写高质量代码/07-curry-add.md',
//           },{
//             text: '08-手写instanceof',
//             link: '/fe/编写高质量代码/08-手写instanceof.md',
//           },
//           {
//             text: '09-手写函数bind',
//             link: '/fe/编写高质量代码/09-手写函数bind.md',
//           },
//           {
//             text: '10-手写event-bus',
//             link: '/fe/编写高质量代码/10-手写event-bus.md',
//           },{
//             text: '11-手写LRU',
//             link: '/fe/编写高质量代码/11-手写LRU.md',
//           },
//           {
//             text: '12-深拷贝',
//             link: '/fe/编写高质量代码/12-深拷贝.md',
//           },
//           {
//             text: '13-文本小节-dom转vdom',
//             link: '/fe/编写高质量代码/13-文本小节-dom转vdom.md',
//           },
//           {
//             text: '14-总结',
//             link: '/fe/编写高质量代码/14-总结.md',
//           },
//         ],
//       },
//       {
//         text: '分析解决问题',
//         collapsible: true,
//         children: [
//           {
//             text: '00-开始',
//             link: '/fe/分析解决问题/00-开始.md',
//           },
//           {
//             text: '01-数组转树',
//             link: '/fe/分析解决问题/01-数组转树.md',
//           },
//           {
//             text: '02-连环问-树转数组',
//             link: '/fe/分析解决问题/02-连环问-树转数组.md',
//           },
//           {
//             text: '03-map-parseInt',
//             link: '/fe/分析解决问题/03-map-parseInt.md',
//           },{
//             text: '04-原型',
//             link: '/fe/分析解决问题/04-原型.md',
//           },
//           {
//             text: '05-promise调用顺序',
//             link: '/fe/分析解决问题/05-promise调用顺序.md',
//           },{
//             text: '06-react-setState',
//             link: '/fe/分析解决问题/06-react-setState.md',
//           },
//           {
//             text: '07-对象赋值',
//             link: '/fe/分析解决问题/07-对象赋值.md',
//           },{
//             text: '08-对象属性赋值',
//             link: '/fe/分析解决问题/08-对象属性赋值.md',
//           },
//           {
//             text: '09-函数参数',
//             link: '/fe/分析解决问题/09-函数参数.md',
//           },
//           {
//             text: '10-文本小节-解决问题的常见思路',
//             link: '/fe/分析解决问题/10-文本小节-解决问题的常见思路.md',
//           },{
//             text: '11-总结',
//             link: '/fe/分析解决问题/11-总结.md',
//           }
//         ],
//       },
//       {
//         text: '项目设计',
//         collapsible: true,
//         children: [
//           {
//             text: '00-开始',
//             link: '/fe/项目设计/00-开始.md',
//           },
//           {
//             text: '01-文本小节-项目负责人的职责',
//             link: '/fe/项目设计/01-文本小节-项目负责人的职责.md',
//           },
//           {
//             text: '03-前端统计sdk',
//             link: '/fe/项目设计/03-前端统计sdk.md',
//           },
//           {
//             text: '04-SPA-MPA',
//             link: '/fe/项目设计/04-SPA-MPA.md',
//           },{
//             text: '05-H5编辑器',
//             link: '/fe/项目设计/05-H5编辑器.md',
//           },
//           {
//             text: '06-文本小节-何时使用SSR',
//             link: '/fe/项目设计/06-文本小节-何时使用SSR.md',
//           },
//           {
//             text: '07-角色权限模型',
//             link: '/fe/项目设计/07-角色权限模型.md',
//           },{
//             text: '08-hybrid更新机制',
//             link: '/fe/项目设计/08-hybrid更新机制.md',
//           },
//           {
//             text: '09-H5抽奖页',
//             link: '/fe/项目设计/09-H5抽奖页.md',
//           },
//           {
//             text: '10-技术选型',
//             link: '/fe/项目设计/10-技术选型.md',
//           },{
//             text: '11-图片懒加载',
//             link: '/fe/项目设计/11-图片懒加载.md',
//           },
//           {
//             text: '12-文本小节-B端-C端',
//             link: '/fe/项目设计/12-文本小节-B端-C端.md',
//           },
//           {
//             text: '13-总结.md',
//             link: '/fe/项目设计/13-总结.md',
//           }
//         ],
//       },
//     ],
//   }),
// }
