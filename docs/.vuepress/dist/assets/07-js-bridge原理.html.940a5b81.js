import{_ as p,r as e,o,a as c,b as s,e as i,F as u,c as a,d as n}from"./app.1c29f384.js";var l="/../../assets/js-bridge.c204c684.png";const r={},d=a('<h1 id="js-bridge-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#js-bridge-\u539F\u7406" aria-hidden="true">#</a> js-bridge \u539F\u7406</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u8BF7\u63CF\u8FF0 js-bridge \u539F\u7406</p><h2 id="\u5FAE\u4FE1-jssdk" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1-jssdk" aria-hidden="true">#</a> \u5FAE\u4FE1 jssdk</h2>',4),k=n("\u5FAE\u4FE1\u4E2D\u7684 h5 \u901A\u8FC7 "),m={href:"https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html",target:"_blank",rel:"noopener noreferrer"},v=n("jssdk"),b=n(" \u63D0\u4F9B\u7684 API \u53EF\u4EE5\u8C03\u7528\u5FAE\u4FE1 app \u7684\u67D0\u4E9B\u529F\u80FD\u3002"),h=a('<p>JS \u65E0\u6CD5\u76F4\u63A5\u8C03\u7528 app \u7684 API \uFF0C\u9700\u8981\u901A\u8FC7\u4E00\u79CD\u65B9\u5F0F \u2014\u2014 \u901A\u79F0 js-bridge \uFF0C\u5B83\u4E5F\u662F\u4E00\u4E9B JS \u4EE3\u7801\u3002<br> \u5F53\u7136\uFF0C\u524D\u63D0\u662F app \u5F97\u5F00\u53D1\u652F\u6301\uFF0C\u63A7\u5236\u6743\u5728 app \u7AEF\u3002\u5C31\u50CF\u8DE8\u57DF\uFF0Cserver \u4E0D\u5F00\u653E\u652F\u6301\uFF0C\u5BA2\u6237\u7AEF\u518D\u6298\u817E\u4E5F\u6CA1\u7528\u3002</p><p><img src="'+l+`" alt=""></p><h2 id="\u65B9\u5F0F1-\u6CE8\u5165-api" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F1-\u6CE8\u5165-api" aria-hidden="true">#</a> \u65B9\u5F0F1 - \u6CE8\u5165 API</h2><p>\u5BA2\u6237\u7AEF\u4E3A webview \u505A\u5B9A\u5236\u5F00\u53D1\uFF0C\u5728 window \u589E\u52A0\u4E00\u4E9B API \uFF0C\u5171\u524D\u7AEF\u8C03\u7528\u3002</p><p>\u4F8B\u5982\u589E\u52A0\u4E00\u4E2A <code>window.getVersion</code> API \uFF0C\u524D\u7AEF JS \u5373\u53EF\u8C03\u7528\u5B83\u6765\u83B7\u53D6 app \u7248\u672C\u53F7\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> v <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F46\u8FD9\u79CD\u65B9\u5F0F\u4E00\u822C\u90FD\u662F<strong>\u540C\u6B65</strong>\u7684\u3002<br> \u56E0\u4E3A\u4F60\u5373\u4FBF\u4F60\u4F20\u5165\u4E86\u4E00\u4E2A callback \u51FD\u6570\uFF0Capp \u4E5F\u65E0\u6CD5\u6267\u884C\u3002app \u53EA\u80FD\u6267\u884C\u4E00\u6BB5\u5168\u5C40\u7684 JS \u4EE3\u7801\uFF08\u50CF <code>eval</code>\uFF09</p><h2 id="\u65B9\u5F0F2-\u52AB\u6301-url-scheme" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F2-\u52AB\u6301-url-scheme" aria-hidden="true">#</a> \u65B9\u5F0F2 - \u52AB\u6301 url scheme</h2><p>\u4E00\u4E2A iframe \u8BF7\u6C42 url \uFF0C\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u7F51\u9875\u3002\u5929\u7136\u652F\u6301\u5F02\u6B65\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> iframe1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;iframe1&#39;</span><span class="token punctuation">)</span>
iframe1<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iframe1<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
iframe1<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;http://127.0.0.1:8881/size-unit.html&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0 url \u4F7F\u7528\u7684\u662F\u6807\u51C6\u7684 http \u534F\u8BAE\uFF0C\u5982\u679C\u8981\u6539\u6210 <code>&#39;my-app-name://api/getVersion&#39;</code> \u5462\uFF1F\u2014\u2014 \u9ED8\u8BA4\u4F1A\u62A5\u9519\uFF0C<code>&#39;my-app-name&#39;</code> \u662F\u4E00\u4E2A\u672A\u8BC6\u522B\u7684\u534F\u8BAE\u540D\u79F0\u3002<br> \u65E2\u7136\u672A\u8BC6\u522B\u7684\u534F\u8BAE\uFF0C\u90A3\u5C31\u53EF\u4EE5\u4E3A\u6211\u6240\u7528\uFF1Aapp \u76D1\u542C\u6240\u6709\u7684\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u9047\u5230 <code>my-app-name:</code> \u534F\u8BAE\uFF0C\u5C31\u5206\u6790 path \uFF0C\u5E76\u8FD4\u56DE\u54CD\u5E94\u7684\u5185\u5BB9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> iframe1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;iframe1&#39;</span><span class="token punctuation">)</span>
iframe1<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>iframe1<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span> <span class="token comment">// &#39;{ version: &#39;1.0.1&#39; }&#39;</span>
<span class="token punctuation">}</span>
iframe1<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;my-app-name://api/getVersion&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u81EA\u5B9A\u4E49\u534F\u8BAE\u7684\u65B9\u5F0F\uFF0C\u5C31\u53EB\u505A\u201Curl scheme\u201D\u3002\u5FAE\u4FE1\u7684 scheme \u4EE5 <code>&#39;weixin://&#39;</code> \u5F00\u5934\uFF0C\u53EF\u641C\u7D22\u201C\u5FAE\u4FE1 scheme\u201D\u3002</p><p>chrome \u4E5F\u6709\u81EA\u5DF1\u7684 scheme</p><ul><li><code>chrome://version</code> \u67E5\u770B\u7248\u672C\u4FE1\u606F</li><li><code>chrome://dino</code> \u6050\u9F99\u5C0F\u6E38\u620F \u5176\u4ED6\u53EF\u53C2\u8003 https://mp.weixin.qq.com/s/T1Qkt8DTZvpsm8CKtEpNxA</li></ul><h2 id="\u5C01\u88C5-sdk" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5-sdk" aria-hidden="true">#</a> \u5C01\u88C5 sdk</h2><p>scheme \u7684\u8C03\u7528\u65B9\u5F0F\u975E\u5E38\u590D\u6742\uFF0C\u4E0D\u80FD\u6BCF\u4E2A API \u90FD\u5199\u91CD\u590D\u7684\u4EE3\u7801\uFF0C\u6240\u4EE5\u4E00\u822C\u8981\u5C01\u88C5 sdk \uFF0C\u5C31\u50CF\u5FAE\u4FE1\u63D0\u4F9B\u7684 jssdk \u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> sdk <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> success<span class="token punctuation">,</span> err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;iframe&#39;</span><span class="token punctuation">)</span>
        iframe<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span>

        iframe<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> content <span class="token operator">=</span> iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML
            <span class="token function">success</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span>
            iframe<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        iframe<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            iframe<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        iframe<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">my-app-name://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?data=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>

    <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> success<span class="token punctuation">,</span> err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;api/fn1&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> success<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> success<span class="token punctuation">,</span> err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">&#39;api/fn2&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> success<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>
sdk<span class="token punctuation">.</span><span class="token function">fn1</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u5E38\u7528\u65B9\u6CD5\uFF1A\u52AB\u6301 url scheme</p><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p>url \u957F\u5EA6\u4E0D\u591F\u600E\u4E48\u529E\uFF1F\u2014\u2014 \u53EF\u4EE5\u6269\u5C55 ajax post \u65B9\u5F0F\u3002</p>`,22);function f(g,_){const t=e("ExternalLinkIcon");return o(),c(u,null,[d,s("p",null,[k,s("a",m,[v,i(t)]),b]),h],64)}var x=p(r,[["render",f],["__file","07-js-bridge\u539F\u7406.html.vue"]]);export{x as default};
