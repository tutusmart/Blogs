<template><!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: 
 * @LastEditTime: 2022-05-19 20:12:28
-->
<h1 id="手写-instanceof" tabindex="-1"><a class="header-anchor" href="#手写-instanceof" aria-hidden="true">#</a> 手写 instanceof</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>instanceof 的原理是什么，请用代码来表示</p>
<h2 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h2>
<p><img src="@source/fe/编写高质量代码/img/原型链.png" alt=""></p>
<h2 id="instanceof-原理" tabindex="-1"><a class="header-anchor" href="#instanceof-原理" aria-hidden="true">#</a> instanceof 原理</h2>
<p>例如 <code v-pre>a instanceof b</code> 就是：顺着 <code v-pre>a</code> 的 <code v-pre>__proto__</code> 链向上找，能否找到 <code v-pre>b.prototype</code></p>
<p>代码参考 instanceof.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 手写 instanceof
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 自定义 instanceof
 * <span class="token keyword">@param</span> <span class="token parameter">instance</span> instance
 * <span class="token keyword">@param</span> <span class="token parameter">origin</span> class or function
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span>instance<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> origin<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// null undefined</span>

    <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> instance
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">!==</span> <span class="token string">'object'</span> <span class="token operator">&amp;&amp;</span> type <span class="token operator">!==</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 值类型</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> tempInstance <span class="token operator">=</span> instance <span class="token comment">// 为了防止修改 instance</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>tempInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tempInstance<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> origin<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// 配上了</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 未匹配</span>
        tempInstance <span class="token operator">=</span> tempInstance<span class="token punctuation">.</span>__proto__ <span class="token comment">// 顺着原型链，往上找</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// console.info( myInstanceof({}, Object) )</span>
<span class="token comment">// console.info( myInstanceof([], Object) )</span>
<span class="token comment">// console.info( myInstanceof([], Array) )</span>
<span class="token comment">// console.info( myInstanceof({}, Array) )</span>
<span class="token comment">// console.info( myInstanceof('abc', String) )</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>原型链</li>
<li>循环判断</li>
</ul>
</template>
