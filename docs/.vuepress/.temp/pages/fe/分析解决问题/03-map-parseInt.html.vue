<template><h1 id="map-parseint" tabindex="-1"><a class="header-anchor" href="#map-parseint" aria-hidden="true">#</a> map parseInt</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p><code v-pre>['1', '2', '3'].map(parseInt)</code> 输出什么？</p>
<h2 id="parseint" tabindex="-1"><a class="header-anchor" href="#parseint" aria-hidden="true">#</a> parseInt</h2>
<p><code v-pre>parseInt(string, radix)</code> 解析一个字符串并返回指定基数的<strong>十进制</strong>整数</p>
<ul>
<li><code v-pre>string</code> 要解析的字符串</li>
<li><code v-pre>radix</code> 可选参数，数字基数（即进制），范围为 2-36</li>
</ul>
<p>示例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'11'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// NaN ，1 非法，不在 2-36 范围之内</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'11'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3 = 1*2 + 1</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// NaN ，2 进制中不存在 3</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'11'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 4 = 1*3 + 1</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'11'</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// 9 = 1*8 + 1</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'9'</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// NaN ，8 进制中不存在 9</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'11'</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 11</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// 10 ，超过 10 进制，个位数就是 1 2 3 4 5 6 7 8 9 A B C D ...</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'F'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// 15</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'G'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// NaN ，16 进制个位数最多是 F ，不存在 G</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'1F'</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token comment">// 31 = 1*16 + F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="radix-null-或者-radix-0" tabindex="-1"><a class="header-anchor" href="#radix-null-或者-radix-0" aria-hidden="true">#</a> radix == null 或者 radix === 0</h2>
<ul>
<li>如果 <code v-pre>string</code> 以 <code v-pre>0x</code> 开头，则按照 16 进制处理，例如 <code v-pre>parseInt('0x1F')</code> 等同于 <code v-pre>parseInt('1F', 16)</code></li>
<li>如果 <code v-pre>string</code> 以 <code v-pre>0</code> 开头，则按照 8 进制处理 —— <strong>ES5 之后就取消了，改为按 10 进制处理，但不是所有浏览器都这样，一定注意！！！</strong></li>
<li>其他情况，按 10 进制处理</li>
</ul>
<h2 id="分析代码" tabindex="-1"><a class="header-anchor" href="#分析代码" aria-hidden="true">#</a> 分析代码</h2>
<p>题目代码可以拆解为</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">s is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>s<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, index is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析执行过程</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 1 ，radix === 0 按 10 进制处理</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// NaN ，radix === 1 非法（不在 2-36 之内）</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// NaN ，2 进制中没有 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>parseInt<span class="token punctuation">)</span> <span class="token comment">// [1, NaN, NaN]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="划重点" tabindex="-1"><a class="header-anchor" href="#划重点" aria-hidden="true">#</a> 划重点</h2>
<ul>
<li>要知道 <code v-pre>parseInt</code> 参数的定义</li>
<li>把代码拆解到最细粒度，再逐步分析</li>
</ul>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>为何 eslint 建议 <code v-pre>partInt</code> 要指定 <code v-pre>radix</code>（第二个参数）？<br>
因为 <code v-pre>parseInt('011')</code> 无法确定是 8 进制还是 10 进制，因此必须给出明确指示。</p>
</template>
