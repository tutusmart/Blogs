<template><h1 id="手写-eventbus" tabindex="-1"><a class="header-anchor" href="#手写-eventbus" aria-hidden="true">#</a> 手写 EventBus</h1>
<p>Bus 不是“车”，而是“总线”</p>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请手写 EventBus 自定义事件，实现 <code v-pre>no</code> <code v-pre>once</code> <code v-pre>emit</code> 和 <code v-pre>off</code></p>
<h2 id="eventbus-功能" tabindex="-1"><a class="header-anchor" href="#eventbus-功能" aria-hidden="true">#</a> EventBus 功能</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> event <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventBus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fn1'</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fn2'</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fn3'</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">}</span>

event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'key1'</span><span class="token punctuation">,</span> fn1<span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'key1'</span><span class="token punctuation">,</span> fn2<span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">'key1'</span><span class="token punctuation">,</span> fn3<span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'xxxxxx'</span><span class="token punctuation">,</span> fn3<span class="token punctuation">)</span>

event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'key1'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">// 触发 fn1 fn2 fn3</span>

event<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'key1'</span><span class="token punctuation">,</span> fn1<span class="token punctuation">)</span>

event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'key1'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token comment">// 触发 fn2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2>
<ul>
<li><code v-pre>class</code> 结构</li>
<li>注意区分 <code v-pre>on</code> 和 <code v-pre>off</code></li>
</ul>
<p>代码参考 event-bus.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> Event Bus
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">EventBus</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token punctuation">{</span>
     *    'key1': [
     *        <span class="token punctuation">{</span> fn: fn1, isOnce: false <span class="token punctuation">}</span>,
     *        <span class="token punctuation">{</span> fn: fn2, isOnce: false <span class="token punctuation">}</span>,
     *        <span class="token punctuation">{</span> fn: fn3, isOnce: true <span class="token punctuation">}</span>,
     *    ]
     *    'key2': [] // 有序
     *    'key3': []
     * <span class="token punctuation">}</span>
     */</span>
    <span class="token keyword">private</span> events<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>fn<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span> isOnce<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token punctuation">}</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>events <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">on</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> fn<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span> isOnce<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> events <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events
        <span class="token keyword">if</span> <span class="token punctuation">(</span>events<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            events<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 初始化 key 的 fn 数组</span>
        <span class="token punctuation">}</span>
        events<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> fn<span class="token punctuation">,</span> isOnce <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">once</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> fn<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">off</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> fn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 解绑所有 type 的函数</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 解绑单个 fn</span>
            <span class="token keyword">const</span> fnList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fnList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> fnList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=></span> item<span class="token punctuation">.</span>fn <span class="token operator">!==</span> fn<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">emit</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> fnList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>type<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>fnList <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

        <span class="token comment">// 注意</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> fnList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> fn<span class="token punctuation">,</span> isOnce <span class="token punctuation">}</span> <span class="token operator">=</span> item
            <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>

            <span class="token comment">// once 执行一次就要被过滤掉</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isOnce<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const e = new EventBus()</span>

<span class="token comment">// function fn1(a: any, b: any) { console.log('fn1', a, b) }</span>
<span class="token comment">// function fn2(a: any, b: any) { console.log('fn2', a, b) }</span>
<span class="token comment">// function fn3(a: any, b: any) { console.log('fn3', a, b) }</span>

<span class="token comment">// e.on('key1', fn1)</span>
<span class="token comment">// e.on('key1', fn2)</span>
<span class="token comment">// e.once('key1', fn3)</span>
<span class="token comment">// e.on('xxxxxx', fn3)</span>

<span class="token comment">// e.emit('key1', 10, 20) // 触发 fn1 fn2 fn3</span>

<span class="token comment">// e.off('key1', fn1)</span>

<span class="token comment">// e.emit('key1', 100, 200) // 触发 fn2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连环问-eventbus-里的数组可以换成-set-吗" tabindex="-1"><a class="header-anchor" href="#连环问-eventbus-里的数组可以换成-set-吗" aria-hidden="true">#</a> 连环问：EventBus 里的数组可以换成 Set 吗？</h2>
<p>数组和 Set 比较 （除了语法 API）</p>
<ul>
<li>数组，有序结构，查找、中间插入、中间删除比较慢</li>
<li>Set 不可排序的，插入和删除都很快</li>
</ul>
<p>Set 初始化或者 <code v-pre>add</code> 时是一个有序结构，但它无法再次排序，没有 <code v-pre>index</code> 也没有 <code v-pre>sort</code> 等 API</p>
<p>验证</p>
<ul>
<li>生成一个大数组，验证 <code v-pre>push</code> <code v-pre>unshift</code> <code v-pre>includes</code> <code v-pre>splice</code></li>
<li>生成一个大 Set ，验证 <code v-pre>add</code> <code v-pre>delete</code> <code v-pre>has</code></li>
</ul>
<p>答案：不可以，Set 是不可排序的，如再增加一些“权重”之类的需求，将不好实现。</p>
<h2 id="map-和-object" tabindex="-1"><a class="header-anchor" href="#map-和-object" aria-hidden="true">#</a> Map 和 Object</h2>
<p>Object 是无序的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> data1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">'1'</span><span class="token operator">:</span><span class="token string">'aaa'</span><span class="token punctuation">,</span><span class="token string-property property">'2'</span><span class="token operator">:</span><span class="token string">'bbb'</span><span class="token punctuation">,</span><span class="token string-property property">'3'</span><span class="token operator">:</span><span class="token string">'ccc'</span><span class="token punctuation">,</span><span class="token string-property property">'测试'</span><span class="token operator">:</span><span class="token string">'000'</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data1<span class="token punctuation">)</span> <span class="token comment">// ["1", "2", "3", "测试"]</span>
<span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">'测试'</span><span class="token operator">:</span><span class="token string">'000'</span><span class="token punctuation">,</span><span class="token string-property property">'1'</span><span class="token operator">:</span><span class="token string">'aaa'</span><span class="token punctuation">,</span><span class="token string-property property">'3'</span><span class="token operator">:</span><span class="token string">'ccc'</span><span class="token punctuation">,</span><span class="token string-property property">'2'</span><span class="token operator">:</span><span class="token string">'bbb'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["1", "2", "3", "测试"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Map 是有序的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> m1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'aaa'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'bbb'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'ccc'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'测试'</span><span class="token punctuation">,</span> <span class="token string">'000'</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
m1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> m2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'测试'</span><span class="token punctuation">,</span> <span class="token string">'000'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'aaa'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'ccc'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'bbb'</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
m2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，<strong>Map 虽然是有序的，但它的 <code v-pre>get</code> <code v-pre>set</code> <code v-pre>delete</code> 速度非常快</strong>，和 Object 效率一样。它是被优化过的有序结构。</p>
</template>
