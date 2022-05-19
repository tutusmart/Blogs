<template><h1 id="前端统计-sdk" tabindex="-1"><a class="header-anchor" href="#前端统计-sdk" aria-hidden="true">#</a> 前端统计 sdk</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>要让你设计一个前端统计 SDK ，你会如何设计？</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>前端统计的范围</p>
<ul>
<li>访问量 PV</li>
<li>自定义事件（如统计一个按钮被点击了多少次）</li>
<li>性能</li>
<li>错误</li>
</ul>
<p>统计数据的流程 （只做前端 SDK ，但是要了解全局）</p>
<ul>
<li>前端发送统计数据给服务端</li>
<li>服务端接受，并处理统计数据</li>
<li>查看统计结果</li>
</ul>
<h2 id="代码结构" tabindex="-1"><a class="header-anchor" href="#代码结构" aria-hidden="true">#</a> 代码结构</h2>
<p>SDK 要用于多个不同的产品，所以初始化要传入 <code v-pre>productId</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyStatistic</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token literal-property property">productId</span><span class="token operator">:</span> number

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">productId</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>productId <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'productId is invalid'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>productId <span class="token operator">=</span> productId <span class="token comment">// 产品 id （SDK 会被用于多个产品）</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initPerformance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 性能统计</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 监听错误</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">paramObj</span><span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO 发送统计数据</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token function">initPerformance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO 性能统计</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token function">initError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO 监听全局错误（有些错误需要主动传递过来，如 Vue React try-catch 的）</span>
    <span class="token punctuation">}</span>
    <span class="token function">pv</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO 访问量 PV 统计</span>
    <span class="token punctuation">}</span>
    <span class="token function">event</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO 自定义事件</span>
    <span class="token punctuation">}</span>
    <span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">info</span><span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// TODO 错误统计</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> myStatistic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyStatistic</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="发送数据" tabindex="-1"><a class="header-anchor" href="#发送数据" aria-hidden="true">#</a> 发送数据</h2>
<p>发送统计数据，用 <code v-pre>&lt;img&gt;</code> —— 浏览器兼容性好，没有跨域限制</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">private</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">paramObj</span><span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 追加 productId</span>
    paramObj<span class="token punctuation">.</span>productId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>productId

    <span class="token comment">// params 参数拼接为字符串</span>
    <span class="token keyword">const</span> paramArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> paramObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> paramObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        paramArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>paramArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'&amp;'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果再精细一点的优化，<code v-pre>send</code> 中可以使用 <code v-pre>requestIdleCallback</code> （兼容使用 <code v-pre>setTimeout</code>）</p>
<h2 id="自定义事件统计" tabindex="-1"><a class="header-anchor" href="#自定义事件统计" aria-hidden="true">#</a> 自定义事件统计</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">event</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'xxx'</span> <span class="token comment">// 接受自定义事件的 API</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 发送</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如需要统计“同意” “不同意” “取消” 三个按钮的点击量，即可使用自定义事件统计</span>
$agreeBtn<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// ...业务逻辑...</span>
    myStatistic<span class="token punctuation">.</span><span class="token function">event</span><span class="token punctuation">(</span><span class="token string">'some-button'</span><span class="token punctuation">,</span> <span class="token string">'agree'</span><span class="token punctuation">)</span> <span class="token comment">// 其他不同的按钮，传递不同的 value (如 'refuse' 'cancel')</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问量-pv" tabindex="-1"><a class="header-anchor" href="#访问量-pv" aria-hidden="true">#</a> 访问量 PV</h2>
<p>PV 可以通过自定义事件的方式。但是为了避免用户重复发送，需要加一个判断</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义一个全局的 Set ，记录已经发送 pv 的 url</span>
<span class="token keyword">const</span> <span class="token constant">PV_URL_SET</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">pv</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> href <span class="token operator">=</span> location<span class="token punctuation">.</span>href
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">PV_URL_SET</span><span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">event</span><span class="token punctuation">(</span><span class="token string">'pv'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token comment">// 发送 pv</span>

    <span class="token constant">PV_URL_SET</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>href<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>myStatistic<span class="token punctuation">.</span><span class="token function">pv</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>【注意】PV 统计需要让用户自己发送吗，能不能在 DOMContentLoaded 时自动发送？—— 最好让用户发送，因为 SPA 中切换路由也可能发送 PV</p>
<h2 id="性能统计" tabindex="-1"><a class="header-anchor" href="#性能统计" aria-hidden="true">#</a> 性能统计</h2>
<p>通过 <code v-pre>console.table( performance.timing )</code> 可以看到网页的各个性能</p>
<p><img src="@source/fe/项目设计/img/performance.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">private</span> <span class="token function">initPerformance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'yyy'</span> <span class="token comment">// 接受性能统计的 API</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> performance<span class="token punctuation">.</span>timing<span class="token punctuation">)</span> <span class="token comment">// 全部传给服务端，让服务端去计算结果 —— 统计尽量要最原始数据，不要加工处理</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：想要得到全面的性能数据，要在网页加载完成之后（ DOMContentLoaded 或 onload ）去初始化 <code v-pre>myStatistic</code></p>
<h2 id="错误统计" tabindex="-1"><a class="header-anchor" href="#错误统计" aria-hidden="true">#</a> 错误统计</h2>
<p>监听全局操作</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">private</span> <span class="token function">initError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 全局操作</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> error<span class="token punctuation">,</span> lineno<span class="token punctuation">,</span> colno <span class="token punctuation">}</span> <span class="token operator">=</span> event
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> <span class="token punctuation">{</span> lineno<span class="token punctuation">,</span> colno <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// Promise 未 catch 的报错 （ 参考 unhandledrejection.html ）</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"unhandledrejection"</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>reason<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>被开发这主动收集的错误，需要调用 API 来统计</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">error</span><span class="token operator">:</span> Error<span class="token punctuation">,</span> <span class="token literal-property property">info</span><span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error 结构 { message, stack }</span>
    <span class="token comment">// info 是附加信息</span>

    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'zzz'</span> <span class="token comment">// 接受错误统计的 API</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// try catch</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token number">100</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myStatistic<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Vue 错误监听</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    myStatistic<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> <span class="token punctuation">{</span> info <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// React 错误监听</span>
<span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> errorInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myStatistic<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">info</span><span class="token operator">:</span> errorInfo <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>自定义事件（包括 PV）</li>
<li>性能统计</li>
<li>报错统计</li>
</ul>
<p>PS：以上是一个统计 SDK 的基本估计，可以应对面试，实际工作中还可能需要进一步完善很多细节。</p>
<h2 id="连环问-sourcemap-有什么作用-该如何配置" tabindex="-1"><a class="header-anchor" href="#连环问-sourcemap-有什么作用-该如何配置" aria-hidden="true">#</a> 连环问：sourcemap 有什么作用？该如何配置</h2>
<p>遇到 JS 报错的问题，就离不开 sourcemap</p>
<h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3>
<ul>
<li>JS 上线之前要合并、混淆和压缩。例如 jquery 的线上代码 https://www.bootcdn.cn/jquery/</li>
<li>压缩之后，一旦线上有报错，通过行、列根本找不到源代码的位置，不好定位错误</li>
<li>sourcemap 就是用于解决这个问题。可以看 jquery 的 sourcemap 文件 https://www.jsdelivr.com/package/npm/jquery?path=dist</li>
</ul>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<p>一个网页中引用了 CDN jquery.min.js ，通过 chrome Sources 即可看到之前源码的样子。<br>
寻找 sourcemap 有两种方式：1. 同目录下的同名文件；2. js 文件最后一样指定（如 wangEditor js）</p>
<p><img src="@source/fe/项目设计/img/sourcemap1.png" alt=""></p>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<p>sourcemap 是在打包、压缩 js 时生成，通过 webpack 的打包工具即可配置。（可以在 <code v-pre>js-code</code> 代码环境中测试）<br>
webpack 通过 <code v-pre>devtool</code> 来配置 sourcemap ，有多种选择 https://webpack.docschina.org/configuration/devtool/#devtool</p>
<ul>
<li>不用 <code v-pre>devtool</code> - 正常打包，不会生成 sourcemap 文件</li>
<li><code v-pre>eval</code> - 所有代码都放在 <code v-pre>eval(...)</code> 中执行，不生成 sourcemap 文件</li>
<li><code v-pre>source-map</code> - 生成单独的 sourcemap 文件，并在 js 文件最后指定</li>
<li><code v-pre>eval-source-map</code> - 代码都放在 <code v-pre>eval(...)</code> 中执行，sourcemap 内嵌到 js 代码中，不生成独立的文件</li>
<li><code v-pre>inline-source-map</code> - sourcemap 以 base64 格式插入到 js 末尾，不生成单独的文件</li>
<li><code v-pre>cheap-source-map</code> - sourcemap 只包含行信息，没有列信息（文件体积更小，生成更快）</li>
<li><code v-pre>eval-cheap-source-map</code> - 同上，但是所有代码都放在 <code v-pre>eval(...)</code> 中执行</li>
</ul>
<p>推荐</p>
<ul>
<li>开发和测试 <code v-pre>eval</code> <code v-pre>eval-source-map</code> <code v-pre>eval-cheap-source-map</code> —— 追求效率</li>
<li>生产环境 <code v-pre>source-map</code> 或者不产出 sourcemap —— 看个人需求</li>
</ul>
<h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>
<p>公司实际项目的 sourcemap 可用于内部反查 bug ，但不要泄漏。否则等于源码泄漏了。<br>
开源项目的 sourcemap 文件也是开源的。</p>
<p>只需要了解 sourcemap 的作用和配置即可，原理不用掌握。</p>
</template>
