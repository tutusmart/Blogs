<template><h1 id="spa-mpa" tabindex="-1"><a class="header-anchor" href="#spa-mpa" aria-hidden="true">#</a> SPA MPA</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>何时用 SPA 何时用 MPA ？</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<ul>
<li>SPA - Single-page Application 单页面应用，只有一个 html 文件，用前端路由切换功能</li>
<li>MPA - Multi-page Application 多页面应用，每个页面是单独的 html 文件</li>
</ul>
<p>现在基于 React Vue 开发时，大部分产出的都是 SPA ，很少会产出 MPA 。<br>
但并不是所有的场景都适用于 SPA ，项目设计时要确定好，否则后面不好改。</p>
<h2 id="spa-适用于一个综合应用" tabindex="-1"><a class="header-anchor" href="#spa-适用于一个综合应用" aria-hidden="true">#</a> SPA 适用于一个综合应用</h2>
<p>特点</p>
<ul>
<li>功能较多，一个界面展示不完</li>
<li>以操作为主，不是以展示为主</li>
</ul>
<p>举例</p>
<ul>
<li>大型的后台管理系统（阿里云的管理后台）</li>
<li>知识库（语雀、腾讯文档）</li>
<li>功能较复杂的 WebApp（外卖）</li>
</ul>
<h2 id="mpa-适用于孤立的页面" tabindex="-1"><a class="header-anchor" href="#mpa-适用于孤立的页面" aria-hidden="true">#</a> MPA 适用于孤立的页面</h2>
<p>特点</p>
<ul>
<li>功能较少，一个页面展示得开</li>
<li>以展示为主，而非操作</li>
</ul>
<p>举例</p>
<ul>
<li>分享页（微信公众号文章）</li>
<li>新闻 App 里的落地页（有可能是用 H5 + hybrid 开发的）</li>
</ul>
<h2 id="webpack-打包" tabindex="-1"><a class="header-anchor" href="#webpack-打包" aria-hidden="true">#</a> Webpack 打包</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'html-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'clean-webpack-plugin'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span><span class="token punctuation">,</span>
  <span class="token comment">// 多入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token string">'./src/home/index.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">product</span><span class="token operator">:</span> <span class="token string">'./src/product/index.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">about</span><span class="token operator">:</span> <span class="token string">'./src/about/index.js'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'js/[name].[contentHash].js'</span><span class="token punctuation">,</span> <span class="token comment">// name 即 entry 的 key</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./dist'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// 三个页面</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'首页'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./template/index.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'home.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'home'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'产品'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./template/product.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'product.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'product'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'关于'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'./template/about.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'about.html'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">chunks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'about'</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展-技术是一回事-怎么做是另外的事儿" tabindex="-1"><a class="header-anchor" href="#扩展-技术是一回事-怎么做是另外的事儿" aria-hidden="true">#</a> 扩展：技术是一回事，怎么做是另外的事儿</h2>
<p>讲一个故事，说明这个问题，请大家注意。</p>
<p>我之前的一个同事，他技术很好。
我就问他一个问题：你觉得在项目发布之前，最需要做的是什么？<br>
他回复是：1. 扩展性还不太好，得增强一下；2. 解决当前的 bug 。</p>
<p>然后我继续追问：1. 你觉得扩展性不好用，是扩展什么功能不好用，举个例子来说明？2. 目前记录的这些 bug ，那几个是高优的？<br>
然后他没有回答出来。</p>
<p>技术人员有这个想法很正常，我之前也是。<br>
我刚毕业那 2 年，对自己维护的一个系统提出了很多升级意见，都是自己从书上、竞品参考的。但领导问：这些如何实际应用到我们的项目？<br>
我就回答不上来了。</p>
</template>
