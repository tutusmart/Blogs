<template><h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>前端常用的设计模式？什么场景？</p>
<h2 id="开放封闭原则" tabindex="-1"><a class="header-anchor" href="#开放封闭原则" aria-hidden="true">#</a> 开放封闭原则</h2>
<p>设计原则是设计模式的基础，开放封闭原则是最重要的：对扩展开发，对修改封闭。</p>
<h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2>
<p>用一个工厂函数，创建一个实例，封装创建的过程。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Foo <span class="token punctuation">{</span>
    <span class="token comment">// 封装创建过程，这其中可能有很多业务逻辑</span>

    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景</p>
<ul>
<li>jQuery <code v-pre>$('div')</code> 创建一个 jQuery 实例</li>
<li>React <code v-pre>createElement('div', {}, children)</code> 创建一个 vnode</li>
</ul>
<h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2>
<p>提供全局唯一的对象，无论获取多少次。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">SingleTon</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> SingleTon <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SingleTon</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// const s1 = new SingleTon() // Error: constructor of 'singleton' is private</span>

<span class="token keyword">const</span> s2 <span class="token operator">=</span> SingleTon<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s2<span class="token punctuation">.</span><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s2<span class="token punctuation">.</span><span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> s3 <span class="token operator">=</span> SingleTon<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s2 <span class="token operator">===</span> s3 <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景</p>
<ul>
<li>Vuex Redux 的 store ，全局唯一的</li>
<li>全局唯一的 dialog modal</li>
</ul>
<p>PS：JS 是单线程语言。如果是 Java 等多线程语言，创建单例时还需要考虑线程锁死，否则两个线程同时创建，则可能出现两份 instance 。</p>
<h2 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h2>
<p>使用者不能直接访问真实数据，而是通过一个代理层来访问。<br>
ES Proxy 本身就是代理模式，Vue3 基于它来实现响应式。</p>
<p>代码参考 proxy.html</p>
<h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2>
<p>即常说的绑定事件。一个主题，一个观察者，主题变化之后触发观察者执行。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 一个主题，一个观察者，主题变化之后触发观察者执行</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布订阅模式" tabindex="-1"><a class="header-anchor" href="#发布订阅模式" aria-hidden="true">#</a> 发布订阅模式</h2>
<p>即常说的自定义事件，一个 <code v-pre>event</code> 对象，可以绑定事件，可以触发事件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 绑定</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'event-key'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 事件1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'event-key'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 事件2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 触发执行</span>
event<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'event-key'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>温故知新。在讲 JS 内存泄漏时提到，Vue React 组件销毁时，要记得解绑自定义事件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* 事件1 */</span> <span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* 事件2 */</span> <span class="token punctuation">}</span>

<span class="token comment">// mounted 时绑定</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'event-key'</span><span class="token punctuation">,</span> fn1<span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'event-key'</span><span class="token punctuation">,</span> fn2<span class="token punctuation">)</span>

<span class="token comment">// beforeUnmount 时解绑</span>
event<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'event-key'</span><span class="token punctuation">,</span> fn1<span class="token punctuation">)</span>
event<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'event-key'</span><span class="token punctuation">,</span> fn2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰器模式" tabindex="-1"><a class="header-anchor" href="#装饰器模式" aria-hidden="true">#</a> 装饰器模式</h2>
<p>ES 和 TS 的 Decorator 语法就是装饰器模式。可以为 class 和 method 增加新的功能。<br>
以下代码可以在 <a href="https://www.typescriptlang.org/play" target="_blank" rel="noopener noreferrer">ts playground<ExternalLinkIcon/></a> 中运行。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// class 装饰器</span>
<span class="token keyword">function</span> <span class="token function">logDec</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>flag <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

@logDec
<span class="token keyword">class</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Log<span class="token punctuation">.</span>flag<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// method 装饰器</span>
<span class="token comment">// 每次 buy 都要发送统计日志，可以抽离到一个 decorator 中</span>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> name<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(descriptor.value) // buy 函数</span>
    <span class="token keyword">const</span> oldValue <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value <span class="token comment">// 暂存 buy 函数</span>

    <span class="token comment">// “装饰” buy 函数</span>
    descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Calling </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> param<span class="token punctuation">)</span> <span class="token comment">// 打印日志</span>
        <span class="token keyword">return</span> <span class="token function">oldValue</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> param<span class="token punctuation">)</span> <span class="token comment">// 执行原来的 buy 函数</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> descriptor
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Seller</span> <span class="token punctuation">{</span>
    @log
    <span class="token keyword">public</span> <span class="token function">buy</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'do buy'</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Seller</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">buy</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Angular nest.js 都已广泛使用装饰器。这种编程模式叫做<strong>AOP 面向切面编程</strong>：关注业务逻辑，抽离工具功能。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Controller<span class="token punctuation">,</span> Get<span class="token punctuation">,</span> Post <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@nestjs/common'</span><span class="token punctuation">;</span>

@<span class="token function">Controller</span><span class="token punctuation">(</span><span class="token string">'cats'</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CatsController</span> <span class="token punctuation">{</span>
  @<span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'This action adds a new cat'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'This action returns all cats'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<p>传统的经典设计模式有 23 个，作为面试题只说出几个前端常用的就可以。</p>
<ul>
<li>工厂模式</li>
<li>单例模式</li>
<li>代理模式</li>
<li>观察者模式</li>
<li>发布订阅模式</li>
<li>装饰器模式</li>
</ul>
<h2 id="连环问-观察者模式和发布订阅模式的区别" tabindex="-1"><a class="header-anchor" href="#连环问-观察者模式和发布订阅模式的区别" aria-hidden="true">#</a> 连环问：观察者模式和发布订阅模式的区别？</h2>
<p><img src="@source/fe/实际工作经验/img/观察者vs发布订阅.png" alt=""></p>
<p>观察者模式</p>
<ul>
<li>Subject 和 Observer 直接绑定，中间无媒介</li>
<li>如 <code v-pre>addEventListener</code> 绑定事件</li>
</ul>
<p>发布订阅模式</p>
<ul>
<li>Publisher 和 Observer 相互不认识，中间有媒介</li>
<li>如 <code v-pre>eventBus</code> 自定义事件</li>
</ul>
<h2 id="连环问-mvc-和-mvvm-有什么区别" tabindex="-1"><a class="header-anchor" href="#连环问-mvc-和-mvvm-有什么区别" aria-hidden="true">#</a> 连环问：MVC 和 MVVM 有什么区别</h2>
<p>MVC 原理</p>
<ul>
<li>View 传送指令到 Controller</li>
<li>Controller 完成业务逻辑后，要求 Model 改变状态</li>
<li>Model 将新的数据发送到 View，用户得到反馈</li>
</ul>
<p><img src="@source/fe/实际工作经验/img/MVC.png" alt=""></p>
<p>MVVM 直接对标 Vue 即可</p>
<ul>
<li>View 即 Vue template</li>
<li>Model 即 Vue data</li>
<li>VM 即 Vue 其他核心功能，负责 View 和 Model 通讯</li>
</ul>
<p><img src="@source/fe/实际工作经验/img/MVVM.png" alt=""></p>
<p><img src="@source/fe/实际工作经验/img/vue-mvvm.png" alt=""></p>
</template>
