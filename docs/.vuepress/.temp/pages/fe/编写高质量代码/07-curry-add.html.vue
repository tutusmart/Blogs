<template><!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: 
 * @LastEditTime: 2022-05-19 20:12:16
-->
<h1 id="curry-add" tabindex="-1"><a class="header-anchor" href="#curry-add" aria-hidden="true">#</a> curry add</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>写一个 <code v-pre>curry</code> 函数，可以把其他函数转为 curry 函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c <span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>

<span class="token keyword">const</span> curryAdd <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span>
<span class="token function">curryAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解答" tabindex="-1"><a class="header-anchor" href="#解答" aria-hidden="true">#</a> 解答</h2>
<p>代码参考 curry.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> curry add
 * <span class="token keyword">@author</span> 双越
 */</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span>fn<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fnArgsLength <span class="token operator">=</span> fn<span class="token punctuation">.</span>length <span class="token comment">// 传入函数的参数长度</span>
    <span class="token keyword">let</span> args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">// ts 中，独立的函数，this 需要声明类型</span>
    <span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token operator">...</span>newArgs<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 积累参数</span>
        args <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token operator">...</span>args<span class="token punctuation">,</span>
            <span class="token operator">...</span>newArgs
        <span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> fnArgsLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 参数不够，返回函数</span>
            <span class="token keyword">return</span> calc
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 参数够了，返回执行结果</span>
            <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> fnArgsLength<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> calc
<span class="token punctuation">}</span>

<span class="token comment">// function add(a: number, b: number, c: number): number {</span>
<span class="token comment">//     return a + b + c</span>
<span class="token comment">// }</span>
<span class="token comment">// // add(10, 20, 30) // 60</span>

<span class="token comment">// const curryAdd = curry(add)</span>
<span class="token comment">// const res = curryAdd(10)(20)(30) // 60</span>
<span class="token comment">// console.info(res)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>判断参数长度</li>
<li>中间态返回函数，最后返回执行结果</li>
<li>如用 this 慎用箭头函数</li>
</ul>
</template>
