<template><h1 id="反转单向链表" tabindex="-1"><a class="header-anchor" href="#反转单向链表" aria-hidden="true">#</a> 反转单向链表</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>定义一个函数，输入一个单向链表的头节点，反转该链表，并输出反转之后的头节点</p>
<h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h2>
<p>链表是一种物理结构（非逻辑结构），是数组的补充。<br>
数组需要一段连续的内存空间，而链表不需要。</p>
<p>数据结构</p>
<ul>
<li>单向链表 <code v-pre>{ value, next }</code></li>
<li>双向链表 <code v-pre>{ value, prev, next }</code></li>
</ul>
<p>两者对比</p>
<ul>
<li>链表：查询慢，新增和删除较快</li>
<li>数组：查询快，新增和删除较慢</li>
</ul>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2>
<p>React Fiber 就把 vdom 树转换为一个链表，这样才有可能随时中断、再继续进行。<br>
如果 vdom 是树，那只能递归一次性执行完成，中间无法断开。</p>
<p><img src="@source/fe/数据结构和算法/img/react-fiber-链表.png" alt=""></p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>反转链表，画图很好理解。没有捷径，遍历一边，重新设置 next 指向即可。<br>
但实际写代码，却并不简单，很容易造成 nextNode 丢失。</p>
<p>因此，遍历过程中，至少要存储 3 个指针 <code v-pre>prevNode</code> <code v-pre>curNode</code> <code v-pre>nextNode</code></p>
<p>时间复杂度 <code v-pre>O(n)</code></p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>参考 reverse-link-list.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 反转单向链表
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ILinkListNode</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token builtin">number</span>
    next<span class="token operator">?</span><span class="token operator">:</span> ILinkListNode
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 反转单向链表，并返回反转之后的 head node
 * <span class="token keyword">@param</span> <span class="token parameter">listNode</span> list head node
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>listNode<span class="token operator">:</span> ILinkListNode<span class="token punctuation">)</span><span class="token operator">:</span> ILinkListNode <span class="token punctuation">{</span>
    <span class="token comment">// 定义三个指针</span>
    <span class="token keyword">let</span> prevNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">let</span> nextNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> listNode

    <span class="token comment">// 以 nextNode 为主，遍历链表</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 第一个元素，删掉 next ，防止循环引用</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">delete</span> curNode<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>

        <span class="token comment">// 反转指针</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">&amp;&amp;</span> prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode
        <span class="token punctuation">}</span>

        <span class="token comment">// 整体向后移动指针</span>
        prevNode <span class="token operator">=</span> curNode
        curNode <span class="token operator">=</span> nextNode
        nextNode <span class="token operator">=</span> nextNode<span class="token operator">?.</span>next
    <span class="token punctuation">}</span>

    <span class="token comment">// 最后一个的补充：当 nextNode 空时，此时 curNode 尚未设置 next</span>
    curNode<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode

    <span class="token keyword">return</span> curNode<span class="token operator">!</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 根据数组创建单向链表
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> number arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createLinkList</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> ILinkListNode <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'arr is empty'</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ILinkListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> arr<span class="token punctuation">[</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> curNode

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curNode <span class="token operator">=</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>
            next<span class="token operator">:</span> curNode
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> curNode
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">createLinkList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'list:'</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span>

<span class="token keyword">const</span> list1 <span class="token operator">=</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'list1:'</span><span class="token punctuation">,</span> list1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>链表</li>
<li>链表和数组的不同
<ul>
<li>内存占用</li>
<li>查询、新增、删除的效率</li>
</ul>
</li>
<li>如何保证 nextNode 不丢失</li>
</ul>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>思考：用数组和链表实现队列，哪个性能更好？</p>
</template>
