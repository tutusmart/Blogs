import{_ as o,r as c,o as i,a as r,b as n,e,F as l,c as t,d as s}from"./app.1c29f384.js";const p={},u=t(`<h1 id="vue-router-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue-router-\u6A21\u5F0F" aria-hidden="true">#</a> Vue-router \u6A21\u5F0F</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>Vue-router \u6A21\u5F0F <code>&#39;hash&#39; | &#39;history&#39; | &#39;abstract&#39;</code> \u7684\u533A\u522B</p><h2 id="v4-\u7684\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#v4-\u7684\u5347\u7EA7" aria-hidden="true">#</a> v4 \u7684\u5347\u7EA7</h2><p>Vue-router v4 \u5347\u7EA7\u4E4B\u540E\uFF0C<code>mode: &#39;xxx&#39;</code> \u66FF\u6362\u4E3A API \u7684\u5F62\u5F0F\uFF0C\u4F46\u529F\u80FD\u662F\u4E00\u6837\u7684</p><ul><li><code>mode: &#39;hash&#39;</code> \u66FF\u6362\u4E3A <code>createWebHashHistory()</code></li><li><code>mode: &#39;history&#39;</code> \u66FF\u6362\u4E3A <code>createWebHistory()</code></li><li><code>mode: &#39;abstract&#39;</code> \u66FF\u6362\u4E3A <code>createMemoryHistory()</code></li></ul><p>PS\uFF1A\u4E2A\u4EBA\u611F\u89C9\uFF0C\u53EB <code>memory</code> \u6BD4\u53EB <code>abstract</code> \u66F4\u6613\u7406\u89E3\uFF0C\u524D\u8005\u987E\u540D\u601D\u4E49\uFF0C\u540E\u8005\u5C31\u8FC7\u4E8E\u62BD\u8C61\u3002</p><h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> hash</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// http://127.0.0.1:8881/hash.html?a=100&amp;b=20#/aaa/bbb</span>
location<span class="token punctuation">.</span>protocol <span class="token comment">// &#39;http:&#39;</span>
location<span class="token punctuation">.</span>hostname <span class="token comment">// &#39;127.0.0.1&#39;</span>
location<span class="token punctuation">.</span>host <span class="token comment">// &#39;127.0.0.1:8881&#39;</span>
location<span class="token punctuation">.</span>port <span class="token comment">// &#39;8881&#39;</span>
location<span class="token punctuation">.</span>pathname <span class="token comment">// &#39;/hash.html&#39;</span>
location<span class="token punctuation">.</span>search <span class="token comment">// &#39;?a=100&amp;b=20&#39;</span>
location<span class="token punctuation">.</span>hash <span class="token comment">// &#39;#/aaa/bbb&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hash \u7684\u7279\u70B9</p><ul><li>\u4F1A\u89E6\u53D1\u9875\u9762\u8DF3\u8F6C\uFF0C\u53EF\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u201C\u540E\u9000\u201D \u201C\u524D\u8FDB\u201D</li><li>\u4F46\u4E0D\u4F1A\u5237\u65B0\u9875\u9762\uFF0C\u652F\u6301 SPA \u5FC5\u987B\u7684\u7279\u6027</li><li>hash \u4E0D\u4F1A\u88AB\u63D0\u4EA4\u5230 server \u7AEF\uFF08\u56E0\u6B64\u5237\u65B0\u9875\u9762\u4E5F\u4F1A\u547D\u4E2D\u5F53\u524D\u9875\u9762\uFF0C\u8BA9\u524D\u7AEF\u6839\u636E hash \u5904\u7406\u8DEF\u7531\uFF09</li></ul><p>url \u4E2D\u7684 hash \uFF0C\u662F\u4E0D\u4F1A\u53D1\u9001\u7ED9 server \u7AEF\u7684\u3002\u524D\u7AEF <code>onhashchange</code> \u62FF\u5230\u81EA\u884C\u5904\u7406\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9875\u9762\u521D\u6B21\u52A0\u8F7D\uFF0C\u83B7\u53D6 hash</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hash&#39;</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// hash \u53D8\u5316\uFF0C\u5305\u62EC\uFF1A</span>
<span class="token comment">// a. JS \u4FEE\u6539 url</span>
<span class="token comment">// b. \u624B\u52A8\u4FEE\u6539 url \u7684 hash</span>
<span class="token comment">// c. \u6D4F\u89C8\u5668\u524D\u8FDB\u3001\u540E\u9000</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onhashchange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;old url&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>oldURL<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;new url&#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">.</span>newURL<span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hash&#39;</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="h5-history-api" tabindex="-1"><a class="header-anchor" href="#h5-history-api" aria-hidden="true">#</a> H5 history API</h2><p>\u5E38\u7528\u7684\u4E24\u4E2A API</p><ul><li><code>history.pushState</code></li><li><code>window.onpopstate</code></li></ul>`,16),d=s("\u9875\u9762\u5237\u65B0\u65F6\uFF0C"),h=n("strong",null,"\u670D\u52A1\u7AEF\u8981\u505A\u5904\u7406",-1),m=s("\uFF0C\u53EF\u53C2\u8003"),v={href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90",target:"_blank",rel:"noopener noreferrer"},k=s("\u6587\u6863"),b=s("\u3002\u3002\u5373\u65E0\u8BBA\u4EC0\u4E48 url \u8BBF\u95EE server \uFF0C\u90FD\u8981\u8FD4\u56DE\u8BE5\u9875\u9762\u3002"),_=t('<p>\u6309\u7167 url \u89C4\u8303\uFF0C\u4E0D\u540C\u7684 url \u5BF9\u5E94\u4E0D\u540C\u7684\u8D44\u6E90\uFF0C\u4F8B\u5982\uFF1A</p><ul><li><code>https://github.com/</code> server \u8FD4\u56DE\u9996\u9875</li><li><code>https://github.com/username/</code> server \u8FD4\u56DE\u7528\u6237\u9875</li><li><code>https://github.com/username/project1/</code> server \u8FD4\u56DE\u9879\u76EE\u9875</li></ul><p>\u4F46\u662F\u7528\u4E86 SPA \u7684\u524D\u7AEF\u8DEF\u7531\uFF0C\u5C31\u6539\u53D8\u4E86\u8FD9\u4E00\u89C4\u5219\uFF0C\u5047\u5982 github \u7528\u4E86\u7684\u8BDD\uFF1A</p><ul><li><code>https://github.com/</code> server \u8FD4\u56DE\u9996\u9875</li><li><code>https://github.com/username/</code> server \u8FD4\u56DE\u9996\u9875\uFF0C\u524D\u7AEF\u8DEF\u7531\u8DF3\u8F6C\u5230\u7528\u6237\u9875</li><li><code>https://github.com/username/project1/</code> server \u8FD4\u56DE\u9996\u9875\uFF0C\u524D\u7AEF\u8DEF\u7531\u8DF3\u8F6C\u5230\u9879\u76EE\u9875</li></ul><p>\u6240\u4EE5\uFF0C\u4ECE\u5F00\u53D1\u8005\u7684\u5B9E\u73B0\u89D2\u5EA6\u6765\u770B\uFF0C\u524D\u7AEF\u8DEF\u7531\u662F\u4E00\u4E2A\u8FDD\u53CD\u89C4\u5219\u7684\u5F62\u5F0F\u3002 \u4F46\u662F\u4ECE\u4E0D\u5173\u5FC3\u540E\u7AEF\uFF0C\u53EA\u5173\u5FC3\u524D\u7AEF\u9875\u9762\u7684\u7528\u6237\uFF0C\u6216\u8005\u6D4F\u89C8\u5668\u6765\u770B\uFF0C\u66F4\u559C\u6B22 <code>pushState</code> \u8FD9\u79CD\u65B9\u5F0F\u3002</p><p>\u4EE3\u7801\u53C2\u8003 history-api.html</p><h2 id="\u4E09\u79CD\u6A21\u5F0F\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u4E09\u79CD\u6A21\u5F0F\u7684\u533A\u522B" aria-hidden="true">#</a> \u4E09\u79CD\u6A21\u5F0F\u7684\u533A\u522B</h2><ul><li>hash - \u4F7F\u7528 url hash \u53D8\u5316\u8BB0\u5F55\u8DEF\u7531\u5730\u5740</li><li>history - \u4F7F\u7528 H5 history API \u6765\u6539 url \u8BB0\u5F55\u8DEF\u7531\u5730\u5740</li><li>abstract - \u4E0D\u4FEE\u6539 url \uFF0C\u8DEF\u7531\u5730\u5740\u5728\u5185\u5B58\u4E2D\uFF0C<strong>\u4F46\u9875\u9762\u5237\u65B0\u4F1A\u91CD\u65B0\u56DE\u5230\u9996\u9875</strong>\u3002</li></ul><h2 id="\u8FDE\u73AF\u95EE-react-router-\u6709\u51E0\u79CD\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u73AF\u95EE-react-router-\u6709\u51E0\u79CD\u6A21\u5F0F" aria-hidden="true">#</a> \u8FDE\u73AF\u95EE\uFF1Areact-router \u6709\u51E0\u79CD\u6A21\u5F0F\uFF1F</h2><p>react-router \u6709\u4E09\u79CD\u6A21\u5F0F\uFF0C\u8BBE\u8BA1\u4E0A\u548C vue-router \u4E00\u6837</p>',10),g={href:"https://reactrouter.com/web/api/BrowserRouter",target:"_blank",rel:"noopener noreferrer"},f=s("browser history"),y={href:"https://reactrouter.com/web/api/HashRouter",target:"_blank",rel:"noopener noreferrer"},x=s("hash history"),E={href:"https://reactrouter.com/web/api/MemoryRouter",target:"_blank",rel:"noopener noreferrer"},w=s("memory history");function A(j,B){const a=c("ExternalLinkIcon");return i(),r(l,null,[u,n("p",null,[d,h,m,n("a",v,[k,e(a)]),b]),_,n("ul",null,[n("li",null,[n("a",g,[f,e(a)])]),n("li",null,[n("a",y,[x,e(a)])]),n("li",null,[n("a",E,[w,e(a)])])])],64)}var H=o(p,[["render",A],["__file","11-vue-router-\u6A21\u5F0F.html.vue"]]);export{H as default};
