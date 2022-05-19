import{_ as n,c as s}from"./app.1c29f384.js";var a="/../../assets/react-fiber-\u94FE\u8868.f10d1e68.png";const e={},p=s('<h1 id="\u53CD\u8F6C\u5355\u5411\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u53CD\u8F6C\u5355\u5411\u94FE\u8868" aria-hidden="true">#</a> \u53CD\u8F6C\u5355\u5411\u94FE\u8868</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165\u4E00\u4E2A\u5355\u5411\u94FE\u8868\u7684\u5934\u8282\u70B9\uFF0C\u53CD\u8F6C\u8BE5\u94FE\u8868\uFF0C\u5E76\u8F93\u51FA\u53CD\u8F6C\u4E4B\u540E\u7684\u5934\u8282\u70B9</p><h2 id="\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a> \u94FE\u8868</h2><p>\u94FE\u8868\u662F\u4E00\u79CD\u7269\u7406\u7ED3\u6784\uFF08\u975E\u903B\u8F91\u7ED3\u6784\uFF09\uFF0C\u662F\u6570\u7EC4\u7684\u8865\u5145\u3002<br> \u6570\u7EC4\u9700\u8981\u4E00\u6BB5\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u800C\u94FE\u8868\u4E0D\u9700\u8981\u3002</p><p>\u6570\u636E\u7ED3\u6784</p><ul><li>\u5355\u5411\u94FE\u8868 <code>{ value, next }</code></li><li>\u53CC\u5411\u94FE\u8868 <code>{ value, prev, next }</code></li></ul><p>\u4E24\u8005\u5BF9\u6BD4</p><ul><li>\u94FE\u8868\uFF1A\u67E5\u8BE2\u6162\uFF0C\u65B0\u589E\u548C\u5220\u9664\u8F83\u5FEB</li><li>\u6570\u7EC4\uFF1A\u67E5\u8BE2\u5FEB\uFF0C\u65B0\u589E\u548C\u5220\u9664\u8F83\u6162</li></ul><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h2><p>React Fiber \u5C31\u628A vdom \u6811\u8F6C\u6362\u4E3A\u4E00\u4E2A\u94FE\u8868\uFF0C\u8FD9\u6837\u624D\u6709\u53EF\u80FD\u968F\u65F6\u4E2D\u65AD\u3001\u518D\u7EE7\u7EED\u8FDB\u884C\u3002<br> \u5982\u679C vdom \u662F\u6811\uFF0C\u90A3\u53EA\u80FD\u9012\u5F52\u4E00\u6B21\u6027\u6267\u884C\u5B8C\u6210\uFF0C\u4E2D\u95F4\u65E0\u6CD5\u65AD\u5F00\u3002</p><p><img src="'+a+`" alt=""></p><h2 id="\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a> \u5206\u6790</h2><p>\u53CD\u8F6C\u94FE\u8868\uFF0C\u753B\u56FE\u5F88\u597D\u7406\u89E3\u3002\u6CA1\u6709\u6377\u5F84\uFF0C\u904D\u5386\u4E00\u8FB9\uFF0C\u91CD\u65B0\u8BBE\u7F6E next \u6307\u5411\u5373\u53EF\u3002<br> \u4F46\u5B9E\u9645\u5199\u4EE3\u7801\uFF0C\u5374\u5E76\u4E0D\u7B80\u5355\uFF0C\u5F88\u5BB9\u6613\u9020\u6210 nextNode \u4E22\u5931\u3002</p><p>\u56E0\u6B64\uFF0C\u904D\u5386\u8FC7\u7A0B\u4E2D\uFF0C\u81F3\u5C11\u8981\u5B58\u50A8 3 \u4E2A\u6307\u9488 <code>prevNode</code> <code>curNode</code> <code>nextNode</code></p><p>\u65F6\u95F4\u590D\u6742\u5EA6 <code>O(n)</code></p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u53C2\u8003 reverse-link-list.ts</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span> \u53CD\u8F6C\u5355\u5411\u94FE\u8868
 * <span class="token keyword">@author</span> \u53CC\u8D8A\u8001\u5E08
 */</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ILinkListNode</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token builtin">number</span>
    next<span class="token operator">?</span><span class="token operator">:</span> ILinkListNode
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u53CD\u8F6C\u5355\u5411\u94FE\u8868\uFF0C\u5E76\u8FD4\u56DE\u53CD\u8F6C\u4E4B\u540E\u7684 head node
 * <span class="token keyword">@param</span> <span class="token parameter">listNode</span> list head node
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>listNode<span class="token operator">:</span> ILinkListNode<span class="token punctuation">)</span><span class="token operator">:</span> ILinkListNode <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9A\u4E49\u4E09\u4E2A\u6307\u9488</span>
    <span class="token keyword">let</span> prevNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token keyword">let</span> nextNode<span class="token operator">:</span> ILinkListNode <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> listNode

    <span class="token comment">// \u4EE5 nextNode \u4E3A\u4E3B\uFF0C\u904D\u5386\u94FE\u8868</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u5220\u6389 next \uFF0C\u9632\u6B62\u5FAA\u73AF\u5F15\u7528</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">delete</span> curNode<span class="token punctuation">.</span>next
        <span class="token punctuation">}</span>

        <span class="token comment">// \u53CD\u8F6C\u6307\u9488</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>curNode <span class="token operator">&amp;&amp;</span> prevNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curNode<span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode
        <span class="token punctuation">}</span>

        <span class="token comment">// \u6574\u4F53\u5411\u540E\u79FB\u52A8\u6307\u9488</span>
        prevNode <span class="token operator">=</span> curNode
        curNode <span class="token operator">=</span> nextNode
        nextNode <span class="token operator">=</span> nextNode<span class="token operator">?.</span>next
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6700\u540E\u4E00\u4E2A\u7684\u8865\u5145\uFF1A\u5F53 nextNode \u7A7A\u65F6\uFF0C\u6B64\u65F6 curNode \u5C1A\u672A\u8BBE\u7F6E next</span>
    curNode<span class="token operator">!</span><span class="token punctuation">.</span>next <span class="token operator">=</span> prevNode

    <span class="token keyword">return</span> curNode<span class="token operator">!</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u6839\u636E\u6570\u7EC4\u521B\u5EFA\u5355\u5411\u94FE\u8868
 * <span class="token keyword">@param</span> <span class="token parameter">arr</span> number arr
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createLinkList</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> ILinkListNode <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;arr is empty&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> curNode<span class="token operator">:</span> ILinkListNode <span class="token operator">=</span> <span class="token punctuation">{</span>
        value<span class="token operator">:</span> arr<span class="token punctuation">[</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> curNode

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curNode <span class="token operator">=</span> <span class="token punctuation">{</span>
            value<span class="token operator">:</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>
            next<span class="token operator">:</span> curNode
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> curNode
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">createLinkList</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;list:&#39;</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span>

<span class="token keyword">const</span> list1 <span class="token operator">=</span> <span class="token function">reverseLinkList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;list1:&#39;</span><span class="token punctuation">,</span> list1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5212\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5212\u91CD\u70B9" aria-hidden="true">#</a> \u5212\u91CD\u70B9</h2><ul><li>\u94FE\u8868</li><li>\u94FE\u8868\u548C\u6570\u7EC4\u7684\u4E0D\u540C <ul><li>\u5185\u5B58\u5360\u7528</li><li>\u67E5\u8BE2\u3001\u65B0\u589E\u3001\u5220\u9664\u7684\u6548\u7387</li></ul></li><li>\u5982\u4F55\u4FDD\u8BC1 nextNode \u4E0D\u4E22\u5931</li></ul><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p>\u601D\u8003\uFF1A\u7528\u6570\u7EC4\u548C\u94FE\u8868\u5B9E\u73B0\u961F\u5217\uFF0C\u54EA\u4E2A\u6027\u80FD\u66F4\u597D\uFF1F</p>`,23);function t(o,i){return p}var l=n(e,[["render",t],["__file","04-\u53CD\u8F6C\u94FE\u8868.html.vue"]]);export{l as default};
