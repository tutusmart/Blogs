<template><h1 id="文字超出省略" tabindex="-1"><a class="header-anchor" href="#文字超出省略" aria-hidden="true">#</a> 文字超出省略</h1>
<p>注：文本小节</p>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>文字超出省略，用哪个 CSS 样式？</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>如果你有实际工作经验，实际项目有各种角色参与。页面需要 UI 设计，开发完还需要 UI 评审。<br>
UI 设计师可能是这个世界上最“抠门”的人，他们都长有像素眼，哪怕差 1px 他们都不会放过你。所以，开发时要严格按照视觉稿，100% 还原视觉稿。</p>
<p>但如果你没有实际工作经验（或实习经验），仅仅是自学的项目，或者跟着课程的项目。没有 UI 设计师，程序员的审美是不可靠的，肯定想不到很多细节。</p>
<p>所以，考察一些 UI 关注的细节样式，将能从侧面判断你有没有实际工作经验。</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>单行文字</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#box1</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span> <span class="token comment">/* 不换行 */</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span> <span class="token comment">/* 超出省略 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多行文字</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">#box2</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span> <span class="token comment">/* 将对象作为弹性伸缩盒子模型显示 */</span>
    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span> <span class="token comment">/* 设置子元素排列方式 */</span>
    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span> <span class="token comment">/* 显示几行，超出的省略 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>UI 关注的问题还有很多，例如此前讲过的移动端响应式，Retina 屏 1px 像素问题。</p>
<p>再例如，网页中常用的字号，如果你有工作经验就知道，最常用的是 <code v-pre>12px</code> <code v-pre>14px</code> <code v-pre>16px</code> <code v-pre>20px</code> <code v-pre>24px</code> 等。你如果不了解，可以多去看看各种 UI 框架，例如 <a href="https://ant.design/components/typography-cn/" target="_blank" rel="noopener noreferrer">antDesign 排版<ExternalLinkIcon/></a>。</p>
</template>
