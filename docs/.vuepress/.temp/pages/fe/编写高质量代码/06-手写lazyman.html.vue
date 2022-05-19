<template><h1 id="手写-lazyman" tabindex="-1"><a class="header-anchor" href="#手写-lazyman" aria-hidden="true">#</a> 手写 LazyMan</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>手写 LazyMan ，实现 <code v-pre>sleep</code> 和 <code v-pre>eat</code> 两个方法，支持链式调用。
代码示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LazyMan</span><span class="token punctuation">(</span><span class="token string">'双越'</span><span class="token punctuation">)</span>
me<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">'苹果'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">'香蕉'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">'葡萄'</span><span class="token punctuation">)</span> <span class="token comment">// 打印结果如下：</span>

<span class="token comment">// '双越 eat 苹果'</span>
<span class="token comment">// '双越 eat 香蕉'</span>
<span class="token comment">// （等待 5s）</span>
<span class="token comment">// '双越 eat 葡萄'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设计-class-框架" tabindex="-1"><a class="header-anchor" href="#设计-class-框架" aria-hidden="true">#</a> 设计 class 框架</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">LazyMan</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 打印 eat 行为</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token comment">// 支持链式调用</span>
    <span class="token punctuation">}</span>
    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">seconds</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 等待 10s 的处理逻辑</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token comment">// 支持链式调用</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理-sleep-逻辑" tabindex="-1"><a class="header-anchor" href="#处理-sleep-逻辑" aria-hidden="true">#</a> 处理 sleep 逻辑</h2>
<p>初始化一个任务队列，执行 <code v-pre>eat</code> 和 <code v-pre>sleep</code> 是都往队列插入一个函数。依次执行队列的任务，遇到 <code v-pre>sleep</code> 就延迟触发 <code v-pre>next</code> 。</p>
<p><img src="@source/fe/编写高质量代码/img/sleep.png" alt=""></p>
<p>代码参考 lazy-man.ts</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> lazy man
 * <span class="token keyword">@author</span> 双越老师
 */</span>

<span class="token keyword">class</span> <span class="token class-name">LazyMan</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token keyword">private</span> tasks<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 任务列表</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name

        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> task <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 取出当前 tasks 的第一个任务</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>task<span class="token punctuation">)</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">eat</span><span class="token punctuation">(</span>food<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token function-variable function">task</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> eat </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>food<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 立刻执行下一个任务</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token comment">// 链式调用</span>
    <span class="token punctuation">}</span>

    <span class="token function">sleep</span><span class="token punctuation">(</span>seconds<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token function-variable function">task</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 开始睡觉</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 已经睡完了 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>seconds<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">s，开始执行下一个任务</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// xx 秒之后再执行下一个任务</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> seconds <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token comment">// 链式调用</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> me <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LazyMan</span><span class="token punctuation">(</span><span class="token string">'双越'</span><span class="token punctuation">)</span>
me<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">'苹果'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">'香蕉'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">'葡萄'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">'西瓜'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">'橘子'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>链式调用</li>
<li>任务队列</li>
<li>延迟触发</li>
</ul>
</template>
