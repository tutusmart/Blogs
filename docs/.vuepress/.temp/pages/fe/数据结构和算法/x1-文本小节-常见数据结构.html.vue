<template><h1 id="常见数据结构" tabindex="-1"><a class="header-anchor" href="#常见数据结构" aria-hidden="true">#</a> 常见数据结构</h1>
<p>前端开发中常见的数据结构</p>
<h2 id="栈-stack" tabindex="-1"><a class="header-anchor" href="#栈-stack" aria-hidden="true">#</a> 栈 Stack</h2>
<p>栈 Stack 是一种“先进后出”的数据结构。</p>
<p><img src="@source/fe/数据结构和算法/img/栈.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 数组实现 栈</span>
<span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// 压栈</span>
stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 出栈</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="队列-queue" tabindex="-1"><a class="header-anchor" href="#队列-queue" aria-hidden="true">#</a> 队列 Queue</h2>
<p>队列 Queue 是一种“先进先出”的数据结构。</p>
<p><img src="@source/fe/数据结构和算法/img/队列.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 数组实现 队列</span>
<span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// 入队</span>
queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 出队</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链表-linked-list" tabindex="-1"><a class="header-anchor" href="#链表-linked-list" aria-hidden="true">#</a> 链表 Linked list</h2>
<p>链表不是连续的数据结构，而是由一系列的节点组成，节点之间通过指针连接。</p>
<p><img src="@source/fe/数据结构和算法/img/链表.png" alt=""></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 链表节点的数据结构</span>
<span class="token keyword">interface</span> <span class="token class-name">IListNode</span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token builtin">any</span>
    next<span class="token operator">:</span> IListNode <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树-tree" tabindex="-1"><a class="header-anchor" href="#树-tree" aria-hidden="true">#</a> 树 Tree</h2>
<p>树，是一种有序的层级结构。每个节点下面可以有若干个子节点。例如常见的 DOM 树。</p>
<p><img src="@source/fe/数据结构和算法/img/dom-tree.png" alt=""></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 树节点的数据结构</span>
<span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token builtin">any</span>
    children<span class="token operator">:</span> ITreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二叉树-binary-tree" tabindex="-1"><a class="header-anchor" href="#二叉树-binary-tree" aria-hidden="true">#</a> 二叉树 Binary Tree</h2>
<p>二叉树，首先它是一棵树，其次它的每个节点，最多有两个子节点，分别为 <code v-pre>left</code> 和 <code v-pre>right</code></p>
<p><img src="@source/fe/数据结构和算法/img/二叉搜索树.png" alt=""></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 二叉树节点的数据结构</span>
<span class="token keyword">interface</span> <span class="token class-name">IBinaryTreeNode</span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token builtin">any</span>
    left<span class="token operator">:</span> IBinaryTreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
    right<span class="token operator">:</span> IBinaryTreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
