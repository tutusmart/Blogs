<template><h1 id="浏览器和-nodejs-事件循环的区别" tabindex="-1"><a class="header-anchor" href="#浏览器和-nodejs-事件循环的区别" aria-hidden="true">#</a> 浏览器和 nodejs 事件循环的区别</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>浏览器和 nodejs 事件循环的区别</p>
<h2 id="单线程和异步" tabindex="-1"><a class="header-anchor" href="#单线程和异步" aria-hidden="true">#</a> 单线程和异步</h2>
<p>JS 是单线程的，浏览器中 JS 和 DOM 渲染线程互斥。<br>
单线程，代码就必须“串行”执行，无法并行，同一时间只能干一件事。</p>
<p>在 Java 等多线程语言中，发起请求、设置定时任务可以通过新开一个线程来处理，这就是并行。<br>
而 JS 是单线程，这种场景就只能使用“异步”。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'start'</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务" aria-hidden="true">#</a> 宏任务和微任务</h2>
<p>浏览器端异步的 API 有很多</p>
<ul>
<li>宏任务：setTimeout 网络请求</li>
<li>微任务：promise</li>
</ul>
<p>两者表面的区别：</p>
<p>第一，微任务比宏任务更快执行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'start'</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'timeout'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise.then'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二，微任务在 DOM 渲染前执行，而宏任务在 DOM 显示后（即真正显示到页面上，肉眼可见）执行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">'new paragraph'</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'length----'</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span>length<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'start'</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'timeout----'</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'阻塞'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise.then----'</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'阻塞'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器的事件循环" tabindex="-1"><a class="header-anchor" href="#浏览器的事件循环" aria-hidden="true">#</a> 浏览器的事件循环</h2>
<p>主要的流程</p>
<ul>
<li>执行 JS 同步代码（执行异步 API 时，异步先放在一个队列中，先不执行）</li>
<li>DOM 渲染</li>
<li>执行队列中的异步函数（执行异步 API 时，异步先放在一个队列中，先不执行）—— 异步中可能还嵌套异步</li>
<li>DOM 渲染</li>
<li>执行队列中的异步函数（执行异步 API 时，异步先放在一个队列中，先不执行）</li>
<li>DOM 渲染</li>
<li>...</li>
</ul>
<p><img src="@source/fe/知识深度/img/event-loop.png" alt=""></p>
<p>考虑宏任务和微任务</p>
<ul>
<li>执行 JS 同步代码（异步函数，分别放在 macroTaskQueue 和 microTaskQueue ）</li>
<li>DOM 结构渲染（此时还没有在页面显示，但可以获取 DOM 内容了）</li>
<li>执行 microTaskQueue 函数（异步中还可能嵌套异步...）</li>
<li>显示 DOM 到页面</li>
<li>执行 macroTaskQueue 函数（异步中还可能嵌套异步...）</li>
<li>...</li>
</ul>
<h2 id="nodejs-异步" tabindex="-1"><a class="header-anchor" href="#nodejs-异步" aria-hidden="true">#</a> nodejs 异步</h2>
<p>nodejs 也是用了 V8 引擎和 ES 语法，所以也有同步、异步，异步也分宏任务、微任务。</p>
<ul>
<li>setTimeout setInterval —— 宏任务</li>
<li>promise 和 async/await  —— 微任务</li>
<li>process.nextTick —— 微任务，<strong>但优先级最高</strong></li>
<li>setImmediate —— 宏任务</li>
<li>I/O 文件、网络 —— 宏任务</li>
<li>Socket 连接：连接 mysql —— 宏任务</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'start'</span><span class="token punctuation">)</span>
<span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'immediate1'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'timeout1'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'promise then'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'nextTick'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'end'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nodejs-事件循环" tabindex="-1"><a class="header-anchor" href="#nodejs-事件循环" aria-hidden="true">#</a> nodejs 事件循环</h2>
<p>浏览器的各种宏任务，都是按照代码的顺序执行的，没有其他优先级。</p>
<p>nodejs 的宏任务是分了如下类型，nodejs 事件循环中宏任务需要按照这个顺序来执行。</p>
<ul>
<li>timers(计时器) - 执行 <code v-pre>setTimeout</code> 以及 <code v-pre>setInterval</code> 的回调</li>
<li>I/O callbacks - 处理网络、流、TCP 的错误回调</li>
<li>idle, prepare --- 闲置阶段 - node 内部使用</li>
<li>poll(轮循) - 执行 poll 中的 I/O 队列，检查定时器是否到时间</li>
<li>check(检查) - 存放 <code v-pre>setImmediate</code> 回调</li>
<li>close callbacks - 关闭回调，例如 <code v-pre>socket.on('close')</code></li>
</ul>
<p>nodejs 事件循环的过程</p>
<ul>
<li>执行同步代码</li>
<li>执行 <code v-pre>process.nextTick</code> 和微任务（前者优先级更高）</li>
<li>按照顺序执行 6 个类型的宏任务</li>
<li>...</li>
</ul>
<p><img src="@source/fe/知识深度/img/event-loop-nodejs.png" alt=""></p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>事件循环的大概模式相同</li>
<li>宏任务有优先级区分</li>
<li><code v-pre>process.nextTick</code> 在微任务的优先级更高</li>
</ul>
<p>但是，<code v-pre>process.nextTick</code> 在最新版 nodejs 中不被推荐使用，推荐使用 <code v-pre>setImmediate</code>
原因在于 <code v-pre>process.nextTick</code> 是在当前帧介绍后立即执行，会阻断IO并且有最大数量限制（递归时会有问题）
而 <code v-pre>setImmediate</code> 不会阻断 IO ，更像是 <code v-pre>setTimeout(fun, 0)</code></p>
<h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2>
<p>基于 nodejs 最新版。nodejs 旧版会有所不同，特别注意。</p>
</template>
