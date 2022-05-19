<template><h1 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>用 Javascript 实现二分查找（针对有序数组），说明它的时间复杂度</p>
<h2 id="一个故事" tabindex="-1"><a class="header-anchor" href="#一个故事" aria-hidden="true">#</a> 一个故事</h2>
<p>N 年前，百度，一个复杂的后台系统出现了问题，因为太大找不到问题所在。
一个工程师，使用二分法，很快找到了问题原因。</p>
<p>无论多么大的数据量，一旦有了二分，便可快速搞定。<br>
二分法，是算法的一个重要思维。</p>
<p>但二分法有一个条件：需要有序数据。</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>二分查找是一种固定的算法，没什么可分析的。</p>
<p>两种实现思路</p>
<ul>
<li>递归 - 代码逻辑更加简洁</li>
<li>循环 - 性能更好（就调用一次函数，而递归需要调用很多次函数，创建函数作用域会消耗时间）</li>
</ul>
<p>时间复杂度 <code v-pre>O(logn)</code></p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>参考 binary-search.ts 和 binary-search.test.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 二分查找
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 二分查找（循环）
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 * <span class="token keyword">@param</span> <span class="token parameter">target</span> target
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">binarySearch1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

    <span class="token keyword">let</span> startIndex <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 开始位置</span>
    <span class="token keyword">let</span> endIndex <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// 结束位置</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>startIndex <span class="token operator">&lt;=</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> midIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>startIndex <span class="token operator">+</span> endIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> midValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>midIndex<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 目标值较小，则继续在左侧查找</span>
            endIndex <span class="token operator">=</span> midIndex <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">></span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 目标值较大，则继续在右侧查找</span>
            startIndex <span class="token operator">=</span> midIndex <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 相等，返回</span>
            <span class="token keyword">return</span> midIndex
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 二分查找（递归）
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 * <span class="token keyword">@param</span> <span class="token parameter">target</span> target
 * <span class="token keyword">@param</span> <span class="token parameter">startIndex</span> start index
 * <span class="token keyword">@param</span> <span class="token parameter">endIndex</span> end index
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">binarySearch2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> startIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> endIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

    <span class="token comment">// 开始和结束的范围</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> startIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>endIndex <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> endIndex <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token comment">// 如果 start 和 end 相遇，则结束</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">></span> endIndex<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

    <span class="token comment">// 中间位置</span>
    <span class="token keyword">const</span> midIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>startIndex <span class="token operator">+</span> endIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> midValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>midIndex<span class="token punctuation">]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 目标值较小，则继续在左侧查找</span>
        <span class="token keyword">return</span> <span class="token function">binarySearch2</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> target<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> midIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">></span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 目标值较大，则继续在右侧查找</span>
        <span class="token keyword">return</span> <span class="token function">binarySearch2</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> target<span class="token punctuation">,</span> midIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> endIndex<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 相等，返回</span>
        <span class="token keyword">return</span> midIndex
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// // // 功能测试</span>
<span class="token comment">// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]</span>
<span class="token comment">// const target = 40</span>
<span class="token comment">// // console.info(binarySearch2(arr, target))</span>

<span class="token comment">// // 性能测试</span>
<span class="token comment">// console.time('binarySearch1')</span>
<span class="token comment">// for (let i = 0; i &lt; 100 * 10000; i++) {</span>
<span class="token comment">//     binarySearch1(arr, target)</span>
<span class="token comment">// }</span>
<span class="token comment">// console.timeEnd('binarySearch1') // 17ms</span>
<span class="token comment">// console.time('binarySearch2')</span>
<span class="token comment">// for (let i = 0; i &lt; 100 * 10000; i++) {</span>
<span class="token comment">//     binarySearch2(arr, target)</span>
<span class="token comment">// }</span>
<span class="token comment">// console.timeEnd('binarySearch2') // 34ms</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>有序，就一定要想到二分</li>
<li>二分的时间复杂度必定包含 <code v-pre>O(logn)</code></li>
</ul>
</template>
