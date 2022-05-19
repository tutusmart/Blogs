<template><h1 id="js-bridge-原理" tabindex="-1"><a class="header-anchor" href="#js-bridge-原理" aria-hidden="true">#</a> js-bridge 原理</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>请描述 js-bridge 原理</p>
<h2 id="微信-jssdk" tabindex="-1"><a class="header-anchor" href="#微信-jssdk" aria-hidden="true">#</a> 微信 jssdk</h2>
<p>微信中的 h5 通过 <a href="https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html" target="_blank" rel="noopener noreferrer">jssdk<ExternalLinkIcon/></a> 提供的 API 可以调用微信 app 的某些功能。</p>
<p>JS 无法直接调用 app 的 API ，需要通过一种方式 —— 通称 js-bridge ，它也是一些 JS 代码。<br>
当然，前提是 app 得开发支持，控制权在 app 端。就像跨域，server 不开放支持，客户端再折腾也没用。</p>
<p><img src="@source/fe/知识深度/img/js-bridge.png" alt=""></p>
<h2 id="方式1-注入-api" tabindex="-1"><a class="header-anchor" href="#方式1-注入-api" aria-hidden="true">#</a> 方式1 - 注入 API</h2>
<p>客户端为 webview 做定制开发，在 window 增加一些 API ，共前端调用。</p>
<p>例如增加一个 <code v-pre>window.getVersion</code> API ，前端 JS 即可调用它来获取 app 版本号。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> v <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但这种方式一般都是<strong>同步</strong>的。<br>
因为你即便你传入了一个 callback 函数，app 也无法执行。app 只能执行一段全局的 JS 代码（像 <code v-pre>eval</code>）</p>
<h2 id="方式2-劫持-url-scheme" tabindex="-1"><a class="header-anchor" href="#方式2-劫持-url-scheme" aria-hidden="true">#</a> 方式2 - 劫持 url scheme</h2>
<p>一个 iframe 请求 url ，返回的是一个网页。天然支持异步。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> iframe1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'iframe1'</span><span class="token punctuation">)</span>
iframe1<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iframe1<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
iframe1<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'http://127.0.0.1:8881/size-unit.html'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 url 使用的是标准的 http 协议，如果要改成 <code v-pre>'my-app-name://api/getVersion'</code> 呢？—— 默认会报错，<code v-pre>'my-app-name'</code> 是一个未识别的协议名称。<br>
既然未识别的协议，那就可以为我所用：app 监听所有的网络请求，遇到 <code v-pre>my-app-name:</code> 协议，就分析 path ，并返回响应的内容。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> iframe1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'iframe1'</span><span class="token punctuation">)</span>
iframe1<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iframe1<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span> <span class="token comment">// '{ version: '1.0.1' }'</span>
<span class="token punctuation">}</span>
iframe1<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'my-app-name://api/getVersion'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种自定义协议的方式，就叫做“url scheme”。微信的 scheme 以 <code v-pre>'weixin://'</code> 开头，可搜索“微信 scheme”。</p>
<p>chrome 也有自己的 scheme</p>
<ul>
<li><code v-pre>chrome://version</code> 查看版本信息</li>
<li><code v-pre>chrome://dino</code> 恐龙小游戏
其他可参考 https://mp.weixin.qq.com/s/T1Qkt8DTZvpsm8CKtEpNxA</li>
</ul>
<h2 id="封装-sdk" tabindex="-1"><a class="header-anchor" href="#封装-sdk" aria-hidden="true">#</a> 封装 sdk</h2>
<p>scheme 的调用方式非常复杂，不能每个 API 都写重复的代码，所以一般要封装 sdk ，就像微信提供的 jssdk 。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> sdk <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> success<span class="token punctuation">,</span> err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'iframe'</span><span class="token punctuation">)</span>
        iframe<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span>

        iframe<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> content <span class="token operator">=</span> iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML
            <span class="token function">success</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
            iframe<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        iframe<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            iframe<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        iframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">my-app-name://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?data=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>

    <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> success<span class="token punctuation">,</span> err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">'api/fn1'</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> success<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> success<span class="token punctuation">,</span> err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">'api/fn2'</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> success<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用</span>
sdk<span class="token punctuation">.</span><span class="token function">fn1</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'err'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>常用方法：劫持 url scheme</p>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>url 长度不够怎么办？—— 可以扩展 ajax post 方式。</p>
</template>
