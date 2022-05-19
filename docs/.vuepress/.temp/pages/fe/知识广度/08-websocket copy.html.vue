<template><h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> webSocket</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>webSocket 和 http 协议有何区别？有和应用场景？</p>
<h2 id="websocket-简介" tabindex="-1"><a class="header-anchor" href="#websocket-简介" aria-hidden="true">#</a> webSocket 简介</h2>
<p>webSocket 和 http 都是应用层，支持端对端的通讯。可以由服务端发起，也可以由客户端发起。<br>
代码参考 ws-server 中 webSocket1.html webSocket2.html</p>
<p>场景：消息通知，直播讨论区，聊天室，协同编辑</p>
<h2 id="websocket-建立连接" tabindex="-1"><a class="header-anchor" href="#websocket-建立连接" aria-hidden="true">#</a> webSocket 建立连接</h2>
<p>会先发起一个 http 请求，根服务端建立连接。连接成功之后再升级为 webSocket 协议，然后再通讯。</p>
<p><img src="@source/fe/知识广度/img/ws连接.png" alt=""></p>
<h2 id="websocket-和-http-区别" tabindex="-1"><a class="header-anchor" href="#websocket-和-http-区别" aria-hidden="true">#</a> webSocket 和 http 区别</h2>
<ul>
<li>协议名称不同 <code v-pre>ws</code> 和 <code v-pre>http</code></li>
<li>http 一般只能浏览器发起请求，webSocket 可以双端发起请求</li>
<li>webSocket 无跨域限制</li>
<li>webSocket 通过 <code v-pre>send</code> 和 <code v-pre>onmessage</code> 进行通讯，http 通过 <code v-pre>req</code> 和 <code v-pre>res</code> 通讯</li>
</ul>
<p>PS：<code v-pre>ws</code> 可以升级为 <code v-pre>wss</code> 协议，像 <code v-pre>http</code> 升级到 <code v-pre>https</code> 一样，增加 <code v-pre>SSL</code> 安全协议。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'https'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> readFileSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fs'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WebSocketServer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ws'</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">cert</span><span class="token operator">:</span> <span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'/path/to/cert.pem'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'/path/to/key.pem'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> wss <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocketServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> server <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>PS：如果做项目开发，推荐使用 <a href="https://www.npmjs.com/package/socket.io" target="_blank" rel="noopener noreferrer">socket.io<ExternalLinkIcon/></a>，API 更方便。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>io<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">,</span> <span class="token parameter">socket</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// emit an event to the socket</span>
  socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span> <span class="token comment">/* … */</span><span class="token punctuation">)</span>
  <span class="token comment">// emit an event to all connected sockets</span>
  io<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'broadcast'</span><span class="token punctuation">,</span> <span class="token comment">/* … */</span><span class="token punctuation">)</span>
  <span class="token comment">// listen to the event</span>
  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'reply'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* … */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连环问-websocket-和长轮询-长连接-的区别" tabindex="-1"><a class="header-anchor" href="#连环问-websocket-和长轮询-长连接-的区别" aria-hidden="true">#</a> 连环问：webSocket 和长轮询（长连接）的区别</h2>
<ul>
<li>http 长轮询 - 客户端发起 http 请求，server 不立即返回，等待有结果再返回。这期间 TCP 连接不会关闭，阻塞式。（需要处理 timeout 的情况）</li>
<li>webSocket - 客户端发起请求，服务端接收，连接关闭。服务端发起请求，客户端接收，连接关闭。非阻塞。</li>
</ul>
<p><img src="@source/fe/知识广度/img/长轮询.jpeg" alt=""></p>
</template>
