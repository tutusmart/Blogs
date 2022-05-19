import{_ as n,c as s}from"./app.1c29f384.js";const a={},e=s(`<h1 id="\u624B\u5199-new" tabindex="-1"><a class="header-anchor" href="#\u624B\u5199-new" aria-hidden="true">#</a> \u624B\u5199 new</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>new \u4E00\u4E2A\u5BF9\u8C61\u5185\u90E8\u53D1\u751F\u4E86\u4EC0\u4E48\uFF0C\u624B\u5199\u4EE3\u7801\u8868\u793A</p><h2 id="class-\u662F\u8BED\u6CD5\u7CD6" tabindex="-1"><a class="header-anchor" href="#class-\u662F\u8BED\u6CD5\u7CD6" aria-hidden="true">#</a> class \u662F\u8BED\u6CD5\u7CD6</h2><p>ES6 \u4F7F\u7528 class \u4EE3\u66FF\u4E86 ES6 \u7684\u6784\u9020\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&#39;\u5317\u4EAC&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">&#39;\u53CC\u8D8A&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E class \u5C31\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u5B83\u672C\u8D28\u4E0A\u548C\u6784\u9020\u51FD\u6570\u662F\u4E00\u6837\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>city <span class="token operator">=</span> <span class="token string">&#39;\u5317\u4EAC&#39;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u6CE8\u610F\uFF0C\u8FD9\u91CC\u4E0D\u53EF\u4EE5\u7528\u7BAD\u5934\u51FD\u6570</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
<span class="token punctuation">}</span>
<span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token string">&#39;\u53CC\u8D8A&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="new-\u4E00\u4E2A\u5BF9\u8C61\u7684\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#new-\u4E00\u4E2A\u5BF9\u8C61\u7684\u8FC7\u7A0B" aria-hidden="true">#</a> new \u4E00\u4E2A\u5BF9\u8C61\u7684\u8FC7\u7A0B</h2><ul><li>\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61 obj\uFF0C\u7EE7\u627F\u6784\u9020\u51FD\u6570\u7684\u539F\u578B</li><li>\u6267\u884C\u6784\u9020\u51FD\u6570\uFF08\u5C06 obj \u4F5C\u4E3A this\uFF09</li><li>\u8FD4\u56DE obj</li></ul><h2 id="\u5B9E\u73B0-new" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0-new" aria-hidden="true">#</a> \u5B9E\u73B0 new</h2><p>\u4EE3\u7801\u53C2\u8003 new.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u5B9E\u73B0 new
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">customNew</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>constructor<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u7EE7\u627F constructor \u7684\u539F\u578B</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
    <span class="token comment">// 2. \u5C06 obj \u4F5C\u4E3A this \uFF0C\u6267\u884C constructor \uFF0C\u4F20\u5165\u53C2\u6570</span>
    <span class="token function">constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
    <span class="token comment">// 3. \u8FD4\u56DE obj</span>
    <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>

<span class="token comment">// class Foo {</span>
<span class="token comment">//     // \u5C5E\u6027</span>
<span class="token comment">//     name: string</span>
<span class="token comment">//     city: string</span>
<span class="token comment">//     n: number</span>

<span class="token comment">//     constructor(name: string, n: number) {</span>
<span class="token comment">//         this.name = name</span>
<span class="token comment">//         this.city = &#39;\u5317\u4EAC&#39;</span>
<span class="token comment">//         this.n = n</span>
<span class="token comment">//     }</span>

<span class="token comment">//     getName() {</span>
<span class="token comment">//         return this.name</span>
<span class="token comment">//     }</span>
<span class="token comment">// }</span>

<span class="token comment">// const f = new Foo(&#39;\u53CC\u8D8A&#39;, 100)</span>
<span class="token comment">// // const f = customNew&lt;Foo&gt;(Foo, &#39;\u53CC\u8D8A&#39;, 100)</span>
<span class="token comment">// console.info(f)</span>
<span class="token comment">// console.info(f.getName())</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9762\u8BD5\u8FDE\u73AF\u95EE-object-create-\u548C-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u8FDE\u73AF\u95EE-object-create-\u548C-\u7684\u533A\u522B" aria-hidden="true">#</a> \u9762\u8BD5\u8FDE\u73AF\u95EE\uFF1AObject.create \u548C {} \u7684\u533A\u522B</h2><p><code>Object.create</code> \u53EF\u4EE5\u6307\u5B9A\u539F\u578B\uFF0C\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u3002<br><code>{}</code> \u5C31\u76F8\u5F53\u4E8E <code>Object.create(Object.prototype)</code> \uFF0C\u5373\u6839\u636E <code>Object</code> \u539F\u578B\u7684\u7A7A\u5BF9\u8C61\u3002</p><p>PS\uFF1A\u5BF9 JS \u539F\u578B\u548C\u539F\u578B\u94FE\u8FD8\u4E0D\u4E86\u89E3\u7684\u9700\u8981\u6293\u7D27\u6076\u8865\u3002</p>`,16);function t(c,o){return e}var i=n(a,[["render",t],["__file","04-\u624B\u5199new.html.vue"]]);export{i as default};
