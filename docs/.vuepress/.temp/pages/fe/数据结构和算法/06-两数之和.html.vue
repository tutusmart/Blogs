<template><h1 id="两数之和" tabindex="-1"><a class="header-anchor" href="#两数之和" aria-hidden="true">#</a> 两数之和</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>输入一个递增的数字数组，和一个数字 <code v-pre>n</code> 。求和等于 <code v-pre>n</code> 的两个数字。<br>
例如输入 <code v-pre>[1, 2, 4, 7, 11, 15]</code> 和 <code v-pre>15</code> ，返回两个数 <code v-pre>[4, 11]</code></p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>注意题目的要点</p>
<ul>
<li>递增，从小打大排序</li>
<li>只需要两个数字，而不是多个</li>
</ul>
<h2 id="常规思路" tabindex="-1"><a class="header-anchor" href="#常规思路" aria-hidden="true">#</a> 常规思路</h2>
<p>嵌套循环，找个一个数，然后再遍历剩余的数，求和，判断。</p>
<p>时间复杂度 <code v-pre>O(n^2)</code> ，基本不可用。</p>
<h2 id="利用递增的特性" tabindex="-1"><a class="header-anchor" href="#利用递增的特性" aria-hidden="true">#</a> 利用递增的特性</h2>
<p>数组是递增的</p>
<ul>
<li>随便找两个数</li>
<li>如果和大于 n ，则需要向前寻找</li>
<li>如果和小于 n ，则需要向后寻找 —— <strong>二分法</strong></li>
</ul>
<p>双指针（指针就是索引，如数组的 index）</p>
<ul>
<li>i 指向头，j 指向尾， 求 i + j 的和</li>
<li>和如果大于 n ，则说明需要减少，则 j 向前移动（递增特性）</li>
<li>和如果小于 n ，则说明需要增加，则 i 向后移动（递增特性）</li>
</ul>
<p>时间复杂度降低到 <code v-pre>O(n)</code></p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>方案二，参考 two-numbers-sum.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 两数之和
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 寻找和为 n 的两个数（嵌套循环）
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 * <span class="token keyword">@param</span> <span class="token parameter">n</span> n
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findTowNumbers1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token comment">// O(n^2)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> n1 <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// 是否得到了结果</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> n2 <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>n1 <span class="token operator">+</span> n2 <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
                res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span>
                flag <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token keyword">break</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 查找和为 n 的两个数（双指针）
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 * <span class="token keyword">@param</span> <span class="token parameter">n</span> n
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findTowNumbers2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 头</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// 尾</span>

    <span class="token comment">// O(n)</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> n1 <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">const</span> n2 <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
        <span class="token keyword">const</span> sum <span class="token operator">=</span> n1 <span class="token operator">+</span> n2

        <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">></span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// sum 大于 n ，则 j 要向前移动</span>
            j<span class="token operator">--</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// sum 小于 n ，则 i 要向后移动</span>
            i<span class="token operator">++</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 相等</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span>
            <span class="token keyword">break</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span>
<span class="token comment">// console.info(findTowNumbers2(arr, 15))</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">'findTowNumbers1'</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">findTowNumbers1</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">'findTowNumbers1'</span><span class="token punctuation">)</span> <span class="token comment">// 730ms</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">'findTowNumbers2'</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">findTowNumbers2</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">'findTowNumbers2'</span><span class="token punctuation">)</span> <span class="token comment">// 102</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>有序数据，要善用二分法</li>
<li>优化嵌套循环，可以考虑“双指针”</li>
</ul>
</template>
