<template><h1 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>手写 JS 深拷贝</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>这是一个很常见的问题，看似也很简单，但是如果考虑到“高质量代码”的要求，写起来还是挺麻烦的。<br>
别说写代码，就本节所有的情况你能否考虑全面，这都不一定。</p>
<h2 id="错误答案1" tabindex="-1"><a class="header-anchor" href="#错误答案1" aria-hidden="true">#</a> 错误答案1</h2>
<p>使用 <code v-pre>JSON.stringify</code> 和 <code v-pre>JSON.parse</code></p>
<ul>
<li>无法转换函数</li>
<li>无法转换 <code v-pre>Map</code> <code v-pre>Set</code></li>
<li>无法转换循环引用</li>
</ul>
<p>PS：其实普通对象使用 JSON API 的运算速度很快，但功能不全</p>
<h2 id="错误答案2" tabindex="-1"><a class="header-anchor" href="#错误答案2" aria-hidden="true">#</a> 错误答案2</h2>
<p>使用 <code v-pre>Object.assign</code> —— 这根本就不是深拷贝，是浅拷贝 ！！！</p>
<h2 id="错误答案3" tabindex="-1"><a class="header-anchor" href="#错误答案3" aria-hidden="true">#</a> 错误答案3</h2>
<p>只考虑了普通的对象和数组</p>
<ul>
<li>无法转换 <code v-pre>Map</code> <code v-pre>Set</code></li>
<li>无法转换循环引用</li>
</ul>
<h2 id="正确答案" tabindex="-1"><a class="header-anchor" href="#正确答案" aria-hidden="true">#</a> 正确答案</h2>
<p>参考代码 clone-deep.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 深拷贝
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token comment">// /**</span>
<span class="token comment">//  * 深拷贝 - 只考虑了简单的数组、对象</span>
<span class="token comment">//  * @param obj obj</span>
<span class="token comment">//  */</span>
<span class="token comment">// function cloneDeep(obj: any) {</span>
<span class="token comment">//     if (typeof obj !== 'object' || obj == null ) return obj</span>

<span class="token comment">//     let result: any</span>
<span class="token comment">//     if (obj instanceof Array) {</span>
<span class="token comment">//         result = []</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//         result = {}</span>
<span class="token comment">//     }</span>

<span class="token comment">//     for (let key in obj) {</span>
<span class="token comment">//         if (obj.hasOwnProperty(key)) {            </span>
<span class="token comment">//             result[key] = cloneDeep(obj[key]) // 递归调用</span>
<span class="token comment">//         }</span>
<span class="token comment">//     }</span>

<span class="token comment">//     return result</span>
<span class="token comment">// }</span>
<span class="token comment">// // 功能测试</span>
<span class="token comment">// const a: any = {</span>
<span class="token comment">//     set: new Set([10, 20, 30]),</span>
<span class="token comment">//     map: new Map([['x', 10], ['y', 20]])</span>
<span class="token comment">// }</span>
<span class="token comment">// a.self = a</span>
<span class="token comment">// console.log( cloneDeep(a) ) // 无法处理 Map Set 和循环引用</span>

<span class="token doc-comment comment">/**
 * 深拷贝
 * <span class="token keyword">@param</span> <span class="token parameter">obj</span> obj
 * <span class="token keyword">@param</span> <span class="token parameter">map</span> weakmap 为了避免循环引用
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">'object'</span> <span class="token operator">||</span> obj <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> <span class="token keyword">return</span> obj

    <span class="token comment">// 避免循环引用</span>
    <span class="token keyword">const</span> objFromMap <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>objFromMap<span class="token punctuation">)</span> <span class="token keyword">return</span> objFromMap

    <span class="token keyword">let</span> target<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> target<span class="token punctuation">)</span>

    <span class="token comment">// Map</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        obj<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> k<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> map<span class="token punctuation">)</span>
            <span class="token keyword">const</span> k1 <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> map<span class="token punctuation">)</span>
            target<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>k1<span class="token punctuation">,</span> v1<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Set</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Set</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        obj<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>v <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> map<span class="token punctuation">)</span>
            target<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Array</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        target <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Object</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">const</span> val1 <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> map<span class="token punctuation">)</span>
        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val1
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> target
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// const a: any = {</span>
<span class="token comment">//     set: new Set([10, 20, 30]),</span>
<span class="token comment">//     map: new Map([['x', 10], ['y', 20]]),</span>
<span class="token comment">//     info: {</span>
<span class="token comment">//         city: '北京'</span>
<span class="token comment">//     },</span>
<span class="token comment">//     fn: () => { console.info(100) }</span>
<span class="token comment">// }</span>
<span class="token comment">// a.self = a</span>
<span class="token comment">// console.log( cloneDeep(a) )</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>循环引用
Map Set 函数</p>
</template>
