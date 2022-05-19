<template><!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: 
 * @LastEditTime: 2022-05-19 20:57:28
-->
<h1 id="括号匹配" tabindex="-1"><a class="header-anchor" href="#括号匹配" aria-hidden="true">#</a> 括号匹配</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>一个字符串内部可能包含 <code v-pre>{ }</code> <code v-pre>( )</code> <code v-pre>[ ]</code> 三种括号，判断该字符串是否是括号匹配的。<br>
如 <code v-pre>(a{b}c)</code> 就是匹配的， <code v-pre>{a(b</code> 和 <code v-pre>{a(b}c)</code> 就是不匹配的。</p>
<h2 id="栈-stack" tabindex="-1"><a class="header-anchor" href="#栈-stack" aria-hidden="true">#</a> 栈 Stack</h2>
<p>该题目的考察目的很明确 —— 栈</p>
<p>栈，先进后出，基本的 API</p>
<ul>
<li>push</li>
<li>pop</li>
<li>length</li>
</ul>
<p>和栈相关的数据结构（后面讲）</p>
<ul>
<li>队列，先进先出</li>
<li>堆，如常说的“堆栈模型”</li>
</ul>
<h2 id="逻辑结构和物理结构" tabindex="-1"><a class="header-anchor" href="#逻辑结构和物理结构" aria-hidden="true">#</a> 逻辑结构和物理结构</h2>
<p>栈和数组有什么区别？—— 没有可比性，两者不一个级别。就像：房子和石头有什么区别？</p>
<p>栈是一种逻辑结构，一种理论模型，它可以脱离编程语言单独讲。<br>
数组是一种物理结构，代码的实现，不同的语言，数组语法是不一样的。</p>
<p>栈可以用数组来表达，也可以用链表来表达，也可以自定义 <code v-pre>class MyStack {...}</code> 自己实现…<br>
在 JS 中，栈一般情况下用数组实现。</p>
<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2>
<ul>
<li>遇到左括号 <code v-pre>{ ( [</code> 则压栈</li>
<li>遇到右括号 <code v-pre>} ) ]</code> 则判断栈顶，相同的则出栈</li>
<li>最后判断栈 length 是否为 0</li>
</ul>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>参考 match-brackets.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 括号匹配
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 判断左右括号是否匹配
 * <span class="token keyword">@param</span> <span class="token parameter">left</span> 左括号
 * <span class="token keyword">@param</span> <span class="token parameter">right</span> 右括号
 */</span>
<span class="token keyword">function</span> <span class="token function">isMatch</span><span class="token punctuation">(</span>left<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token string">'{'</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">===</span> <span class="token string">'}'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token string">'['</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">===</span> <span class="token string">']'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token string">'('</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">===</span> <span class="token string">')'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 判断是否括号匹配
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> str
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">matchBracket</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> str<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>

    <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> leftSymbols <span class="token operator">=</span> <span class="token string">'{[('</span>
    <span class="token keyword">const</span> rightSymbols <span class="token operator">=</span> <span class="token string">'}])'</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> s <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>leftSymbols<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 左括号，压栈</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>rightSymbols<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 右括号，判断栈顶（是否出栈）</span>
            <span class="token keyword">const</span> top <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isMatch</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// const str = '{a(b[c]d)e}f'</span>
<span class="token comment">// console.info(123123, matchBracket(str))</span>
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>
## 划重点

<span class="token operator">-</span> 栈
<span class="token operator">-</span> 逻辑结构和物理结构
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
