<template><h1 id="移动端-click-300ms-延迟" tabindex="-1"><a class="header-anchor" href="#移动端-click-300ms-延迟" aria-hidden="true">#</a> 移动端 click 300ms 延迟</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>移动端 click 300ms 延迟，如何解决</p>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<p>智能手机开始流行的前期，浏览器可以点击缩放（double tap to zoom）网页。这样在手机上就可以浏览 PC 网页，很酷炫。</p>
<p><img src="@source/fe/知识广度/img/nytimes.jpeg" alt=""></p>
<p>浏览器为了分辨 click 还是“点击缩放”，就强行把 click 时间延迟 300ms 触发。</p>
<h2 id="初期解决方案" tabindex="-1"><a class="header-anchor" href="#初期解决方案" aria-hidden="true">#</a> 初期解决方案</h2>
<p><a href="https://www.npmjs.com/package/fastclick" target="_blank" rel="noopener noreferrer">FastClick<ExternalLinkIcon/></a> 专门用于解决这个问题。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// FastClick 使用非常简单</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span> <span class="token string">"load"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    FastClick<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span> document<span class="token punctuation">.</span>body <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的内部原理是</p>
<ul>
<li>监听 <code v-pre>touchend</code> 事件 （<code v-pre>touchstart</code> <code v-pre>touchend</code> 会先于 <code v-pre>click</code> 事件被触发）</li>
<li>通过 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent" target="_blank" rel="noopener noreferrer">DOM 自定义事件<ExternalLinkIcon/></a> 模拟一个 click 事件</li>
<li>把 300ms 之后触发的 click 事件阻止掉</li>
</ul>
<h2 id="现代浏览器的改进" tabindex="-1"><a class="header-anchor" href="#现代浏览器的改进" aria-hidden="true">#</a> 现代浏览器的改进</h2>
<p>随着近几年移动端响应式的大力发展，移动端网页和 PC 网页有不同的设计，不用再缩放查看。<br>
这 300ms 的延迟就多余了，现代浏览器可以通过禁止缩放来取消这 300ms 的延迟。</p>
<ul>
<li>Chrome 32+ on Android</li>
<li>iOS 9.3</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>原因：点击缩放（double tap to zoom）网页</li>
<li>可使用 FastClick 解决</li>
<li>现代浏览器可使用 <code v-pre>width=device-width</code> 规避</li>
</ul>
</template>
