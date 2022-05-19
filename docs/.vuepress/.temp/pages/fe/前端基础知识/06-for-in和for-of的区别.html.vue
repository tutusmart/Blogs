<template><h1 id="for-in-和-for-of-的区别" tabindex="-1"><a class="header-anchor" href="#for-in-和-for-of-的区别" aria-hidden="true">#</a> for...in 和 for...of 的区别</h1>
<h1 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h1>
<p>for...in 和 for...of 的区别</p>
<h2 id="key-和-value" tabindex="-1"><a class="header-anchor" href="#key-和-value" aria-hidden="true">#</a> key 和 value</h2>
<p>for...in 遍历 key , for...of 遍历 value</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'abc'</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> s <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> argument <span class="token keyword">of</span> arguments<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>argument<span class="token punctuation">)</span> <span class="token comment">// for...of 可以获取 value ，而 for...in 获取 key</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> pList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token keyword">of</span> pList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">// for...of 可以获取 value ，而 for...in 获取 key</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遍历对象" tabindex="-1"><a class="header-anchor" href="#遍历对象" aria-hidden="true">#</a> 遍历对象</h2>
<p>for...in 可以遍历对象，for...of 不可以</p>
<h2 id="遍历-map-set" tabindex="-1"><a class="header-anchor" href="#遍历-map-set" aria-hidden="true">#</a> 遍历 Map/Set</h2>
<p>for...of 可以遍历 Map/Set ，for...in 不可以</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> set1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token keyword">of</span> set1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> map1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'x'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'z'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token keyword">of</span> map1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遍历-generator" tabindex="-1"><a class="header-anchor" href="#遍历-generator" aria-hidden="true">#</a> 遍历 generator</h2>
<p>for...of 可遍历 generator ，for...in 不可以</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token number">10</span>
  <span class="token keyword">yield</span> <span class="token number">20</span>
  <span class="token keyword">yield</span> <span class="token number">30</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> o <span class="token keyword">of</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象的可枚举属性" tabindex="-1"><a class="header-anchor" href="#对象的可枚举属性" aria-hidden="true">#</a> 对象的可枚举属性</h2>
<p>for...in 遍历一个对象的可枚举属性。</p>
<p>使用 <code v-pre>Object.getOwnPropertyDescriptors(obj)</code> 可以获取对象的所有属性描述，看 <code v-pre> enumerable: true</code> 来判断该属性是否可枚举。</p>
<p>对象，数组，字符传</p>
<h2 id="可迭代对象" tabindex="-1"><a class="header-anchor" href="#可迭代对象" aria-hidden="true">#</a> 可迭代对象</h2>
<p>for...of 遍历一个可迭代对象。<br>
其实就是迭代器模式，通过一个 <code v-pre>next</code> 方法返回下一个元素。</p>
<p>该对象要实现一个 <code v-pre>[Symbol.iterator]</code> 方法，其中返回一个 <code v-pre>next</code> 函数，用于返回下一个 value（不是 key）。<br>
可以执行 <code v-pre>arr[Symbol.iterator]()</code> 看一下。</p>
<p>JS 中内置迭代器的类型有 <code v-pre>String</code> <code v-pre>Array</code> <code v-pre>arguments</code> <code v-pre>NodeList</code> <code v-pre>Map</code> <code v-pre>Set</code> <code v-pre>generator</code> 等。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>for...in 遍历一个对象的可枚举属性，如对象、数组、字符串。针对属性，所以获得 key</li>
<li>for...of 遍历一个可迭代对象，如数组、字符串、Map/Set 。针对一个迭代对象，所以获得 value</li>
</ul>
<h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<p>“枚举” “迭代” 都是计算机语言的一些基础术语，目前搞不懂也没关系。<br>
但请一定记住 for...of 和 for...in 的不同表现。</p>
<h2 id="连环问-for-await-of" tabindex="-1"><a class="header-anchor" href="#连环问-for-await-of" aria-hidden="true">#</a> 连环问：for await...of</h2>
<p>用于遍历异步请求的可迭代对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 像定义一个创建 promise 的函数</span>
<span class="token keyword">function</span> <span class="token function">createTimeoutPromise</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你明确知道有几个 promise 对象，那直接处理即可</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token function">createTimeoutPromise</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token function">createTimeoutPromise</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token keyword">await</span> p1
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span>
    <span class="token keyword">const</span> v2 <span class="token operator">=</span> <span class="token keyword">await</span> p2
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你有一个对象，里面有 N 个 promise 对象，你可以这样处理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token function">createTimeoutPromise</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">createTimeoutPromise</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>

    <span class="token comment">// 第一，使用 Promise.all 执行</span>
    Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 第二，使用 for await ... of 遍历执行</span>
    <span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token keyword">of</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 注意，如果用 for...of 只能遍历出各个 promise 对象，而不能触发 await 执行</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【注意】如果你想顺序执行，只能延迟创建 promise 对象，而不能及早创建。<br>
即，你创建了 promise 对象，它就立刻开始执行逻辑。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createTimeoutPromise</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span>
    <span class="token keyword">const</span> v2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createTimeoutPromise</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> n <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> v <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createTimeoutPromise</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'v'</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
