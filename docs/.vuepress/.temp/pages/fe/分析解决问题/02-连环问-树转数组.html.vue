<template><h1 id="树转数组" tabindex="-1"><a class="header-anchor" href="#树转数组" aria-hidden="true">#</a> 树转数组</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>定义一个 <code v-pre>convert</code> 函数，将以下对象转换为数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门A'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门B'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门D'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门E'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门C'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门F'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门A'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 0 代表顶级节点，无父节点</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门B'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门C'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门D'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门E'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'部门F'</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>根据顺组的顺序，需要<strong>广度优先</strong>遍历树</p>
<p>要快速获取 <code v-pre>parentId</code> 需要存储 <code v-pre>nodeToParent</code> map 结构。</p>
<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2>
<p>代码参考 convert-tree-arr.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> tree to arr
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

<span class="token keyword">function</span> <span class="token function">convert1</span><span class="token punctuation">(</span>root<span class="token operator">:</span> ITreeNode<span class="token punctuation">)</span><span class="token operator">:</span> IArrayItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token comment">// Map</span>
    <span class="token keyword">const</span> nodeToParent<span class="token operator">:</span> Map<span class="token operator">&lt;</span>ITreeNode<span class="token punctuation">,</span> ITreeNode<span class="token operator">></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> arr<span class="token operator">:</span> IArrayItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">// 广度优先遍历，queue</span>
    <span class="token keyword">const</span> queue<span class="token operator">:</span> ITreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    queue<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span> <span class="token comment">// 根节点 入队</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 出队</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">break</span>

        <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">=</span> curNode

        <span class="token comment">// 创建数组 item 并 push</span>
        <span class="token keyword">const</span> parentNode <span class="token operator">=</span> nodeToParent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>
        <span class="token keyword">const</span> parentId <span class="token operator">=</span> parentNode<span class="token operator">?.</span>id <span class="token operator">||</span> <span class="token number">0</span>
        <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> parentId <span class="token punctuation">}</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>

        <span class="token comment">// 子节点入队</span>
        children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>child <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 映射 parent</span>
            nodeToParent<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> curNode<span class="token punctuation">)</span>
            <span class="token comment">// 入队</span>
            queue<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">'部门A'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'部门B'</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'部门D'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'部门E'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'部门C'</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">'部门F'</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token function">convert1</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
