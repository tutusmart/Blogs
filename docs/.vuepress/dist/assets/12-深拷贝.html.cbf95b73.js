import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u624B\u5199 JS \u6DF1\u62F7\u8D1D</p><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2><p>\u8FD9\u662F\u4E00\u4E2A\u5F88\u5E38\u89C1\u7684\u95EE\u9898\uFF0C\u770B\u4F3C\u4E5F\u5F88\u7B80\u5355\uFF0C\u4F46\u662F\u5982\u679C\u8003\u8651\u5230\u201C\u9AD8\u8D28\u91CF\u4EE3\u7801\u201D\u7684\u8981\u6C42\uFF0C\u5199\u8D77\u6765\u8FD8\u662F\u633A\u9EBB\u70E6\u7684\u3002<br> \u522B\u8BF4\u5199\u4EE3\u7801\uFF0C\u5C31\u672C\u8282\u6240\u6709\u7684\u60C5\u51B5\u4F60\u80FD\u5426\u8003\u8651\u5168\u9762\uFF0C\u8FD9\u90FD\u4E0D\u4E00\u5B9A\u3002</p><h2 id="\u9519\u8BEF\u7B54\u68481" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u7B54\u68481" aria-hidden="true">#</a> \u9519\u8BEF\u7B54\u68481</h2><p>\u4F7F\u7528 <code>JSON.stringify</code> \u548C <code>JSON.parse</code></p><ul><li>\u65E0\u6CD5\u8F6C\u6362\u51FD\u6570</li><li>\u65E0\u6CD5\u8F6C\u6362 <code>Map</code> <code>Set</code></li><li>\u65E0\u6CD5\u8F6C\u6362\u5FAA\u73AF\u5F15\u7528</li></ul><p>PS\uFF1A\u5176\u5B9E\u666E\u901A\u5BF9\u8C61\u4F7F\u7528 JSON API \u7684\u8FD0\u7B97\u901F\u5EA6\u5F88\u5FEB\uFF0C\u4F46\u529F\u80FD\u4E0D\u5168</p><h2 id="\u9519\u8BEF\u7B54\u68482" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u7B54\u68482" aria-hidden="true">#</a> \u9519\u8BEF\u7B54\u68482</h2><p>\u4F7F\u7528 <code>Object.assign</code> \u2014\u2014 \u8FD9\u6839\u672C\u5C31\u4E0D\u662F\u6DF1\u62F7\u8D1D\uFF0C\u662F\u6D45\u62F7\u8D1D \uFF01\uFF01\uFF01</p><h2 id="\u9519\u8BEF\u7B54\u68483" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u7B54\u68483" aria-hidden="true">#</a> \u9519\u8BEF\u7B54\u68483</h2><p>\u53EA\u8003\u8651\u4E86\u666E\u901A\u7684\u5BF9\u8C61\u548C\u6570\u7EC4</p><ul><li>\u65E0\u6CD5\u8F6C\u6362 <code>Map</code> <code>Set</code></li><li>\u65E0\u6CD5\u8F6C\u6362\u5FAA\u73AF\u5F15\u7528</li></ul><h2 id="\u6B63\u786E\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u6B63\u786E\u7B54\u6848" aria-hidden="true">#</a> \u6B63\u786E\u7B54\u6848</h2><p>\u53C2\u8003\u4EE3\u7801 clone-deep.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u6DF1\u62F7\u8D1D
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token comment">// /**</span>
<span class="token comment">//  * \u6DF1\u62F7\u8D1D - \u53EA\u8003\u8651\u4E86\u7B80\u5355\u7684\u6570\u7EC4\u3001\u5BF9\u8C61</span>
<span class="token comment">//  * @param obj obj</span>
<span class="token comment">//  */</span>
<span class="token comment">// function cloneDeep(obj: any) {</span>
<span class="token comment">//     if (typeof obj !== &#39;object&#39; || obj == null ) return obj</span>

<span class="token comment">//     let result: any</span>
<span class="token comment">//     if (obj instanceof Array) {</span>
<span class="token comment">//         result = []</span>
<span class="token comment">//     } else {</span>
<span class="token comment">//         result = {}</span>
<span class="token comment">//     }</span>

<span class="token comment">//     for (let key in obj) {</span>
<span class="token comment">//         if (obj.hasOwnProperty(key)) {            </span>
<span class="token comment">//             result[key] = cloneDeep(obj[key]) // \u9012\u5F52\u8C03\u7528</span>
<span class="token comment">//         }</span>
<span class="token comment">//     }</span>

<span class="token comment">//     return result</span>
<span class="token comment">// }</span>
<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const a: any = {</span>
<span class="token comment">//     set: new Set([10, 20, 30]),</span>
<span class="token comment">//     map: new Map([[&#39;x&#39;, 10], [&#39;y&#39;, 20]])</span>
<span class="token comment">// }</span>
<span class="token comment">// a.self = a</span>
<span class="token comment">// console.log( cloneDeep(a) ) // \u65E0\u6CD5\u5904\u7406 Map Set \u548C\u5FAA\u73AF\u5F15\u7528</span>

<span class="token doc-comment comment">/**
 * \u6DF1\u62F7\u8D1D
 * <span class="token keyword">@param</span> <span class="token parameter">obj</span> obj
 * <span class="token keyword">@param</span> <span class="token parameter">map</span> weakmap \u4E3A\u4E86\u907F\u514D\u5FAA\u73AF\u5F15\u7528
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> obj <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> <span class="token keyword">return</span> obj

    <span class="token comment">// \u907F\u514D\u5FAA\u73AF\u5F15\u7528</span>
    <span class="token keyword">const</span> objFromMap <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>objFromMap<span class="token punctuation">)</span> <span class="token keyword">return</span> objFromMap

    <span class="token keyword">let</span> target<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> target<span class="token punctuation">)</span>

    <span class="token comment">// Map</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        obj<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> k<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> map<span class="token punctuation">)</span>
            <span class="token keyword">const</span> k1 <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> map<span class="token punctuation">)</span>
            target<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>k1<span class="token punctuation">,</span> v1<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Set</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Set</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        obj<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>v <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> map<span class="token punctuation">)</span>
            target<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Array</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        target <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> map<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Object</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">const</span> val1 <span class="token operator">=</span> <span class="token function">cloneDeep</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> map<span class="token punctuation">)</span>
        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val1
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> target
<span class="token punctuation">}</span>

<span class="token comment">// // \u529F\u80FD\u6D4B\u8BD5</span>
<span class="token comment">// const a: any = {</span>
<span class="token comment">//     set: new Set([10, 20, 30]),</span>
<span class="token comment">//     map: new Map([[&#39;x&#39;, 10], [&#39;y&#39;, 20]]),</span>
<span class="token comment">//     info: {</span>
<span class="token comment">//         city: &#39;\u5317\u4EAC&#39;</span>
<span class="token comment">//     },</span>
<span class="token comment">//     fn: () =&gt; { console.info(100) }</span>
<span class="token comment">// }</span>
<span class="token comment">// a.self = a</span>
<span class="token comment">// console.log( cloneDeep(a) )</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>\u5FAA\u73AF\u5F15\u7528 Map Set \u51FD\u6570</p>`,19);function p(t,o){return e}var l=n(a,[["render",p],["__file","12-\u6DF1\u62F7\u8D1D.html.vue"]]);export{l as default};
