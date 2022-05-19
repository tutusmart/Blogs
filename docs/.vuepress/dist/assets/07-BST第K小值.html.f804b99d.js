import{_ as n}from"./\u4E8C\u53C9\u641C\u7D22\u6811.ab53d3ed.js";import{_ as s,c as a}from"./app.1c29f384.js";const e={},p=a('<h1 id="\u6C42\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7B2C-k-\u5C0F\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u6C42\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7B2C-k-\u5C0F\u7684\u503C" aria-hidden="true">#</a> \u6C42\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7B2C K \u5C0F\u7684\u503C</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u4E00\u4E2A\u4E8C\u53C9\u641C\u7D22\u6811\uFF0C\u6C42\u5176\u4E2D\u7684\u7B2C K \u5C0F\u7684\u8282\u70B9\u7684\u503C\u3002 \u5982\u4E0B\u56FE\uFF0C\u7B2C 3 \u5C0F\u7684\u8282\u70B9\u662F <code>4</code></p><p><img src="'+n+`" alt=""></p><h2 id="\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811" aria-hidden="true">#</a> \u4E8C\u53C9\u6811</h2><p>\u6811\uFF0C\u5927\u5BB6\u5E94\u8BE5\u90FD\u77E5\u9053\uFF0C\u5982\u524D\u7AEF\u5E38\u89C1\u7684 DOM \u6811\u3001vdom \u7ED3\u6784\u3002</p><p>\u4E8C\u53C9\u6811\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u6BCF\u4E2A\u8282\u70B9\u6700\u591A\u80FD\u6709\u4E24\u4E2A\u5B50\u8282\u70B9\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// \u6216\u5176\u4ED6\u7C7B\u578B</span>
    left<span class="token operator">?</span><span class="token operator">:</span> ITreeNode
    right<span class="token operator">?</span><span class="token operator">:</span> ITreeNode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u53C9\u6811\u7684\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u7684\u904D\u5386" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u7684\u904D\u5386</h2><ul><li>\u524D\u5E8F\u904D\u5386\uFF1Aroot -&gt; left -&gt; right</li><li>\u4E2D\u5E8F\u904D\u5386\uFF1Aleft -&gt; root -&gt; right</li><li>\u540E\u5E8F\u904D\u5386\uFF1Aleft -&gt; right -&gt; root</li></ul><h2 id="\u4E8C\u53C9\u641C\u7D22\u6811-bst" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u641C\u7D22\u6811-bst" aria-hidden="true">#</a> \u4E8C\u53C9\u641C\u7D22\u6811 BST</h2><ul><li>\u5DE6\u8282\u70B9\uFF08\u5305\u62EC\u5176\u540E\u4EE3\uFF09 &lt;= \u6839\u8282\u70B9</li><li>\u53F3\u8282\u70B9\uFF08\u5305\u62EC\u5176\u540E\u4EE3\uFF09 &gt;= \u6839\u8282\u70B9</li></ul><p>\u601D\u8003\uFF1ABST \u5B58\u5728\u7684\u610F\u4E49\u662F\u4EC0\u4E48\uFF1F\u2014\u2014 \u540E\u9762\u89E3\u91CA</p><h2 id="\u5206\u6790\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u9898\u76EE" aria-hidden="true">#</a> \u5206\u6790\u9898\u76EE</h2><p>\u6839\u636E BST \u7684\u7279\u70B9\uFF0C\u4E2D\u5E8F\u904D\u5386\u7684\u7ED3\u679C\uFF0C\u6B63\u597D\u662F\u6309\u7167\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F\u7684\u7ED3\u679C\u3002<br> \u6240\u4EE5\uFF0C\u4E2D\u5E8F\u904D\u5386\uFF0C\u6C42\u6570\u7EC4\u7684 <code>arr[k]</code> \u5373\u53EF\u3002</p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u4EE3\u7801 binary-search-tree-k-value.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u4E8C\u53C9\u641C\u7D22\u6811
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token builtin">number</span>
    left<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
    right<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token doc-comment comment">/**
 * \u4E8C\u53C9\u6811\u524D\u5E8F\u904D\u5386
 * <span class="token keyword">@param</span> <span class="token parameter">node</span> tree node
 */</span>
<span class="token keyword">function</span> <span class="token function">preOrderTraverse</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token comment">// console.log(node.value)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token function">preOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token function">preOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4E8C\u53C9\u6811\u4E2D\u5E8F\u904D\u5386
 * <span class="token keyword">@param</span> <span class="token parameter">node</span> tree node
 */</span>
<span class="token keyword">function</span> <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token comment">// console.log(node.value)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4E8C\u53C9\u6811\u540E\u5E8F\u904D\u5386
 * <span class="token keyword">@param</span> <span class="token parameter">node</span> tree node
 */</span>
<span class="token keyword">function</span> <span class="token function">postOrderTraverse</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ITreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token function">postOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token function">postOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token comment">// console.log(node.value)</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5BFB\u627E BST \u91CC\u7684\u7B2C K \u5C0F\u503C
 * <span class="token keyword">@param</span> <span class="token parameter">node</span> tree node
 * <span class="token keyword">@param</span> <span class="token parameter">k</span> \u7B2C\u51E0\u4E2A\u503C
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getKthValue</span><span class="token punctuation">(</span>node<span class="token operator">:</span> ITreeNode<span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
    <span class="token function">inOrderTraverse</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
    <span class="token keyword">return</span> arr<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bst<span class="token operator">:</span> ITreeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    left<span class="token operator">:</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    right<span class="token operator">:</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        left<span class="token operator">:</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        right<span class="token operator">:</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            left<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
            right<span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// preOrderTraverse(bst)</span>
<span class="token comment">// inOrderTraverse(bst)</span>
<span class="token comment">// postOrderTraverse(bst)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getKthValue</span><span class="token punctuation">(</span>bst<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5212\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5212\u91CD\u70B9" aria-hidden="true">#</a> \u5212\u91CD\u70B9</h2><ul><li>\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u7279\u70B9</li><li>\u524D\u5E8F\u3001\u4E2D\u5E8F\u3001\u540E\u5E8F\u904D\u5386</li></ul>`,20);function t(o,l){return p}var r=s(e,[["render",t],["__file","07-BST\u7B2CK\u5C0F\u503C.html.vue"]]);export{r as default};
