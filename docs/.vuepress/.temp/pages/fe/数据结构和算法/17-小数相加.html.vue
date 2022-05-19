<template><h1 id="小数相加" tabindex="-1"><a class="header-anchor" href="#小数相加" aria-hidden="true">#</a> 小数相加</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>为何 <code v-pre>0.1 + 0.2 !== 0.3</code></p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>计算机用二进制存储数据。</p>
<p>整数用二进制没有误差，如 <code v-pre>9</code> 表示为 <code v-pre>1001</code> 。<br>
而有的小数无法用二进制表示，如 <code v-pre>0.2</code> 用二进制表示就是 <code v-pre>1.10011001100...</code></p>
<p>所以，累加小数时会出现误差。<br>
这不仅仅是 JS ，所有的计算机语言都这样。</p>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>可以使用第三方库 https://www.npmjs.com/package/mathjs</p>
</template>
