<template><h1 id="手写-lru" tabindex="-1"><a class="header-anchor" href="#手写-lru" aria-hidden="true">#</a> 手写 LRU</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>用 JS 实现一个 LRU 缓存</p>
<h2 id="lru-使用" tabindex="-1"><a class="header-anchor" href="#lru-使用" aria-hidden="true">#</a> LRU 使用</h2>
<p>Least Recently Used 最近最少使用<br>
即淘汰掉最近最少使用的数据，只保留最近经常使用的资源。它是一个固定容量的缓存容器。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> lruCache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最大缓存长度 2</span>
lruCache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 缓存是 {1=1}</span>
lruCache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 缓存是 {1=1, 2=2}</span>
lruCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 返回 1</span>
lruCache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}</span>
lruCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 返回 null</span>
lruCache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}</span>
lruCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 返回 null</span>
lruCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 返回 3</span>
lruCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 返回 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<ul>
<li>哈希表，即 <code v-pre>{ k1: v1, k2: v2, ... }</code> 形式。可以 <code v-pre>O(1)</code> 事件复杂度存取 <code v-pre>key</code> <code v-pre>value</code></li>
<li>有序。可以根据最近使用情况清理缓存</li>
</ul>
<p>JS 内置的数据结构类型 <code v-pre>Object</code> <code v-pre>Array</code> <code v-pre>Set</code> <code v-pre>Map</code> ，恰好 <code v-pre>Map</code> 符合这两条要求</p>
<h2 id="map-是有序的" tabindex="-1"><a class="header-anchor" href="#map-是有序的" aria-hidden="true">#</a> Map 是有序的</h2>
<p>Map 有序，Object 无序</p>
<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2>
<p>代码参考 LRU.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> LRU cache
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LRUCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> length<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token keyword">private</span> data<span class="token operator">:</span> Map<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'invalid length'</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> length
    <span class="token punctuation">}</span>

    <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data

        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            data<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        data<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>size <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果超出了容量，则删除 Map 最老的元素</span>
            <span class="token keyword">const</span> delKey <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
            data<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>delKey<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

        <span class="token keyword">const</span> value <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

        data<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        data<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>

        <span class="token keyword">return</span> value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const lruCache = new LRUCache(2)</span>
<span class="token comment">// lruCache.set(1, 1) // {1=1}</span>
<span class="token comment">// lruCache.set(2, 2) // {1=1, 2=2}</span>
<span class="token comment">// console.info(lruCache.get(1)) // 1 {2=2, 1=1}</span>
<span class="token comment">// lruCache.set(3, 3) // {1=1, 3=3}</span>
<span class="token comment">// console.info(lruCache.get(2)) // null</span>
<span class="token comment">// lruCache.set(4, 4) // {3=3, 4=4}</span>
<span class="token comment">// console.info(lruCache.get(1)) // null</span>
<span class="token comment">// console.info(lruCache.get(3)) // 3 {4=4, 3=3}</span>
<span class="token comment">// console.info(lruCache.get(4)) // 4 {3=3, 4=4}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code v-pre>get</code> <code v-pre>set</code> 时都要把操作数据移动到 Map 最新的位置。</p>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>实际项目中可以使用第三方 lib</p>
<ul>
<li>https://www.npmjs.com/package/quick-lru</li>
<li>https://www.npmjs.com/package/lru-cache</li>
<li>https://www.npmjs.com/package/tiny-lru</li>
<li>https://www.npmjs.com/package/mnemonist</li>
</ul>
<h2 id="连环问-不用-map-如何实现-lru-cache" tabindex="-1"><a class="header-anchor" href="#连环问-不用-map-如何实现-lru-cache" aria-hidden="true">#</a> 连环问：不用 Map 如何实现 LRU cache ？</h2>
<p>LRU cache 是很早就有的算法，而 Map 仅仅是这几年才加入的 ES 语法。</p>
<h3 id="使用-object-和-array" tabindex="-1"><a class="header-anchor" href="#使用-object-和-array" aria-hidden="true">#</a> 使用 Object 和 Array</h3>
<p>根据上文的分析，两个条件</p>
<ul>
<li>哈希表，可以用 <code v-pre>Object</code> 实现</li>
<li>有序，可以用 <code v-pre>Array</code> 实现</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 执行 lru.set('a', 1) lru.set('b', 2) lru.set('c', 3) 后的数据</span>

<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'a'</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'b'</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'c'</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">,</span> obj3<span class="token punctuation">]</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">'a'</span><span class="token operator">:</span> obj1<span class="token punctuation">,</span> <span class="token string-property property">'b'</span><span class="token operator">:</span> obj2<span class="token punctuation">,</span> <span class="token string-property property">'c'</span><span class="token operator">:</span> obj3 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模拟 <code v-pre>get</code> <code v-pre>set</code> 操作，会发现几个问题，都来自于数组</p>
<ul>
<li>超出 cache 容量时，要移除最早的元素，数组 <code v-pre>shift</code> 效率低</li>
<li>每次 <code v-pre>get</code> <code v-pre>set</code> 时都要把当前元素移动到最新的位置，数组 <code v-pre>splice</code> 效率低</li>
</ul>
<h3 id="array-改为双向链表" tabindex="-1"><a class="header-anchor" href="#array-改为双向链表" aria-hidden="true">#</a> Array 改为双向链表</h3>
<p>数组有问题，就需要使用新的数据结构 <strong>双向链表</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>Interface INode <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token builtin">any</span>
    next<span class="token operator">?</span><span class="token operator">:</span> INode
    prev<span class="token operator">?</span><span class="token operator">:</span> INode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双向链表可以快速移动元素。末尾新增元素 D 很简单，开头删除 A 元素也很简单。</p>
<p><img src="@source/fe/编写高质量代码/img/双向链表-1.png" alt=""></p>
<p>要把中间的元素 B 移动到最后（如 LRU <code v-pre>set</code> <code v-pre>get</code> 时移动数据位置），只需要修改前后的指针即可，效率很高。</p>
<p><img src="@source/fe/编写高质量代码/img/双向链表-2.png" alt=""></p>
<h3 id="实现-1" tabindex="-1"><a class="header-anchor" href="#实现-1" aria-hidden="true">#</a> 实现</h3>
<p>代码参考 LRU2.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> LRU 缓存 - 不使用 Map
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token keyword">interface</span> <span class="token class-name">IListNode</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token builtin">any</span>
    key<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 存储 key ，方便删除（否则删除时就需要遍历 this.data )</span>
    prev<span class="token operator">?</span><span class="token operator">:</span> IListNode
    next<span class="token operator">?</span><span class="token operator">:</span> IListNode
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LRUCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> length<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token keyword">private</span> data<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> IListNode <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">private</span> dataLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">private</span> listHead<span class="token operator">:</span> IListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token keyword">private</span> listTail<span class="token operator">:</span> IListNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'invalid length'</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">=</span> length
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token function">moveToTail</span><span class="token punctuation">(</span>curNode<span class="token operator">:</span> IListNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> tail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listTail
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tail <span class="token operator">===</span> curNode<span class="token punctuation">)</span> <span class="token keyword">return</span>

        <span class="token comment">// -------------- 1. 让 prevNode nextNode 断绝与 curNode 的关系 --------------</span>
        <span class="token keyword">const</span> prevNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>prev
        <span class="token keyword">const</span> nextNode <span class="token operator">=</span> curNode<span class="token punctuation">.</span>next
        <span class="token keyword">if</span> <span class="token punctuation">(</span>prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nextNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                prevNode<span class="token punctuation">.</span>next <span class="token operator">=</span> nextNode
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">delete</span> prevNode<span class="token punctuation">.</span>next
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                nextNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> prevNode
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">delete</span> nextNode<span class="token punctuation">.</span>prev
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>listHead <span class="token operator">===</span> curNode<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listHead <span class="token operator">=</span> nextNode
        <span class="token punctuation">}</span>

        <span class="token comment">// -------------- 2. 让 curNode 断绝与 prevNode nextNode 的关系 --------------</span>
        <span class="token keyword">delete</span> curNode<span class="token punctuation">.</span>prev
        <span class="token keyword">delete</span> curNode<span class="token punctuation">.</span>next

        <span class="token comment">// -------------- 3. 在 list 末尾重新建立 curNode 的新关系 --------------</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tail<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tail<span class="token punctuation">.</span>next <span class="token operator">=</span> curNode
            curNode<span class="token punctuation">.</span>prev <span class="token operator">=</span> tail
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>listTail <span class="token operator">=</span> curNode
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token function">tryClean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataLength <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listHead
            <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'head is null'</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> headNext <span class="token operator">=</span> head<span class="token punctuation">.</span>next
            <span class="token keyword">if</span> <span class="token punctuation">(</span>headNext <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'headNext is null'</span><span class="token punctuation">)</span>

            <span class="token comment">// 1. 断绝 head 和 next 的关系</span>
            <span class="token keyword">delete</span> headNext<span class="token punctuation">.</span>prev
            <span class="token keyword">delete</span> head<span class="token punctuation">.</span>next

            <span class="token comment">// 2. 重新赋值 listHead</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>listHead <span class="token operator">=</span> headNext

            <span class="token comment">// 3. 清理 data ，重新计数</span>
            <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>head<span class="token punctuation">.</span>key<span class="token punctuation">]</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>dataLength <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dataLength <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data
        <span class="token keyword">const</span> curNode <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>listTail <span class="token operator">===</span> curNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 本身在末尾（最新鲜的位置），直接返回 value</span>
            <span class="token keyword">return</span> curNode<span class="token punctuation">.</span>value
        <span class="token punctuation">}</span>

        <span class="token comment">// curNode 移动到末尾</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">moveToTail</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>

        <span class="token keyword">return</span> curNode<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>

    <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data
        <span class="token keyword">const</span> curNode <span class="token operator">=</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 新增数据</span>
            <span class="token keyword">const</span> newNode<span class="token operator">:</span> IListNode <span class="token operator">=</span> <span class="token punctuation">{</span> key<span class="token punctuation">,</span> value <span class="token punctuation">}</span>
            <span class="token comment">// 移动到末尾</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">moveToTail</span><span class="token punctuation">(</span>newNode<span class="token punctuation">)</span>

            data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newNode
            <span class="token keyword">this</span><span class="token punctuation">.</span>dataLength<span class="token operator">++</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dataLength <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listHead <span class="token operator">=</span> newNode
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 修改现有数据</span>
            curNode<span class="token punctuation">.</span>value <span class="token operator">=</span> value
            <span class="token comment">// 移动到末尾</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">moveToTail</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 尝试清理长度</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">tryClean</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const lruCache = new LRUCache(2)</span>
<span class="token comment">// lruCache.set('1', 1) // {1=1}</span>
<span class="token comment">// lruCache.set('2', 2) // {1=1, 2=2}</span>
<span class="token comment">// console.info(lruCache.get('1')) // 1 {2=2, 1=1}</span>
<span class="token comment">// lruCache.set('3', 3) // {1=1, 3=3}</span>
<span class="token comment">// console.info(lruCache.get('2')) // null</span>
<span class="token comment">// lruCache.set('4', 4) // {3=3, 4=4}</span>
<span class="token comment">// console.info(lruCache.get('1')) // null</span>
<span class="token comment">// console.info(lruCache.get('3')) // 3 {4=4, 3=3}</span>
<span class="token comment">// console.info(lruCache.get('4')) // 4 {3=3, 4=4}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项</p>
<ul>
<li>数据结构如何定义，<code v-pre>data</code> 和链表分别存储什么</li>
<li>双向链表的操作（非常繁琐，写代码很容易出错，逻辑一定要清晰！！！）</li>
<li>链表 <code v-pre>node</code> 中要存储 <code v-pre>data.key</code> ，否则删除 <code v-pre>data</code> 需要遍历、效率低</li>
</ul>
</template>
