<template><h1 id="用两个栈实现一个队列" tabindex="-1"><a class="header-anchor" href="#用两个栈实现一个队列" aria-hidden="true">#</a> 用两个栈实现一个队列</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请用两个栈，来实现队列的功能，实现功能 <code v-pre>add</code> <code v-pre>delete</code> <code v-pre>length</code> 。</p>
<h2 id="队列-queue" tabindex="-1"><a class="header-anchor" href="#队列-queue" aria-hidden="true">#</a> 队列 Queue</h2>
<p>栈，先进后出</p>
<p>队列，先进先出，API 包括</p>
<ul>
<li>add</li>
<li>delete</li>
<li>length</li>
</ul>
<p>常见的“消息队列”就是队列的一种应用场景</p>
<ul>
<li>A 系统向 B 系统持续发送海量的消息</li>
<li>A 系统先把一条一条消息放在一个 queue</li>
<li>B 系统再从 queue 中逐条消费（按顺序，先进先出）</li>
</ul>
<h2 id="逻辑结构和物理结构" tabindex="-1"><a class="header-anchor" href="#逻辑结构和物理结构" aria-hidden="true">#</a> 逻辑结构和物理结构</h2>
<p>队列和栈一样，是一种逻辑结构。它可以用数组、链表等实现。<br>
思考：用数组实现队列，性能会怎样 —— add 怎样？delete 怎样？</p>
<p>复杂场景下（如海量数据，内存不够用）需要单独设计。</p>
<h2 id="题目分析" tabindex="-1"><a class="header-anchor" href="#题目分析" aria-hidden="true">#</a> 题目分析</h2>
<p>可画图分析：参考视频讲解</p>
<ul>
<li>队列 add
<ul>
<li>往 stack1 push 元素</li>
</ul>
</li>
<li>队列 delete
<ul>
<li>将 stack1 所有元素 pop 出来，push 到 stack2</li>
<li>将 stack2 执行一次 pop</li>
<li>再将 stack2 所有元素 pop 出来，push 进 stack1</li>
</ul>
</li>
</ul>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>参考 two-stacks-one-queue.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> 两个栈 - 一个队列
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyQueue</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> stack1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">private</span> stack2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token doc-comment comment">/**
     * 入队
     * <span class="token keyword">@param</span> <span class="token parameter">n</span> n
     */</span>
    <span class="token function">add</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 出队
     */</span>
    <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> res

        <span class="token keyword">const</span> stack1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack1
        <span class="token keyword">const</span> stack2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack2

        <span class="token comment">// 将 stack1 所有元素移动到 stack2 中</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>stack1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> n <span class="token operator">=</span> stack1<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// stack2 pop</span>
        res <span class="token operator">=</span> stack2<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">// 将 stack2 所有元素“还给”stack1</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>stack2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> n <span class="token operator">=</span> stack2<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> res <span class="token operator">||</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">get</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// // 功能测试</span>
<span class="token comment">// const q = new MyQueue()</span>
<span class="token comment">// q.add(100)</span>
<span class="token comment">// q.add(200)</span>
<span class="token comment">// q.add(300)</span>
<span class="token comment">// console.info(q.length)</span>
<span class="token comment">// console.info(q.delete())</span>
<span class="token comment">// console.info(q.length)</span>
<span class="token comment">// console.info(q.delete())</span>
<span class="token comment">// console.info(q.length)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>队列</li>
<li>画图，帮助梳理解题思路</li>
</ul>
</template>
