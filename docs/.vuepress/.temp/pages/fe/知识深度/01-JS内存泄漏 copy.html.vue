<template><h1 id="js-内存泄漏" tabindex="-1"><a class="header-anchor" href="#js-内存泄漏" aria-hidden="true">#</a> JS 内存泄漏</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>如何检测 JS 内存泄漏？内存泄漏的场景有哪些？</p>
<h2 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a> 垃圾回收</h2>
<p>正常情况下，一个函数执行完，其中的变量都会是会 JS 垃圾回收。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">'aaa'</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但某些情况下，变量是销毁不了的，因为可能会被再次使用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
    window<span class="token punctuation">.</span>obj <span class="token operator">=</span> obj <span class="token comment">// 引用到了全局变量，obj 销毁不了</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">genDataFns</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 闭包，data 销毁不了</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> get<span class="token punctuation">,</span> set <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">genDataFns</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量销毁不了，一定就是内存泄漏吗？—— 不一定</p>
<h2 id="垃圾回收算法-引用计数" tabindex="-1"><a class="header-anchor" href="#垃圾回收算法-引用计数" aria-hidden="true">#</a> 垃圾回收算法 - 引用计数</h2>
<p>早起的垃圾回收算法，以“数据是否被引用”来判断要不要回收。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 对象被 a 引用</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a1 <span class="token operator">=</span> a <span class="token comment">// 又被 a1 引用</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 不再被 a 引用，但仍然被 a1 引用</span>
<span class="token keyword">let</span> a1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 不再被 a1 引用</span>

<span class="token comment">// 对象最终没有任何引用，会被回收</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但这个算法有一个缺陷 —— 循环引用。例如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    obj1<span class="token punctuation">.</span>a <span class="token operator">=</span> obj2
    obj2<span class="token punctuation">.</span>a <span class="token operator">=</span> obj1 <span class="token comment">// 循环引用，无法回收 obj1 和 obj2</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此前有一个很著名的例子。IE6、7 使用引用计数算法进行垃圾回收，常常因为循环引用导致 DOM 对象无法进行垃圾回收。<br>
下面的例子，即便界面上删除了 div1 ，但在 JS 内存中它仍然存在，包括它的所有属性。但现代浏览器已经解决了这个问题。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> div1
window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    div1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div1'</span><span class="token punctuation">)</span>
    div1<span class="token punctuation">.</span>aaa <span class="token operator">=</span> div1
    div1<span class="token punctuation">.</span>someBigData <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// 一个体积很大的数据。</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上这个例子就是内存泄漏。即，<strong>不希望它存在的，它却仍然存在</strong>，这是不符合预期的。关键在于“泄漏”。</p>
<h2 id="垃圾回收算法-标记清除" tabindex="-1"><a class="header-anchor" href="#垃圾回收算法-标记清除" aria-hidden="true">#</a> 垃圾回收算法 - 标记清除</h2>
<p>基于上面的问题，现代浏览器使用“标记-清除”算法。根据“是否是否可获得”来判断是否回收。</p>
<p>定期从根（即全局变量）开始向下查找，能找到的即保留，找不到的即回收。循环引用不再是问题。</p>
<h2 id="检测内存变化" tabindex="-1"><a class="header-anchor" href="#检测内存变化" aria-hidden="true">#</a> 检测内存变化</h2>
<p>可使用 Chrome devTools Performance 来检测内存变化</p>
<ul>
<li>刷新页面，点击“GC”按钮</li>
<li>点击“Record”按钮开始记录，然后操作页面</li>
<li>操作结束，点击“GC”按钮，点击“结束”按钮，看分析结果</li>
</ul>
<p>代码参考 <code v-pre>memory-change.html</code></p>
<h2 id="内存泄漏的场景" tabindex="-1"><a class="header-anchor" href="#内存泄漏的场景" aria-hidden="true">#</a> 内存泄漏的场景</h2>
<p>拿 Vue 来举例说明。</p>
<p>组件中有全局变量、函数的引用。组件销毁时要记得清空。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">nums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function-variable function">printNums</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// beforeUnmount() {</span>
    <span class="token comment">//     window.printNums = null</span>
    <span class="token comment">// },</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件有全局定时器。组件销毁时要记得清除。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token comment">// intervalId: 0,</span>
            <span class="token literal-property property">nums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// methods: {</span>
    <span class="token comment">//     printNums() {</span>
    <span class="token comment">//         console.log(this.nums)</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// },</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
        
        <span class="token comment">// this.intervalId = setInterval(this.printNums, 200)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// clearInterval(this.intervalId)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中有全局事件的引用。组件销毁时记得解绑。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">nums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// methods: {</span>
    <span class="token comment">//     printNums() {</span>
    <span class="token comment">//         console.log(this.nums)</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// },</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// window.addEventListener('reisze', this.printNums)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// window.removeEventListener('reisze', this.printNums)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中使用了自定义事件，销毁时要记得解绑。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">nums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// methods: {</span>
    <span class="token comment">//     printNums() {</span>
    <span class="token comment">//         console.log(this.nums)</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// },</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'event-key'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nums<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token comment">// event.on('event-key', this.printNums)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// event.off('event-key', this.printNums)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="闭包是内存泄漏吗" tabindex="-1"><a class="header-anchor" href="#闭包是内存泄漏吗" aria-hidden="true">#</a> 闭包是内存泄漏吗</h2>
<p>上述代码 <code v-pre>genDataFns()</code> 就是一个很典型的闭包，闭包的变量是无法被垃圾回收的。</p>
<p>但闭包不是内存泄漏，因为它是符合开发者预期的，即本身就这么设计的。而内存泄漏是非预期的。</p>
<p>【注意】这一说法没有定论，有些面试官可能会说“不可被垃圾回收就是内存泄漏”，不可较真。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>可使用 Chrome devTools Performance 检测内存变化</li>
<li>内存泄漏的场景
<ul>
<li>全局变量，函数</li>
<li>全局事件</li>
<li>全局定时器</li>
<li>自定义事件</li>
<li>闭包（无定论）</li>
</ul>
</li>
</ul>
<h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<p>前端之前不太关注内存泄漏，因为不会像服务单一样 7*24 运行。<br>
而随着现在富客户端系统不断普及，内存泄漏也在慢慢的被重视。</p>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>WeakMap WeakSet 弱引用，不会影响垃圾回收。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 函数执行完，obj 会被销毁，因为外面的 WeakMap 是“弱引用”，不算在内</span>
<span class="token keyword">const</span> wMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'zhangsan'</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 注意，WeakMap 专门做弱引用的，因此 WeakMap 只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。其他的无意义</span>
    wMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 代码执行完毕之后，obj 会被销毁，wMap 中也不再存在。但我们无法第一时间看到效果。因为：</span>
<span class="token comment">// 内存的垃圾回收机制，不是实时的，而且是 JS 代码控制不了的，因此这里不一定能直接看到效果。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 函数执行完，obj 会被销毁，因为外面的 WeakSet 是“弱引用”，不算在内</span>
<span class="token keyword">const</span> wSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'zhangsan'</span>
    <span class="token punctuation">}</span>
    wSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// 注意，WeakSet 就是为了做弱引用的，因此不能 add 值类型！！！无意义</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>wangEditor 多次销毁创建，测试内存泄漏。日常开发时可以参考这种方式<br>
参考 examples/batch-destroy.html</p>
</template>
