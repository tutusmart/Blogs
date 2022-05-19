<template><h1 id="斐波那契数列" tabindex="-1"><a class="header-anchor" href="#斐波那契数列" aria-hidden="true">#</a> 斐波那契数列</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>用 Javascript 计算第 n 个斐波那契数列的值，注意时间复杂度。</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>斐波那契数列很好理解</p>
<ul>
<li><code v-pre>f(0) = 0</code></li>
<li><code v-pre>f(1) = 1</code></li>
<li><code v-pre>f(n) = f(n - 1) + f(n - 2)</code> 前两个值的和</li>
</ul>
<h2 id="递归计算" tabindex="-1"><a class="header-anchor" href="#递归计算" aria-hidden="true">#</a> 递归计算</h2>
<p>但这种方式会导致很多重复计算。<br>
时间复杂度是 <code v-pre>O(2^n)</code> ，爆炸式增长，不可用。（可以试试 <code v-pre>n: 100</code> ，程序会卡死）</p>
<p><img src="@source/fe/数据结构和算法/img/斐波那契数列.png" alt=""></p>
<h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2>
<p>不用递归，用循环，记录中间结果。时间复杂度降低到 <code v-pre>O(n)</code></p>
<h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h2>
<p>即，把一个大问题，拆解为不同的小问题，递归向下。</p>
<p>【注意】一般使用动态规划的思路（递归）分析问题，再转换为循环来解决问题。</p>
<h2 id="三大算法思维" tabindex="-1"><a class="header-anchor" href="#三大算法思维" aria-hidden="true">#</a> 三大算法思维</h2>
<ul>
<li>贪心（递归）</li>
<li>二分</li>
<li>动态规划</li>
</ul>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>使用循环的方式，参考 fibonacci.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 斐波那契数列
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token comment">// /**</span>
<span class="token comment">//  * 斐波那契数列（递归）</span>
<span class="token comment">//  * @param n n</span>
<span class="token comment">//  */</span>
<span class="token comment">// function fibonacci(n: number): number {</span>
<span class="token comment">//     if (n &lt;= 0) return 0</span>
<span class="token comment">//     if (n === 1) return 1</span>

<span class="token comment">//     return fibonacci(n - 1) + fibonacci(n - 2)</span>
<span class="token comment">// }</span>

<span class="token doc-comment comment">/**
 * 斐波那契数列（循环）
 * <span class="token keyword">@param</span> <span class="token parameter">n</span> n
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span>

    <span class="token keyword">let</span> n1 <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 记录 n-1 的结果</span>
    <span class="token keyword">let</span> n2 <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 记录 n-2 的结果</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> n1 <span class="token operator">+</span> n2

        <span class="token comment">// 记录中间结果</span>
        n2 <span class="token operator">=</span> n1
        n1 <span class="token operator">=</span> res
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// 功能测试</span>
<span class="token comment">// console.log(fibonacci(10))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>动态规划的思路</li>
<li>识别出时间复杂度</li>
</ul>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>青蛙跳台阶：一只青蛙，一次可以跳 1 个台阶，也可以跳 2 个台阶，问该青蛙跳上 n 级台阶，总共有多少种方式？</p>
<p>分析</p>
<ul>
<li><code v-pre>f(1) = 1</code> 跳 1 级台阶，只有一种方式</li>
<li><code v-pre>f(2) = 2</code> 跳 2 级台阶，有两种方式</li>
<li><code v-pre>f(n) = f(n - 1) + fn(n - 2)</code> 跳 n 级，可拆分为两个问题
<ul>
<li>第一次跳，要么 1 级，要么 2 级，只有这两种</li>
<li>第一次跳 1 级，剩下有 <code v-pre>f(n - 1)</code> 种方式</li>
<li>第一次跳 2 级，剩下有 <code v-pre>f(n - 2)</code> 种方式</li>
</ul>
</li>
</ul>
<p>看公式，和斐波那契数列一样。</p>
</template>
