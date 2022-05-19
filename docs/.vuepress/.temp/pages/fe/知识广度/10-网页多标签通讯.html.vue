<template><h1 id="网页多标签页之间的通讯" tabindex="-1"><a class="header-anchor" href="#网页多标签页之间的通讯" aria-hidden="true">#</a> 网页多标签页之间的通讯</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>网络多标签之间如何通讯？<br>
例如打开两个 chrome 标签，一个访问列表页，一个访问详情页。在详情页修改了标题，列表页也要同步过来。</p>
<h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> webSocket</h2>
<p>通过 webSocket 多页面通讯，无跨域限制。</p>
<h2 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h2>
<p>同域的两个页面，可以通过 localStorage 通讯。A 页面可以监听到 B 页面的数据变化。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// list 页面</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'storage'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'key'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>key<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'newValue'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>newValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// detail 页面</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'changeInfo'</span><span class="token punctuation">,</span> <span class="token string">'xxx'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sharedworker" tabindex="-1"><a class="header-anchor" href="#sharedworker" aria-hidden="true">#</a> SharedWorker</h2>
<p>Javascript 是单线程的，而且和页面渲染线程互斥。所以，一些计算量大的操作会影响页面渲染。<br></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers" target="_blank" rel="noopener noreferrer">WebWorker<ExternalLinkIcon/></a> 可以 <code v-pre>new Worker('xxx.js')</code> 用来进行 JS 计算，并通过 <code v-pre>postMessage</code> 和 <code v-pre>onmessage</code> 和网页通讯。<br>
但这个 worker 是当前页面专有的，不得多个页面、iframe 共享。</p>
<p>PS：WebWorker 专用于 JS 计算，不支持 DOM 操作。</p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker" target="_blank" rel="noopener noreferrer">SharedWorker<ExternalLinkIcon/></a> 可以被同域的多个页面共享使用，也可以用于通讯。<br>
源码参考 msg-sharedWork-list.html 和 msg-sharedWork-detail.html 。注意，worker 中的日志需要 <code v-pre>chrome://inspect</code> 中打开控制台查看。</p>
<p>PS：注意浏览器兼容性，不支持 IE11</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>webSocket 需要服务端参与，但不限制跨域</li>
<li>localStorage 简单易用</li>
<li>SharedWorker 本地调试不太方便，考虑浏览器兼容性</li>
</ul>
<h2 id="连环问-iframe-通讯" tabindex="-1"><a class="header-anchor" href="#连环问-iframe-通讯" aria-hidden="true">#</a> 连环问：iframe 通讯</h2>
<p>除了上述几个方法，iframe 通讯最常用 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage" target="_blank" rel="noopener noreferrer">window.postMessage<ExternalLinkIcon/></a> ，支持跨域。</p>
<p>通过 <code v-pre>window.postMessage</code> 发送消息。注意第二个参数，可以限制域名，如发送敏感信息，要限制域名。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父页面向 iframe 发送消息</span>
window<span class="token punctuation">.</span>iframe1<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span>

<span class="token comment">// iframe 向父页面发送消息</span>
window<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">'world'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可监听 <code v-pre>message</code> 来接收消息。可使用 <code v-pre>event.origin</code> 来判断信息来源是否合法，可选择不接受。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'origin'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>origin<span class="token punctuation">)</span> <span class="token comment">// 通过 origin 判断是否来源合法</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'child received'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
