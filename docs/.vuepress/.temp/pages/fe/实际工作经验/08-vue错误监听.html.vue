<template><h1 id="vue-错误监听" tabindex="-1"><a class="header-anchor" href="#vue-错误监听" aria-hidden="true">#</a> Vue 错误监听</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>如何统一监听 Vue 组件报错？</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>真实项目需要<strong>闭环</strong>，即考虑各个方面，除了基本的功能外，还要考虑性能优化、报错、统计等。
而个人项目、课程项目一般以实现功能为主，不会考虑这么全面。所以，没有实际工作经验的同学，不会了解如此全面。</p>
<h2 id="window-onerror" tabindex="-1"><a class="header-anchor" href="#window-onerror" aria-hidden="true">#</a> window.onerror</h2>
<p>可以监听当前页面所有的 JS 报错，jQuery 时代经常用。<br>
注意，全局只绑定一次即可。不要放在多次渲染的组件中，这样容易绑定多次。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> source<span class="token punctuation">,</span> line<span class="token punctuation">,</span> column<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'window.onerror---------'</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> source<span class="token punctuation">,</span> line<span class="token punctuation">,</span> column<span class="token punctuation">,</span> error<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 注意，如果用 window.addEventListener('error', event => {}) 参数不一样！！！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="errorcaptured-生命周期" tabindex="-1"><a class="header-anchor" href="#errorcaptured-生命周期" aria-hidden="true">#</a> errorCaptured 生命周期</h2>
<p>会监听所有<strong>下级组件</strong>的错误。可以返回 <code v-pre>false</code> 阻止向上传播，因为可能会有多个上级节点都监听错误。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">errorCaptured</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'errorCaptured--------'</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> info<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="errorhandler" tabindex="-1"><a class="header-anchor" href="#errorhandler" aria-hidden="true">#</a> errorHandler</h2>
<p>全局的错误监听，所有组件的报错都会汇总到这里来。PS：如果 <code v-pre>errorCaptured</code> 返回 <code v-pre>false</code> 则<strong>不会</strong>到这里。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'errorHandler--------'</span><span class="token punctuation">,</span> error<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> info<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，<code v-pre>errorHandler</code> 会阻止错误走向 <code v-pre>window.onerror</code>。</p>
<p>PS：还有 <code v-pre>warnHandler</code></p>
<h2 id="异步错误" tabindex="-1"><a class="header-anchor" href="#异步错误" aria-hidden="true">#</a> 异步错误</h2>
<p>组件内的异步错误 <code v-pre>errorHandler</code> 监听不到，还是需要 <code v-pre>window.onerror</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'setTimeout 报错'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>方式</p>
<ul>
<li><code v-pre>errorCaptured</code> 监听下级组件的错误，可返回 <code v-pre>false</code> 阻止向上传播</li>
<li><code v-pre>errorHandler</code> 监听 Vue 全局错误</li>
<li><code v-pre>window.onerror</code> 监听其他的 JS 错误，如异步</li>
</ul>
<p>建议：结合使用</p>
<ul>
<li>一些重要的、复杂的、有运行风险的组件，可使用 <code v-pre>errorCaptured</code> 重点监听</li>
<li>然后用 <code v-pre>errorHandler</code> <code v-pre>window.onerror</code> 候补全局监听，避免意外情况</li>
</ul>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>Promise 监听报错要使用 <code v-pre>window.onunhandledrejection</code> ，后面会有面试题讲解。</p>
<p>前端拿到错误监听之后，需要传递给服务端，进行错误收集和分析，然后修复 bug 。
后面会有一道面试题专门讲解。</p>
</template>
