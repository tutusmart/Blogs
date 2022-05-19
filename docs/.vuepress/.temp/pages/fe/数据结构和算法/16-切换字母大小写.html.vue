<template><h1 id="切换字母大小写" tabindex="-1"><a class="header-anchor" href="#切换字母大小写" aria-hidden="true">#</a> 切换字母大小写</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>切换字母大小写，输入 <code v-pre>'aBc'</code> 输出 <code v-pre>'AbC'</code></p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>需要判断字母是大写还是小写</p>
<ul>
<li>正则表达式</li>
<li><code v-pre>charCodeAt</code> 获取 ASCII 码（ASCII 码表，可以网上搜索）</li>
</ul>
<p>性能分析</p>
<ul>
<li>正则表达式性能较差</li>
<li>ASCII 码性能较好</li>
</ul>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>使用 <code v-pre>charCodeAt</code> ，参考代码 switch-case.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 切换字母大小写
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 切换字母大小写（正则表达式）
 * <span class="token keyword">@param</span> <span class="token parameter">s</span> str
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">switchLetterCase1</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">''</span>

    <span class="token keyword">const</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">const</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span>
    <span class="token keyword">const</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Z]</span><span class="token regex-delimiter">/</span></span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reg1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>reg2<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 切换字母大小写（ASCII 编码）
 * <span class="token keyword">@param</span> <span class="token parameter">s</span> str
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">switchLetterCase2</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">''</span>

    <span class="token keyword">const</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">const</span> code <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">>=</span> <span class="token number">65</span> <span class="token operator">&amp;&amp;</span> code <span class="token operator">&lt;=</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">>=</span> <span class="token number">97</span> <span class="token operator">&amp;&amp;</span> code <span class="token operator">&lt;=</span> <span class="token number">122</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// const str = '100aBcD$#xYz'</span>
<span class="token comment">// console.info(switchLetterCase2(str))</span>

<span class="token comment">// // 性能测试</span>
<span class="token comment">// const str = '100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz'</span>
<span class="token comment">// console.time('switchLetterCase1')</span>
<span class="token comment">// for (let i = 0; i &lt; 10 * 10000; i++) {</span>
<span class="token comment">//     switchLetterCase1(str)</span>
<span class="token comment">// }</span>
<span class="token comment">// console.timeEnd('switchLetterCase1') // 436ms</span>

<span class="token comment">// console.time('switchLetterCase2')</span>
<span class="token comment">// for (let i = 0; i &lt; 10 * 10000; i++) {</span>
<span class="token comment">//     switchLetterCase2(str)</span>
<span class="token comment">// }</span>
<span class="token comment">// console.timeEnd('switchLetterCase2') // 210ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>慎用正则表达式</li>
<li>ASCII 码</li>
</ul>
</template>
