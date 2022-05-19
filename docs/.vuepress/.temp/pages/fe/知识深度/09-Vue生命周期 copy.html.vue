<template><h1 id="vue-生命周期" tabindex="-1"><a class="header-anchor" href="#vue-生命周期" aria-hidden="true">#</a> Vue 生命周期</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>Vue 每个生命周期都做了什么</p>
<h2 id="vue-生命周期-1" tabindex="-1"><a class="header-anchor" href="#vue-生命周期-1" aria-hidden="true">#</a> Vue 生命周期</h2>
<p><img src="@source/fe/知识深度/img/vue-生命周期.png" alt=""></p>
<h2 id="beforecreate" tabindex="-1"><a class="header-anchor" href="#beforecreate" aria-hidden="true">#</a> beforeCreate</h2>
<p>初始化一个空的 Vue 实例，<code v-pre>data</code> <code v-pre>methods</code> 等尚未被初始化，无法调用。</p>
<h2 id="created" tabindex="-1"><a class="header-anchor" href="#created" aria-hidden="true">#</a> created</h2>
<p>Vue 实例初始化完成，<code v-pre>data</code> <code v-pre>methods</code> 都已初始化完成，可调用。<br>
但尚未开始渲染模板。</p>
<h2 id="beforemount" tabindex="-1"><a class="header-anchor" href="#beforemount" aria-hidden="true">#</a> beforeMount</h2>
<p>编译模板，调用 <code v-pre>render</code> 函数生成 vdom ，但还没有开始渲染 DOM</p>
<h2 id="mounted" tabindex="-1"><a class="header-anchor" href="#mounted" aria-hidden="true">#</a> mounted</h2>
<p>渲染 DOM 完成，页面更新。组件创建完成，开始进入运行阶段。</p>
<h2 id="beforeupdate" tabindex="-1"><a class="header-anchor" href="#beforeupdate" aria-hidden="true">#</a> beforeUpdate</h2>
<p>在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。</p>
<h2 id="updated" tabindex="-1"><a class="header-anchor" href="#updated" aria-hidden="true">#</a> updated</h2>
<p>在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。</p>
<p>注意，尽量不要在 <code v-pre>updated</code> 中继续修改数据，否则可能会触发死循环。</p>
<h2 id="onactivated" tabindex="-1"><a class="header-anchor" href="#onactivated" aria-hidden="true">#</a> onActivated</h2>
<p>被 <code v-pre>keep-alive</code> 缓存的组件激活时调用。</p>
<h2 id="ondeactivated" tabindex="-1"><a class="header-anchor" href="#ondeactivated" aria-hidden="true">#</a> onDeactivated</h2>
<p>被 <code v-pre>keep-alive</code> 缓存的组件停用时调用。</p>
<h2 id="beforeunmount" tabindex="-1"><a class="header-anchor" href="#beforeunmount" aria-hidden="true">#</a> beforeUnmount</h2>
<p>组件进入销毁阶段。</p>
<p>卸载组件实例后调用，在这个阶段，实例仍然是完全正常的。<br>
移除、解绑一些全局事件、自定义事件，可以在此时操作。</p>
<h2 id="unmounted" tabindex="-1"><a class="header-anchor" href="#unmounted" aria-hidden="true">#</a> unmounted</h2>
<p>卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。</p>
<hr>
<h2 id="连环问-如何正确的操作-dom" tabindex="-1"><a class="header-anchor" href="#连环问-如何正确的操作-dom" aria-hidden="true">#</a> 连环问：如何正确的操作 DOM</h2>
<p><code v-pre>mounted</code> 和 <code v-pre>updated</code> 都不会保证所有子组件都挂载完成，如果想等待所有视图都渲染完成，需要使用 <code v-pre>$nextTick</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 仅在整个视图都被渲染之后才会运行的代码</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连环问-ajax-放在哪个生命周期合适" tabindex="-1"><a class="header-anchor" href="#连环问-ajax-放在哪个生命周期合适" aria-hidden="true">#</a> 连环问：ajax 放在哪个生命周期合适？</h2>
<p>一般有两个选择：<code v-pre>created</code> 和 <code v-pre>mounted</code> ，建议选择后者 <code v-pre>mounted</code> 。</p>
<p>执行速度</p>
<ul>
<li>从理论上来说，放在 <code v-pre>created</code> 确实会快一些</li>
<li>但 ajax 是网络请求，其时间是主要的影响因素。从 <code v-pre>created</code> 到 <code v-pre>mounted</code> 是 JS 执行，速度非常快。</li>
<li>所以，两者在执行速度上不会有肉眼可见的差距</li>
</ul>
<p>代码的阅读和理解</p>
<ul>
<li>放在 <code v-pre>created</code> 却会带来一些沟通和理解成本，从代码的执行上来看，它会一边执行组件渲染，一边触发网络请求，并行</li>
<li>放在 <code v-pre>mounted</code> 就是等待 DOM 渲染完成再执行网络请求，串行，好理解</li>
</ul>
<p>所以，综合来看，更建议选择 <code v-pre>mounted</code> 。</p>
<h2 id="连环问-composition-api-生命周期有何不同" tabindex="-1"><a class="header-anchor" href="#连环问-composition-api-生命周期有何不同" aria-hidden="true">#</a> 连环问：Composition API 生命周期有何不同</h2>
<ul>
<li><code v-pre>setup</code> 代替了 <code v-pre>beforeCreate</code> 和 <code v-pre>created</code></li>
<li>生命周期换成了函数的形式，如 <code v-pre>mounted</code> -&gt; <code v-pre>onMounted</code> 参考 https://v3.cn.vuejs.org/api/composition-api.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onUpdated<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mounted'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'updated'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
