<template><h1 id="react-错误监听" tabindex="-1"><a class="header-anchor" href="#react-错误监听" aria-hidden="true">#</a> React 错误监听</h1>
<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<p>如何统一监听 React 组件报错？</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>真实项目需要<strong>闭环</strong>，即考虑各个方面，除了基本的功能外，还要考虑性能优化、报错、统计等。
而个人项目、课程项目一般以实现功能为主，不会考虑这么全面。所以，没有实际工作经验的同学，不会了解如此全面。</p>
<h2 id="errorboundary" tabindex="-1"><a class="header-anchor" href="#errorboundary" aria-hidden="true">#</a> ErrorBoundary</h2>
<p>React 16+ 引入。可以监听所有<strong>下级</strong>组件报错，同时降级展示 UI 。<br>
代码参考 ErrorBoundary.js 和 components/ErrorDemo</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>//ErrorBoundary
import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null // 存储当前的报错信息
        }
    }
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        console.info('getDerivedStateFromError...', error)
        return { error }
    }
    componentDidCatch(error, errorInfo) {
        // 统计上报错误信息
        console.info('componentDidCatch...', error, errorInfo)
    }
    render() {
        if (this.state.error) {
            // 提示错误
            return &lt;h1&gt;报错了&lt;/h1&gt;
        }

        // 没有错误，就渲染子组件
        return this.props.children
    }
}

export default ErrorBoundary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>components/ErrorDemo
建议应用到最顶层，监听全局错误</p>
<div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>//ClassDemo.js
import React from 'react'

class ErrorDemo extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 100
        }
    }
    clickHandler = () =&gt; {
        this.state.num() // ErrorBoundary 无法监听事件报错，需要自行 try-catch
    }
    componentDidMount() {
        // throw new Error('mounted error') // ErrorBoundary 可监听渲染过程的报错

        // setTimeout(() =&gt; {
        //     throw new Error('setTimeout error')
        // }, 1000)
    }
    render() {
        return &lt;div&gt;
            &lt;p&gt;error demo - class&lt;/p&gt;
            &lt;button onClick={this.clickHandler}&gt;error&lt;/button&gt;
        &lt;/div&gt;
    }
}

export default ErrorDemo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JS ext-JS line-numbers-mode"><pre v-pre class="language-JS"><code>//FunctionalDemo.js
import { useState, useEffect } from 'react'

function ErrorDemo() {
    const [num] = useState(100)

    function clickHandler() {
        num() // ErrorBoundary 无法监听事件报错，需要自行 try-catch
    }

    useEffect(() =&gt; {
        // throw new Error('mounted error') // ErrorBoundary 可监听渲染过程的报错
    }, [])

    return &lt;div&gt;
        &lt;p&gt;error demo - functional&lt;/p&gt;
        &lt;button onClick={clickHandler}&gt;error&lt;/button&gt;
    &lt;/div&gt;
}

export default ErrorDemo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// index.js 入口文件</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.StrictMode</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数组件中也可以使用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ErrorBoundary<span class="token operator">></span>
        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ErrorBoundary<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dev-和-build" tabindex="-1"><a class="header-anchor" href="#dev-和-build" aria-hidden="true">#</a> dev 和 build</h2>
<p>dev 环境下无法看到 ErrorBoundary 的报错 UI 效果。会显示的提示报错信息。<br>
<code v-pre>yarn build</code> 之后再运行，即可看到 UI 效果。</p>
<h2 id="事件报错" tabindex="-1"><a class="header-anchor" href="#事件报错" aria-hidden="true">#</a> 事件报错</h2>
<p>React 不需要 ErrorBoundary 来捕获事件处理器中的错误。与 <code v-pre>render</code> 方法和生命周期方法不同，事件处理器不会在渲染期间触发。</p>
<p>如果你需要在事件处理器内部捕获错误，使用普通的 <code v-pre>try-catch</code> 语句。也可以使用全局的 <code v-pre>window.onerror</code> 来监听。</p>
<h2 id="异步错误" tabindex="-1"><a class="header-anchor" href="#异步错误" aria-hidden="true">#</a> 异步错误</h2>
<p>ErrorBoundary 无法捕捉到异步报错，可使用 <code v-pre>window.onerror</code> 来监听。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> source<span class="token punctuation">,</span> line<span class="token punctuation">,</span> column<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'window.onerror---------'</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> source<span class="token punctuation">,</span> line<span class="token punctuation">,</span> column<span class="token punctuation">,</span> error<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 注意，如果用 window.addEventListener('error', event => {}) 参数不一样！！！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<ul>
<li>ErrorBoundary 监听渲染时报错</li>
<li><code v-pre>try-catch</code> 和 <code v-pre>window.onerror</code> 捕获其他错误</li>
</ul>
<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2>
<p>Promise 监听报错要使用 <code v-pre>window.onunhandledrejection</code> ，后面会有面试题讲解。</p>
<p>前端拿到错误监听之后，需要传递给服务端，进行错误收集和分析，然后修复 bug 。
后面会有一道面试题专门讲解。</p>
</template>
