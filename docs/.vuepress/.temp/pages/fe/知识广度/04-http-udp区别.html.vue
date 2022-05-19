<template><h1 id="http-和-udp" tabindex="-1"><a class="header-anchor" href="#http-和-udp" aria-hidden="true">#</a> HTTP 和 UDP</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>HTTP 和 UDP 有何区别</p>
<h2 id="网络协议" tabindex="-1"><a class="header-anchor" href="#网络协议" aria-hidden="true">#</a> 网络协议</h2>
<p><img src="@source/fe/知识广度/img/网络协议.png" alt=""></p>
<ul>
<li>HTTP 在应用层，直接被程序使用</li>
<li>TCP 和 UDP 在传输层，底层</li>
</ul>
<h2 id="udp-的特点" tabindex="-1"><a class="header-anchor" href="#udp-的特点" aria-hidden="true">#</a> UDP 的特点</h2>
<p>UDP 是一种无连接的、不可靠的传输层协议。而 TCP 需要连接、断开连接，参考“三次握手、四次挥手”。</p>
<p>不需要连接，所以 UDP 的效率比 TCP 高。</p>
<p>虽然 UDP 从协议层是不稳定的，但随着现代网络硬件环境的提升，也能保证绝大部分情况下的稳定性。所以，UDP 一直处于被发展的趋势。</p>
<p>例如视频会议、语音通话这些允许中段、不完全保证持续连接的场景，又需要较高的传输效率，就很适合 UDP 协议。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>HTTP 在应用层，而 UDP 和 TCP 在传输层</li>
<li>HTTP 是有连接的、可靠的，UDP 是无连接的、不可靠的</li>
</ul>
<h2 id="连环问-http-1-0-1-1-2-0-区别" tabindex="-1"><a class="header-anchor" href="#连环问-http-1-0-1-1-2-0-区别" aria-hidden="true">#</a> 连环问：http 1.0 1.1 2.0 区别</h2>
<p>http 1.0 最基础的 http 协议</p>
<p>http 1.1</p>
<ul>
<li>引入更多的缓存策略，如 <code v-pre>cache-control</code> <code v-pre>E-tag</code></li>
<li>长链接，默认开启 <code v-pre>Connection: keep-alive</code> ，多次 http 请求减少了 TCP 连接次数</li>
<li>断点续传，状态吗 <code v-pre>206</code></li>
<li>增加新的 method <code v-pre>PUT</code> <code v-pre>DELETE</code> 等，可以设计 Restful API</li>
</ul>
<p>http2.0</p>
<ul>
<li>header 压缩，以减少体积</li>
<li>多路复用，一个 TCP 连接中可以多个 http 并行请求。拼接资源（如雪碧图、多 js 拼接一个）将变的多余</li>
<li>服务器端推送</li>
</ul>
</template>
