import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="\u6570\u5B57\u5343\u5206\u4F4D" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u5343\u5206\u4F4D" aria-hidden="true">#</a> \u6570\u5B57\u5343\u5206\u4F4D</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u5C06\u6570\u5B57\u6309\u7167\u5343\u5206\u4F4D\u751F\u6210\u5B57\u7B26\u4E32\uFF0C\u5373\u6BCF\u4E09\u4F4D\u52A0\u4E00\u4E2A\u9017\u53F7\u3002\u4E0D\u8003\u8651\u5C0F\u6570\u3002<br> \u5982\u8F93\u5165\u6570\u5B57 <code>78100200300</code> \u8FD4\u56DE\u5B57\u7B26\u4E32 <code>&#39;78,100,200,300&#39;</code></p><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2><ul><li>\u4F7F\u7528\u6570\u7EC4</li><li>\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</li><li>\u4F7F\u7528\u5B57\u7B26\u4E32\u62C6\u5206</li></ul><h2 id="\u6027\u80FD\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u5206\u6790" aria-hidden="true">#</a> \u6027\u80FD\u5206\u6790</h2><ul><li>\u6570\u7EC4\u8F6C\u6362\uFF0C\u5F71\u54CD\u6027\u80FD</li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u6027\u80FD\u8F83\u5DEE</li><li>\u64CD\u4F5C\u5B57\u7B26\u4E32\uFF0C\u6027\u80FD\u8F83\u597D</li></ul><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u65B9\u6848\u4E8C\uFF0C\u53C2\u8003 thousands-format.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u5343\u5206\u4F4D\u683C\u5F0F\u5316
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token doc-comment comment">/**
* \u6B63\u5219
*/</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toThousands</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>num <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(d)(?=(?:d{3})+$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * \u5343\u5206\u4F4D\u683C\u5F0F\u5316\uFF08\u4F7F\u7528\u6570\u7EC4\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">n</span> number
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">format1</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// \u53EA\u8003\u8651\u6574\u6570</span>

    <span class="token keyword">const</span> s <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> val<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> val <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span> prev
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> val
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> val <span class="token operator">+</span> prev
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u6570\u5B57\u5343\u5206\u4F4D\u683C\u5F0F\u5316\uFF08\u5B57\u7B26\u4E32\u5206\u6790\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">n</span> number
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">format2</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">// \u53EA\u8003\u8651\u6574\u6570</span>

    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    <span class="token keyword">const</span> s <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> s<span class="token punctuation">.</span>length

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> j <span class="token operator">=</span> length <span class="token operator">-</span> i
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> res
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                res <span class="token operator">=</span> <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> res
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> res
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const n = 10201004050</span>
<span class="token comment">// console.info(&#39;format1&#39;, format1(n))</span>
<span class="token comment">// console.info(&#39;format2&#39;, format2(n))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5212\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5212\u91CD\u70B9" aria-hidden="true">#</a> \u5212\u91CD\u70B9</h2><ul><li>\u4ECE\u5C3E\u5411\u5934\u8BA1\u7B97\uFF0C\u548C\u65E5\u5E38\u904D\u5386\u7684\u987A\u5E8F\u76F8\u53CD</li><li>\u614E\u7528\u6570\u7EC4\u64CD\u4F5C</li><li>\u614E\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</li></ul>`,12);function p(t,o){return e}var l=n(a,[["render",p],["__file","15-\u6570\u5B57\u5343\u5206\u4F4D.html.vue"]]);export{l as default};
