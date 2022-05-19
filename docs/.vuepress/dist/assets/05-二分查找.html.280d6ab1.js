import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="\u4E8C\u5206\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5206\u67E5\u627E" aria-hidden="true">#</a> \u4E8C\u5206\u67E5\u627E</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7528 Javascript \u5B9E\u73B0\u4E8C\u5206\u67E5\u627E\uFF08\u9488\u5BF9\u6709\u5E8F\u6570\u7EC4\uFF09\uFF0C\u8BF4\u660E\u5B83\u7684\u65F6\u95F4\u590D\u6742\u5EA6</p><h2 id="\u4E00\u4E2A\u6545\u4E8B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u6545\u4E8B" aria-hidden="true">#</a> \u4E00\u4E2A\u6545\u4E8B</h2><p>N \u5E74\u524D\uFF0C\u767E\u5EA6\uFF0C\u4E00\u4E2A\u590D\u6742\u7684\u540E\u53F0\u7CFB\u7EDF\u51FA\u73B0\u4E86\u95EE\u9898\uFF0C\u56E0\u4E3A\u592A\u5927\u627E\u4E0D\u5230\u95EE\u9898\u6240\u5728\u3002 \u4E00\u4E2A\u5DE5\u7A0B\u5E08\uFF0C\u4F7F\u7528\u4E8C\u5206\u6CD5\uFF0C\u5F88\u5FEB\u627E\u5230\u4E86\u95EE\u9898\u539F\u56E0\u3002</p><p>\u65E0\u8BBA\u591A\u4E48\u5927\u7684\u6570\u636E\u91CF\uFF0C\u4E00\u65E6\u6709\u4E86\u4E8C\u5206\uFF0C\u4FBF\u53EF\u5FEB\u901F\u641E\u5B9A\u3002<br> \u4E8C\u5206\u6CD5\uFF0C\u662F\u7B97\u6CD5\u7684\u4E00\u4E2A\u91CD\u8981\u601D\u7EF4\u3002</p><p>\u4F46\u4E8C\u5206\u6CD5\u6709\u4E00\u4E2A\u6761\u4EF6\uFF1A\u9700\u8981\u6709\u5E8F\u6570\u636E\u3002</p><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2><p>\u4E8C\u5206\u67E5\u627E\u662F\u4E00\u79CD\u56FA\u5B9A\u7684\u7B97\u6CD5\uFF0C\u6CA1\u4EC0\u4E48\u53EF\u5206\u6790\u7684\u3002</p><p>\u4E24\u79CD\u5B9E\u73B0\u601D\u8DEF</p><ul><li>\u9012\u5F52 - \u4EE3\u7801\u903B\u8F91\u66F4\u52A0\u7B80\u6D01</li><li>\u5FAA\u73AF - \u6027\u80FD\u66F4\u597D\uFF08\u5C31\u8C03\u7528\u4E00\u6B21\u51FD\u6570\uFF0C\u800C\u9012\u5F52\u9700\u8981\u8C03\u7528\u5F88\u591A\u6B21\u51FD\u6570\uFF0C\u521B\u5EFA\u51FD\u6570\u4F5C\u7528\u57DF\u4F1A\u6D88\u8017\u65F6\u95F4\uFF09</li></ul><p>\u65F6\u95F4\u590D\u6742\u5EA6 <code>O(logn)</code></p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u53C2\u8003 binary-search.ts \u548C binary-search.test.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u4E8C\u5206\u67E5\u627E
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token doc-comment comment">/**
 * \u4E8C\u5206\u67E5\u627E\uFF08\u5FAA\u73AF\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 * <span class="token keyword">@param</span> <span class="token parameter">target</span> target
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">binarySearch1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

    <span class="token keyword">let</span> startIndex <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u5F00\u59CB\u4F4D\u7F6E</span>
    <span class="token keyword">let</span> endIndex <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// \u7ED3\u675F\u4F4D\u7F6E</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>startIndex <span class="token operator">&lt;=</span> endIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> midIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>startIndex <span class="token operator">+</span> endIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> midValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>midIndex<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u76EE\u6807\u503C\u8F83\u5C0F\uFF0C\u5219\u7EE7\u7EED\u5728\u5DE6\u4FA7\u67E5\u627E</span>
            endIndex <span class="token operator">=</span> midIndex <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u76EE\u6807\u503C\u8F83\u5927\uFF0C\u5219\u7EE7\u7EED\u5728\u53F3\u4FA7\u67E5\u627E</span>
            startIndex <span class="token operator">=</span> midIndex <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u76F8\u7B49\uFF0C\u8FD4\u56DE</span>
            <span class="token keyword">return</span> midIndex
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4E8C\u5206\u67E5\u627E\uFF08\u9012\u5F52\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> arr
 * <span class="token keyword">@param</span> <span class="token parameter">target</span> target
 * <span class="token keyword">@param</span> <span class="token parameter">startIndex</span> start index
 * <span class="token keyword">@param</span> <span class="token parameter">endIndex</span> end index
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">binarySearch2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> startIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> endIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

    <span class="token comment">// \u5F00\u59CB\u548C\u7ED3\u675F\u7684\u8303\u56F4</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> startIndex <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>endIndex <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> endIndex <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">1</span>

    <span class="token comment">// \u5982\u679C start \u548C end \u76F8\u9047\uFF0C\u5219\u7ED3\u675F</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>startIndex <span class="token operator">&gt;</span> endIndex<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

    <span class="token comment">// \u4E2D\u95F4\u4F4D\u7F6E</span>
    <span class="token keyword">const</span> midIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>startIndex <span class="token operator">+</span> endIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> midValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>midIndex<span class="token punctuation">]</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u76EE\u6807\u503C\u8F83\u5C0F\uFF0C\u5219\u7EE7\u7EED\u5728\u5DE6\u4FA7\u67E5\u627E</span>
        <span class="token keyword">return</span> <span class="token function">binarySearch2</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> target<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> midIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u76EE\u6807\u503C\u8F83\u5927\uFF0C\u5219\u7EE7\u7EED\u5728\u53F3\u4FA7\u67E5\u627E</span>
        <span class="token keyword">return</span> <span class="token function">binarySearch2</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> target<span class="token punctuation">,</span> midIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> endIndex<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u76F8\u7B49\uFF0C\u8FD4\u56DE</span>
        <span class="token keyword">return</span> midIndex
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// // // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]</span>
<span class="token comment">// const target = 40</span>
<span class="token comment">// // console.info(binarySearch2(arr, target))</span>

<span class="token comment">// // \u6027\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// console.time(&#39;binarySearch1&#39;)</span>
<span class="token comment">// for (let i = 0; i &lt; 100 * 10000; i++) {</span>
<span class="token comment">//     binarySearch1(arr, target)</span>
<span class="token comment">// }</span>
<span class="token comment">// console.timeEnd(&#39;binarySearch1&#39;) // 17ms</span>
<span class="token comment">// console.time(&#39;binarySearch2&#39;)</span>
<span class="token comment">// for (let i = 0; i &lt; 100 * 10000; i++) {</span>
<span class="token comment">//     binarySearch2(arr, target)</span>
<span class="token comment">// }</span>
<span class="token comment">// console.timeEnd(&#39;binarySearch2&#39;) // 34ms</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5212\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5212\u91CD\u70B9" aria-hidden="true">#</a> \u5212\u91CD\u70B9</h2><ul><li>\u6709\u5E8F\uFF0C\u5C31\u4E00\u5B9A\u8981\u60F3\u5230\u4E8C\u5206</li><li>\u4E8C\u5206\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u5FC5\u5B9A\u5305\u542B <code>O(logn)</code></li></ul>`,17);function t(p,o){return e}var l=n(a,[["render",t],["__file","05-\u4E8C\u5206\u67E5\u627E.html.vue"]]);export{l as default};
