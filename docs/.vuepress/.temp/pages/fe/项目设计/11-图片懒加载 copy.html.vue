<template><h1 id="图片懒加载" tabindex="-1"><a class="header-anchor" href="#图片懒加载" aria-hidden="true">#</a> 图片懒加载</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>设计一个 H5 页面的图片懒加载功能</p>
<h2 id="要点" tabindex="-1"><a class="header-anchor" href="#要点" aria-hidden="true">#</a> 要点</h2>
<p>第一，<code v-pre>&lt;img&gt;</code> 要使用 <code v-pre>data-src</code>（或其他属性）记录 src 。还有，loading.gif 要自定义，要配合实际图片的尺寸。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./img/loading.gif<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./img/animal1.jpeg<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二，可以使用 <code v-pre>Element.getBoundingClientRect()</code> 来判断当前元素的位置</p>
<p><img src="@source/fe/项目设计/img/rect.png" alt=""></p>
<p>第三，页面滚动实时计算，注意<strong>节流</strong></p>
<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2>
<p>代码参考 img-lazy-load.html</p>
</template>
