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
<p><code v-pre>cluster.fork</code> 可针对当前代码，开启多个进程来执行（源码参考 cluster.js）</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>可使用 <code v-pre>child_process.fork</code> 和 <code v-pre>cluster.fork</code> 开启子进程</li>
<li>使用 <code v-pre>send</code> <code v-pre>on</code> 传递消息</li>
</ul>
<h2 id="扩展-使用-pm2" tabindex="-1"><a class="header-anchor" href="#扩展-使用-pm2" aria-hidden="true">#</a> 扩展：使用 PM2</h2>
<p>nodejs 服务开启多进程、进程守护，可使用 <a href="https://www.npmjs.com/package/pm2" target="_blank" rel="noopener noreferrer">pm2<ExternalLinkIcon/></a> ，不需要自己写。代码参考 koa2-code</p>
<ul>
<li>全局安装 pm2 <code v-pre>yarn global add pm2</code></li>
<li>增加 pm2 配置文件</li>
<li>修改 package.json scripts</li>
</ul>
</template>
