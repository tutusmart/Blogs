<template><!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: 
 * @LastEditTime: 2022-05-19 20:01:59
-->
<h1 id="手写-new" tabindex="-1"><a class="header-anchor" href="#手写-new" aria-hidden="true">#</a> 手写 new</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>new 一个对象内部发生了什么，手写代码表示</p>
<h2 id="class-是语法糖" tabindex="-1"><a class="header-anchor" href="#class-是语法糖" aria-hidden="true">#</a> class 是语法糖</h2>
<p>ES6 使用 class 代替了 ES6 的构造函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">'北京'</span>
    <span class="token punctuation">}</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">'双越'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实 class 就是一个语法糖，它本质上和构造函数是一样的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">'北京'</span>
<span class="token punctuation">}</span>
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 注意，这里不可以用箭头函数</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>
<span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">'双越'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="new-一个对象的过程" tabindex="-1"><a class="header-anchor" href="#new-一个对象的过程" aria-hidden="true">#</a> new 一个对象的过程</h2>
<ul>
<li>创建一个空对象 obj，继承构造函数的原型</li>
<li>执行构造函数（将 obj 作为 this）</li>
<li>返回 obj</li>
</ul>
<h2 id="实现-new" tabindex="-1"><a class="header-anchor" href="#实现-new" aria-hidden="true">#</a> 实现 new</h2>
<p>代码参考 new.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 实现 new
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">customNew</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>constructor<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 创建一个空对象，继承 constructor 的原型</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
    <span class="token comment">// 2. 将 obj 作为 this ，执行 constructor ，传入参数</span>
    <span class="token function">constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token comment">// 3. 返回 obj</span>
    <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>

<span class="token comment">// class Foo {</span>
<span class="token comment">//     // 属性</span>
<span class="token comment">//     name: string</span>
<span class="token comment">//     city: string</span>
<span class="token comment">//     n: number</span>

<span class="token comment">//     constructor(name: string, n: number) {</span>
<span class="token comment">//         this.name = name</span>
<span class="token comment">//         this.city = '北京'</span>
<span class="token comment">//         this.n = n</span>
<span class="token comment">//     }</span>

<span class="token comment">//     getName() {</span>
<span class="token comment">//         return this.name</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>

<span class="token comment">// const f = new Foo('双越', 100)</span>
<span class="token comment">// // const f = customNew&lt;Foo>(Foo, '双越', 100)</span>
<span class="token comment">// console.info(f)</span>
<span class="token comment">// console.info(f.getName())</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面试连环问-object-create-和-的区别" tabindex="-1"><a class="header-anchor" href="#面试连环问-object-create-和-的区别" aria-hidden="true">#</a> 面试连环问：Object.create 和 {} 的区别</h2>
<p><code v-pre>Object.create</code> 可以指定原型，创建一个空对象。<br>
<code v-pre>{}</code> 就相当于 <code v-pre>Object.create(Object.prototype)</code> ，即根据 <code v-pre>Object</code> 原型的空对象。</p>
<p>PS：对 JS 原型和原型链还不了解的需要抓紧恶补。</p>
</template>
