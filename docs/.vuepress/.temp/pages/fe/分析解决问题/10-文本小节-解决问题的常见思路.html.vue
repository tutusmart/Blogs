<template><h1 id="解决问题的常见思路" tabindex="-1"><a class="header-anchor" href="#解决问题的常见思路" aria-hidden="true">#</a> 解决问题的常见思路</h1>
<h2 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h2>
<p>例如“数组转树”和“树转数组”两个问题，题目直接给出了示例，就很好理解。
如果你遇到一些搞不懂逻辑的问题，可以举几个例子。对比输入和输出，即可找出变化的规律。</p>
<p>另外，对于面试官出的问题，如果没有示例，你可以举几个示例让面试官确认，这样可以保证自己理解正确。</p>
<h2 id="画图" tabindex="-1"><a class="header-anchor" href="#画图" aria-hidden="true">#</a> 画图</h2>
<p>遇到比较抽象的问题，拿纸币画图，把抽象变为形象，更容易找出突破口。
课程很多算法问题我们都是通过画图解决的。</p>
<h2 id="拆解" tabindex="-1"><a class="header-anchor" href="#拆解" aria-hidden="true">#</a> 拆解</h2>
<p>例如 <code v-pre>['1', '2', '3'].map(parseInt)</code> ，把代码拆解到最细的力度，就很容易定位问题。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(`s is ${s}, index is ${index}`)</span>
    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="识破本质" tabindex="-1"><a class="header-anchor" href="#识破本质" aria-hidden="true">#</a> 识破本质</h2>
<p>不要被问题看似复杂的表象所迷惑，要尝试去找出问题的本质，找出问题的考点。
例如下面对象属性赋值的问题，考点就是对象 key 的数据类型。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">123</span>
a<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'b'</span>
a<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'c'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
