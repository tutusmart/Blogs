<template><h1 id="vue-react-diff" tabindex="-1"><a class="header-anchor" href="#vue-react-diff" aria-hidden="true">#</a> Vue React diff</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>Vue React diff 算法有什么区别</p>
<h2 id="diff-算法" tabindex="-1"><a class="header-anchor" href="#diff-算法" aria-hidden="true">#</a> diff 算法</h2>
<p>diff 算法是一个非常普遍常用的方法，例如提交 github pr 或者（gitlab mr）时，会对比当前提交代码的改动，这就是 diff 。</p>
<p>Vue React diff 不是对比文字，而是 vdom 树，即 tree diff 。<br>
传统的 tree diff 算法复杂度是 <code v-pre>O(n^3)</code> ，算法不可用。</p>
<p><img src="@source/fe/知识深度/img/tree-diff.png" alt=""></p>
<h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2>
<p>Vue React 都是用于网页开发，基于 DOM 结构，对 diff 算法都进行了优化（或者简化）</p>
<ul>
<li>只在同一层级比较，不夸层级 （DOM 结构的变化，很少有跨层级移动）</li>
<li><code v-pre>tag</code> 不同则直接删掉重建，不去对比内部细节（DOM 结构变化，很少有只改外层，不改内层）</li>
<li>同一个节点下的子节点，通过 <code v-pre>key</code> 区分</li>
</ul>
<p>最终把时间复杂度降低到 <code v-pre>O(n)</code> ，生产环境下可用。这一点 Vue React 都是相同的。</p>
<p><img src="@source/fe/知识深度/img/tree-diff-1.png" alt=""></p>
<h2 id="react-diff-特点-仅向右移动" tabindex="-1"><a class="header-anchor" href="#react-diff-特点-仅向右移动" aria-hidden="true">#</a> React diff 特点 - 仅向右移动</h2>
<p>比较子节点时，仅向右移动，不向左移动。</p>
<p><img src="@source/fe/知识深度/img/react-diff.png" alt=""></p>
<h2 id="vue2-diff-特点-双端比较" tabindex="-1"><a class="header-anchor" href="#vue2-diff-特点-双端比较" aria-hidden="true">#</a> Vue2 diff 特点 - 双端比较</h2>
<p><img src="@source/fe/知识深度/img/vue2-diff.png" alt=""></p>
<p>定义四个指针，分别比较</p>
<ul>
<li>oldStartNode 和 newStartNode</li>
<li>oldStartNode 和 newEndNode</li>
<li>oldEndNode 和 newStartNode</li>
<li>oldEndNode 和 newEndNode</li>
</ul>
<p>然后指针继续向中间移动，知道指针汇合。</p>
<h2 id="vue3-diff-特点-最长递增子序列" tabindex="-1"><a class="header-anchor" href="#vue3-diff-特点-最长递增子序列" aria-hidden="true">#</a> Vue3 diff 特点 - 最长递增子序列</h2>
<p>例如数组 <code v-pre>[3，5，7，1，2，8]</code> 的最长递增子序列就是 <code v-pre>[3，5，7，8 ]</code> 。这是一个专门的算法。</p>
<p><img src="@source/fe/知识深度/img/vue3-diff.png" alt=""></p>
<p>算法步骤</p>
<ul>
<li>通过“前-前”比较找到开始的不变节点 <code v-pre>[A, B]</code></li>
<li>通过“后-后”比较找到末尾的不变节点 <code v-pre>[G]</code></li>
<li>剩余的有变化的节点 <code v-pre>[F, C, D, E, H]</code>
<ul>
<li>通过 <code v-pre>newIndexToOldIndexMap</code> 拿到 oldChildren 中对应的 index <code v-pre>[5, 2, 3, 4, -1]</code> （<code v-pre>-1</code> 表示之前没有，要新增）</li>
<li>计算<strong>最长递增子序列</strong>得到 <code v-pre>[2, 3, 4]</code> ，对应的就是 <code v-pre>[C, D, E]</code> ，即这些节点可以不变</li>
<li>剩余的节点，根据 index 进行新增、删除</li>
</ul>
</li>
</ul>
<p>该方法旨在尽量减少 DOM 的移动，达到最少的 DOM 操作。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>React diff 特点 - 仅向右移动</li>
<li>Vue2 diff 特点 - 双端比较</li>
<li>Vue3 diff 特点 - 最长递增子序列</li>
</ul>
<h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<p>以最小的成本了解原理，知道区别，应对面试。<br>
不要纠结于细节和源码，这会耗费你大量的时间成本 —— 除非你目的就是学习源码，这也不是本课程的重点。</p>
<h2 id="连环问-diff-算法中-key-为何如此重要" tabindex="-1"><a class="header-anchor" href="#连环问-diff-算法中-key-为何如此重要" aria-hidden="true">#</a> 连环问：diff 算法中 key 为何如此重要</h2>
<p>无论在 Vue 还是 React 中，<code v-pre>key</code> 的作用都非常大。以 React 为例，是否使用 <code v-pre>key</code> 对内部 DOM 变化影响非常大。</p>
<p><img src="@source/fe/知识深度/img/key.png" alt=""></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(index, num) in nums<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {{num}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> todoItems <span class="token operator">=</span> todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
