import{_ as e,r as p,o,a as c,b as n,e as i,F as l,c as a,d as s}from"./app.1c29f384.js";const u={},r=a(`<h1 id="array-flatten" tabindex="-1"><a class="header-anchor" href="#array-flatten" aria-hidden="true">#</a> Array flatten</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B9E\u73B0 Array flatten \u6241\u5E73\u5316\uFF0C\u53EA\u51CF\u5C11\u4E00\u4E2A\u5D4C\u5957\u5C42\u7EA7<br> \u4F8B\u5982\u8F93\u5165 <code>[1, 2, [3, 4, [100, 200], 5], 6]</code> \u8FD4\u56DE <code>[1, 2, 3, 4, [100, 200], 5, 6]</code></p><h2 id="\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u89E3\u7B54" aria-hidden="true">#</a> \u89E3\u7B54</h2><ul><li>\u904D\u5386\u6570\u7EC4</li><li>\u5982\u679C item \u662F\u6570\u5B57\uFF0C\u5219\u7D2F\u52A0</li><li>\u5982\u679C item \u662F\u6570\u7EC4\uFF0C\u5219 forEach \u7D2F\u52A0\u5176\u5143\u7D20</li></ul><p>\u4EE3\u7801\u53C2\u8003 array-flatten.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u6570\u7EC4\u6241\u5E73\u5316
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token doc-comment comment">/**
 * \u6570\u7EC4\u6241\u5E73\u5316\uFF0C\u4F7F\u7528 push
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flatten1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>n <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u6570\u7EC4\u6241\u5E73\u5316\uFF0C\u4F7F\u7528 concat
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flatten2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const arr = [1, [2, [3], 4], 5]</span>
<span class="token comment">// console.info( flatten2(arr) )</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDE\u73AF\u95EE-\u5982\u679C\u60F3\u8981\u5F7B\u5E95\u6241\u5E73-\u5FFD\u7565\u6240\u6709\u5D4C\u5957\u5C42\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u73AF\u95EE-\u5982\u679C\u60F3\u8981\u5F7B\u5E95\u6241\u5E73-\u5FFD\u7565\u6240\u6709\u5D4C\u5957\u5C42\u7EA7" aria-hidden="true">#</a> \u8FDE\u73AF\u95EE\uFF1A\u5982\u679C\u60F3\u8981\u5F7B\u5E95\u6241\u5E73\uFF0C\u5FFD\u7565\u6240\u6709\u5D4C\u5957\u5C42\u7EA7\uFF1F</h2>`,8),k=s("\u50CF lodash "),d={href:"https://www.lodashjs.com/docs/lodash.flattenDepth",target:"_blank",rel:"noopener noreferrer"},v=s("flattenDepth"),m=s(" \uFF0C\u4F8B\u5982\u8F93\u5165 "),b=n("code",null,"[1, 2, [3, 4, [100, 200], 5], 6]",-1),f=s(" \u8FD4\u56DE "),y=n("code",null,"[1, 2, 3, 4, 100, 200, 5, 6]",-1),h=a(`<p>\u6700\u5BB9\u6613\u60F3\u5230\u7684\u89E3\u51B3\u65B9\u6848\u5C31\u662F<strong>\u9012\u5F52</strong>\uFF0C\u4EE3\u7801\u53C2\u8003 array-flatten-deep.ts \uFF08\u6CE8\u610F\u5355\u5143\u6D4B\u8BD5\uFF0C\u6709\u5168\u9762\u7684\u6570\u636E\u7C7B\u578B\uFF09</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u6570\u7EC4\u6DF1\u5EA6\u6241\u5E73\u5316
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token doc-comment comment">/**
 * \u6570\u7EC4\u6DF1\u5EA6\u6241\u5E73\u5316\uFF0C\u4F7F\u7528 push
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flattenDeep1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> flatItem <span class="token operator">=</span> <span class="token function">flattenDeep1</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// \u9012\u5F52</span>
            flatItem<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>n <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u6570\u7EC4\u6DF1\u5EA6\u6241\u5E73\u5316\uFF0C\u4F7F\u7528 concat
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flattenDeep2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> flatItem <span class="token operator">=</span> <span class="token function">flattenDeep2</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// \u9012\u5F52</span>
            res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>flatItem<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>


<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const arr = [1, [2, [3, [&#39;a&#39;, [true], &#39;b&#39;], 4], 5], 6]</span>
<span class="token comment">// console.info( flattenDeep2(arr) )</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u6709\u4E00\u79CD hack \u7684\u65B9\u5F0F <code>toString</code> \u2014\u2014 \u4F46\u9047\u5230\u5F15\u7528\u7C7B\u578B\u7684 item \u5C31\u4E0D\u884C\u4E86\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
nums<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;1,2,3,4,100,200,5,6&#39;</span>

<span class="token comment">// \u4F46\u4E07\u4E00\u6570\u7EC4\u5143\u7D20\u662F {x: 100} \u7B49\u5F15\u7528\u7C7B\u578B\uFF0C\u5C31\u4E0D\u53EF\u4EE5\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function w(_,g){const t=p("ExternalLinkIcon");return o(),c(l,null,[r,n("p",null,[k,n("a",d,[v,i(t)]),m,b,f,y]),h],64)}var E=e(u,[["render",w],["__file","02-array-flatten.html.vue"]]);export{E as default};
