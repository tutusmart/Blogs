import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="curry-add" tabindex="-1"><a class="header-anchor" href="#curry-add" aria-hidden="true">#</a> curry add</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u5199\u4E00\u4E2A <code>curry</code> \u51FD\u6570\uFF0C\u53EF\u4EE5\u628A\u5176\u4ED6\u51FD\u6570\u8F6C\u4E3A curry \u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c <span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>

<span class="token keyword">const</span> curryAdd <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span>add<span class="token punctuation">)</span>
<span class="token function">curryAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u89E3\u7B54" aria-hidden="true">#</a> \u89E3\u7B54</h2><p>\u4EE3\u7801\u53C2\u8003 curry.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> curry add
 * <span class="token keyword">@author</span> \u53CC\u8D8A
 */</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span>fn<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fnArgsLength <span class="token operator">=</span> fn<span class="token punctuation">.</span>length <span class="token comment">// \u4F20\u5165\u51FD\u6570\u7684\u53C2\u6570\u957F\u5EA6</span>
    <span class="token keyword">let</span> args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">// ts \u4E2D\uFF0C\u72EC\u7ACB\u7684\u51FD\u6570\uFF0Cthis \u9700\u8981\u58F0\u660E\u7C7B\u578B</span>
    <span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token operator">...</span>newArgs<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u79EF\u7D2F\u53C2\u6570</span>
        args <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token operator">...</span>args<span class="token punctuation">,</span>
            <span class="token operator">...</span>newArgs
        <span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> fnArgsLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u53C2\u6570\u4E0D\u591F\uFF0C\u8FD4\u56DE\u51FD\u6570</span>
            <span class="token keyword">return</span> calc
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u53C2\u6570\u591F\u4E86\uFF0C\u8FD4\u56DE\u6267\u884C\u7ED3\u679C</span>
            <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> fnArgsLength<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> calc
<span class="token punctuation">}</span>

<span class="token comment">// function add(a: number, b: number, c: number): number {</span>
<span class="token comment">//     return a + b + c</span>
<span class="token comment">// }</span>
<span class="token comment">// // add(10, 20, 30) // 60</span>

<span class="token comment">// const curryAdd = curry(add)</span>
<span class="token comment">// const res = curryAdd(10)(20)(30) // 60</span>
<span class="token comment">// console.info(res)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li>\u5224\u65AD\u53C2\u6570\u957F\u5EA6</li><li>\u4E2D\u95F4\u6001\u8FD4\u56DE\u51FD\u6570\uFF0C\u6700\u540E\u8FD4\u56DE\u6267\u884C\u7ED3\u679C</li><li>\u5982\u7528 this \u614E\u7528\u7BAD\u5934\u51FD\u6570</li></ul>`,9);function t(p,c){return e}var i=n(a,[["render",t],["__file","07-curry-add.html.vue"]]);export{i as default};
