<template><h1 id="vdom-真的很快吗" tabindex="-1"><a class="header-anchor" href="#vdom-真的很快吗" aria-hidden="true">#</a> vdom 真的很快吗</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>vdom 真的很快吗？</p>
<h2 id="vue-react-等框架的存在价值" tabindex="-1"><a class="header-anchor" href="#vue-react-等框架的存在价值" aria-hidden="true">#</a> Vue React 等框架的存在价值</h2>
<p>Vue React 等框架给前端开发带来了革命性的变化。相比于此前的 jQuery 时代，它们的价值在于</p>
<ul>
<li>组件化 —— 这不是核心原因。WebComponent 已提出多年，当仍未发展壮大</li>
<li>数据视图分离，数据驱动视图 —— 这才是核心！！！</li>
</ul>
<p>数据视图分离，开发时只需要关注业务数据（React 的 state，Vue 的 data）即可，不用在实时的修改 DOM —— 这一点和 jQuery 有了本质区别。<br>
特别是对于大型的前端项目，将极大的降低开发复杂度，提高稳定性。</p>
<p>数据驱动视图，内部将如何实现呢？—— 借助于 vdom</p>
<h2 id="vdom" tabindex="-1"><a class="header-anchor" href="#vdom" aria-hidden="true">#</a> vdom</h2>
<p>Virtual DOM，虚拟 DOM ，即用 JS 对象模拟 DOM 数据。是 React 最先提出来的概念。</p>
<p>React 的 JSX ，Vue 的 template 其实都是语法糖，它们本质上都是一个函数，成为 <code v-pre>render 函数</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// JSX: &lt;p id="p1">hello world&lt;/p></span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">'p1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'hello world'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 render 函数返回的就是一个 vdom 对象，一般叫做 vnode（虚拟节点），对应 DOM Node</p>
<p>每次数据更新（如 React setState）render 函数都会生成 newVnode ，然后前后对比 <code v-pre>diff(vnode, newVnode)</code>，计算出需要修改的 DOM 节点，再做修改。</p>
<h2 id="对比-dom-操作" tabindex="-1"><a class="header-anchor" href="#对比-dom-操作" aria-hidden="true">#</a> 对比 DOM 操作</h2>
<p>下面两者，哪个更快？—— 很明显，前者更快。</p>
<ul>
<li>jquery 时代：直接修改 DOM</li>
<li>框架时代：生成 vdom ，进行 diff 运算 --&gt; 修改 DOM</li>
</ul>
<p>但凡事都要有一个业务背景。如果页面功能越来越复杂，直接操作 DOM 代码将会难以阅读和维护，大家更希望要“数据视图分离，数据驱动视图”。</p>
<p>在这个前提下，哪个更快？ —— 当然是后者。因为业务复杂、代码混乱，将会导致很多无谓的 DOM 操作 —— <strong>DOM 操作是昂贵的</strong></p>
<ul>
<li>直接修改 DOM</li>
<li>生成 vdom ，进行 diff 运算 --&gt; 修改 DOM</li>
</ul>
<p>而相比于昂贵的 DOM 操作，JS 运算非常快。所以 JS 多做事情（vdom diff）是更优的选择。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>直接进行 DOM 操作永远都是最快的（但要目标明确，不能有无谓的 DOM 操作 —— 这很难）</li>
<li>如果业务复杂，要“数据视图分离，数据驱动视图”，无法直接修改 DOM ，那 vdom 就是一个很好的选择</li>
</ul>
<p>所以，<strong>vdom 并不比 DOM 操作更快</strong>（反而更慢，它做了 JS 运算），它只是在某个特定的场景下，无法做到精准 DOM 修改时，一个更优的选择。</p>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p><a href="https://www.sveltejs.cn/" target="_blank" rel="noopener noreferrer">Svelte<ExternalLinkIcon/></a> 不使用 vdom ，它将组件修改，编译为精准的 DOM 操作。和 React 设计思路完全不一样。</p>
<p><img src="@source/fe/知识深度/img/svelte.png" alt=""></p>
</template>
