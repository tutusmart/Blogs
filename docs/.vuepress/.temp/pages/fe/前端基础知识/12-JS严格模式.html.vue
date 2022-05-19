<template><h1 id="js-严格模式和非严格模式" tabindex="-1"><a class="header-anchor" href="#js-严格模式和非严格模式" aria-hidden="true">#</a> JS 严格模式和非严格模式</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>JS 严格模式和非严格模式的区别</p>
<h2 id="设计初衷" tabindex="-1"><a class="header-anchor" href="#设计初衷" aria-hidden="true">#</a> 设计初衷</h2>
<p>Javascript 设计之初，有很多不合理、不严谨、不安全之处，例如变量未定义即可使用 <code v-pre>n = 100</code>。严格模式用于规避这些问题。</p>
<p>而现在 ES 规范已经普及，从语法上已经规避了这些问题。</p>
<h2 id="开启严格模式" tabindex="-1"><a class="header-anchor" href="#开启严格模式" aria-hidden="true">#</a> 开启严格模式</h2>
<p>代码（或一个函数）一开始插入一行 <code v-pre>'use strict'</code> 即可开启严格模式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span> <span class="token comment">// 全局开启</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">'use strict'</span> <span class="token comment">// 某个函数开启</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下，开发环境用 ES 或者 Typescript ，打包出的 js 代码使用严格模式</p>
<h2 id="严格模式的不同" tabindex="-1"><a class="header-anchor" href="#严格模式的不同" aria-hidden="true">#</a> 严格模式的不同</h2>
<p>严格模式的细则有很多，这里总结一些常用常见的</p>
<h3 id="全局变量必须声明" tabindex="-1"><a class="header-anchor" href="#全局变量必须声明" aria-hidden="true">#</a> 全局变量必须声明</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span>
n <span class="token operator">=</span> <span class="token number">10</span> <span class="token comment">// ReferenceError: n is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="禁止使用-with" tabindex="-1"><a class="header-anchor" href="#禁止使用-with" aria-hidden="true">#</a> 禁止使用 <code v-pre>with</code></h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span>
<span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Uncaught SyntaxError: Strict mode code may not include a with statement</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-eval-作用域" tabindex="-1"><a class="header-anchor" href="#创建-eval-作用域" aria-hidden="true">#</a> 创建 eval 作用域</h3>
<p>正常模式下，JS 只有两种变量作用域：全局作用域 + 函数作用域。严格模式下，JS 增加了 eval 作用域。</p>
<p><strong>chrome 隐私模式下执行这段代码？？？</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">10</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">'var x = 20; console.log(x)'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="禁止-this-指向全局作用域" tabindex="-1"><a class="header-anchor" href="#禁止-this-指向全局作用域" aria-hidden="true">#</a> 禁止 this 指向全局作用域</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'this'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数参数不能重名" tabindex="-1"><a class="header-anchor" href="#函数参数不能重名" aria-hidden="true">#</a> 函数参数不能重名</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'use strict'</span>

<span class="token comment">// Uncaught SyntaxError: Duplicate parameter name not allowed in this context</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>全局变量必须声明</li>
<li>禁止使用 with</li>
<li>创建 eval 作用域</li>
<li>禁止 this 指向全局作用域</li>
<li>函数参数不能重名</li>
</ul>
</template>
