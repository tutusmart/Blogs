<template><!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: 
 * @LastEditTime: 2022-05-19 20:12:48
-->
<h1 id="手写函数-bind" tabindex="-1"><a class="header-anchor" href="#手写函数-bind" aria-hidden="true">#</a> 手写函数 bind</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请手写实现函数 bind</p>
<h2 id="bind-应用" tabindex="-1"><a class="header-anchor" href="#bind-应用" aria-hidden="true">#</a> bind 应用</h2>
<ul>
<li>返回一个新的函数（旧函数不会更改）</li>
<li>绑定 <code v-pre>this</code> 和部分参数</li>
<li>箭头函数，无法改变 <code v-pre>this</code> ，只能改变参数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn1 <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">fn1</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment">// {x: 100} 10 20 30</span>
<span class="token keyword">const</span> fn2 <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment">// {x: 100} 1 2 10 （注意第三个参数变成了 10）</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment">// window 10 20 30 （旧函数不变）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解答" tabindex="-1"><a class="header-anchor" href="#解答" aria-hidden="true">#</a> 解答</h2>
<p>代码参考 bind.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 手写 bind
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token comment">// @ts-ignore</span>
<span class="token builtin">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">customBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>context<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token operator">...</span>bindArgs<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// context 是 bind 传入的 this</span>
    <span class="token comment">// bindArgs 是 bind 传入的各个参数</span>

    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">// 当前的函数本身</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 拼接参数</span>
        <span class="token keyword">const</span> newArgs <span class="token operator">=</span> bindArgs<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> newArgs<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// function fn(this: any, a: any, b: any, c: any) {</span>
<span class="token comment">//     console.info(this, a, b, c)</span>
<span class="token comment">// }</span>
<span class="token comment">// // @ts-ignore</span>
<span class="token comment">// const fn1 = fn.customBind({x: 100}, 10)</span>
<span class="token comment">// fn1(20, 30)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要点</p>
<ul>
<li>返回新函数</li>
<li>拼接参数（bind 参数 + 执行参数）</li>
<li>重新绑定 <code v-pre>this</code></li>
</ul>
<h2 id="连环问-手写函数-call-和-apply" tabindex="-1"><a class="header-anchor" href="#连环问-手写函数-call-和-apply" aria-hidden="true">#</a> 连环问：手写函数 call 和 apply</h2>
<p><code v-pre>bind</code> 生成新函数，暂不执行。而 <code v-pre>call</code> <code v-pre>apply</code> 会直接立即执行函数</p>
<ul>
<li>重新绑定 <code v-pre>this</code> （箭头函数不支持）</li>
<li>传入参数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码参考 call-apply.ts</p>
<ul>
<li>使用 <code v-pre>obj.fn</code> 执行，即可设置 <code v-pre>fn</code> 执行时的 <code v-pre>this</code></li>
<li>考虑 <code v-pre>context</code> 各种情况</li>
<li>使用 <code v-pre>symbol</code> 类型扩展属性</li>
</ul>
<p>注意：有些同学用 <code v-pre>call</code> 来实现 <code v-pre>apply</code> （反之亦然），这样是不符合面试官期待的。</p>
</template>
