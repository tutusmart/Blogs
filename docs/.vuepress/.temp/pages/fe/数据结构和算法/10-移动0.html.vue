<template><!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: 
 * @LastEditTime: 2022-05-19 21:03:47
-->
<h1 id="移动-0" tabindex="-1"><a class="header-anchor" href="#移动-0" aria-hidden="true">#</a> 移动 0</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>定义一个函数，将数组中所有的 <code v-pre>0</code> 都移动到末尾，例如输入 <code v-pre>[1, 0, 3, 0, 11, 0]</code> 输出 <code v-pre>[1, 3, 11, 0, 0, 0]</code>。要求：</p>
<ul>
<li>只移动 <code v-pre>0</code> ，其他数字顺序不变</li>
<li>考虑时间复杂度</li>
<li>必须在原数组就行操作</li>
</ul>
<h2 id="如果不限制-必须在原数组修改" tabindex="-1"><a class="header-anchor" href="#如果不限制-必须在原数组修改" aria-hidden="true">#</a> 如果不限制“必须在原数组修改”</h2>
<ul>
<li>定义 <code v-pre>part1</code> <code v-pre>part2</code> 两个空数组</li>
<li>遍历数组，非 <code v-pre>0</code> push 到 <code v-pre>part1</code> ，<code v-pre>0</code> push 到 <code v-pre>part2</code></li>
<li>返回 <code v-pre>part1.concat(part2)</code></li>
</ul>
<p>时间复杂度 <code v-pre>O(n)</code> 空间复杂度 <code v-pre>O(n)</code> ，</p>
<p>所以，遇到类似问题，要提前问面试官：<strong>是否能在原数组基础上修改？</strong></p>
<h2 id="传统方式" tabindex="-1"><a class="header-anchor" href="#传统方式" aria-hidden="true">#</a> 传统方式</h2>
<p>思路</p>
<ul>
<li>遍历数组</li>
<li>遇到 <code v-pre>0</code> 则 push 到数组末尾</li>
<li>然后用 splice 截取掉当前元素</li>
</ul>
<p>分析性能</p>
<ul>
<li>空间复杂度没有问题 <code v-pre>O(1)</code></li>
<li>时间复杂度
<ul>
<li>看似是 <code v-pre>O(n)</code></li>
<li>但实际上 <code v-pre>splice</code> 和 <code v-pre>unshift</code> 一样，修改数组结构，时间复杂度是 <code v-pre>O(n)</code></li>
<li>总体看来时间复杂度是 <code v-pre>O(n^2)</code>，不可用</li>
</ul>
</li>
</ul>
<p>【注意】网上有很多人对这种方式点赞，切不可随意从众，要对思考！</p>
<h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h2>
<p>思路（可画图解释，参考视频讲解）</p>
<ul>
<li>指针1 指向第一个 0 ，指针2 指向第一个非 0</li>
<li>把指针1 和 指针2 进行交换</li>
<li>指针向后移</li>
</ul>
<p>性能分析</p>
<ul>
<li>时间复杂度 <code v-pre>O(n)</code></li>
<li>空间复杂度 <code v-pre>O(1)</code></li>
</ul>
<p>性能测试，实际对比差距非常大。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>使用双指针，保证时间复杂度。参考 move-zero.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 移动 0 到数组末尾
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 移动 0 到数组的末尾（嵌套循环）
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> number arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">moveZero1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token keyword">let</span> zeroLength <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token comment">// O(n^2)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length <span class="token operator">-</span> zeroLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
            arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 本身就有 O(n)</span>
            i<span class="token operator">--</span> <span class="token comment">// 数组截取了一个元素，i 要递减，否则连续 0 就会有错误</span>
            zeroLength<span class="token operator">++</span> <span class="token comment">// 累加 0 的长度</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 移动 0 到数组末尾（双指针）
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> number arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">moveZero2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token keyword">let</span> i
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// 指向第一个 0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 第一个 0</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                j <span class="token operator">=</span> i
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 交换</span>
            <span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
            arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> n

            j<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// const arr = [1, 0, 3, 4, 0, 0, 11, 0]</span>
<span class="token comment">// moveZero2(arr)</span>
<span class="token comment">// console.log(arr)</span>

<span class="token comment">// const arr1 = []</span>
<span class="token comment">// for (let i = 0; i &lt; 20 * 10000; i++) {</span>
<span class="token comment">//     if (i % 10 === 0) {</span>
<span class="token comment">//         arr1.push(0)</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//         arr1.push(i)</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token comment">// console.time('moveZero1')</span>
<span class="token comment">// moveZero1(arr1)</span>
<span class="token comment">// console.timeEnd('moveZero1') // 262ms</span>

<span class="token comment">// const arr2 = []</span>
<span class="token comment">// for (let i = 0; i &lt; 20 * 10000; i++) {</span>
<span class="token comment">//     if (i % 10 === 0) {</span>
<span class="token comment">//         arr2.push(0)</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//         arr2.push(i)</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token comment">// console.time('moveZero2')</span>
<span class="token comment">// moveZero2(arr2)</span>
<span class="token comment">// console.timeEnd('moveZero2') // 3ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>咨询面试官，确认是否必须要修改原数据？</li>
<li>数组是有序结构，不能随意 <code v-pre>splice</code> <code v-pre>unshift</code></li>
<li>双指针的思路</li>
</ul>
</template>
