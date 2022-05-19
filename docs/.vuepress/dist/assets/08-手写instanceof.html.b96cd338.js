import{_ as n,c as s}from"./app.1c29f384.js";var a="/../../assets/\u539F\u578B\u94FE.3234bfd2.png";const e={},t=s('<h1 id="\u624B\u5199-instanceof" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199-instanceof" aria-hidden="true">#</a> \u624B\u5199 instanceof</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>instanceof \u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF0C\u8BF7\u7528\u4EE3\u7801\u6765\u8868\u793A</p><h2 id="\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE" aria-hidden="true">#</a> \u539F\u578B\u94FE</h2><p><img src="'+a+`" alt=""></p><h2 id="instanceof-\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#instanceof-\u539F\u7406" aria-hidden="true">#</a> instanceof \u539F\u7406</h2><p>\u4F8B\u5982 <code>a instanceof b</code> \u5C31\u662F\uFF1A\u987A\u7740 <code>a</code> \u7684 <code>__proto__</code> \u94FE\u5411\u4E0A\u627E\uFF0C\u80FD\u5426\u627E\u5230 <code>b.prototype</code></p><p>\u4EE3\u7801\u53C2\u8003 instanceof.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u624B\u5199 instanceof
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token doc-comment comment">/**
 * \u81EA\u5B9A\u4E49 instanceof
 * <span class="token keyword">@param</span> <span class="token parameter">instance</span> instance
 * <span class="token keyword">@param</span> <span class="token parameter">origin</span> class or function
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span>instance<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> origin<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// null undefined</span>

    <span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> instance
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> type <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u503C\u7C7B\u578B</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> tempInstance <span class="token operator">=</span> instance <span class="token comment">// \u4E3A\u4E86\u9632\u6B62\u4FEE\u6539 instance</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>tempInstance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tempInstance<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> origin<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// \u914D\u4E0A\u4E86</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u672A\u5339\u914D</span>
        tempInstance <span class="token operator">=</span> tempInstance<span class="token punctuation">.</span>__proto__ <span class="token comment">// \u987A\u7740\u539F\u578B\u94FE\uFF0C\u5F80\u4E0A\u627E</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// console.info( myInstanceof({}, Object) )</span>
<span class="token comment">// console.info( myInstanceof([], Object) )</span>
<span class="token comment">// console.info( myInstanceof([], Array) )</span>
<span class="token comment">// console.info( myInstanceof({}, Array) )</span>
<span class="token comment">// console.info( myInstanceof(&#39;abc&#39;, String) )</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li>\u539F\u578B\u94FE</li><li>\u5FAA\u73AF\u5224\u65AD</li></ul>`,11);function o(c,p){return t}var l=n(e,[["render",o],["__file","08-\u624B\u5199instanceof.html.vue"]]);export{l as default};
