import{_ as n,c as s}from"./app.1c29f384.js";var a="/../../assets/\u90E8\u95E8-\u6811.ead28a18.png";const p={},e=s(`<h1 id="\u6570\u7EC4\u8F6C\u6811" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u8F6C\u6811" aria-hidden="true">#</a> \u6570\u7EC4\u8F6C\u6811</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u5B9A\u4E49\u4E00\u4E2A <code>convert</code> \u51FD\u6570\uFF0C\u5C06\u4EE5\u4E0B\u6570\u7EC4\u8F6C\u6362\u4E3A\u6811\u7ED3\u6784\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8A&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 0 \u4EE3\u8868\u9876\u7EA7\u8282\u70B9\uFF0C\u65E0\u7236\u8282\u70B9</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8B&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8C&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8D&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8E&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8F&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+a+`" alt=""></p><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2><p>\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u6570\u636E\u7ED3\u6784</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    children<span class="token operator">?</span><span class="token operator">:</span> ITreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u904D\u5386\u6570\u7EC4\uFF0C\u9488\u5BF9\u6BCF\u4E2A\u5143\u7D20</p><ul><li>\u751F\u6210 tree node</li><li>\u627E\u5230 parentNode \u5E76\u52A0\u5165\u5230\u5B83\u7684 <code>children</code></li></ul><p>\u627E parentNode \u65F6\uFF0C\u9700\u8981\u6839\u636E <code>id</code> \u80FD<strong>\u5C3D\u5FEB</strong>\u627E\u5230 tree node<br> \u9700\u8981\u4E00\u4E2A map \uFF0C\u8FD9\u6837\u65F6\u95F4\u590D\u6742\u5EA6\u662F <code>O(1)</code> \u3002\u5426\u5219\u5C31\u9700\u8981\u904D\u5386\u67E5\u627E\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u9AD8\u3002</p><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><p>\u4EE3\u7801\u53C2\u8003 convert-arr-tree.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> array to tree
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token keyword">interface</span> <span class="token class-name">IArrayItem</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    parentId<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    children<span class="token operator">?</span><span class="token operator">:</span> ITreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">convert</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> IArrayItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7528\u4E8E id \u548C treeNode \u7684\u6620\u5C04</span>
    <span class="token keyword">const</span> idToTreeNode<span class="token operator">:</span> Map<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">,</span> ITreeNode<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">null</span>

    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> parentId <span class="token punctuation">}</span> <span class="token operator">=</span> item

        <span class="token comment">// \u5B9A\u4E49 tree node \u5E76\u52A0\u5165 map</span>
        <span class="token keyword">const</span> treeNode<span class="token operator">:</span> ITreeNode <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> name <span class="token punctuation">}</span>
        idToTreeNode<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> treeNode<span class="token punctuation">)</span>

        <span class="token comment">// \u627E\u5230 parentNode \u5E76\u52A0\u5165\u5230\u5B83\u7684 children</span>
        <span class="token keyword">const</span> parentNode <span class="token operator">=</span> idToTreeNode<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>parentId<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parentNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>parentNode<span class="token punctuation">.</span>children <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> parentNode<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            parentNode<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u627E\u5230\u6839\u8282\u70B9</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parentId <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> root <span class="token operator">=</span> treeNode
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> root
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8A&#39;</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 0 \u4EE3\u8868\u9876\u7EA7\u8282\u70B9\uFF0C\u65E0\u7236\u8282\u70B9</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8B&#39;</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8C&#39;</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8D&#39;</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8E&#39;</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u90E8\u95E8F&#39;</span><span class="token punctuation">,</span> parentId<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token function">convert</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p>\u8FD9\u4E24\u79CD\u6570\u636E\u7ED3\u6784\u5F88\u50CF MySQL vs Mongodb \uFF0C\u4E00\u4E2A\u5173\u7CFB\u578B\uFF0C\u4E00\u4E2A\u6587\u6863\u578B</p>`,16);function t(o,c){return e}var r=n(p,[["render",t],["__file","01-\u6570\u7EC4\u8F6C\u6811.html.vue"]]);export{r as default};
