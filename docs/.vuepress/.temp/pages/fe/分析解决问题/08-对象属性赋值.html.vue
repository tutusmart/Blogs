<template><h1 id="对象属性赋值" tabindex="-1"><a class="header-anchor" href="#对象属性赋值" aria-hidden="true">#</a> 对象属性赋值</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>执行以下代码，会输出什么</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// example1</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">123</span>
a<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'b'</span>
a<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'c'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// example 2</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span>
a<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'b'</span>
a<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'c'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// example 3</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">'123'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">'456'</span> <span class="token punctuation">}</span>
a<span class="token punctuation">[</span>b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'b'</span>
a<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'c'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象的-key" tabindex="-1"><a class="header-anchor" href="#对象的-key" aria-hidden="true">#</a> 对象的 key</h2>
<ul>
<li>对象的键名只能是字符串和 Symbol 类型</li>
<li>其他类型的键名会被转换成字符串类型</li>
<li>对象转字符串默认会调用 <code v-pre>toString</code> 方法</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
obj<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">s</span><span class="token operator">:</span> <span class="token string">'abc'</span> <span class="token punctuation">}</span>
obj<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">200</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">300</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token boolean">true</span>
obj<span class="token punctuation">[</span>z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">400</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// ['0', '[object Object]', 'true']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有些类数组的结构是 <code v-pre>{ 0: x, 1: y, 2: z, length: 3 }</code> ，如 <code v-pre>document.getElementsByTagName('div')</code><br>
实际上它的 key 是 <code v-pre>['0', '1', '2', 'length']</code></p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>题目代码执行分别打印 <code v-pre>'c' 'b' 'c'</code></p>
<h2 id="扩展-map-和-weakmap" tabindex="-1"><a class="header-anchor" href="#扩展-map-和-weakmap" aria-hidden="true">#</a> 扩展：Map 和 WeakMap</h2>
<ul>
<li>Map 可以用任何类型值作为 <code v-pre>key</code></li>
<li>WeakMap 只能使用引用类型作为 <code v-pre>key</code> ，不能是值类型</li>
</ul>
</template>
