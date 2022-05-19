import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="\u8FDE\u7EED\u6700\u591A\u7684\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u7EED\u6700\u591A\u7684\u5B57\u7B26" aria-hidden="true">#</a> \u8FDE\u7EED\u6700\u591A\u7684\u5B57\u7B26</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u7ED9\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u627E\u51FA\u8FDE\u7EED\u6700\u591A\u7684\u5B57\u7B26\uFF0C\u4EE5\u53CA\u6B21\u6570\u3002<br> \u4F8B\u5982\u5B57\u7B26\u4E32 <code>&#39;aabbcccddeeee11223&#39;</code> \u8FDE\u7EED\u6700\u591A\u7684\u662F <code>e</code> \uFF0C4 \u6B21\u3002</p><h2 id="\u4F20\u7EDF\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F20\u7EDF\u65B9\u5F0F" aria-hidden="true">#</a> \u4F20\u7EDF\u65B9\u5F0F</h2><p>\u5D4C\u5957\u5FAA\u73AF\uFF0C\u627E\u51FA\u6BCF\u4E2A\u5B57\u7B26\u7684\u8FDE\u7EED\u6B21\u6570\uFF0C\u5E76\u8BB0\u5F55\u6BD4\u8F83\u3002</p><p>\u65F6\u95F4\u590D\u6742\u5EA6\u770B\u4F3C\u662F <code>O(n^2)</code>\uFF0C\u56E0\u4E3A\u662F\u5D4C\u5957\u5FAA\u73AF\u3002 <strong>\u4F46\u5B9E\u9645\u4E0A\u5B83\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F <code>O(n)</code>\uFF0C\u56E0\u4E3A\u5FAA\u73AF\u4E2D\u6709\u8DF3\u8F6C</strong>\u3002</p><h2 id="\u53CC\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u53CC\u6307\u9488" aria-hidden="true">#</a> \u53CC\u6307\u9488</h2><p>\u753B\u56FE\u89E3\u91CA\uFF0C\u53C2\u8003\u89C6\u9891\u8BB2\u89E3\u3002</p><p>\u53EA\u6709\u4E00\u6B21\u5FAA\u73AF\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u662F <code>O(n)</code></p><p>\u6027\u80FD\u6D4B\u8BD5\uFF0C\u53D1\u73B0\u4E24\u8005\u65F6\u95F4\u6D88\u8017\u4E00\u6837\uFF0C<strong>\u5FAA\u73AF\u6B21\u6570\u4E5F\u4E00\u6837</strong>\u3002</p><h2 id="\u5176\u4ED6\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u65B9\u5F0F" aria-hidden="true">#</a> \u5176\u4ED6\u65B9\u5F0F</h2><p>\u8FD9\u4E2A\u9898\u76EE\u7F51\u4E0A\u8FD8\u6709\u5176\u4ED6\u7684\u7B54\u6848</p><ul><li>\u6B63\u5219\u8868\u8FBE\u5F0F \u2014\u2014 \u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u6548\u7387\u975E\u5E38\u4F4E\uFF0C\u53EF\u8FDB\u884C\u6027\u80FD\u6D4B\u8BD5\uFF08\u4EE3\u7801 <code>x-reg.ts</code> \uFF09</li><li>\u4F7F\u7528\u6570\u7EC4\u7D2F\u8BA1\u5404\u4E2A\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u7136\u540E\u6C42\u51FA\u6700\u5927\u503C \u2014\u2014 \u589E\u52A0\u7A7A\u95F4\u590D\u6742\u5EA6\uFF0C\u9762\u8BD5\u5B98\u4E0D\u4F1A\u559C\u6B22</li></ul><p>\u3010\u6CE8\u610F\u3011\u7B97\u6CD5\u5C3D\u91CF\u7528\u57FA\u7840\u4EE3\u7801\u5B9E\u73B0\uFF0C\u5C3D\u91CF\u4E0D\u8981\u7528\u73B0\u6210\u7684 API \u6216\u8BED\u6CD5\u7CD6 \u2014\u2014 \u65B9\u4FBF\uFF0C\u4F46\u4F60\u4E0D\u597D\u76F4\u89C2\u5224\u65AD\u65F6\u95F4\u590D\u6742\u5EA6</p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u4E0A\u8FF0\u4E24\u79CD\u65B9\u5F0F\uFF08\u5D4C\u5957\u5FAA\u73AF\u548C\u53CC\u6307\u9488\uFF09\u90FD\u53EF\u4EE5\uFF0C\u53C2\u8003 continuous-char.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u8FDE\u7EED\u5B57\u7B26
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token keyword">interface</span> <span class="token class-name">IRes</span> <span class="token punctuation">{</span>
    char<span class="token operator">:</span> <span class="token builtin">string</span>
    length<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u6C42\u8FDE\u7EED\u6700\u591A\u7684\u5B57\u7B26\u548C\u6B21\u6570\uFF08\u5D4C\u5957\u5FAA\u73AF\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> str
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findContinuousChar1</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> IRes <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> IRes <span class="token operator">=</span> <span class="token punctuation">{</span>
        char<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        length<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> length <span class="token operator">=</span> str<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">let</span> tempLength <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u4E34\u65F6\u8BB0\u5F55\u5F53\u524D\u8FDE\u7EED\u5B57\u7B26\u7684\u957F\u5EA6</span>

    <span class="token comment">// O(n)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tempLength <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u91CD\u7F6E</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                tempLength<span class="token operator">++</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">||</span> j <span class="token operator">===</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u4E0D\u76F8\u7B49\uFF0C\u6216\u8005\u5DF2\u7ECF\u5230\u4E86\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u3002\u8981\u53BB\u5224\u65AD\u6700\u5927\u503C</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>tempLength <span class="token operator">&gt;</span> res<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    res<span class="token punctuation">.</span>char <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                    res<span class="token punctuation">.</span>length <span class="token operator">=</span> tempLength
                <span class="token punctuation">}</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    i <span class="token operator">=</span> j <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// \u8DF3\u6B65</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">break</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u6C42\u8FDE\u7EED\u6700\u591A\u7684\u5B57\u7B26\u548C\u6B21\u6570\uFF08\u53CC\u6307\u9488\uFF09
 * <span class="token keyword">@param</span> <span class="token parameter">str</span> str
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">findContinuousChar2</span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> IRes <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res<span class="token operator">:</span> IRes <span class="token operator">=</span> <span class="token punctuation">{</span>
        char<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        length<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> length <span class="token operator">=</span> str<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res

    <span class="token keyword">let</span> tempLength <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u4E34\u65F6\u8BB0\u5F55\u5F53\u524D\u8FDE\u7EED\u5B57\u7B26\u7684\u957F\u5EA6</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token comment">// O(n)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            tempLength<span class="token operator">++</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">||</span> i <span class="token operator">===</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4E0D\u76F8\u7B49\uFF0C\u6216\u8005 i \u5230\u4E86\u5B57\u7B26\u4E32\u7684\u672B\u5C3E</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tempLength <span class="token operator">&gt;</span> res<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                res<span class="token punctuation">.</span>char <span class="token operator">=</span> str<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
                res<span class="token punctuation">.</span>length <span class="token operator">=</span> tempLength
            <span class="token punctuation">}</span>
            tempLength <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// reset</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                j <span class="token operator">=</span> i <span class="token comment">// \u8BA9 j \u201C\u8FFD\u4E0A\u201D i</span>
                i<span class="token operator">--</span> <span class="token comment">// \u7EC6\u8282</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> res
 <span class="token punctuation">}</span>

<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const str = &#39;aabbcccddeeee11223&#39;</span>
<span class="token comment">// console.info(findContinuousChar2(str))</span>

<span class="token comment">// let str = &#39;&#39;</span>
<span class="token comment">// for (let i = 0; i &lt; 100 * 10000; i++) {</span>
<span class="token comment">//     str += i.toString()</span>
<span class="token comment">// }</span>

<span class="token comment">// console.time(&#39;findContinuousChar1&#39;)</span>
<span class="token comment">// findContinuousChar1(str)</span>
<span class="token comment">// console.timeEnd(&#39;findContinuousChar1&#39;) // 219ms</span>

<span class="token comment">// console.time(&#39;findContinuousChar2&#39;)</span>
<span class="token comment">// findContinuousChar2(str)</span>
<span class="token comment">// console.timeEnd(&#39;findContinuousChar2&#39;) // 228ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5212\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5212\u91CD\u70B9" aria-hidden="true">#</a> \u5212\u91CD\u70B9</h2><ul><li>\u6CE8\u610F\u5B9E\u9645\u7684\u65F6\u95F4\u590D\u6742\u5EA6\uFF0C\u4E0D\u8981\u88AB\u4EE3\u7801\u6240\u8FF7\u60D1</li><li>\u53CC\u6307\u9488\u7684\u601D\u8DEF\uFF08\u5E38\u7528\u4E8E\u89E3\u51B3\u5D4C\u5957\u5FAA\u73AF\uFF09</li></ul>`,19);function t(p,o){return e}var i=n(a,[["render",t],["__file","11-\u8FDE\u7EED\u6700\u591A\u7684\u5B57\u7B26.html.vue"]]);export{i as default};
