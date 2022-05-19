<template><h1 id="react-优化" tabindex="-1"><a class="header-anchor" href="#react-优化" aria-hidden="true">#</a> React 优化</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>你在实际工作中，做过哪些 React 优化？</p>
<h2 id="前端通用的优化策略" tabindex="-1"><a class="header-anchor" href="#前端通用的优化策略" aria-hidden="true">#</a> 前端通用的优化策略</h2>
<p>压缩资源，拆包，使用 CDN ，http 缓存等。本节只讨论首屏，这些先不讲。</p>
<h2 id="循环使用-key" tabindex="-1"><a class="header-anchor" href="#循环使用-key" aria-hidden="true">#</a> 循环使用 key</h2>
<p><code v-pre>key</code> 可以优化内部的 diff 算法。注意，遍历数组时 <code v-pre>key</code> 不要使用 <code v-pre>index</code> 。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> todoItems <span class="token operator">=</span> todos<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token punctuation">{</span><span class="token comment">/* key 不要用 index */</span><span class="token punctuation">}</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-css-模拟-v-show" tabindex="-1"><a class="header-anchor" href="#修改-css-模拟-v-show" aria-hidden="true">#</a> 修改 css 模拟 <code v-pre>v-show</code></h2>
<p>条件渲染时，可以通过设置 css 来处理显示和隐藏，不用非得销毁组件。模拟 Vue <code v-pre>v-show</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token punctuation">{</span><span class="token comment">/* 模拟 v-show */</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token operator">!</span>flag <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">/></span></span><span class="token punctuation">}</span>
<span class="token punctuation">{</span>flag <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span><span class="token punctuation">/></span></span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token punctuation">{</span><span class="token comment">/* 模拟 v-show */</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">display</span><span class="token operator">:</span> flag <span class="token operator">?</span> <span class="token string">'block'</span> <span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-fragment-减少层级" tabindex="-1"><a class="header-anchor" href="#使用-fragment-减少层级" aria-hidden="true">#</a> 使用 Fragment 减少层级</h2>
<p>组件层级过多，如果每个组件都以 <code v-pre>&lt;div&gt;</code> 作为 root ，则 DOM 层级太多而难以调试。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">hello</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">world</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsx-中不要定义函数" tabindex="-1"><a class="header-anchor" href="#jsx-中不要定义函数" aria-hidden="true">#</a> JSX 中不要定义函数</h2>
<p>JSX 是一个语法糖，它和 Vue template 一样，最终将变为 JS render 函数，用以生成 vnode 。<br>
所以，如果在 JSX 中定义函数，那么每次组件更新时都会初始化该函数，这是一个不必要的开销。<br>
可回顾之前的面试题： <code v-pre>for 和 forEach 哪个更快</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token punctuation">{</span><span class="token comment">/* Bad */</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点击</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更好的解决方案是提前定义函数，在 JSX 中只引用执行。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// Good</span>
<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">clickHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/*  */</span> <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点击</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意</p>
<ul>
<li>如果你的系统不够复杂，这个优化几乎看不出效果，因为 JS 执行非常快 —— 但是，面试说出来肯定是一个加分项～</li>
<li>如果你用的是函数组件，这个优化方案不适用。如下代码：</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数组件，每次组件更新都会重新执行 App 函数，所以内部的 clickHandler 函数也会被重新创建，这跟在 JSX 中定义是一样的</span>
  <span class="token comment">// 不过 React 提供了 useCallback 来缓存函数，下文讲</span>

  <span class="token keyword">function</span> <span class="token function">clickHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>clickHandler<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点击</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在构造函数-bind-this" tabindex="-1"><a class="header-anchor" href="#在构造函数-bind-this" aria-hidden="true">#</a> 在构造函数 bind this</h2>
<p>同理，如果在 JSX 中 bind this ，那每次组件更新时都要 bind 一次。在构造函数中 bind 更好。<br>
或者，直接使用箭头函数。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 要在构造函数中 bind this ，而不是在 JSX 中</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">clickHandler1</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">clickHandler1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* 如果 JSX 中直接调用，则 this 不是当前组件。所以要 bind this */</span> <span class="token punctuation">}</span>
    <span class="token function-variable function">clickHander2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* 使用箭头函数，不用 bind this */</span> <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler1<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">点击</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：如果是函数组件，则不用 bind this</p>
<h2 id="使用-shouldcomponentupdate-控制组件渲染" tabindex="-1"><a class="header-anchor" href="#使用-shouldcomponentupdate-控制组件渲染" aria-hidden="true">#</a> 使用 shouldComponentUpdate 控制组件渲染</h2>
<p>React 默认情况下，只要父组件更新，其下所有子组件都会“无脑”更新。如果想要手动控制子组件的更新逻辑</p>
<ul>
<li>可使用 <code v-pre>shouldComponentUpdate</code> 判断</li>
<li>或者组件直接继承 <code v-pre>React.PureComponent</code> ，相当于在 <code v-pre>shouldComponentUpdate</code> 进行 props 的<strong>浅层</strong>比较</li>
</ul>
<p>但此时，必须使用<strong>不可变数据</strong>，例如不可用 <code v-pre>arr.push</code> 而要改用 <code v-pre>arr.concat</code>。考验工程师对 JS 的熟悉程度。<br></p>
<p>代码参考 components/SimpleTodos/index.js 的 class 组件。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token comment">// import TodoList from './TodoList'</span>
<span class="token keyword">import</span> FunctionalTodoList <span class="token keyword">from</span> <span class="token string">'./FunctionalTodoList'</span>

<span class="token keyword">class</span> <span class="token class-name">SimpleTodos</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'吃饭'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'睡觉'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function-variable function">changeInputValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">inputValue</span><span class="token operator">:</span> newValue
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function-variable function">createTodo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>inputValue
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>title<span class="token punctuation">)</span> <span class="token keyword">return</span>

        <span class="token comment">// 新增 todo - 正确处理 （ 不可变数据 - React ）</span>
        <span class="token keyword">const</span> curList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">list</span><span class="token operator">:</span> curList<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">id</span><span class="token operator">:</span> curList<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
                title
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// // 错误的处理示范</span>
        <span class="token comment">// this.state.list.push({</span>
        <span class="token comment">//     id: this.state.list.length,</span>
        <span class="token comment">//     title</span>
        <span class="token comment">// })</span>

        <span class="token comment">// 清空输入框</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">''</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>input
                value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>inputValue<span class="token punctuation">}</span>
                onInput<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeInputValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>createTodo<span class="token punctuation">}</span><span class="token operator">></span>创建<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

            <span class="token punctuation">{</span><span class="token comment">/* &lt;TodoList list={this.state.list}>&lt;/TodoList> */</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span>FunctionalTodoList list<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> SimpleTodos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不可变数据也有相应的第三方库</p>
<ul>
<li><a href="https://www.npmjs.com/package/immutable" target="_blank" rel="noopener noreferrer">immutable.js<ExternalLinkIcon/></a></li>
<li><a href="https://www.npmjs.com/package/immer" target="_blank" rel="noopener noreferrer">immer<ExternalLinkIcon/></a> —— 更加推荐，学习成本低</li>
</ul>
<p>PS：React 默认情况（子组件“无脑”更新）这本身并不是问题，在大部分情况下并不会影响性能。因为组件更新不一定会触发 DOM 渲染，可能就是 JS 执行，而 JS 执行速度很快。所以，性能优化要考虑实际情况，不要为了优化而优化。</p>
<h2 id="react-memo-缓存函数组件" tabindex="-1"><a class="header-anchor" href="#react-memo-缓存函数组件" aria-hidden="true">#</a> React.memo 缓存函数组件</h2>
<p>如果是函数组件，没有用 <code v-pre>shouldComponentUpdate</code> 和 <code v-pre>React.PureComponent</code> 。React 提供了 <code v-pre>React.memo</code> 来缓存组件。<br>
代码参考 FunctionalTodoList.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">FunctionalTodoList</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'todo list fn...'</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">=</span> props
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> todo
            <span class="token keyword">return</span> <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span> 
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>FunctionalTodoList<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>React.memo</code> 也支持自行比较</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">areEqual</span><span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> nextProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 自行比较，像 shouldComponentUpdate</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> areEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usememo-缓存数据" tabindex="-1"><a class="header-anchor" href="#usememo-缓存数据" aria-hidden="true">#</a> useMemo 缓存数据</h2>
<p>在函数组件中，可以使用 <code v-pre>useMemo</code> 和 <code v-pre>useCallback</code> 缓存数据和函数。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>num1<span class="token punctuation">,</span> setNum1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>num2<span class="token punctuation">,</span> setNum2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> num1 <span class="token operator">+</span> num2<span class="token punctuation">,</span> <span class="token punctuation">[</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 缓存数据，像 Vue computed</span>

    <span class="token comment">// const fn1 = useCallback(() => {...}, [...]) // 缓存函数</span>

    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">hello </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>info<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS: 普通的数据和函数，没必要缓存，不会影响性能的。一些初始化比较复杂的数据，可以缓存。</p>
<h2 id="异步组件" tabindex="-1"><a class="header-anchor" href="#异步组件" aria-hidden="true">#</a> 异步组件</h2>
<p>和 Vue 异步组件一样</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token comment">// 记载异步组件</span>
<span class="token keyword">const</span> OtherComponent <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span>
  <span class="token comment">/* webpackChunkName: 'OtherComponent'*/</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./OtherComponent'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text"> </span><span class="token punctuation">{</span><span class="token comment">/* 支持 loading 效果 */</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">OtherComponent</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由懒加载" tabindex="-1"><a class="header-anchor" href="#路由懒加载" aria-hidden="true">#</a> 路由懒加载</h2>
<p>和 Vue-router 路由懒加载一样</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> lazy<span class="token punctuation">,</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./Home'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">const</span> List <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: 'Home'*/</span> <span class="token string">'./List'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Router<span class="token operator">></span>
    <span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Switch<span class="token operator">></span>
        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">"/"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/list"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>List<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssr" tabindex="-1"><a class="header-anchor" href="#ssr" aria-hidden="true">#</a> SSR</h2>
<p>同 Vue SSR</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>循环使用 key</li>
<li>修改 css 模拟 <code v-pre>v-show</code></li>
<li>使用 Fragment 减少层级</li>
<li>JSX 中不要定义函数</li>
<li>在构造函数 bind this</li>
<li>使用 shouldComponentUpdate 控制组件渲染</li>
<li>React.memo 缓存函数组件</li>
<li>useMemo 缓存数据</li>
<li>异步组件</li>
<li>路由懒加载</li>
<li>SSR</li>
</ul>
<h2 id="面试连环问-react-遇到哪些坑" tabindex="-1"><a class="header-anchor" href="#面试连环问-react-遇到哪些坑" aria-hidden="true">#</a> 面试连环问：React 遇到哪些坑？</h2>
<p>JSX 中，自定义组件命名，开头字母要大写，html 标签开头字母小写</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token punctuation">{</span><span class="token comment">/* 原生 html 组件 */</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span><span class="token punctuation">/></span></span>

<span class="token punctuation">{</span><span class="token comment">/* 自定义组件 */</span><span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Input</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSX 中 <code v-pre>for</code> 写成 <code v-pre>htmlFor</code> ， <code v-pre>class</code> 写成 <code v-pre>className</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token comment">/* for 改成 htmlFor ，class 要改为 className */</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"input-name"</span> className<span class="token operator">=</span><span class="token string">"xxx"</span><span class="token operator">></span>
    姓名 <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"input-name"</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>label<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>state 作为不可变数据，不可直接修改，使用纯函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// this.state.list.push({...}) // 错误，不符合 React 规范</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> curList<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 使用**不可变数据**</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSX 中，属性要区分 JS 表达式和字符串</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Demo position<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span> flag<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>Demo position<span class="token operator">=</span><span class="token string">"1"</span> flag<span class="token operator">=</span><span class="token string">"true"</span><span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>state 是异步更新的，要在 callback 中拿到最新的 state 值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> curNum <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>num
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">num</span><span class="token operator">:</span> curNum <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'newNum'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>num<span class="token punctuation">)</span> <span class="token comment">// 正确</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// console.log('newNum', this.state.num) // 错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React Hooks 有很多限制，注意不到就会踩坑。例如，<code v-pre>useEffect</code> 内部不能修改 state</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 如果依赖是 [] ，这里 setCount 不会成功</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 只有依赖是 [count] 才可以，这样才会触发组件 update</span>

    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再例如，<code v-pre>useEffect</code> 依赖项（即第二个参数）里有对象、数组，就会出现死循环。所以，依赖项里都要是值类型。<br>
因为 React Hooks 是通过 <code v-pre>Object.is</code> 进行依赖项的前后比较。如果是值类型，则不妨碍。
如果是引用类型，前后的值是不一样的（纯函数，每次新建值），就类似 <code v-pre>{x:100} !== {x:100}</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>obj<span class="token punctuation">,</span> arr<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面试连环问-setstate-是同步还是异步" tabindex="-1"><a class="header-anchor" href="#面试连环问-setstate-是同步还是异步" aria-hidden="true">#</a> 面试连环问：setState 是同步还是异步？</h2>
<p>前端经典面试题。先作为思考题，后面会结合代码详细讲解。</p>
</template>
