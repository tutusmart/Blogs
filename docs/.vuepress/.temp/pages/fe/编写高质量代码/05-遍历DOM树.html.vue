<template><!--
 * @Author: tuWei
 * @Date: 2022-05-19 18:28:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-19 20:08:15
-->
<h1 id="遍历-dom-树" tabindex="-1"><a class="header-anchor" href="#遍历-dom-树" aria-hidden="true">#</a> 遍历 DOM 树</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>写一个函数遍历 DOM 树，分别用深度优先和广度优先</p>
<p>PS：注意回顾 “Node 和 Element 和区别”</p>
<h2 id="深度优先-vs-广度优先" tabindex="-1"><a class="header-anchor" href="#深度优先-vs-广度优先" aria-hidden="true">#</a> 深度优先 vs 广度优先</h2>
<p><img src="@source/fe/编写高质量代码/img/dom-tree.png" alt=""></p>
<p>深度优先的结果 <code v-pre>&lt;div&gt; &lt;p&gt; &quot;hello&quot; &lt;b&gt; &quot;world&quot; &lt;img&gt; 注释 &lt;ul&gt; &lt;li&gt; &quot;a&quot; &lt;li&gt; &quot;b&quot;</code></p>
<p>广度优先的结果 <code v-pre>&lt;div&gt; &lt;p&gt; &lt;img&gt; 注释 &lt;ul&gt; &quot;hello&quot; &lt;b&gt; &lt;li&gt; &lt;li&gt; &quot;world&quot; &quot;a&quot; &quot;b&quot;</code></p>
<h2 id="深度优先" tabindex="-1"><a class="header-anchor" href="#深度优先" aria-hidden="true">#</a> 深度优先</h2>
<p>一般通过递归实现，代码参考 dom-traverse.ts</p>
<h2 id="广度优先" tabindex="-1"><a class="header-anchor" href="#广度优先" aria-hidden="true">#</a> 广度优先</h2>
<p>一般通过队列实现，代码参考 dom-traverse.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解答" tabindex="-1"><a class="header-anchor" href="#解答" aria-hidden="true">#</a> 解答</h2>
<ul>
<li>深度优先，递归</li>
<li>广度优先，队列</li>
</ul>
<h2 id="连环问-深度优先可以不用递归吗" tabindex="-1"><a class="header-anchor" href="#连环问-深度优先可以不用递归吗" aria-hidden="true">#</a> 连环问：深度优先可以不用递归吗？</h2>
<p>深度优先遍历，可以使用栈代替递归，递归本质上就是栈。代码参考 dom-traverse.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 遍历 DOM tree
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token doc-comment comment">/**
 * 访问节点
 * <span class="token keyword">@param</span> <span class="token parameter">n</span> node
 */</span>
<span class="token keyword">function</span> <span class="token function">visitNode</span><span class="token punctuation">(</span>n<span class="token operator">:</span> Node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token keyword">instanceof</span> <span class="token class-name">Comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 注释</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Comment node ---'</span><span class="token punctuation">,</span> n<span class="token punctuation">.</span>textContent<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token keyword">instanceof</span> <span class="token class-name">Text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 文本</span>
        <span class="token keyword">const</span> t <span class="token operator">=</span> n<span class="token punctuation">.</span>textContent<span class="token operator">?.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Text node ---'</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token keyword">instanceof</span> <span class="token class-name">HTMLElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// element</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'Element node ---'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>n<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 深度优先遍历
 * <span class="token keyword">@param</span> <span class="token parameter">root</span> dom node
 */</span>
<span class="token keyword">function</span> <span class="token function">depthFirstTraverse1</span><span class="token punctuation">(</span>root<span class="token operator">:</span> Node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">visitNode</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

    <span class="token keyword">const</span> childNodes <span class="token operator">=</span> root<span class="token punctuation">.</span>childNodes <span class="token comment">// .childNodes 和 .children 不一样</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>childNodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>child <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">depthFirstTraverse1</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span> <span class="token comment">// 递归</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 深度优先遍历
 * <span class="token keyword">@param</span> <span class="token parameter">root</span> dom node
 */</span>
 <span class="token keyword">function</span> <span class="token function">depthFirstTraverse2</span><span class="token punctuation">(</span>root<span class="token operator">:</span> Node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> stack<span class="token operator">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

     <span class="token comment">// 根节点压栈</span>
     stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

     <span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">const</span> curNode <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 出栈</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">break</span>

         <span class="token function">visitNode</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>

         <span class="token comment">// 子节点压栈</span>
         <span class="token keyword">const</span> childNodes <span class="token operator">=</span> curNode<span class="token punctuation">.</span>childNodes
         <span class="token keyword">if</span> <span class="token punctuation">(</span>childNodes<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">// reverse 反顺序压栈</span>
             <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>childNodes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>child <span class="token operator">=></span> stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 广度优先遍历
 * <span class="token keyword">@param</span> <span class="token parameter">root</span> dom node
 */</span>
<span class="token keyword">function</span> <span class="token function">breadthFirstTraverse</span><span class="token punctuation">(</span>root<span class="token operator">:</span> Node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> queue<span class="token operator">:</span> Node<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 数组 vs 链表</span>

    <span class="token comment">// 根节点入队列</span>
    queue<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> curNode <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">break</span>

        <span class="token function">visitNode</span><span class="token punctuation">(</span>curNode<span class="token punctuation">)</span>

        <span class="token comment">// 子节点入队</span>
        <span class="token keyword">const</span> childNodes <span class="token operator">=</span> curNode<span class="token punctuation">.</span>childNodes
        <span class="token keyword">if</span> <span class="token punctuation">(</span>childNodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            childNodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>child <span class="token operator">=></span> queue<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>box <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'box is null'</span><span class="token punctuation">)</span>
<span class="token function">depthFirstTraverse2</span><span class="token punctuation">(</span>box<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归和非递归哪个更好？</p>
<ul>
<li>递归逻辑更加清晰，但容易出现 <code v-pre>stack overflow</code> 错误（可使用<code v-pre>尾递归</code>，编译器有优化）</li>
<li>非递归效率更高，但使用栈，逻辑稍微复杂一些</li>
</ul>
</template>
