import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="\u5207\u6362\u5B57\u6BCD\u5927\u5C0F\u5199" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u5B57\u6BCD\u5927\u5C0F\u5199" aria-hidden="true">#</a> \u5207\u6362\u5B57\u6BCD\u5927\u5C0F\u5199</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u5207\u6362\u5B57\u6BCD\u5927\u5C0F\u5199\uFF0C\u8F93\u5165 <code>&#39;aBc&#39;</code> \u8F93\u51FA <code>&#39;AbC&#39;</code></p><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2><p>\u9700\u8981\u5224\u65AD\u5B57\u6BCD\u662F\u5927\u5199\u8FD8\u662F\u5C0F\u5199</p><ul><li>\u6B63\u5219\u8868\u8FBE\u5F0F</li><li><code>charCodeAt</code> \u83B7\u53D6 ASCII \u7801\uFF08ASCII \u7801\u8868\uFF0C\u53EF\u4EE5\u7F51\u4E0A\u641C\u7D22\uFF09</li></ul><p>\u6027\u80FD\u5206\u6790</p><ul><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u6027\u80FD\u8F83\u5DEE</li><li>ASCII \u7801\u6027\u80FD\u8F83\u597D</li></ul><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u4F7F\u7528 <code>charCodeAt</code> \uFF0C\u53C2\u8003\u4EE3\u7801 switch-case.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u5207\u6362\u5B57\u6BCD\u5927\u5C0F\u5199
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token doc-comment comment">/**
 * \u5207\u6362\u5B57\u6BCD\u5927\u5C0F\u5199\uFF08\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">s</span> str
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">switchLetterCase1</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

    <span class="token keyword">const</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">const</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span>
    <span class="token keyword">const</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[A-Z]</span><span class="token regex-delimiter">/</span></span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>reg1<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>reg2<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5207\u6362\u5B57\u6BCD\u5927\u5C0F\u5199\uFF08ASCII \u7F16\u7801\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">s</span> str
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">switchLetterCase2</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

    <span class="token keyword">const</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> c <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">const</span> code <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">&gt;=</span> <span class="token number">65</span> <span class="token operator">&amp;&amp;</span> code <span class="token operator">&lt;=</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">&gt;=</span> <span class="token number">97</span> <span class="token operator">&amp;&amp;</span> code <span class="token operator">&lt;=</span> <span class="token number">122</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">+=</span> c
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const str = &#39;100aBcD$#xYz&#39;</span>
<span class="token comment">// console.info(switchLetterCase2(str))</span>

<span class="token comment">// // \u6027\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const str = &#39;100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz100aBcD$#xYz&#39;</span>
<span class="token comment">// console.time(&#39;switchLetterCase1&#39;)</span>
<span class="token comment">// for (let i = 0; i &lt; 10 * 10000; i++) {</span>
<span class="token comment">//     switchLetterCase1(str)</span>
<span class="token comment">// }</span>
<span class="token comment">// console.timeEnd(&#39;switchLetterCase1&#39;) // 436ms</span>

<span class="token comment">// console.time(&#39;switchLetterCase2&#39;)</span>
<span class="token comment">// for (let i = 0; i &lt; 10 * 10000; i++) {</span>
<span class="token comment">//     switchLetterCase2(str)</span>
<span class="token comment">// }</span>
<span class="token comment">// console.timeEnd(&#39;switchLetterCase2&#39;) // 210ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5212\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5212\u91CD\u70B9" aria-hidden="true">#</a> \u5212\u91CD\u70B9</h2><ul><li>\u614E\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</li><li>ASCII \u7801</li></ul>`,13);function t(p,o){return e}var i=n(a,[["render",t],["__file","16-\u5207\u6362\u5B57\u6BCD\u5927\u5C0F\u5199.html.vue"]]);export{i as default};
