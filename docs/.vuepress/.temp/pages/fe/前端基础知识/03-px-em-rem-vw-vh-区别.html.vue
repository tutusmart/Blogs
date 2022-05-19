<template><h1 id="px-em-rem-vw-vh-的区别" tabindex="-1"><a class="header-anchor" href="#px-em-rem-vw-vh-的区别" aria-hidden="true">#</a> px em rem vw/vh 的区别</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>px % em rem vw/vh 的区别</p>
<h2 id="px" tabindex="-1"><a class="header-anchor" href="#px" aria-hidden="true">#</a> px</h2>
<p>像素，基本单位</p>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> %</h2>
<p>相对于父元素的尺寸。</p>
<p>如根据 <code v-pre>position: absolute;</code> 居中显示时，需要设置 <code v-pre>left: 50%</code></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">with</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">with</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="em" tabindex="-1"><a class="header-anchor" href="#em" aria-hidden="true">#</a> em</h2>
<p>相对于当前元素的 <code v-pre>font-size</code>。首行缩进可以使用 <code v-pre>text-indent: 2em</code>。</p>
<h2 id="rem" tabindex="-1"><a class="header-anchor" href="#rem" aria-hidden="true">#</a> rem</h2>
<p>rem = root em</p>
<p>相对于根元素的 <code v-pre>font-size</code> 。可以根据媒体查询，设置根元素的 <code v-pre>font-size</code> ，实现移动端适配。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 374px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/* iphone5 或者更小的尺寸，以 iphone5 的宽度（320px）比例设置 font-size */</span>
    <span class="token selector">html</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 86px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 413px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/* iphone6/7/8 和 iphone x */</span>
    <span class="token selector">html</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token comment">/* iphone6p 或者更大的尺寸，以 iphone6p 的宽度（414px）比例设置 font-size */</span>
    <span class="token selector">html</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 110px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vw-vh" tabindex="-1"><a class="header-anchor" href="#vw-vh" aria-hidden="true">#</a> vw/vh</h2>
<ul>
<li>vw 屏幕宽度的 1%</li>
<li>vh 屏幕高度的 1%</li>
<li>vmin 两者最小值</li>
<li>vmax 两者最大值</li>
</ul>
</template>
