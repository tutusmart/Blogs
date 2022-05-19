<template><!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: 
 * @LastEditTime: 2022-05-19 20:00:28
-->
<h1 id="类型判断" tabindex="-1"><a class="header-anchor" href="#类型判断" aria-hidden="true">#</a> 类型判断</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>实现一个 <code v-pre>getType</code> 函数，传入一个变量，能准确的获取它的类型。
如 <code v-pre>number</code> <code v-pre>string</code> <code v-pre>function</code> <code v-pre>object</code> <code v-pre>array</code> <code v-pre>map</code> <code v-pre>regexp</code> 等。</p>
<h2 id="类型判断-1" tabindex="-1"><a class="header-anchor" href="#类型判断-1" aria-hidden="true">#</a> 类型判断</h2>
<p>常规的类型判断一般用 <code v-pre>typeof</code> 和 <code v-pre>instanceof</code> ，但这俩也有一些缺点</p>
<ul>
<li><code v-pre>typeof</code> 无法继续区分 <code v-pre>object</code> 类型</li>
<li><code v-pre>instanceof</code> 需要知道构造函数，即需要两个输入</li>
</ul>
<h2 id="枚举不是好方法" tabindex="-1"><a class="header-anchor" href="#枚举不是好方法" aria-hidden="true">#</a> 枚举不是好方法</h2>
<p>你可能觉得 <code v-pre>typeof</code> 和 <code v-pre>instanceof</code> 结合起来可以判断，枚举所有的类型。<br>
这并不是一个好方法，因为<strong>手动枚举是不靠谱的</strong>，不具备完整性。<br>
第一，你有可能忽略某些类型，如；第二，ES 有会继续增加新的类型，如 <code v-pre>Symbol</code> <code v-pre>BigInt</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'array'</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x instance <span class="token keyword">of</span> Map<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'map'</span>
        <span class="token comment">// 继续枚举...</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">typeof</span> x
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#使用-object-prototype-tostring" aria-hidden="true">#</a> 使用 <code v-pre>Object.prototype.toString</code></h2>
<p>注意，必须用 <code v-pre>Object.prototype.toString</code> ，不可以直接用 <code v-pre>toString</code>。后者可能是子类重写的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// '1,2' （ 这样使用的其实是 Array.prototype.toString ）</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// '[object Array]'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>代码参考 get-type.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 获取数据类型
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 获取详细的数据类型
 * <span class="token keyword">@param</span> <span class="token parameter">x</span> x
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getType</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> originType <span class="token operator">=</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// '[object String]'</span>
    <span class="token keyword">const</span> spaceIndex <span class="token operator">=</span> originType<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> type <span class="token operator">=</span> originType<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>spaceIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 'String'</span>
    <span class="token keyword">return</span> type<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 'string'</span>
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// console.info( getType(null) ) // 'null'</span>
<span class="token comment">// console.info( getType(undefined) )</span>
<span class="token comment">// console.info( getType(100) )</span>
<span class="token comment">// console.info( getType('abc') )</span>
<span class="token comment">// console.info( getType(true) )</span>
<span class="token comment">// console.info( getType(Symbol()) )</span>
<span class="token comment">// console.info( getType({}) )</span>
<span class="token comment">// console.info( getType([]) )</span>
<span class="token comment">// console.info( getType(() => {}) )</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
