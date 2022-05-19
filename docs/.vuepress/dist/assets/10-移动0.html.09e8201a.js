import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="\u79FB\u52A8-0" tabindex="-1"><a class="header-anchor" href="#\u79FB\u52A8-0" aria-hidden="true">#</a> \u79FB\u52A8 0</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u5C06\u6570\u7EC4\u4E2D\u6240\u6709\u7684 <code>0</code> \u90FD\u79FB\u52A8\u5230\u672B\u5C3E\uFF0C\u4F8B\u5982\u8F93\u5165 <code>[1, 0, 3, 0, 11, 0]</code> \u8F93\u51FA <code>[1, 3, 11, 0, 0, 0]</code>\u3002\u8981\u6C42\uFF1A</p><ul><li>\u53EA\u79FB\u52A8 <code>0</code> \uFF0C\u5176\u4ED6\u6570\u5B57\u987A\u5E8F\u4E0D\u53D8</li><li>\u8003\u8651\u65F6\u95F4\u590D\u6742\u5EA6</li><li>\u5FC5\u987B\u5728\u539F\u6570\u7EC4\u5C31\u884C\u64CD\u4F5C</li></ul><h2 id="\u5982\u679C\u4E0D\u9650\u5236-\u5FC5\u987B\u5728\u539F\u6570\u7EC4\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u4E0D\u9650\u5236-\u5FC5\u987B\u5728\u539F\u6570\u7EC4\u4FEE\u6539" aria-hidden="true">#</a> \u5982\u679C\u4E0D\u9650\u5236\u201C\u5FC5\u987B\u5728\u539F\u6570\u7EC4\u4FEE\u6539\u201D</h2><ul><li>\u5B9A\u4E49 <code>part1</code> <code>part2</code> \u4E24\u4E2A\u7A7A\u6570\u7EC4</li><li>\u904D\u5386\u6570\u7EC4\uFF0C\u975E <code>0</code> push \u5230 <code>part1</code> \uFF0C<code>0</code> push \u5230 <code>part2</code></li><li>\u8FD4\u56DE <code>part1.concat(part2)</code></li></ul><p>\u65F6\u95F4\u590D\u6742\u5EA6 <code>O(n)</code> \u7A7A\u95F4\u590D\u6742\u5EA6 <code>O(n)</code> \uFF0C</p><p>\u6240\u4EE5\uFF0C\u9047\u5230\u7C7B\u4F3C\u95EE\u9898\uFF0C\u8981\u63D0\u524D\u95EE\u9762\u8BD5\u5B98\uFF1A<strong>\u662F\u5426\u80FD\u5728\u539F\u6570\u7EC4\u57FA\u7840\u4E0A\u4FEE\u6539\uFF1F</strong></p><h2 id="\u4F20\u7EDF\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F20\u7EDF\u65B9\u5F0F" aria-hidden="true">#</a> \u4F20\u7EDF\u65B9\u5F0F</h2><p>\u601D\u8DEF</p><ul><li>\u904D\u5386\u6570\u7EC4</li><li>\u9047\u5230 <code>0</code> \u5219 push \u5230\u6570\u7EC4\u672B\u5C3E</li><li>\u7136\u540E\u7528 splice \u622A\u53D6\u6389\u5F53\u524D\u5143\u7D20</li></ul><p>\u5206\u6790\u6027\u80FD</p><ul><li>\u7A7A\u95F4\u590D\u6742\u5EA6\u6CA1\u6709\u95EE\u9898 <code>O(1)</code></li><li>\u65F6\u95F4\u590D\u6742\u5EA6 <ul><li>\u770B\u4F3C\u662F <code>O(n)</code></li><li>\u4F46\u5B9E\u9645\u4E0A <code>splice</code> \u548C <code>unshift</code> \u4E00\u6837\uFF0C\u4FEE\u6539\u6570\u7EC4\u7ED3\u6784\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u662F <code>O(n)</code></li><li>\u603B\u4F53\u770B\u6765\u65F6\u95F4\u590D\u6742\u5EA6\u662F <code>O(n^2)</code>\uFF0C\u4E0D\u53EF\u7528</li></ul></li></ul><p>\u3010\u6CE8\u610F\u3011\u7F51\u4E0A\u6709\u5F88\u591A\u4EBA\u5BF9\u8FD9\u79CD\u65B9\u5F0F\u70B9\u8D5E\uFF0C\u5207\u4E0D\u53EF\u968F\u610F\u4ECE\u4F17\uFF0C\u8981\u5BF9\u601D\u8003\uFF01</p><h2 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h2><p>\u601D\u8DEF\uFF08\u53EF\u753B\u56FE\u89E3\u91CA\uFF0C\u53C2\u8003\u89C6\u9891\u8BB2\u89E3\uFF09</p><ul><li>\u6307\u94881 \u6307\u5411\u7B2C\u4E00\u4E2A 0 \uFF0C\u6307\u94882 \u6307\u5411\u7B2C\u4E00\u4E2A\u975E 0</li><li>\u628A\u6307\u94881 \u548C \u6307\u94882 \u8FDB\u884C\u4EA4\u6362</li><li>\u6307\u9488\u5411\u540E\u79FB</li></ul><p>\u6027\u80FD\u5206\u6790</p><ul><li>\u65F6\u95F4\u590D\u6742\u5EA6 <code>O(n)</code></li><li>\u7A7A\u95F4\u590D\u6742\u5EA6 <code>O(1)</code></li></ul><p>\u6027\u80FD\u6D4B\u8BD5\uFF0C\u5B9E\u9645\u5BF9\u6BD4\u5DEE\u8DDD\u975E\u5E38\u5927\u3002</p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u4F7F\u7528\u53CC\u6307\u9488\uFF0C\u4FDD\u8BC1\u65F6\u95F4\u590D\u6742\u5EA6\u3002\u53C2\u8003 move-zero.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u79FB\u52A8 0 \u5230\u6570\u7EC4\u672B\u5C3E
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token doc-comment comment">/**
 * \u79FB\u52A8 0 \u5230\u6570\u7EC4\u7684\u672B\u5C3E\uFF08\u5D4C\u5957\u5FAA\u73AF\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> number arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">moveZero1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token keyword">let</span> zeroLength <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token comment">// O(n^2)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length <span class="token operator">-</span> zeroLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
            arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// \u672C\u8EAB\u5C31\u6709 O(n)</span>
            i<span class="token operator">--</span> <span class="token comment">// \u6570\u7EC4\u622A\u53D6\u4E86\u4E00\u4E2A\u5143\u7D20\uFF0Ci \u8981\u9012\u51CF\uFF0C\u5426\u5219\u8FDE\u7EED 0 \u5C31\u4F1A\u6709\u9519\u8BEF</span>
            zeroLength<span class="token operator">++</span> <span class="token comment">// \u7D2F\u52A0 0 \u7684\u957F\u5EA6</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u79FB\u52A8 0 \u5230\u6570\u7EC4\u672B\u5C3E\uFF08\u53CC\u6307\u9488\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> number arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">moveZero2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token keyword">let</span> i
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token comment">// \u6307\u5411\u7B2C\u4E00\u4E2A 0</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u7B2C\u4E00\u4E2A 0</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                j <span class="token operator">=</span> i
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4EA4\u6362</span>
            <span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
            arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> n

            j<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const arr = [1, 0, 3, 4, 0, 0, 11, 0]</span>
<span class="token comment">// moveZero2(arr)</span>
<span class="token comment">// console.log(arr)</span>

<span class="token comment">// const arr1 = []</span>
<span class="token comment">// for (let i = 0; i &lt; 20 * 10000; i++) {</span>
<span class="token comment">//     if (i % 10 === 0) {</span>
<span class="token comment">//         arr1.push(0)</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//         arr1.push(i)</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token comment">// console.time(&#39;moveZero1&#39;)</span>
<span class="token comment">// moveZero1(arr1)</span>
<span class="token comment">// console.timeEnd(&#39;moveZero1&#39;) // 262ms</span>

<span class="token comment">// const arr2 = []</span>
<span class="token comment">// for (let i = 0; i &lt; 20 * 10000; i++) {</span>
<span class="token comment">//     if (i % 10 === 0) {</span>
<span class="token comment">//         arr2.push(0)</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//         arr2.push(i)</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>
<span class="token comment">// console.time(&#39;moveZero2&#39;)</span>
<span class="token comment">// moveZero2(arr2)</span>
<span class="token comment">// console.timeEnd(&#39;moveZero2&#39;) // 3ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5212\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5212\u91CD\u70B9" aria-hidden="true">#</a> \u5212\u91CD\u70B9</h2><ul><li>\u54A8\u8BE2\u9762\u8BD5\u5B98\uFF0C\u786E\u8BA4\u662F\u5426\u5FC5\u987B\u8981\u4FEE\u6539\u539F\u6570\u636E\uFF1F</li><li>\u6570\u7EC4\u662F\u6709\u5E8F\u7ED3\u6784\uFF0C\u4E0D\u80FD\u968F\u610F <code>splice</code> <code>unshift</code></li><li>\u53CC\u6307\u9488\u7684\u601D\u8DEF</li></ul>`,25);function p(o,t){return e}var i=n(a,[["render",p],["__file","10-\u79FB\u52A80.html.vue"]]);export{i as default};
