<template><h1 id="对象赋值" tabindex="-1"><a class="header-anchor" href="#对象赋值" aria-hidden="true">#</a> 对象赋值</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>以下代码，运行会输出什么</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> a
a<span class="token punctuation">.</span>x <span class="token operator">=</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>x<span class="token punctuation">)</span> 	
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="值类型-vs-引用类型" tabindex="-1"><a class="header-anchor" href="#值类型-vs-引用类型" aria-hidden="true">#</a> 值类型 vs 引用类型</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> a

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/fe/分析解决问题/img/堆栈.png" alt=""></p>
<h2 id="连续赋值" tabindex="-1"><a class="header-anchor" href="#连续赋值" aria-hidden="true">#</a> 连续赋值</h2>
<p>连续赋值是倒序执行。PS：日常工作不可用连续赋值，可读性差</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> n1<span class="token punctuation">,</span> n2
n1 <span class="token operator">=</span> n2 <span class="token operator">=</span> <span class="token number">100</span>

<span class="token comment">// // 相当于</span>
<span class="token comment">// n2 = 100</span>
<span class="token comment">// n1 = n2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优先级更高" tabindex="-1"><a class="header-anchor" href="#优先级更高" aria-hidden="true">#</a> <code v-pre>.</code> 优先级更高</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
a<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">100</span>

<span class="token comment">// 可拆解为：</span>
<span class="token comment">// 1. a.x = undefined // 初始化 a.x 属性</span>
<span class="token comment">// 2. a.x = 100 // 为 x 属性赋值</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再看下面的例子</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
a<span class="token punctuation">.</span>x <span class="token operator">=</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>

<span class="token comment">// // 可以拆解为</span>
<span class="token comment">// a.x = undefined</span>
<span class="token comment">// let x = a.x // x 变量是假想的，实际执行时不会有</span>
<span class="token comment">// x = a = { n: 2 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/fe/分析解决问题/img/堆栈2.png" alt=""></p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>题目代码执行打印 <code v-pre>undefined</code> 和 <code v-pre>{ n: 2 }</code></p>
<p>其实把 <code v-pre>a.x = a = { n: 2 }</code> 换成 <code v-pre>b.x = a = { n: 2 }</code> 更好理解</p>
<p>或者把连续赋值拆分为 <code v-pre>a.x = { n: 2 }; a = { n: 2 }</code> （优先级高的，先执行）</p>
<h2 id="重点" tabindex="-1"><a class="header-anchor" href="#重点" aria-hidden="true">#</a> 重点</h2>
<ul>
<li>值类型和引用类型，堆栈模型</li>
<li>连续赋值（<code v-pre>.</code> 优先级更高）</li>
</ul>
<p>PS：日常工作不可用连续赋值，可读性差</p>
</template>
