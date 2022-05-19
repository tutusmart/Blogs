<template><h1 id="_1px-宽度" tabindex="-1"><a class="header-anchor" href="#_1px-宽度" aria-hidden="true">#</a> 1px 宽度</h1>
<p>注：文本小节</p>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>Retina 屏 1px 像素问题，如何实现</p>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>该问题通常用于考察你是否做过移动端 h5 项目。<br>
如果你能知道这个问题，并且答出来，知道前因后果，证明你有过 h5 开发经验。<br>
否则就说明你没有 h5 的任何开发经验，尤其是你如果都不知道这个事情，那就更加说明这一点。</p>
<h2 id="普通的-1px" tabindex="-1"><a class="header-anchor" href="#普通的-1px" aria-hidden="true">#</a> 普通的 <code v-pre>1px</code></h2>
<p>如果仅仅使用 css 的 <code v-pre>1px</code> 来设置 border ，那可能会出现比较粗的情况。<br>
因为，有些手机屏幕的 DPR = 2 ，即 <code v-pre>1px</code> 它会用两个物理像素来显示，就粗了。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#box</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图，上面是微信 app 的 border ，下面是 <code v-pre>1px</code> 的 border ，有明显的区别。显得很粗糙，很不精致，设计师不会允许这样的页面发布上线的。</p>
<p><img src="@source/fe/知识广度/img/border-1.png" alt=""></p>
<p>PS：你不能直接写 <code v-pre>0.5px</code> ，浏览器兼容性不好，渲染出来可能还是 <code v-pre>1px</code> 的效果。</p>
<h2 id="使用-transform-缩小" tabindex="-1"><a class="header-anchor" href="#使用-transform-缩小" aria-hidden="true">#</a> 使用 <code v-pre>transform</code> 缩小</h2>
<p>我们可以使用 css 伪类 + <code v-pre>transform</code> 来优化这一问题。即把默认的 <code v-pre>1px</code> 宽度给压缩 0.5 倍。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#box</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#box::before</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #d9d9d9<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图，上面是微信 app 的 border ，下面是优化之后的 border ，两者粗细就一致了。</p>
<p><img src="@source/fe/知识广度/img/border-2.png" alt=""></p>
<h2 id="连环问-如果有-border-radius-怎么办" tabindex="-1"><a class="header-anchor" href="#连环问-如果有-border-radius-怎么办" aria-hidden="true">#</a> 连环问：如果有 <code v-pre>border-radius</code> 怎么办</h2>
<p>可以使用 <code v-pre>box-shadow</code> 设置</p>
<ul>
<li>X 偏移量 <code v-pre>0</code></li>
<li>Y 偏移量 <code v-pre>0</code></li>
<li>阴影模糊半径 <code v-pre>0</code></li>
<li>阴影扩散半径 <code v-pre>0.5px</code></li>
<li>阴影颜色</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#box2</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
    <span class="token comment">/* border: 1px solid #d9d9d9; */</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 0 0.5px #d9d9d9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
