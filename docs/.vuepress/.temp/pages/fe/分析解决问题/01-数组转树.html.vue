<template><h1 id="数组转树" tabindex="-1"><a class="header-anchor" href="#数组转树" aria-hidden="true">#</a> 数组转树</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>定义一个 <code v-pre>convert</code> 函数，将以下数组转换为树结构。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门A'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 0 代表顶级节点，无父节点</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门B'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门C'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门D'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门E'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门F'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/fe/分析解决问题/img/部门-树.png" alt=""></p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>定义树节点的数据结构</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    children<span class="token operator">?</span><span class="token operator">:</span> ITreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历数组，针对每个元素</p>
<ul>
<li>生成 tree node</li>
<li>找到 parentNode 并加入到它的 <code v-pre>children</code></li>
</ul>
<p>找 parentNode 时，需要根据 <code v-pre>id</code> 能<strong>尽快</strong>找到 tree node<br>
需要一个 map ，这样时间复杂度是 <code v-pre>O(1)</code> 。否则就需要遍历查找，时间复杂度高。</p>
<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2>
<p>代码参考 convert-arr-tree.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> array to tree
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token keyword">interface</span> <span class="token class-name">IArrayItem</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    parentId<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    children<span class="token operator">?</span><span class="token operator">:</span> ITreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">convert</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> IArrayItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token comment">// 用于 id 和 treeNode 的映射</span>
    <span class="token keyword">const</span> idToTreeNode<span class="token operator">:</span> Map<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> ITreeNode<span class="token operator">></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">null</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> parentId <span class="token punctuation">}</span> <span class="token operator">=</span> item

        <span class="token comment">// 定义 tree node 并加入 map</span>
        <span class="token keyword">const</span> treeNode<span class="token operator">:</span> ITreeNode <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> name <span class="token punctuation">}</span>
        idToTreeNode<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> treeNode<span class="token punctuation">)</span>

        <span class="token comment">// 找到 parentNode 并加入到它的 children</span>
        <span class="token keyword">const</span> parentNode <span class="token operator">=</span> idToTreeNode<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>parentId<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>parentNode<span class="token punctuation">.</span>children <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> parentNode<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            parentNode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 找到根节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parentId <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> root <span class="token operator">=</span> treeNode
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'部门A'</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 0 代表顶级节点，无父节点</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'部门B'</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'部门C'</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'部门D'</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'部门E'</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'部门F'</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token function">convert</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>这两种数据结构很像 MySQL vs Mongodb ，一个关系型，一个文档型</p>
</template>
