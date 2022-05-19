<template><h1 id="_1-10000-之间的对称数-回文" tabindex="-1"><a class="header-anchor" href="#_1-10000-之间的对称数-回文" aria-hidden="true">#</a> 1-10000 之间的对称数（回文）</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>打印 1-10000 之间的对称数</p>
<h2 id="使用数组反转" tabindex="-1"><a class="header-anchor" href="#使用数组反转" aria-hidden="true">#</a> 使用数组反转</h2>
<ul>
<li>数字转换为字符串</li>
<li>字符串转换为数组 reverse ，再 join 生成字符串</li>
<li>比较前后的字符串</li>
</ul>
<h2 id="使用字符串头尾比较" tabindex="-1"><a class="header-anchor" href="#使用字符串头尾比较" aria-hidden="true">#</a> 使用字符串头尾比较</h2>
<ul>
<li>数字转换为字符串</li>
<li>字符串头尾比较</li>
</ul>
<p>还可以使用<strong>栈</strong>（但栈会用到数组，性能不如直接操作字符串）</p>
<ul>
<li>数字转换为字符串，求长度</li>
<li>如果长度是偶数，则用栈比较</li>
<li>如果长度是奇数，则忽略中间的数字，其他的用栈比较</li>
</ul>
<h2 id="生成反转数" tabindex="-1"><a class="header-anchor" href="#生成反转数" aria-hidden="true">#</a> 生成反转数</h2>
<ul>
<li>通过 <code v-pre>%</code> 和 <code v-pre>Math.floor</code> 将数字生成一个反转数</li>
<li>比较前后的数字</li>
</ul>
<h2 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h2>
<p>时间复杂度看似相当，都是 <code v-pre>O(n)</code></p>
<p>但 方案1 涉及到了数组的转换和操作，就需要耗费大量的时间</p>
<ul>
<li>数组 reverse 需要时间</li>
<li>数组和字符串的转换需要时间</li>
</ul>
<p>方案 2 3 比较，数字操作最快。电脑的原型就是计算器，所以处理数字是最快的。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>第三种方案，参考 palindrome-number.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 对称数
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 查询 1-max 的所有对称数（数组反转）
 * <span class="token keyword">@param</span> <span class="token parameter">max</span> 最大值
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findPalindromeNumbers1</span><span class="token punctuation">(</span>max<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> max<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 转换为字符串，转换为数组，再反转，比较</span>
        <span class="token keyword">const</span> s <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">===</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 查询 1-max 的所有对称数（字符串前后比较）
 * <span class="token keyword">@param</span> <span class="token parameter">max</span> 最大值
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findPalindromeNumbers2</span><span class="token punctuation">(</span>max<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> max<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> s <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span>length

        <span class="token comment">// 字符串头尾比较</span>
        <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">let</span> startIndex <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 字符串开始</span>
        <span class="token keyword">let</span> endIndex <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// 字符串结束</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>startIndex <span class="token operator">&lt;</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>startIndex<span class="token punctuation">]</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>endIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                flag <span class="token operator">=</span> <span class="token boolean">false</span>
                <span class="token keyword">break</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// 继续比较</span>
                startIndex<span class="token operator">++</span>
                endIndex<span class="token operator">--</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 查询 1-max 的所有对称数（翻转数字）
 * <span class="token keyword">@param</span> <span class="token parameter">max</span> 最大值
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findPalindromeNumbers3</span><span class="token punctuation">(</span>max<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> max<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> n <span class="token operator">=</span> i
        <span class="token keyword">let</span> rev <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 存储翻转数</span>

        <span class="token comment">// 生成翻转数</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            rev <span class="token operator">=</span> rev <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> n <span class="token operator">%</span> <span class="token number">10</span>
            n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> rev<span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>


<span class="token comment">// 功能测试</span>
<span class="token comment">// console.info(findPalindromeNumbers3(200))</span>

<span class="token comment">// 性能测试</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">'findPalindromeNumbers1'</span><span class="token punctuation">)</span>
<span class="token function">findPalindromeNumbers1</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">'findPalindromeNumbers1'</span><span class="token punctuation">)</span> <span class="token comment">// 408ms</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">'findPalindromeNumbers2'</span><span class="token punctuation">)</span>
<span class="token function">findPalindromeNumbers2</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">'findPalindromeNumbers2'</span><span class="token punctuation">)</span> <span class="token comment">// 53ms</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">'findPalindromeNumbers3'</span><span class="token punctuation">)</span>
<span class="token function">findPalindromeNumbers3</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">'findPalindromeNumbers3'</span><span class="token punctuation">)</span> <span class="token comment">// 42ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>尽量不要使用内置 API ，不好判断时间复杂度</li>
<li>尽量不要转换数据格式，尤其注意数组（有序结构，不能乱来～）</li>
<li>数字操作最快</li>
</ul>
</template>
