import{_ as n,c as a}from"./app.1c29f384.js";const s={},t=a(`<h1 id="for-vs-foreach" tabindex="-1"><a class="header-anchor" href="#for-vs-foreach" aria-hidden="true">#</a> for vs forEach</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>for \u548C forEach \u54EA\u4E2A\u66F4\u5FEB\uFF1F\u4E3A\u4EC0\u4E48</p><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p>\u4EE3\u7801\u53C2\u8003 for-foreach.html \uFF0C\u6D4B\u8BD5\u7ED3\u679C\uFF1Afor \u66F4\u5FEB</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=q, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>for vs forEach<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>for vs forEach<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length

        console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;for&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> n1 <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            n1<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;for&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 3.7ms</span>

        console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;forEach&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> n2 <span class="token operator">=</span> <span class="token number">0</span>
        arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n2<span class="token operator">++</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;forEach&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 15.1ms</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u51FD\u6570\u9700\u8981\u5F00\u9500" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u51FD\u6570\u9700\u8981\u5F00\u9500" aria-hidden="true">#</a> \u521B\u5EFA\u51FD\u6570\u9700\u8981\u5F00\u9500</h2><p>for \u76F4\u63A5\u5728\u5F53\u524D\u51FD\u6570\u4E2D\u6267\u884C\uFF0CforEach \u6BCF\u6B21\u90FD\u8981\u65B0\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u3002 \u51FD\u6570\u6709\u5355\u72EC\u7684\u4F5C\u7528\u57DF\u548C\u4E0A\u4E0B\u6587\uFF08\u53EF\u56DE\u987E\u201C\u5806\u6808\u6A21\u578B\u201D\uFF09\uFF0C\u6240\u4EE5\u8017\u65F6\u66F4\u4E45\u3002</p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>for \u66F4\u5FEB\uFF0C\u56E0\u4E3A forEach \u6BCF\u6B21\u521B\u5EFA\u51FD\u6570\u9700\u8981\u5F00\u9500</p><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p>\u5F00\u53D1\u4E2D\u4E0D\u4EC5\u8981\u8003\u8651\u6027\u80FD\uFF0C\u8FD8\u8981\u8003\u8651\u4EE3\u7801\u7684\u53EF\u8BFB\u6027\uFF0CforEach \u53EF\u8BFB\u6027\u66F4\u597D\u3002</p>`,12);function p(e,o){return t}var l=n(s,[["render",p],["__file","05-for-vs-forEach.html.vue"]]);export{l as default};
