import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217" aria-hidden="true">#</a> \u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u8BF7\u7528\u4E24\u4E2A\u6808\uFF0C\u6765\u5B9E\u73B0\u961F\u5217\u7684\u529F\u80FD\uFF0C\u5B9E\u73B0\u529F\u80FD <code>add</code> <code>delete</code> <code>length</code> \u3002</p><h2 id="\u961F\u5217-queue" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217-queue" aria-hidden="true">#</a> \u961F\u5217 Queue</h2><p>\u6808\uFF0C\u5148\u8FDB\u540E\u51FA</p><p>\u961F\u5217\uFF0C\u5148\u8FDB\u5148\u51FA\uFF0CAPI \u5305\u62EC</p><ul><li>add</li><li>delete</li><li>length</li></ul><p>\u5E38\u89C1\u7684\u201C\u6D88\u606F\u961F\u5217\u201D\u5C31\u662F\u961F\u5217\u7684\u4E00\u79CD\u5E94\u7528\u573A\u666F</p><ul><li>A \u7CFB\u7EDF\u5411 B \u7CFB\u7EDF\u6301\u7EED\u53D1\u9001\u6D77\u91CF\u7684\u6D88\u606F</li><li>A \u7CFB\u7EDF\u5148\u628A\u4E00\u6761\u4E00\u6761\u6D88\u606F\u653E\u5728\u4E00\u4E2A queue</li><li>B \u7CFB\u7EDF\u518D\u4ECE queue \u4E2D\u9010\u6761\u6D88\u8D39\uFF08\u6309\u987A\u5E8F\uFF0C\u5148\u8FDB\u5148\u51FA\uFF09</li></ul><h2 id="\u903B\u8F91\u7ED3\u6784\u548C\u7269\u7406\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u903B\u8F91\u7ED3\u6784\u548C\u7269\u7406\u7ED3\u6784" aria-hidden="true">#</a> \u903B\u8F91\u7ED3\u6784\u548C\u7269\u7406\u7ED3\u6784</h2><p>\u961F\u5217\u548C\u6808\u4E00\u6837\uFF0C\u662F\u4E00\u79CD\u903B\u8F91\u7ED3\u6784\u3002\u5B83\u53EF\u4EE5\u7528\u6570\u7EC4\u3001\u94FE\u8868\u7B49\u5B9E\u73B0\u3002<br> \u601D\u8003\uFF1A\u7528\u6570\u7EC4\u5B9E\u73B0\u961F\u5217\uFF0C\u6027\u80FD\u4F1A\u600E\u6837 \u2014\u2014 add \u600E\u6837\uFF1Fdelete \u600E\u6837\uFF1F</p><p>\u590D\u6742\u573A\u666F\u4E0B\uFF08\u5982\u6D77\u91CF\u6570\u636E\uFF0C\u5185\u5B58\u4E0D\u591F\u7528\uFF09\u9700\u8981\u5355\u72EC\u8BBE\u8BA1\u3002</p><h2 id="\u9898\u76EE\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u5206\u6790" aria-hidden="true">#</a> \u9898\u76EE\u5206\u6790</h2><p>\u53EF\u753B\u56FE\u5206\u6790\uFF1A\u53C2\u8003\u89C6\u9891\u8BB2\u89E3</p><ul><li>\u961F\u5217 add <ul><li>\u5F80 stack1 push \u5143\u7D20</li></ul></li><li>\u961F\u5217 delete <ul><li>\u5C06 stack1 \u6240\u6709\u5143\u7D20 pop \u51FA\u6765\uFF0Cpush \u5230 stack2</li><li>\u5C06 stack2 \u6267\u884C\u4E00\u6B21 pop</li><li>\u518D\u5C06 stack2 \u6240\u6709\u5143\u7D20 pop \u51FA\u6765\uFF0Cpush \u8FDB stack1</li></ul></li></ul><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u53C2\u8003 two-stacks-one-queue.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u4E24\u4E2A\u6808 - \u4E00\u4E2A\u961F\u5217
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyQueue</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> stack1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">private</span> stack2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token doc-comment comment">/**
     * \u5165\u961F
     * <span class="token keyword">@param</span> <span class="token parameter">n</span> n
     */</span>
    <span class="token function">add</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u51FA\u961F
     */</span>
    <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> res

        <span class="token keyword">const</span> stack1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack1
        <span class="token keyword">const</span> stack2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack2

        <span class="token comment">// \u5C06 stack1 \u6240\u6709\u5143\u7D20\u79FB\u52A8\u5230 stack2 \u4E2D</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>stack1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> n <span class="token operator">=</span> stack1<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// stack2 pop</span>
        res <span class="token operator">=</span> stack2<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment">// \u5C06 stack2 \u6240\u6709\u5143\u7D20\u201C\u8FD8\u7ED9\u201Dstack1</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>stack2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> n <span class="token operator">=</span> stack2<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> res <span class="token operator">||</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">get</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack1<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const q = new MyQueue()</span>
<span class="token comment">// q.add(100)</span>
<span class="token comment">// q.add(200)</span>
<span class="token comment">// q.add(300)</span>
<span class="token comment">// console.info(q.length)</span>
<span class="token comment">// console.info(q.delete())</span>
<span class="token comment">// console.info(q.length)</span>
<span class="token comment">// console.info(q.delete())</span>
<span class="token comment">// console.info(q.length)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5212\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5212\u91CD\u70B9" aria-hidden="true">#</a> \u5212\u91CD\u70B9</h2><ul><li>\u961F\u5217</li><li>\u753B\u56FE\uFF0C\u5E2E\u52A9\u68B3\u7406\u89E3\u9898\u601D\u8DEF</li></ul>`,20);function t(p,c){return e}var i=n(a,[["render",t],["__file","03-\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u4E00\u4E2A\u961F\u5217.html.vue"]]);export{i as default};
