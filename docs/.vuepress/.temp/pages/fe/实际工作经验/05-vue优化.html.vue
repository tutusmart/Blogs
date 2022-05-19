<template><h1 id="vue-优化" tabindex="-1"><a class="header-anchor" href="#vue-优化" aria-hidden="true">#</a> Vue 优化</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>你在实际工作中，做过哪些 Vue 优化？</p>
<h2 id="前端通用的优化策略" tabindex="-1"><a class="header-anchor" href="#前端通用的优化策略" aria-hidden="true">#</a> 前端通用的优化策略</h2>
<p>压缩资源，拆包，使用 CDN ，http 缓存等。本节只讨论首屏，这些先不讲。</p>
<h2 id="v-if-和-v-show" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-show" aria-hidden="true">#</a> v-if 和 v-show</h2>
<p>区别</p>
<ul>
<li><code v-pre>v-if</code> 组件销毁/重建</li>
<li><code v-pre>v-show</code> 组件隐藏（切换 CSS <code v-pre>display</code>）</li>
</ul>
<p>场景</p>
<ul>
<li>一般情况下使用 <code v-pre>v-if</code> 即可，普通组件的销毁、渲染不会造成性能问题</li>
<li>如果组件创建时需要大量计算，或者大量渲染（如复杂的编辑器、表单、地图等），可以考虑 <code v-pre>v-show</code></li>
</ul>
<h2 id="v-for-使用-key" tabindex="-1"><a class="header-anchor" href="#v-for-使用-key" aria-hidden="true">#</a> v-for 使用 key</h2>
<p><code v-pre>key</code> 可以优化内部的 diff 算法。注意，遍历数组时 <code v-pre>key</code> 不要使用 <code v-pre>index</code> 。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 而且，key 不要用 index --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(id, name) in list<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computed-缓存" tabindex="-1"><a class="header-anchor" href="#computed-缓存" aria-hidden="true">#</a> computed 缓存</h2>
<p><code v-pre>computed</code> 可以缓存计算结果，<code v-pre>data</code> 不变则缓存不失效。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msgList</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token operator">...</span> <span class="token punctuation">]</span> <span class="token comment">// 消息列表</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 未读消息的数量</span>
        <span class="token function">unreadCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>msgList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">m</span> <span class="token operator">=></span> m<span class="token punctuation">.</span>read <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keep-alive" tabindex="-1"><a class="header-anchor" href="#keep-alive" aria-hidden="true">#</a> keep-alive</h2>
<p><code v-pre>&lt;keep-alive&gt;</code> 可以缓存子组件，只创建一次。通过 <code v-pre>activated</code> 和 <code v-pre>deactivated</code> 生命周期监听是否显示状态。<br>
代码参考 components/KeepAlive/index.vue</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>切换<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child1</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>num === 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child1</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child2</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child1 <span class="token keyword">from</span> <span class="token string">'./Child1'</span>
<span class="token keyword">import</span> Child2 <span class="token keyword">from</span> <span class="token string">'./Child2.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Child1<span class="token punctuation">,</span> Child2 <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">2</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>场景</p>
<ul>
<li>局部频繁切换的组件，如 tabs</li>
<li>不可乱用 <code v-pre>&lt;keep-alive&gt;</code> ，缓存太多会占用大量内存，而且出问题不好 debug</li>
</ul>
<h2 id="异步组件" tabindex="-1"><a class="header-anchor" href="#异步组件" aria-hidden="true">#</a> 异步组件</h2>
<p>对于体积大的组件（如编辑器、表单、地图等）可以使用异步组件</p>
<ul>
<li>拆包，需要时异步加载，不需要时不加载</li>
<li>减少 main 包的体积，页面首次加载更快</li>
</ul>
<p>vue3 使用 <code v-pre>defineAsyncComponent</code> 加载异步组件，代码参考 components/AsyncComponent/index.vue</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'AsyncComponent'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">Child</span><span class="token operator">:</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: "async-child" */</span> <span class="token string">'./Child.vue'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由懒加载" tabindex="-1"><a class="header-anchor" href="#路由懒加载" aria-hidden="true">#</a> 路由懒加载</h2>
<p>对于一些补偿访问的路由，或者组件提交比较大的路由，可以使用路由懒加载。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Home
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'About'</span><span class="token punctuation">,</span>
    <span class="token comment">// 路由懒加载</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: "about" */</span> <span class="token string">'../views/About.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssr" tabindex="-1"><a class="header-anchor" href="#ssr" aria-hidden="true">#</a> SSR</h2>
<p>SSR 让网页访问速度更快，对 SEO 友好。</p>
<p>但 SSR 使用和调试成本高，不可乱用。例如，一个低代码项目（在线制作 H5 网页），toB 部分不可用 SSR ， toC 部分适合用 SSR 。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>v-if 和 v-show</li>
<li>v-for 使用 key</li>
<li>computed 缓存</li>
<li>keep-alive</li>
<li>异步组件</li>
<li>路由懒加载</li>
<li>SSR</li>
</ul>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>网上看到过一些“较真”的性能优化，对比普通组件和函数组件，JS 执行多消耗了几 ms 。</p>
<ul>
<li>如果这些是为了探索、学习前端技术，非常推荐</li>
<li>但在实际项目中要慎用，不要为了优化而优化。肉眼不可见的 ms 级的优化，对项目没有任何实际价值</li>
</ul>
<h2 id="连环问-vue-遇到过哪些坑" tabindex="-1"><a class="header-anchor" href="#连环问-vue-遇到过哪些坑" aria-hidden="true">#</a> 连环问：Vue 遇到过哪些坑？？？</h2>
<p>全局事件、自定义事件要在组件销毁时解除绑定</p>
<ul>
<li>内存泄漏风险</li>
<li>全局事件（如 <code v-pre>window.resize</code>）不解除，则会继续监听，而且组件再次创建时会重复绑定</li>
</ul>
<p>Vue2.x 中，无法监听 data 属性的新增和删除，以及数组的部分修改 —— Vue3 不会有这个问题</p>
<ul>
<li>新增 data 属性，需要用 <code v-pre>Vue.set</code></li>
<li>删除 data 属性，需要用 <code v-pre>Vue.delete</code></li>
<li>修改数组某一元素，不能 <code v-pre>arr[index] = value</code> ，要使用 <code v-pre>arr.splice</code> API 方式</li>
</ul>
<p>路由切换时，页面会 scroll 到顶部。例如，在一个新闻列表页下滑到一定位置，点击进入详情页，在返回列表页，此时会 scroll 到顶部，并重新渲染列表页。所有的 SPA 都会有这个问题，并不仅仅是 Vue 。</p>
<ul>
<li>在列表页缓存数据和 <code v-pre>scrollTop</code></li>
<li>返回列表页时（用 Vue-router <a href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html" target="_blank" rel="noopener noreferrer">导航守卫<ExternalLinkIcon/></a>，判断 <code v-pre>from</code>），使用缓存数据渲染页面，然后 <code v-pre>scrollTo(scrollTop)</code></li>
</ul>
</template>
