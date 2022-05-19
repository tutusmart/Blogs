<template><h1 id="htmlcollection-和-nodelist-的区别" tabindex="-1"><a class="header-anchor" href="#htmlcollection-和-nodelist-的区别" aria-hidden="true">#</a> HTMLCollection 和 NodeList 的区别</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>HTMLCollection 和 NodeList 的区别，Node 和 Element 的区别</p>
<h2 id="node-和-element" tabindex="-1"><a class="header-anchor" href="#node-和-element" aria-hidden="true">#</a> Node 和 Element</h2>
<p>DOM 结构是一棵树，树的所有节点都是 <code v-pre>Node</code> ，包括：document，元素，文本，注释，fragment 等</p>
<p><code v-pre>Element</code> 继承于 Node 。它是所有 html 元素的基类，如 <code v-pre>HTMLParagraphElement</code> <code v-pre>HTMLDivElement</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// document</span>
<span class="token keyword">class</span> <span class="token class-name">Document</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">DocumentFragment</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 文本和注释</span>
<span class="token keyword">class</span> <span class="token class-name">CharacterData</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Comment</span> <span class="token keyword">extends</span> <span class="token class-name">CharacterData</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Text</span> <span class="token keyword">extends</span> <span class="token class-name">CharacterData</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// elem</span>
<span class="token keyword">class</span> <span class="token class-name">Element</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">HTMLElement</span> <span class="token keyword">extends</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">HTMLParagraphElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">HTMLDivElement</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// ... 其他 elem ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="htmlcollection-和-nodelist" tabindex="-1"><a class="header-anchor" href="#htmlcollection-和-nodelist" aria-hidden="true">#</a> HTMLCollection 和 NodeList</h2>
<p>HTMLCollection 是 Element 集合，它由获取 Element 的 API 返回</p>
<ul>
<li><code v-pre>elem.children</code></li>
<li><code v-pre>document.getElementsByTagName('p')</code></li>
</ul>
<p>NodeList 是 Node 集合，它由获取 Node 的 API 返回</p>
<ul>
<li><code v-pre>document.querySelectorAll('p')</code></li>
<li><code v-pre>elem.childNodes</code></li>
</ul>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>HTMLCollection 是 Element 集合，NodeList 是 Node 集合</li>
<li>Node 是所有 DOM 节点的基类，Element 是 html 元素的基类</li>
</ul>
<h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<p>注意 Node 和 Element 在实际 API 中的区别，如 <code v-pre>children</code> 和 <code v-pre>childNodes</code> 获取的结果可能是不一样的（如果子节点有 Text 或 Comment）</p>
<h2 id="扩展-类数组" tabindex="-1"><a class="header-anchor" href="#扩展-类数组" aria-hidden="true">#</a> 扩展：类数组</h2>
<p>HTMLCollection 和 NodeList 都不是数组，而是“类数组”。转换为数组：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// HTMLCollection 和 NodeList 都不是数组，而是“类数组”</span>
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
<span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>list<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
