<template><!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-19 20:19:24
-->
<h1 id="array-flatten" tabindex="-1"><a class="header-anchor" href="#array-flatten" aria-hidden="true">#</a> Array flatten</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>写一个函数，实现 Array flatten 扁平化，只减少一个嵌套层级<br>
例如输入 <code v-pre>[1, 2, [3, 4, [100, 200], 5], 6]</code> 返回 <code v-pre>[1, 2, 3, 4, [100, 200], 5, 6]</code></p>
<h2 id="解答" tabindex="-1"><a class="header-anchor" href="#解答" aria-hidden="true">#</a> 解答</h2>
<ul>
<li>遍历数组</li>
<li>如果 item 是数字，则累加</li>
<li>如果 item 是数组，则 forEach 累加其元素</li>
</ul>
<p>代码参考 array-flatten.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 数组扁平化
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 数组扁平化，使用 push
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flatten1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>n <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 数组扁平化，使用 concat
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flatten2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// const arr = [1, [2, [3], 4], 5]</span>
<span class="token comment">// console.info( flatten2(arr) )</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连环问-如果想要彻底扁平-忽略所有嵌套层级" tabindex="-1"><a class="header-anchor" href="#连环问-如果想要彻底扁平-忽略所有嵌套层级" aria-hidden="true">#</a> 连环问：如果想要彻底扁平，忽略所有嵌套层级？</h2>
<p>像 lodash <a href="https://www.lodashjs.com/docs/lodash.flattenDepth" target="_blank" rel="noopener noreferrer">flattenDepth<ExternalLinkIcon/></a> ，例如输入 <code v-pre>[1, 2, [3, 4, [100, 200], 5], 6]</code> 返回 <code v-pre>[1, 2, 3, 4, 100, 200, 5, 6]</code></p>
<p>最容易想到的解决方案就是<strong>递归</strong>，代码参考 array-flatten-deep.ts （注意单元测试，有全面的数据类型）</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 数组深度扁平化
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 数组深度扁平化，使用 push
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flattenDeep1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> flatItem <span class="token operator">=</span> <span class="token function">flattenDeep1</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// 递归</span>
            flatItem<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>n <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 数组深度扁平化，使用 concat
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flattenDeep2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> flatItem <span class="token operator">=</span> <span class="token function">flattenDeep2</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// 递归</span>
            res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>flatItem<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>


<span class="token comment">// // 功能测试</span>
<span class="token comment">// const arr = [1, [2, [3, ['a', [true], 'b'], 4], 5], 6]</span>
<span class="token comment">// console.info( flattenDeep2(arr) )</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种 hack 的方式 <code v-pre>toString</code> —— 但遇到引用类型的 item 就不行了。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
nums<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// '1,2,3,4,100,200,5,6'</span>

<span class="token comment">// 但万一数组元素是 {x: 100} 等引用类型，就不可以了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
