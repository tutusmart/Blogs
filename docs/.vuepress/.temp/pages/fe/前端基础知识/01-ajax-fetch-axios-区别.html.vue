<template><h1 id="ajax-fetch-axios-的区别" tabindex="-1"><a class="header-anchor" href="#ajax-fetch-axios-的区别" aria-hidden="true">#</a> ajax fetch axios 的区别</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>ajax fetch axios 的区别</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>三者根本没有可比性，不要被题目搞混了。要说出他们的本质</p>
<h2 id="传统-ajax" tabindex="-1"><a class="header-anchor" href="#传统-ajax" aria-hidden="true">#</a> 传统 ajax</h2>
<p>AJAX （几个单词首字母，按规范应该大写） - Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）<br>
即使用 JS 进行异步请求，是 Web2.0 的技术基础，从 2005 年左右开始发起。<br>
所以，这里的 AJAX 就是一个称呼，一个缩写。</p>
<p>基于当时 JS 规范，异步请求主要使用 XMLHttpRequest 这个底层 API 。<br>
所以，有一道常考的面试题：请用 XMLHttpRequest 实现 ajax</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> successFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里的函数异步执行，可参考之前 JS 基础中的异步模块</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">successFn</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> fetch</h2>
<p>fetch 是一个原生 API ，它和 XMLHttpRequest 一个级别。</p>
<p>fetch 和 XMLHttpRequest 的区别</p>
<ul>
<li>写法更加简洁</li>
<li>原生支持 promise</li>
</ul>
<p>面试题：用 fetch 实现一个 ajax</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h2>
<p>axios 是一个<a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer">第三方库<ExternalLinkIcon/></a>，随着 Vue 一起崛起。它和 jquery 一样（jquery 也有 ajax 功能）。</p>
<p>axios 内部可以用 XMLHttpRequest 或者 fetch 实现。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>ajax 是一种技术称呼，不是具体的 API 和库</li>
<li>fetch 是新的异步请求 API ，可代替 XMLHttpRequest</li>
<li>axios 是第三方库</li>
</ul>
<h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>注意 库 和 API 的区别</li>
<li>实际项目要用库，尽量不要自己造轮子（除非有其他目的）</li>
</ul>
<h2 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h2>
<p>库 和 框架 有什么区别？</p>
</template>
