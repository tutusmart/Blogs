import{_ as s,r as t,o,a as r,b as e,e as d,F as p,c,d as a}from"./app.1c29f384.js";var i="/../../assets/svelte.db99486c.png";const l={},u=c(`<h1 id="vdom-\u771F\u7684\u5F88\u5FEB\u5417" tabindex="-1"><a class="header-anchor" href="#vdom-\u771F\u7684\u5F88\u5FEB\u5417" aria-hidden="true">#</a> vdom \u771F\u7684\u5F88\u5FEB\u5417</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>vdom \u771F\u7684\u5F88\u5FEB\u5417\uFF1F</p><h2 id="vue-react-\u7B49\u6846\u67B6\u7684\u5B58\u5728\u4EF7\u503C" tabindex="-1"><a class="header-anchor" href="#vue-react-\u7B49\u6846\u67B6\u7684\u5B58\u5728\u4EF7\u503C" aria-hidden="true">#</a> Vue React \u7B49\u6846\u67B6\u7684\u5B58\u5728\u4EF7\u503C</h2><p>Vue React \u7B49\u6846\u67B6\u7ED9\u524D\u7AEF\u5F00\u53D1\u5E26\u6765\u4E86\u9769\u547D\u6027\u7684\u53D8\u5316\u3002\u76F8\u6BD4\u4E8E\u6B64\u524D\u7684 jQuery \u65F6\u4EE3\uFF0C\u5B83\u4EEC\u7684\u4EF7\u503C\u5728\u4E8E</p><ul><li>\u7EC4\u4EF6\u5316 \u2014\u2014 \u8FD9\u4E0D\u662F\u6838\u5FC3\u539F\u56E0\u3002WebComponent \u5DF2\u63D0\u51FA\u591A\u5E74\uFF0C\u5F53\u4ECD\u672A\u53D1\u5C55\u58EE\u5927</li><li>\u6570\u636E\u89C6\u56FE\u5206\u79BB\uFF0C\u6570\u636E\u9A71\u52A8\u89C6\u56FE \u2014\u2014 \u8FD9\u624D\u662F\u6838\u5FC3\uFF01\uFF01\uFF01</li></ul><p>\u6570\u636E\u89C6\u56FE\u5206\u79BB\uFF0C\u5F00\u53D1\u65F6\u53EA\u9700\u8981\u5173\u6CE8\u4E1A\u52A1\u6570\u636E\uFF08React \u7684 state\uFF0CVue \u7684 data\uFF09\u5373\u53EF\uFF0C\u4E0D\u7528\u5728\u5B9E\u65F6\u7684\u4FEE\u6539 DOM \u2014\u2014 \u8FD9\u4E00\u70B9\u548C jQuery \u6709\u4E86\u672C\u8D28\u533A\u522B\u3002<br> \u7279\u522B\u662F\u5BF9\u4E8E\u5927\u578B\u7684\u524D\u7AEF\u9879\u76EE\uFF0C\u5C06\u6781\u5927\u7684\u964D\u4F4E\u5F00\u53D1\u590D\u6742\u5EA6\uFF0C\u63D0\u9AD8\u7A33\u5B9A\u6027\u3002</p><p>\u6570\u636E\u9A71\u52A8\u89C6\u56FE\uFF0C\u5185\u90E8\u5C06\u5982\u4F55\u5B9E\u73B0\u5462\uFF1F\u2014\u2014 \u501F\u52A9\u4E8E vdom</p><h2 id="vdom" tabindex="-1"><a class="header-anchor" href="#vdom" aria-hidden="true">#</a> vdom</h2><p>Virtual DOM\uFF0C\u865A\u62DF DOM \uFF0C\u5373\u7528 JS \u5BF9\u8C61\u6A21\u62DF DOM \u6570\u636E\u3002\u662F React \u6700\u5148\u63D0\u51FA\u6765\u7684\u6982\u5FF5\u3002</p><p>React \u7684 JSX \uFF0CVue \u7684 template \u5176\u5B9E\u90FD\u662F\u8BED\u6CD5\u7CD6\uFF0C\u5B83\u4EEC\u672C\u8D28\u4E0A\u90FD\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u6210\u4E3A <code>render \u51FD\u6570</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// JSX: &lt;p id=&quot;p1&quot;&gt;hello world&lt;/p&gt;</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> VNode <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;p1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C render \u51FD\u6570\u8FD4\u56DE\u7684\u5C31\u662F\u4E00\u4E2A vdom \u5BF9\u8C61\uFF0C\u4E00\u822C\u53EB\u505A vnode\uFF08\u865A\u62DF\u8282\u70B9\uFF09\uFF0C\u5BF9\u5E94 DOM Node</p><p>\u6BCF\u6B21\u6570\u636E\u66F4\u65B0\uFF08\u5982 React setState\uFF09render \u51FD\u6570\u90FD\u4F1A\u751F\u6210 newVnode \uFF0C\u7136\u540E\u524D\u540E\u5BF9\u6BD4 <code>diff(vnode, newVnode)</code>\uFF0C\u8BA1\u7B97\u51FA\u9700\u8981\u4FEE\u6539\u7684 DOM \u8282\u70B9\uFF0C\u518D\u505A\u4FEE\u6539\u3002</p><h2 id="\u5BF9\u6BD4-dom-\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u6BD4-dom-\u64CD\u4F5C" aria-hidden="true">#</a> \u5BF9\u6BD4 DOM \u64CD\u4F5C</h2><p>\u4E0B\u9762\u4E24\u8005\uFF0C\u54EA\u4E2A\u66F4\u5FEB\uFF1F\u2014\u2014 \u5F88\u660E\u663E\uFF0C\u524D\u8005\u66F4\u5FEB\u3002</p><ul><li>jquery \u65F6\u4EE3\uFF1A\u76F4\u63A5\u4FEE\u6539 DOM</li><li>\u6846\u67B6\u65F6\u4EE3\uFF1A\u751F\u6210 vdom \uFF0C\u8FDB\u884C diff \u8FD0\u7B97 --&gt; \u4FEE\u6539 DOM</li></ul><p>\u4F46\u51E1\u4E8B\u90FD\u8981\u6709\u4E00\u4E2A\u4E1A\u52A1\u80CC\u666F\u3002\u5982\u679C\u9875\u9762\u529F\u80FD\u8D8A\u6765\u8D8A\u590D\u6742\uFF0C\u76F4\u63A5\u64CD\u4F5C DOM \u4EE3\u7801\u5C06\u4F1A\u96BE\u4EE5\u9605\u8BFB\u548C\u7EF4\u62A4\uFF0C\u5927\u5BB6\u66F4\u5E0C\u671B\u8981\u201C\u6570\u636E\u89C6\u56FE\u5206\u79BB\uFF0C\u6570\u636E\u9A71\u52A8\u89C6\u56FE\u201D\u3002</p><p>\u5728\u8FD9\u4E2A\u524D\u63D0\u4E0B\uFF0C\u54EA\u4E2A\u66F4\u5FEB\uFF1F \u2014\u2014 \u5F53\u7136\u662F\u540E\u8005\u3002\u56E0\u4E3A\u4E1A\u52A1\u590D\u6742\u3001\u4EE3\u7801\u6DF7\u4E71\uFF0C\u5C06\u4F1A\u5BFC\u81F4\u5F88\u591A\u65E0\u8C13\u7684 DOM \u64CD\u4F5C \u2014\u2014 <strong>DOM \u64CD\u4F5C\u662F\u6602\u8D35\u7684</strong></p><ul><li>\u76F4\u63A5\u4FEE\u6539 DOM</li><li>\u751F\u6210 vdom \uFF0C\u8FDB\u884C diff \u8FD0\u7B97 --&gt; \u4FEE\u6539 DOM</li></ul><p>\u800C\u76F8\u6BD4\u4E8E\u6602\u8D35\u7684 DOM \u64CD\u4F5C\uFF0CJS \u8FD0\u7B97\u975E\u5E38\u5FEB\u3002\u6240\u4EE5 JS \u591A\u505A\u4E8B\u60C5\uFF08vdom diff\uFF09\u662F\u66F4\u4F18\u7684\u9009\u62E9\u3002</p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><ul><li>\u76F4\u63A5\u8FDB\u884C DOM \u64CD\u4F5C\u6C38\u8FDC\u90FD\u662F\u6700\u5FEB\u7684\uFF08\u4F46\u8981\u76EE\u6807\u660E\u786E\uFF0C\u4E0D\u80FD\u6709\u65E0\u8C13\u7684 DOM \u64CD\u4F5C \u2014\u2014 \u8FD9\u5F88\u96BE\uFF09</li><li>\u5982\u679C\u4E1A\u52A1\u590D\u6742\uFF0C\u8981\u201C\u6570\u636E\u89C6\u56FE\u5206\u79BB\uFF0C\u6570\u636E\u9A71\u52A8\u89C6\u56FE\u201D\uFF0C\u65E0\u6CD5\u76F4\u63A5\u4FEE\u6539 DOM \uFF0C\u90A3 vdom \u5C31\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u9009\u62E9</li></ul><p>\u6240\u4EE5\uFF0C<strong>vdom \u5E76\u4E0D\u6BD4 DOM \u64CD\u4F5C\u66F4\u5FEB</strong>\uFF08\u53CD\u800C\u66F4\u6162\uFF0C\u5B83\u505A\u4E86 JS \u8FD0\u7B97\uFF09\uFF0C\u5B83\u53EA\u662F\u5728\u67D0\u4E2A\u7279\u5B9A\u7684\u573A\u666F\u4E0B\uFF0C\u65E0\u6CD5\u505A\u5230\u7CBE\u51C6 DOM \u4FEE\u6539\u65F6\uFF0C\u4E00\u4E2A\u66F4\u4F18\u7684\u9009\u62E9\u3002</p><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2>`,25),h={href:"https://www.sveltejs.cn/",target:"_blank",rel:"noopener noreferrer"},m=a("Svelte"),v=a(" \u4E0D\u4F7F\u7528 vdom \uFF0C\u5B83\u5C06\u7EC4\u4EF6\u4FEE\u6539\uFF0C\u7F16\u8BD1\u4E3A\u7CBE\u51C6\u7684 DOM \u64CD\u4F5C\u3002\u548C React \u8BBE\u8BA1\u601D\u8DEF\u5B8C\u5168\u4E0D\u4E00\u6837\u3002"),_=e("p",null,[e("img",{src:i,alt:""})],-1);function k(f,D){const n=t("ExternalLinkIcon");return o(),r(p,null,[u,e("p",null,[e("a",h,[m,d(n)]),v]),_],64)}var O=s(l,[["render",k],["__file","04-vdom\u771F\u7684\u5F88\u5FEB\u5417.html.vue"]]);export{O as default};
