<template><h1 id="求二叉搜索树的第-k-小的值" tabindex="-1"><a class="header-anchor" href="#求二叉搜索树的第-k-小的值" aria-hidden="true">#</a> 求二叉搜索树的第 K 小的值</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>一个二叉搜索树，求其中的第 K 小的节点的值。
如下图，第 3 小的节点是 <code v-pre>4</code></p>
<p><img src="@source/fe/数据结构和算法/img/二叉搜索树.png" alt=""></p>
<h2 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h2>
<p>树，大家应该都知道，如前端常见的 DOM 树、vdom 结构。</p>
<p>二叉树，顾名思义，就是每个节点最多能有两个子节点。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 或其他类型</span>
    left<span class="token operator">?</span><span class="token operator">:</span> ITreeNode
    right<span class="token operator">?</span><span class="token operator">:</span> ITreeNode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二叉树的遍历" tabindex="-1"><a class="header-anchor" href="#二叉树的遍历" aria-hidden="true">#</a> 二叉树的遍历</h2>
<ul>
<li>前序遍历：root -&gt; left -&gt; right</li>
<li>中序遍历：left -&gt; root -&gt; right</li>
<li>后序遍历：left -&gt; right -&gt; root</li>
</ul>
<h2 id="二叉搜索树-bst" tabindex="-1"><a class="header-anchor" href="#二叉搜索树-bst" aria-hidden="true">#</a> 二叉搜索树 BST</h2>
<ul>
<li>左节点（包括其后代） &lt;= 根节点</li>
<li>右节点（包括其后代） &gt;= 根节点</li>
</ul>
<p>思考：BST 存在的意义是什么？—— 后面解释</p>
<h2 id="分析题目" tabindex="-1"><a class="header-anchor" href="#分析题目" aria-hidden="true">#</a> 分析题目</h2>
<p>根据 BST 的特点，中序遍历的结果，正好是按照从小到大排序的结果。<br>
所以，中序遍历，求数组的 <code v-pre>arr[k]</code> 即可。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>代码 binary-search-tree-k-value.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 二叉搜索树
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token builtin">number</span>
    left<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
    right<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token doc-comment comment">/**
 * 二叉树前序遍历
 * <span class="token keyword">@param</span> <span class="token parameter">node</span> tree node
 */</span>
<span class="token keyword">function</span> <span class="token function">preOrderTraverse</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token comment">// console.log(node.value)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token function">preOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token function">preOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 二叉树中序遍历
 * <span class="token keyword">@param</span> <span class="token parameter">node</span> tree node
 */</span>
<span class="token keyword">function</span> <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token comment">// console.log(node.value)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 二叉树后序遍历
 * <span class="token keyword">@param</span> <span class="token parameter">node</span> tree node
 */</span>
<span class="token keyword">function</span> <span class="token function">postOrderTraverse</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token function">postOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token function">postOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token comment">// console.log(node.value)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 寻找 BST 里的第 K 小值
 * <span class="token keyword">@param</span> <span class="token parameter">node</span> tree node
 * <span class="token keyword">@param</span> <span class="token parameter">k</span> 第几个值
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getKthValue</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ITreeNode<span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bst<span class="token operator">:</span> ITreeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    left<span class="token operator">:</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    right<span class="token operator">:</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// preOrderTraverse(bst)</span>
<span class="token comment">// inOrderTraverse(bst)</span>
<span class="token comment">// postOrderTraverse(bst)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getKthValue</span><span class="token punctuation">(</span>bst<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>二叉搜索树的特点</li>
<li>前序、中序、后序遍历</li>
</ul>
</template>
