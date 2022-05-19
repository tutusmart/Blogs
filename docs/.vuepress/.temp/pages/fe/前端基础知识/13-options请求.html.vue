<template><h1 id="options-请求" tabindex="-1"><a class="header-anchor" href="#options-请求" aria-hidden="true">#</a> options 请求</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>跨域为何需要 options 请求？</p>
<h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2>
<p>浏览器同源策略，默认限制跨域请求。跨域的解决方案</p>
<ul>
<li>jsonp</li>
<li>CORS</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// CORS 配置允许跨域（服务端）</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Origin"</span><span class="token punctuation">,</span> <span class="token string">"http://localhost:8011"</span><span class="token punctuation">)</span> <span class="token comment">// 或者 '*'</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Headers"</span><span class="token punctuation">,</span> <span class="token string">"X-Requested-With"</span><span class="token punctuation">)</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Methods"</span><span class="token punctuation">,</span> <span class="token string">"PUT,POST,GET,DELETE,OPTIONS"</span><span class="token punctuation">)</span>
response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">"Access-Control-Allow-Credentials"</span><span class="token punctuation">,</span> <span class="token string">"true"</span><span class="token punctuation">)</span> <span class="token comment">// 允许跨域接收 cookie</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options-请求-1" tabindex="-1"><a class="header-anchor" href="#options-请求-1" aria-hidden="true">#</a> options 请求</h2>
<p>使用 CORS 跨域请求时，经常会看到一个“多余”的 options 请求，之后才发送了实际的请求。</p>
<p><img src="@source/fe/前端基础知识/img/options.png" alt=""></p>
<p>该请求就是为了检查服务端的 headers 信息，是否符合客户端的预期。所以它没有 body 的返回。</p>
<blockquote>
<p>规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。—— MDN</p>
</blockquote>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>options 请求就是对 CORS 跨域请求之间的一次预检查，检查成功再发起正式请求，是浏览器自行处理的。<br>
了解即可，实际开发中不用过于关注。</p>
</template>
