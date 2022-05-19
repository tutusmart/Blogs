import{_ as n,c as a}from"./app.1c29f384.js";var s="/../../assets/async-defer.7b783e0c.png";const t={},p=a('<h1 id="defer-\u548C-async" tabindex="-1"><a class="header-anchor" href="#defer-\u548C-async" aria-hidden="true">#</a> defer \u548C async</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p><code>&lt;script&gt;</code> \u7684 defer \u548C async \u5C5E\u6027\u6709\u4F55\u533A\u522B</p><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><ul><li><code>&lt;script src=&quot;xxx.js&quot;&gt;</code> \u5F53\u89E3\u6790\u5230\u8BE5\u6807\u7B7E\u65F6\uFF0C\u4F1A\u6682\u505C html \u89E3\u6790\uFF0C\u5E76\u89E6\u53D1 js \u4E0B\u8F7D\u3001\u6267\u884C\u3002\u7136\u540E\u518D\u7EE7\u7EED html \u89E3\u6790\u3002</li><li><code>&lt;script async src=&quot;xxx.js&quot;&gt;</code> js \u4E0B\u8F7D\u548C html \u89E3\u6790\u53EF\u5E76\u884C\uFF0C\u4E0B\u8F7D\u5B8C\u4E4B\u540E\u6682\u505C html \u89E3\u6790\uFF0C\u6267\u884C js \u3002\u7136\u540E\u518D\u7EE7\u7EED html \u89E3\u6790\u3002</li><li><code>&lt;script defer src=&quot;xxx.js&quot;&gt;</code> js \u4E0B\u8F7D\u548C html \u89E3\u6790\u53EF\u5E76\u884C\u3002\u7B49\u5F85 html \u89E3\u6790\u5B8C\u4E4B\u540E\u518D\u6267\u884C js \u3002</li></ul><p><img src="'+s+`" alt=""></p><h2 id="\u8FDE\u73AF\u95EE-preload-prefetch-dns-prefetch-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u73AF\u95EE-preload-prefetch-dns-prefetch-\u7684\u533A\u522B" aria-hidden="true">#</a> \u8FDE\u73AF\u95EE\uFF1Apreload prefetch dns-prefetch \u7684\u533A\u522B</h2><ul><li>preload \u8868\u793A\u8D44\u6E90\u5728\u5F53\u524D\u9875\u9762\u4F7F\u7528\uFF0C\u6D4F\u89C8\u5668\u4F1A<strong>\u4F18\u5148</strong>\u52A0\u8F7D</li><li>prefetch \u8868\u793A\u8D44\u6E90\u53EF\u80FD\u5728<strong>\u672A\u6765\u7684\u9875\u9762</strong>\uFF08\u5982\u901A\u8FC7\u94FE\u63A5\u6253\u5F00\u4E0B\u4E00\u4E2A\u9875\u9762\uFF09\u4F7F\u7528\uFF0C\u6D4F\u89C8\u5668\u5C06\u5728<strong>\u7A7A\u95F2\u65F6</strong>\u52A0\u8F7D</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>JS and CSS preload<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- preload --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- prefetch --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prefetch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>other.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- \u5F15\u7528 css --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- \u5F15\u7528 js --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">defer</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDE\u73AF\u95EE-dns-prefetch-\u548C-preconnect-\u6709\u4EC0\u4E48\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u73AF\u95EE-dns-prefetch-\u548C-preconnect-\u6709\u4EC0\u4E48\u4F5C\u7528" aria-hidden="true">#</a> \u8FDE\u73AF\u95EE\uFF1Adns-prefetch \u548C preconnect \u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</h2><p>\u4E00\u4E2A http \u8BF7\u6C42\uFF0C\u7B2C\u4E00\u6B65\u5C31\u662F DNS \u89E3\u6790\u5F97\u5230 IP \uFF0C\u7136\u540E\u8FDB\u884C TCP \u8FDE\u63A5\u3002\u8FDE\u63A5\u6210\u529F\u540E\u518D\u53D1\u9001\u8BF7\u6C42\u3002</p><p>dns-prefetch \u5373 DNS \u9884\u83B7\u53D6\uFF0Cpreconnect \u5373\u9884\u8FDE\u63A5\u3002<br> \u5F53\u7F51\u9875\u8BF7\u6C42<strong>\u7B2C\u4E09\u65B9</strong>\u8D44\u6E90\u65F6\uFF0C\u53EF\u4EE5\u63D0\u524D\u8FDB\u884C DNS \u67E5\u8BE2\u3001TCP \u8FDE\u63A5\uFF0C\u4EE5\u51CF\u5C11\u8BF7\u6C42\u65F6\u7684\u65F6\u95F4\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dns-prefetch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://fonts.gstatic.com/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preconnect<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://fonts.gstatic.com/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function e(c,l){return p}var u=n(t,[["render",e],["__file","06-defer\u548Casync.html.vue"]]);export{u as default};
