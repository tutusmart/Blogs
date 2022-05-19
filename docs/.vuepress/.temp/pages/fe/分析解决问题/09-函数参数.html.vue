<template><h1 id="函数参数" tabindex="-1"><a class="header-anchor" href="#函数参数" aria-hidden="true">#</a> 函数参数</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>运行以下代码，会输出什么</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">changeArg</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> x <span class="token operator">=</span> <span class="token number">200</span> <span class="token punctuation">}</span>

<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">100</span>
<span class="token function">changeArg</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'changeArg num'</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'双越'</span> <span class="token punctuation">}</span>
<span class="token function">changeArg</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'changeArg obj'</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">changeArgProp</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'张三'</span>
<span class="token punctuation">}</span>
<span class="token function">changeArgProp</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'changeArgProp obj'</span><span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>调用函数，传递参数 —— <strong>赋值</strong>传递</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 继续操作 x y</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'双越'</span> <span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码相当于</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'双越'</span> <span class="token punctuation">}</span>

<span class="token keyword">let</span> x <span class="token operator">=</span> num
<span class="token keyword">let</span> y <span class="token operator">=</span> obj
<span class="token comment">// 继续操作 x y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题" tabindex="-1"><a class="header-anchor" href="#解题" aria-hidden="true">#</a> 解题</h2>
<p>执行题目代码分别输出 <code v-pre>100  {name: '双越'}  {name: '张三'}</code></p>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展：</h2>
<p>eslint 规则建议：函数参数当作一个 <code v-pre>const</code> 常量，不要修改函数参数 —— 这样代码更易读</p>
</template>
