import{_ as t,r as p,o as c,a as o,b as s,e as i,F as l,c as a,d as n}from"./app.1c29f384.js";var u="/../../assets/\u89C2\u5BDF\u8005vs\u53D1\u5E03\u8BA2\u9605.98746dbd.png",r="/../../assets/MVC.3ddb8eb5.png",d="/../../assets/MVVM.0945231c.png",k="/../../assets/vue-mvvm.0f4c3a4d.png";const v={},m=a(`<h1 id="\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a> \u8BBE\u8BA1\u6A21\u5F0F</h1><h2 id="\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE" aria-hidden="true">#</a> \u9898\u76EE</h2><p>\u524D\u7AEF\u5E38\u7528\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF1F\u4EC0\u4E48\u573A\u666F\uFF1F</p><h2 id="\u5F00\u653E\u5C01\u95ED\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u5F00\u653E\u5C01\u95ED\u539F\u5219" aria-hidden="true">#</a> \u5F00\u653E\u5C01\u95ED\u539F\u5219</h2><p>\u8BBE\u8BA1\u539F\u5219\u662F\u8BBE\u8BA1\u6A21\u5F0F\u7684\u57FA\u7840\uFF0C\u5F00\u653E\u5C01\u95ED\u539F\u5219\u662F\u6700\u91CD\u8981\u7684\uFF1A\u5BF9\u6269\u5C55\u5F00\u53D1\uFF0C\u5BF9\u4FEE\u6539\u5C01\u95ED\u3002</p><h2 id="\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> \u5DE5\u5382\u6A21\u5F0F</h2><p>\u7528\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5C01\u88C5\u521B\u5EFA\u7684\u8FC7\u7A0B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Foo <span class="token punctuation">{</span>
    <span class="token comment">// \u5C01\u88C5\u521B\u5EFA\u8FC7\u7A0B\uFF0C\u8FD9\u5176\u4E2D\u53EF\u80FD\u6709\u5F88\u591A\u4E1A\u52A1\u903B\u8F91</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528\u573A\u666F</p><ul><li>jQuery <code>$(&#39;div&#39;)</code> \u521B\u5EFA\u4E00\u4E2A jQuery \u5B9E\u4F8B</li><li>React <code>createElement(&#39;div&#39;, {}, children)</code> \u521B\u5EFA\u4E00\u4E2A vnode</li></ul><h2 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F</h2><p>\u63D0\u4F9B\u5168\u5C40\u552F\u4E00\u7684\u5BF9\u8C61\uFF0C\u65E0\u8BBA\u83B7\u53D6\u591A\u5C11\u6B21\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">SingleTon</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> SingleTon <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SingleTon</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const s1 = new SingleTon() // Error: constructor of &#39;singleton&#39; is private</span>

<span class="token keyword">const</span> s2 <span class="token operator">=</span> SingleTon<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s2<span class="token punctuation">.</span><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s2<span class="token punctuation">.</span><span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> s3 <span class="token operator">=</span> SingleTon<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s2 <span class="token operator">===</span> s3 <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E94\u7528\u573A\u666F</p><ul><li>Vuex Redux \u7684 store \uFF0C\u5168\u5C40\u552F\u4E00\u7684</li><li>\u5168\u5C40\u552F\u4E00\u7684 dialog modal</li></ul><p>PS\uFF1AJS \u662F\u5355\u7EBF\u7A0B\u8BED\u8A00\u3002\u5982\u679C\u662F Java \u7B49\u591A\u7EBF\u7A0B\u8BED\u8A00\uFF0C\u521B\u5EFA\u5355\u4F8B\u65F6\u8FD8\u9700\u8981\u8003\u8651\u7EBF\u7A0B\u9501\u6B7B\uFF0C\u5426\u5219\u4E24\u4E2A\u7EBF\u7A0B\u540C\u65F6\u521B\u5EFA\uFF0C\u5219\u53EF\u80FD\u51FA\u73B0\u4E24\u4EFD instance \u3002</p><h2 id="\u4EE3\u7406\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u6A21\u5F0F" aria-hidden="true">#</a> \u4EE3\u7406\u6A21\u5F0F</h2><p>\u4F7F\u7528\u8005\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE\u771F\u5B9E\u6570\u636E\uFF0C\u800C\u662F\u901A\u8FC7\u4E00\u4E2A\u4EE3\u7406\u5C42\u6765\u8BBF\u95EE\u3002<br> ES Proxy \u672C\u8EAB\u5C31\u662F\u4EE3\u7406\u6A21\u5F0F\uFF0CVue3 \u57FA\u4E8E\u5B83\u6765\u5B9E\u73B0\u54CD\u5E94\u5F0F\u3002</p><p>\u4EE3\u7801\u53C2\u8003 proxy.html</p><h2 id="\u89C2\u5BDF\u8005\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89C2\u5BDF\u8005\u6A21\u5F0F" aria-hidden="true">#</a> \u89C2\u5BDF\u8005\u6A21\u5F0F</h2><p>\u5373\u5E38\u8BF4\u7684\u7ED1\u5B9A\u4E8B\u4EF6\u3002\u4E00\u4E2A\u4E3B\u9898\uFF0C\u4E00\u4E2A\u89C2\u5BDF\u8005\uFF0C\u4E3B\u9898\u53D8\u5316\u4E4B\u540E\u89E6\u53D1\u89C2\u5BDF\u8005\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E00\u4E2A\u4E3B\u9898\uFF0C\u4E00\u4E2A\u89C2\u5BDF\u8005\uFF0C\u4E3B\u9898\u53D8\u5316\u4E4B\u540E\u89E6\u53D1\u89C2\u5BDF\u8005\u6267\u884C</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> \u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</h2><p>\u5373\u5E38\u8BF4\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u4E00\u4E2A <code>event</code> \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u89E6\u53D1\u4E8B\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7ED1\u5B9A</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event-key&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E8B\u4EF61</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event-key&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E8B\u4EF62</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u89E6\u53D1\u6267\u884C</span>
event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;event-key&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6E29\u6545\u77E5\u65B0\u3002\u5728\u8BB2 JS \u5185\u5B58\u6CC4\u6F0F\u65F6\u63D0\u5230\uFF0CVue React \u7EC4\u4EF6\u9500\u6BC1\u65F6\uFF0C\u8981\u8BB0\u5F97\u89E3\u7ED1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* \u4E8B\u4EF61 */</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* \u4E8B\u4EF62 */</span> <span class="token punctuation">}</span>

<span class="token comment">// mounted \u65F6\u7ED1\u5B9A</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event-key&#39;</span><span class="token punctuation">,</span> fn1<span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event-key&#39;</span><span class="token punctuation">,</span> fn2<span class="token punctuation">)</span>

<span class="token comment">// beforeUnmount \u65F6\u89E3\u7ED1</span>
event<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;event-key&#39;</span><span class="token punctuation">,</span> fn1<span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;event-key&#39;</span><span class="token punctuation">,</span> fn2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u88C5\u9970\u5668\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u5668\u6A21\u5F0F" aria-hidden="true">#</a> \u88C5\u9970\u5668\u6A21\u5F0F</h2>`,28),b=n("ES \u548C TS \u7684 Decorator \u8BED\u6CD5\u5C31\u662F\u88C5\u9970\u5668\u6A21\u5F0F\u3002\u53EF\u4EE5\u4E3A class \u548C method \u589E\u52A0\u65B0\u7684\u529F\u80FD\u3002"),h=s("br",null,null,-1),g=n(" \u4EE5\u4E0B\u4EE3\u7801\u53EF\u4EE5\u5728 "),f={href:"https://www.typescriptlang.org/play",target:"_blank",rel:"noopener noreferrer"},y=n("ts playground"),w=n(" \u4E2D\u8FD0\u884C\u3002"),_=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// class \u88C5\u9970\u5668</span>
<span class="token keyword">function</span> <span class="token function">logDec</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>flag <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

@logDec
<span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Log<span class="token punctuation">.</span>flag<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// method \u88C5\u9970\u5668</span>
<span class="token comment">// \u6BCF\u6B21 buy \u90FD\u8981\u53D1\u9001\u7EDF\u8BA1\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u62BD\u79BB\u5230\u4E00\u4E2A decorator \u4E2D</span>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(descriptor.value) // buy \u51FD\u6570</span>
    <span class="token keyword">const</span> oldValue <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value <span class="token comment">// \u6682\u5B58 buy \u51FD\u6570</span>

    <span class="token comment">// \u201C\u88C5\u9970\u201D buy \u51FD\u6570</span>
    descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Calling </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> param<span class="token punctuation">)</span> <span class="token comment">// \u6253\u5370\u65E5\u5FD7</span>
        <span class="token keyword">return</span> <span class="token function">oldValue</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> param<span class="token punctuation">)</span> <span class="token comment">// \u6267\u884C\u539F\u6765\u7684 buy \u51FD\u6570</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> descriptor
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Seller</span> <span class="token punctuation">{</span>
    @log
    <span class="token keyword">public</span> <span class="token function">buy</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;do buy&#39;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Seller</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">buy</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Angular nest.js \u90FD\u5DF2\u5E7F\u6CDB\u4F7F\u7528\u88C5\u9970\u5668\u3002\u8FD9\u79CD\u7F16\u7A0B\u6A21\u5F0F\u53EB\u505A<strong>AOP \u9762\u5411\u5207\u9762\u7F16\u7A0B</strong>\uFF1A\u5173\u6CE8\u4E1A\u52A1\u903B\u8F91\uFF0C\u62BD\u79BB\u5DE5\u5177\u529F\u80FD\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Post <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">&#39;cats&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CatsController</span> <span class="token punctuation">{</span>
  @<span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;This action adds a new cat&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;This action returns all cats&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><p>\u4F20\u7EDF\u7684\u7ECF\u5178\u8BBE\u8BA1\u6A21\u5F0F\u6709 23 \u4E2A\uFF0C\u4F5C\u4E3A\u9762\u8BD5\u9898\u53EA\u8BF4\u51FA\u51E0\u4E2A\u524D\u7AEF\u5E38\u7528\u7684\u5C31\u53EF\u4EE5\u3002</p><ul><li>\u5DE5\u5382\u6A21\u5F0F</li><li>\u5355\u4F8B\u6A21\u5F0F</li><li>\u4EE3\u7406\u6A21\u5F0F</li><li>\u89C2\u5BDF\u8005\u6A21\u5F0F</li><li>\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</li><li>\u88C5\u9970\u5668\u6A21\u5F0F</li></ul><h2 id="\u8FDE\u73AF\u95EE-\u89C2\u5BDF\u8005\u6A21\u5F0F\u548C\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u73AF\u95EE-\u89C2\u5BDF\u8005\u6A21\u5F0F\u548C\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u7684\u533A\u522B" aria-hidden="true">#</a> \u8FDE\u73AF\u95EE\uFF1A\u89C2\u5BDF\u8005\u6A21\u5F0F\u548C\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u7684\u533A\u522B\uFF1F</h2><p><img src="`+u+'" alt=""></p><p>\u89C2\u5BDF\u8005\u6A21\u5F0F</p><ul><li>Subject \u548C Observer \u76F4\u63A5\u7ED1\u5B9A\uFF0C\u4E2D\u95F4\u65E0\u5A92\u4ECB</li><li>\u5982 <code>addEventListener</code> \u7ED1\u5B9A\u4E8B\u4EF6</li></ul><p>\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F</p><ul><li>Publisher \u548C Observer \u76F8\u4E92\u4E0D\u8BA4\u8BC6\uFF0C\u4E2D\u95F4\u6709\u5A92\u4ECB</li><li>\u5982 <code>eventBus</code> \u81EA\u5B9A\u4E49\u4E8B\u4EF6</li></ul><h2 id="\u8FDE\u73AF\u95EE-mvc-\u548C-mvvm-\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u73AF\u95EE-mvc-\u548C-mvvm-\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> \u8FDE\u73AF\u95EE\uFF1AMVC \u548C MVVM \u6709\u4EC0\u4E48\u533A\u522B</h2><p>MVC \u539F\u7406</p><ul><li>View \u4F20\u9001\u6307\u4EE4\u5230 Controller</li><li>Controller \u5B8C\u6210\u4E1A\u52A1\u903B\u8F91\u540E\uFF0C\u8981\u6C42 Model \u6539\u53D8\u72B6\u6001</li><li>Model \u5C06\u65B0\u7684\u6570\u636E\u53D1\u9001\u5230 View\uFF0C\u7528\u6237\u5F97\u5230\u53CD\u9988</li></ul><p><img src="'+r+'" alt=""></p><p>MVVM \u76F4\u63A5\u5BF9\u6807 Vue \u5373\u53EF</p><ul><li>View \u5373 Vue template</li><li>Model \u5373 Vue data</li><li>VM \u5373 Vue \u5176\u4ED6\u6838\u5FC3\u529F\u80FD\uFF0C\u8D1F\u8D23 View \u548C Model \u901A\u8BAF</li></ul><p><img src="'+d+'" alt=""></p><p><img src="'+k+'" alt=""></p>',21);function x(V,j){const e=p("ExternalLinkIcon");return c(),o(l,null,[m,s("p",null,[b,h,g,s("a",f,[y,i(e)]),w]),_],64)}var M=t(v,[["render",x],["__file","04-\u8BBE\u8BA1\u6A21\u5F0F.html.vue"]]);export{M as default};
