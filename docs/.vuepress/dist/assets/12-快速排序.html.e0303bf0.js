import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="\u5FEB\u901F\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u6392\u5E8F" aria-hidden="true">#</a> \u5FEB\u901F\u6392\u5E8F</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7528 Javascript \u5B9E\u73B0\u5FEB\u901F\u6392\u5E8F\uFF0C\u5E76\u8BF4\u660E\u65F6\u95F4\u590D\u6742\u5EA6\u3002</p><h2 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h2><p>\u5FEB\u901F\u6392\u5E8F\u662F\u57FA\u7840\u7B97\u6CD5\u4E4B\u4E00\uFF0C\u7B97\u6CD5\u601D\u8DEF\u662F\u56FA\u5B9A\u7684</p><ul><li>\u627E\u5230\u4E2D\u95F4\u4F4D\u7F6E midValue</li><li>\u904D\u5386\u6570\u7EC4\uFF0C\u5C0F\u4E8E midValue \u653E\u5728 left \uFF0C\u5927\u4E8E midValue \u653E\u5728 right</li><li>\u7EE7\u7EED\u9012\u5F52\uFF0Cconcat \u62FC\u63A5</li></ul><h2 id="splice-\u548C-slice" tabindex="-1"><a class="header-anchor" href="#splice-\u548C-slice" aria-hidden="true">#</a> splice \u548C slice</h2><p>\u4EE3\u7801\u5B9E\u73B0\u65F6\uFF0C\u83B7\u53D6 midValue \u53EF\u4EE5\u901A\u8FC7 <code>splice</code> \u548C <code>slice</code> \u4E24\u79CD\u65B9\u5F0F</p><p>\u7406\u8BBA\u5206\u6790\uFF0C<code>slice</code> \u8981\u4F18\u4E8E <code>splice</code> \uFF0C\u56E0\u4E3A <code>splice</code> \u4F1A\u4FEE\u6539\u539F\u6570\u7EC4\u3002<br> \u4F46\u5B9E\u9645\u6027\u80FD\u6D4B\u8BD5\u53D1\u73B0\u4E24\u8005\u63A5\u8FD1\u3002</p><p>\u4F46\u662F\uFF0C\u5373\u4FBF\u5982\u6B64\u8FD8\u662F\u503E\u5411\u4E8E\u9009\u62E9 <code>slice</code> \u2014\u2014 <strong>\u56E0\u4E3A\u5B83\u4E0D\u4F1A\u6539\u52A8\u539F\u6570\u7EC4</strong>\uFF0C\u7C7B\u4F3C\u4E8E\u51FD\u6570\u5F0F\u7F16\u7A0B</p><h2 id="\u6027\u80FD\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u5206\u6790" aria-hidden="true">#</a> \u6027\u80FD\u5206\u6790</h2><p>\u5FEB\u901F\u6392\u5E8F \u65F6\u95F4\u590D\u6742\u5EA6 <code>O(n*logn)</code> \u2014\u2014 \u6709\u904D\u5386\uFF0C\u6709\u4E8C\u5206</p><p>\u666E\u901A\u7684\u6392\u5E8F\u7B97\u6CD5\uFF08\u5982\u5192\u6CE1\u6392\u5E8F\uFF09\u65F6\u95F4\u590D\u6742\u5EA6\u65F6 <code>O(n^2)</code></p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u4F7F\u7528 slice \u65B9\u6848\uFF0C\u53C2\u8003 quick-sort.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u5FEB\u901F\u6392\u5E8F
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token doc-comment comment">/**
 * \u5FEB\u901F\u6392\u5E8F\uFF08\u4F7F\u7528 splice\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> number arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">quickSort1</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr

    <span class="token keyword">const</span> midIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> midValue <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>midIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">// \u6CE8\u610F\uFF1A\u8FD9\u91CC\u4E0D\u7528\u76F4\u63A5\u7528 length \uFF0C\u800C\u662F\u7528 arr.length \u3002\u56E0\u4E3A arr \u5DF2\u7ECF\u88AB splice \u7ED9\u4FEE\u6539\u4E86</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5C0F\u4E8E midValue \uFF0C\u5219\u653E\u5728 left</span>
            left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5927\u4E8E midValue \uFF0C\u5219\u653E\u5728 right</span>
            right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">quickSort1</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>
        <span class="token punctuation">[</span>midValue<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">quickSort1</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5FEB\u901F\u6392\u5E8F\uFF08\u4F7F\u7528 slice\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> number arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">quickSort2</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arr

    <span class="token keyword">const</span> midIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> midValue <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>midIndex<span class="token punctuation">,</span> midIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    <span class="token keyword">const</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!==</span> midIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> midValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5C0F\u4E8E midValue \uFF0C\u5219\u653E\u5728 left</span>
                left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u5927\u4E8E midValue \uFF0C\u5219\u653E\u5728 right</span>
                right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">quickSort2</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>
        <span class="token punctuation">[</span>midValue<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token function">quickSort2</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const arr1 = [1, 6, 2, 7, 3, 8, 4, 9, 5]</span>
<span class="token comment">// console.info(quickSort2(arr1))</span>

<span class="token comment">// // \u6027\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const arr1 = []</span>
<span class="token comment">// for (let i = 0; i &lt; 10 * 10000; i++) {</span>
<span class="token comment">//     arr1.push(Math.floor(Math.random() * 1000))</span>
<span class="token comment">// }</span>
<span class="token comment">// console.time(&#39;quickSort1&#39;)</span>
<span class="token comment">// quickSort1(arr1)</span>
<span class="token comment">// console.timeEnd(&#39;quickSort1&#39;) // 74ms</span>

<span class="token comment">// const arr2 = []</span>
<span class="token comment">// for (let i = 0; i &lt; 10 * 10000; i++) {</span>
<span class="token comment">//     arr2.push(Math.floor(Math.random() * 1000))</span>
<span class="token comment">// }</span>
<span class="token comment">// console.time(&#39;quickSort2&#39;)</span>
<span class="token comment">// quickSort2(arr2)</span>
<span class="token comment">// console.timeEnd(&#39;quickSort2&#39;) // 82ms</span>

<span class="token comment">// // \u5355\u72EC\u6BD4\u8F83 splice \u548C slice</span>
<span class="token comment">// const arr1 = []</span>
<span class="token comment">// for (let i = 0; i &lt; 10 * 10000; i++) {</span>
<span class="token comment">//     arr1.push(Math.floor(Math.random() * 1000))</span>
<span class="token comment">// }</span>
<span class="token comment">// console.time(&#39;splice&#39;)</span>
<span class="token comment">// arr1.splice(5 * 10000, 1)</span>
<span class="token comment">// console.timeEnd(&#39;splice&#39;)</span>
<span class="token comment">// const arr2 = []</span>
<span class="token comment">// for (let i = 0; i &lt; 10 * 10000; i++) {</span>
<span class="token comment">//     arr2.push(Math.floor(Math.random() * 1000))</span>
<span class="token comment">// }</span>
<span class="token comment">// console.time(&#39;slice&#39;)</span>
<span class="token comment">// arr2.slice(5 * 10000, 5 * 10000 + 1)</span>
<span class="token comment">// console.timeEnd(&#39;slice&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5212\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5212\u91CD\u70B9" aria-hidden="true">#</a> \u5212\u91CD\u70B9</h2><ul><li>\u6392\u5E8F\u7B97\u6CD5\uFF08\u57FA\u672C\u529F\uFF09</li><li>\u4E8C\u5206\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6</li><li>\u6CE8\u610F\u6570\u7EC4\u7684\u64CD\u4F5C\uFF08 <code>splice</code> vs <code>slice</code> \uFF09</li></ul>`,18);function t(p,c){return e}var i=n(a,[["render",t],["__file","12-\u5FEB\u901F\u6392\u5E8F.html.vue"]]);export{i as default};
