<template><h1 id="for-vs-foreach" tabindex="-1"><a class="header-anchor" href="#for-vs-foreach" aria-hidden="true">#</a> for vs forEach</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>for 和 forEach 哪个更快？为什么</p>
<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2>
<p>代码参考 for-foreach.html ，测试结果：for 更快</p>
<h2 id="创建函数需要开销" tabindex="-1"><a class="header-anchor" href="#创建函数需要开销" aria-hidden="true">#</a> 创建函数需要开销</h2>
<p>for 直接在当前函数中执行，forEach 每次都要新创建一个函数。
函数有单独的作用域和上下文（可回顾“堆栈模型”），所以耗时更久。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>for 更快，因为 forEach 每次创建函数需要开销</p>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>开发中不仅要考虑性能，还要考虑代码的可读性，forEach 可读性更好。</p>
</template>
