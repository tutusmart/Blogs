<template><h1 id="何时使用-ssr" tabindex="-1"><a class="header-anchor" href="#何时使用-ssr" aria-hidden="true">#</a> 何时使用 SSR</h1>
<p>注：文字小节</p>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>何时使用 SSR ，何时不用？</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>SSR - Server-side render 服务端渲染</p>
<p>SSR 历史悠久，之前的 ASP JSP PHP 就是 SSR 。</p>
<p>之前面试过一个候选人，问他：SSR 有何优点？他回答：SSR 好！ —— 这是完全没有技术思维的回复。<br>
那即便你能回答出 SSR 的优势，我再继续问：SSR 有什么劣势？再继续问：SSR 适用于哪些场景？</p>
<p>借此说明：技术要有合适的应用场景才会有价值。</p>
<h2 id="ssr-的优势" tabindex="-1"><a class="header-anchor" href="#ssr-的优势" aria-hidden="true">#</a> SSR 的优势</h2>
<p>服务端直出 html</p>
<ul>
<li>性能好</li>
<li>对 SEO 优化</li>
</ul>
<h2 id="ssr-的劣势" tabindex="-1"><a class="header-anchor" href="#ssr-的劣势" aria-hidden="true">#</a> SSR 的劣势</h2>
<p>前后端同构，开发成本高（学习、调试、运维等）</p>
<h2 id="是否需要-ssr" tabindex="-1"><a class="header-anchor" href="#是否需要-ssr" aria-hidden="true">#</a> 是否需要 SSR</h2>
<p>是否能利用 SSR 的优势</p>
<ul>
<li>你的项目是否需要 SEO ？—— 管理后台就不需要</li>
<li>你的项目是否在意极致的性能优化，或者会否有可能处于弱网环境（网络好，速度不会太慢的）—— 管理后台就不需要</li>
</ul>
<p>如果急需要 SSR 的优势和价值，那就去承担 SSR 的成本。如果不需要这些优势，那 SSR 就成了一个累赘。</p>
<h2 id="ssr-的应用场景" tabindex="-1"><a class="header-anchor" href="#ssr-的应用场景" aria-hidden="true">#</a> SSR 的应用场景</h2>
<p>C 端，以阅读为主的单页面，如新闻页，运营宣传广告页面，官网等。1. 需要快；2. 需要 SEO</p>
</template>
