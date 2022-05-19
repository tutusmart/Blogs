<template><h1 id="nodejs-多进程" tabindex="-1"><a class="header-anchor" href="#nodejs-多进程" aria-hidden="true">#</a> nodejs 多进程</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>nodejs 如何开启一个进程，进程之间如何通讯</p>
<h2 id="进程-process-和线程-thread" tabindex="-1"><a class="header-anchor" href="#进程-process-和线程-thread" aria-hidden="true">#</a> 进程 process 和线程 thread</h2>
<p>进程，是操作系统进行资源调度和分配的基本单位，每个进程都拥有自己独立的内存区域（参考“堆栈模型”）。
一个进程无法直接访问另一个进程的内存数据，除非通过合法的进程通讯。</p>
<p>执行一个 nodejs 文件，即开启了一个进程，可以通过 <code v-pre>process.pid</code> 查看进程 id 。</p>
<p>线程，是操作系统进行运算调度的最小单位，线程是附属于进程的。一个进程可以包含多个线程（至少一个），多线程之间可共用进程的内存数据。<br>
如操作系统是一个工厂，进程就是一个车间，线程就是一个一个的工人。</p>
<p>JS 是单线程的，即执行 JS 时启动一个进程（如 JS 引擎，nodejs 等），然后其中再开启一个线程来执行。<br>
虽然单线程，JS 是基于事件驱动的，它不会阻塞执行，适合高并发的场景。</p>
<h2 id="为何需要多进程" tabindex="-1"><a class="header-anchor" href="#为何需要多进程" aria-hidden="true">#</a> 为何需要多进程</h2>
<p>现代服务器都是多核 CPU ，适合同时处理多进程。即，一个进程无法充分利用 CPU 性能，进程数要等于 CPU 核数。</p>
<p>服务器一般内存比较大，但操作系统对于一个进程的内存分配是有上限的（2G），所以多进程才能充分利用服务器内存。</p>
<h2 id="nodejs-开启多进程" tabindex="-1"><a class="header-anchor" href="#nodejs-开启多进程" aria-hidden="true">#</a> nodejs 开启多进程</h2>
<p><code v-pre>child_process.fork</code> 可开启子进程执行单独的计算（源码参考 process-fork.js）</p>
<ul>
<li><code v-pre>fork('xxx.js')</code> 开启一个子进程</li>
<li>使用 <code v-pre>send</code> 发送信息，使用 <code v-pre>on</code> 接收信息</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fork <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'child_process'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>fork

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">'/get-sum'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'主进程 id'</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>pid<span class="token punctuation">)</span>

        <span class="token comment">// 开启子进程</span>
        <span class="token keyword">const</span> computeProcess <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token string">'./compute.js'</span><span class="token punctuation">)</span>
        computeProcess<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'开始计算'</span><span class="token punctuation">)</span>

        computeProcess<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> data <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'主进程接受到的信息：'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'sum is '</span> <span class="token operator">+</span> data<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        computeProcess<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'子进程因报错而退出'</span><span class="token punctuation">)</span>
            computeProcess<span class="token punctuation">.</span><span class="token function">kill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">'localhost: 3000'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>cluster.fork</code> 可针对当前代码，开启多个进程来执行（源码参考 cluster.js）</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> cpuCoreLength <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'os'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
<span class="token keyword">const</span> cluster <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'cluster'</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>cluster<span class="token punctuation">.</span>isMaster<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cpuCoreLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cluster<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 开启子进程</span>
    <span class="token punctuation">}</span>

    cluster<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'exit'</span><span class="token punctuation">,</span> worker <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'子进程退出'</span><span class="token punctuation">)</span>
        cluster<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 进程守护</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 多个子进程会共享一个 TCP 连接，提供一份网络服务</span>
    <span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">'done'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// 工作中 PM2</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>可使用 <code v-pre>child_process.fork</code> 和 <code v-pre>cluster.fork</code> 开启子进程</li>
<li>使用 <code v-pre>send</code> <code v-pre>on</code> 传递消息</li>
</ul>
<h2 id="扩展-使用-pm2" tabindex="-1"><a class="header-anchor" href="#扩展-使用-pm2" aria-hidden="true">#</a> 扩展：使用 PM2</h2>
<p>nodejs 服务开启多进程、进程守护，可使用 <a href="https://www.npmjs.com/package/pm2" target="_blank" rel="noopener noreferrer">pm2<ExternalLinkIcon/></a> ，不需要自己写。代码参考 koa2-code</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'koa'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// logger</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 先执行下一步 x-response-time ，执行完再继续执行</span>
  <span class="token keyword">const</span> rt <span class="token operator">=</span> ctx<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'X-Response-Time'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ctx<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ctx<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rt<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// x-response-time</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 先执行下一步 response ，执行完再继续执行</span>
  <span class="token keyword">const</span> ms <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'X-Response-Time'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ms<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// response</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> ctx <span class="token operator">=></span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">'Hello World'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>全局安装 pm2 <code v-pre>yarn global add pm2</code></li>
<li>增加 pm2 配置文件</li>
<li>修改 package.json scripts</li>
</ul>
</template>
