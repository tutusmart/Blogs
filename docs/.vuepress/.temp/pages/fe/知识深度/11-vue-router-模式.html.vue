<template><h1 id="vue-router-模式" tabindex="-1"><a class="header-anchor" href="#vue-router-模式" aria-hidden="true">#</a> Vue-router 模式</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>Vue-router 模式 <code v-pre>'hash' | 'history' | 'abstract'</code> 的区别</p>
<h2 id="v4-的升级" tabindex="-1"><a class="header-anchor" href="#v4-的升级" aria-hidden="true">#</a> v4 的升级</h2>
<p>Vue-router v4 升级之后，<code v-pre>mode: 'xxx'</code> 替换为 API 的形式，但功能是一样的</p>
<ul>
<li><code v-pre>mode: 'hash'</code> 替换为 <code v-pre>createWebHashHistory()</code></li>
<li><code v-pre>mode: 'history'</code> 替换为 <code v-pre>createWebHistory()</code></li>
<li><code v-pre>mode: 'abstract'</code> 替换为 <code v-pre>createMemoryHistory()</code></li>
</ul>
<p>PS：个人感觉，叫 <code v-pre>memory</code> 比叫 <code v-pre>abstract</code> 更易理解，前者顾名思义，后者就过于抽象。</p>
<h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> hash</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// http://127.0.0.1:8881/hash.html?a=100&amp;b=20#/aaa/bbb</span>
location<span class="token punctuation">.</span>protocol <span class="token comment">// 'http:'</span>
location<span class="token punctuation">.</span>hostname <span class="token comment">// '127.0.0.1'</span>
location<span class="token punctuation">.</span>host <span class="token comment">// '127.0.0.1:8881'</span>
location<span class="token punctuation">.</span>port <span class="token comment">// '8881'</span>
location<span class="token punctuation">.</span>pathname <span class="token comment">// '/hash.html'</span>
location<span class="token punctuation">.</span>search <span class="token comment">// '?a=100&amp;b=20'</span>
location<span class="token punctuation">.</span>hash <span class="token comment">// '#/aaa/bbb'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hash 的特点</p>
<ul>
<li>会触发页面跳转，可使用浏览器的“后退” “前进”</li>
<li>但不会刷新页面，支持 SPA 必须的特性</li>
<li>hash 不会被提交到 server 端（因此刷新页面也会命中当前页面，让前端根据 hash 处理路由）</li>
</ul>
<p>url 中的 hash ，是不会发送给 server 端的。前端 <code v-pre>onhashchange</code> 拿到自行处理。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 页面初次加载，获取 hash</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'DOMContentLoaded'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hash'</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// hash 变化，包括：</span>
<span class="token comment">// a. JS 修改 url</span>
<span class="token comment">// b. 手动修改 url 的 hash</span>
<span class="token comment">// c. 浏览器前进、后退</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onhashchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'old url'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>oldURL<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'new url'</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>newURL<span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hash'</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="h5-history-api" tabindex="-1"><a class="header-anchor" href="#h5-history-api" aria-hidden="true">#</a> H5 history API</h2>
<p>常用的两个 API</p>
<ul>
<li><code v-pre>history.pushState</code></li>
<li><code v-pre>window.onpopstate</code></li>
</ul>
<p>页面刷新时，<strong>服务端要做处理</strong>，可参考<a href="https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90" target="_blank" rel="noopener noreferrer">文档<ExternalLinkIcon/></a>。。即无论什么 url 访问 server ，都要返回该页面。</p>
<p>按照 url 规范，不同的 url 对应不同的资源，例如：</p>
<ul>
<li><code v-pre>https://github.com/</code> server 返回首页</li>
<li><code v-pre>https://github.com/username/</code> server 返回用户页</li>
<li><code v-pre>https://github.com/username/project1/</code> server 返回项目页</li>
</ul>
<p>但是用了 SPA 的前端路由，就改变了这一规则，假如 github 用了的话：</p>
<ul>
<li><code v-pre>https://github.com/</code> server 返回首页</li>
<li><code v-pre>https://github.com/username/</code> server 返回首页，前端路由跳转到用户页</li>
<li><code v-pre>https://github.com/username/project1/</code> server 返回首页，前端路由跳转到项目页</li>
</ul>
<p>所以，从开发者的实现角度来看，前端路由是一个违反规则的形式。
但是从不关心后端，只关心前端页面的用户，或者浏览器来看，更喜欢 <code v-pre>pushState</code> 这种方式。</p>
<p>代码参考 history-api.html</p>
<h2 id="三种模式的区别" tabindex="-1"><a class="header-anchor" href="#三种模式的区别" aria-hidden="true">#</a> 三种模式的区别</h2>
<ul>
<li>hash - 使用 url hash 变化记录路由地址</li>
<li>history - 使用 H5 history API 来改 url 记录路由地址</li>
<li>abstract - 不修改 url ，路由地址在内存中，<strong>但页面刷新会重新回到首页</strong>。</li>
</ul>
<h2 id="连环问-react-router-有几种模式" tabindex="-1"><a class="header-anchor" href="#连环问-react-router-有几种模式" aria-hidden="true">#</a> 连环问：react-router 有几种模式？</h2>
<p>react-router 有三种模式，设计上和 vue-router 一样</p>
<ul>
<li><a href="https://reactrouter.com/web/api/BrowserRouter" target="_blank" rel="noopener noreferrer">browser history<ExternalLinkIcon/></a></li>
<li><a href="https://reactrouter.com/web/api/HashRouter" target="_blank" rel="noopener noreferrer">hash history<ExternalLinkIcon/></a></li>
<li><a href="https://reactrouter.com/web/api/MemoryRouter" target="_blank" rel="noopener noreferrer">memory history<ExternalLinkIcon/></a></li>
</ul>
</template>
